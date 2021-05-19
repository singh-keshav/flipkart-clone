import { connect } from "react-redux";
import productImg from "./images/earphones.jpeg";

import style from "./cart.module.css";

const CartItem = (props) => {
  const products = props.products;
  const item = props.item;
  const product = products.find((p) => p.pId == item.id);
  console.log(product, item, products);
  return (
    <div className={style.aaa}>
      <div className={style.aaaa}>
        <img src={productImg} alt="product" width="100" height="100" />
      </div>
      <div className={style.aaab}>
        <h1>{product.pName}</h1>
        <p>{product.pRating}*</p>
        <p>{product.pPrice}</p>
      </div>
    </div>
  );
};

const CartTotal = (props) => {
  const products = props.products;
  const cartItems = props.cartItems;

  const itemList = products.filter((p) =>
    cartItems.find((citem) => citem.id == p.pId)
  );
  const toatlCartValue = () => {
    let summ = 0;
    for (let i = 0; i < itemList.length; i++) {
      summ = summ + itemList[i].pPrice;
    }
    return summ;
  };

  console.log(itemList, toatlCartValue());
  // console.log(toatlCartValue())

  return (
    <div>
      <h1>CART VAlUE</h1>
      {itemList.map((i) => (
        <p>
          {i.pName}:{i.pPrice}
        </p>
      ))}
      <div>
        <h2>Total:{toatlCartValue()}</h2>
      </div>
    </div>
  );
};

const Cart = (props) => {
  const products = props.state.products;
  const cartItems = props.state.items;

  // if (cartProductsList) {
  //   cartData = cartProductsList.forEach(p=><CartItem data={p}/>);
  // }

  return (
    <div className={style.a}>
      {/* <h1>welcome to Cart</h1> */}

      <div className={style.aa}>
        {cartItems.map((item) => (
          <CartItem item={item} key={item.id} products={products} />
        ))}
      </div>
      <div className={style.ab}>
        <CartTotal cartItems={cartItems} products={products} />
      </div>
    </div>
  );
};

// export default Cart;

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
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
