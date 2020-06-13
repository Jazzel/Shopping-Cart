import React, { useContext } from "react";
import { Product } from "../components/Product";
import { Context } from "./../context/ProductContext";
import { Link } from "react-router-dom";

export const ProductList = () => {
  const {
    state: { products },
  } = useContext(Context);

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <Product product={product} />
          <Link to={`product/${product.id}`}>Details</Link>
        </div>
      ))}
      <br />
      <Link to="/cart/">Go to Cart</Link>
    </div>
  );
};
