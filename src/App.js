import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BrandingBar from "./BrandingBar";
import Home from "./Home";
import ProductPage from "./ProductPage";


import react from "react";
import Cart from "./cart";



function App() {
  return (
    <div className="App">
      <BrandingBar />
      
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/login">
          <Home />
        </Route>
        <Route path="/:userid"></Route>
        <Route path="/user/cart"><Cart/></Route>
        <Route path="/products/:id">
          <ProductPage />
        </Route>
      
    </div>
  );
}

export default App;

