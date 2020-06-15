import React from "react";
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
import { Cart } from "./pages/Cart";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <Header />
        <Router>
          <Switch>
            <Route path="/" component={ProductList} exact />
            <Route path="/cart" component={Cart} exact />
            <Route path="/product/:id" component={ProductDetails} exact />
            <Redirect to="/" />
          </Switch>
        </Router>
        <Footer />
      </CartProvider>
    </ProductProvider>
  );
}

export default App;
