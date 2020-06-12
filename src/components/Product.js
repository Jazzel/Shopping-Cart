import React, { useContext } from "react";
import { Context as CartContext } from "./../context/CartContext";
import { Link } from "react-router-dom";

export const Product = ({ product }) => {
  const {
    state: { cart },
    addProduct,
    increaseProduct,
  } = useContext(CartContext);


  const { id, name, price } = product;
  console.log(cart);
  const isInCart = (product) => {
    return !!cart.find((item) => item.id === product.id);
  };
  return (
    <div>
      <p>
        ID: {id}, Name: {name}, Price: {price}
      </p>
      {isInCart(product) && (
        <button
          onClick={() => increaseProduct(product)}
          className="btn btn-outline-primary btn-sm"
        >
          Add more
        </button>
      )}

      {!isInCart(product) && (
        <button
          onClick={() => addProduct(product)}
          className="btn btn-primary btn-sm"
        >
          Add to cart
        </button>
      )}
     <Link to={`product/${id}`}>Details</Link>
    </div>
  );
};
