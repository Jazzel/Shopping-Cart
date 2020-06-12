import React, { Fragment } from "react";
import "./App.css";
import { ProductList } from "./pages/ProductList";
import { ProductDetails } from "./pages/ProductDetails";
import { Provider as ProductProvider } from "./context/ProductContext";
import { Provider as CartProvider } from "./context/CartContext";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <Router>
          <Switch>
            <Route path="/" component={ProductList} exact />
            <Route path="/product/:id" component={ProductDetails} exact />
            <Redirect to="/" />
          </Switch>
        </Router>
      </CartProvider>
    </ProductProvider>
  );
}

export default App;
