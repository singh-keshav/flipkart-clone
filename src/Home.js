import react, { useState, useEffect } from "react";
import { Link, Route } from "react-router-dom";
import { connect } from "react-redux";
import BrandingBar from "./BrandingBar";
import styles from "./home.module.css";

import img from "./images/earphones.jpeg";
// import products from "./productlist";
import ProductPage from "./ProductPage";

let images = [
  "https://rukminim1.flixcart.com/flap/844/140/image/b91ea107802e99c5.jpg?q=50",
  "https://rukminim1.flixcart.com/flap/844/140/image/5ee97c702bfe8ec4.jpg?q=50",
];

const Tile = (props) => {
  console.log(props);
  const products = props.products;
  console.log(products);
  const categoryProducts = products.filter((p) => p.pCategoryId === props.id);
  const categoryName = categoryProducts[0].pCategory;
  const links = categoryProducts.map((p) => {
    return (
      <li key={p.pId} style={{flex:"auto"}} className={styles.listItem}>
        <Link  to={`/products/${p.pId}`}  >
          <img
            src={img}
            alt="product"
            // height="200"
            // width="200"
            // style={{ margin: "5px" }}
            className={styles.imageShadow}
            
          />
        </Link>
        <p>{p.pName}</p>
      </li>
    );
  });

  const [divPosition, setDivPosition] = useState("translate3d(0px, 0px, 0px)");

  let divPositionValue = 0;
  let direction = "right";

  const slidingbutton = (direction) => {
    return <div><button onClick={slidButtonUtility}>right</button></div>;
  };

  const slidButtonUtility = () => {
    if (direction === "right") {
      if (divPositionValue > -450) {
        divPositionValue = divPositionValue - 450;
        setDivPosition(`translate3d(${divPositionValue}px, 0px, 0px)`);
      } else {
        direction = "left";
      }
    } else {
      if (divPositionValue < 450) {
        divPositionValue = divPositionValue + 450;
        setDivPosition(`translate3d(${divPositionValue}px, 0px, 0px)`);
      } else {
        direction = "right";
      }
    }
  };
  return (
    <div className={styles.card}>
      <div style={{ textAlign: "left", padding: "20px 15px" }}>
        <h1>{categoryName} </h1>
        <p style={{ color: "#949494" }}>something</p>
      </div>
      <hr />
      <div
        className={styles.gallaryContainer}
        style={{ transform: divPosition }}
      >
        <ul className={styles.flexx}>{links}</ul>
        {/* {slidingbutton()} */}
      </div>
      
    </div>
    
  );
};

const Home = (props) => {
  const [count, setCount] = useState(0);

  const products = props.state.products;

  const tiles = [];
  const tilesGenerator = () => {
    for (let i = 0; i < 6; i++) {
      tiles.push(<Tile id={i} key={i} products={products} />);
    }
    return tiles;
  };

  useEffect(() => {
    console.log("inside useeffect");
    const id = setInterval(() => {
      setCount((count + 1) % 2);
    }, 5000);
    return () => {
      clearInterval(id);
    };
  }, [count]);

  const currentImg = images[count];
  console.log(currentImg);
  console.log("fjkdjfkdjflkdjflkjl");

  return (
    <div>
      {/* <BrandingBar /> */}
      <img
        src={currentImg}
        alt="sliding images"
        hight="300"
        width="100%"
        className={styles.sliding}
      />
      <div>{tilesGenerator()}</div>
      {/* <Route path="/products/:id">
        <ProductPage data={products} />
      </Route> */}
    </div>
  );
};

// const data=products;

// export {data};

// export default Home;

const mapStateToProps = (state) => {
  console.log(state);
  return {
    state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    //  fetchData: () => dispatch(makeApiCall())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
