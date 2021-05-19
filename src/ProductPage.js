import react, { useEffect, useState } from "react";

import {
  useHistory,
  useLocation,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";

import productImg from "./images/earphones.jpeg";
import Cart from "./cart";
import { connect } from "react-redux";
import { ACTIONS, AddItem } from "./actions";

const cartProducts = [];

const ProductPage = (props) => {
  const { id } = useParams();
  console.log(id);
  const products = props.state.products;
  console.log(products);
  const product = products.find(({ pId }) => pId == id);
  console.log(product);

  //   const [cartProducts, setCartProducts] = useState([]);

  const handleClick = () => {
    // cartProducts.push(id);
    props.addProduct(id);
    console.log(props.state);
  };
  let productData;

  if (product) {
    productData = (
      <div>
        <span>
          <img src={productImg} alt="product" width="300" height="400" />
        </span>
        <span>
          <h1>{product.pName}</h1>
          <p>{product.pRating}*</p>
        </span>
        <button onClick={handleClick}>ADD TO CART</button>
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
