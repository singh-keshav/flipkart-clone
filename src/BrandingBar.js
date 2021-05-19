import react from "react";
import { connect } from "react-redux";
import { Route, Switch, Link, useHistory, Redirect } from "react-router-dom";

import cartImg from "./images/cart.svg";

const BrandingBar = (props) => {
  const history = useHistory();
  console.log(props);
  console.log(useHistory());

  function handleClick() {
    history.push("/login");
  }
  function redirectToHome() {
    history.push("/");
  }

  return (
    //brand
    //search box
    //loginbutton
    //cart icon and number over it
    <div
      style={{
        display: "flex",
        backgroundColor: "blue",
        color: "white",
        height: "50px",
      }}
    >
      <p onClick={redirectToHome}>Flipkart</p>
      <input placeholder="search for products brands and more" />
      <button onClick={handleClick}>login</button>
      <p>more</p>
      <p style={{ position: "relative" }}>
        <Link to="/user/cart">
          <img src={cartImg} alt="cart" height="30" width="30" />
        
        <div
          style={{
            position: "relative",
            top: "-40px",
            left: "21px",
            borderRadius: "50%",
            backgroundColor: "red",
            height: "20px",
            width: "20px",
          }}
        >
          <span style={{}}>{props.items.length}</span>
        </div>
        {/* <p>cart</p> */}
        </Link>
        
      </p>

      {/* <Route path="/login">
        <p>dfjdofjdfjdfjdjfo</p>
      </Route> */}
    </div>
  );
};

// export default BrandingBar;

const mapStateToProps = (state) => {
  console.log(state);
  return {
    items: state.items,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    //  fetchData: () => dispatch(makeApiCall())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(BrandingBar);
