import react from "react";
import { connect } from "react-redux";
import { Route, Switch, Link, useHistory, Redirect } from "react-router-dom";


import styles from "./brandingBar.module.css";

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
    <div
      style={{
        display: "flex",
        backgroundColor: "blue",
        color: "white",
        width:"100vw",
        position:"relative"
      }}
    >
      <div className={styles.sideEmptyDiv}></div>
      <div className={styles.middleDiv}>
        <div className={styles.flipkarConatianer}>
          <p onClick={redirectToHome}>Flipkart</p>
        </div>

        <div className={styles.searchContainer}>
          <form>
            <input placeholder="search for products brands and more" />
            <div className={styles.searchIcon}>
              <span
                className="material-icons"
                onClick={() => console.log("icon working")}
              >
                search
              </span>
            </div>
          </form>
        </div>
        <button className={styles.whiteButton} onClick={handleClick}>login</button>
        <div className={styles.more}>
          <p onClick={handleClick}>More</p>
          <div className={styles.downArrow}>
            <span className="material-icons">keyboard_arrow_down</span>
          </div>
        </div>
        {/* <div className={styles.loginContainer}>
          
        </div> */}

        <div>
          <Link to="/user/cart" className={styles.cartContainer}>
            <span className="material-icons">shopping_cart</span>
            <p>cart</p>
            {/* <p>cart</p> */}
          </Link>
        </div>
      </div>

      <div className={styles.sideEmptyDiv}></div>
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
