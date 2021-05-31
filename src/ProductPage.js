import react, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  useHistory,
  useLocation,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";

import productImg from "./images/earphones.jpeg";
import Cart from "./cart";
import { connect } from "react-redux";
import { ACTIONS, AddItem } from "./actions";

import styles from "./productPage.module.css";

const cartProducts = [];

const ProductPage = (props) => {
  const { id } = useParams();
  const history = useHistory();
  console.log(id);
  const products = props.state.products;
  console.log(products);
  const product = products.find(({ pId }) => pId == id);
  console.log(product); 
  //   const [cartProducts, setCartProducts] = useState([]);

  const ADDTOCART="ADD TO CART";
  const GOTOCART="GO TO CART";
  console.log(props.state.items.find((p)=>p.id==id));
  const initialButtonName=props.state.items.find((p)=>p.id==id)?GOTOCART:ADDTOCART;
  const [buttonName, setButtonName] = useState(initialButtonName);
  


  
  const handleClick = () => {
    if (buttonName === ADDTOCART) {
      setButtonName(GOTOCART);
      addtocart();
    } else {
      setButtonName(ADDTOCART);
      moveToCart();
    }
  };

  const addtocart = () => {
    props.addProduct(id);
  };

  const moveToCart = () => {
    // history.push("/");
    history.push("/user/cart");
  };
  let productData;

  if (product) {
    productData = (
      <div className={styles.container}>
        <span className={styles.productImage}>
          <img src={productImg} alt="product" width="auto" height="70%" />
          <div style={{ display: "flex" }}>
            <button className={styles.addtocart} onClick={handleClick}>
              {buttonName}
            </button>

            <button className={styles.movetocart} onClick={moveToCart}>
              BUY NOW
            </button>
          </div>
        </span>
        <span className={styles.productDetails}>
          <h1>{product.pName}</h1>
          <p>{product.pRating}*</p>
        </span>
      </div>
    );
  } else {
    productData = <h2> Sorry. Product doesn't exist </h2>;
  }

  return <div>{productData}</div>;
};

// export default ProductPage;

const mapStateToProps = (state) => {
  console.log(state);
  return {
    state,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addProduct: (id) => dispatch(AddItem(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductPage);

// export {cartProducts};
