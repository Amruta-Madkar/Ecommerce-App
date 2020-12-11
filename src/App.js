import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import './App.css';
import Navbar from "./Components/Navbar/Navbar"
import Products from "./Components/Products/Products"
import Cart from "./Components/Cart/Cart"
import ProductContextProvider from "./Contexts/productContext"
import CartContextProvider from "./Contexts/cartContext"

function App() {

  return (
    <div>
      <ProductContextProvider>
      <CartContextProvider>
      <Router>
      <Navbar />
        <Switch>
          <Route path="/" exact component={Products} />
          <Route path="/cart" exact component={Cart} />
        </Switch>
      </Router>
      </CartContextProvider>
      </ProductContextProvider>  
    </div>
  );
}

export default App;
