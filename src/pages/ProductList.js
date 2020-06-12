import React, { useContext } from "react";
import { Product } from "../components/Product";
import { Context } from "./../context/ProductContext";


export const ProductList = () => {
  const {
    state: { products },
  } = useContext(Context);

  return (
    <div>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};
