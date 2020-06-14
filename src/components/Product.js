import React, { useContext } from "react";
import { Context as CartContext } from "./../context/CartContext";

export const Product = ({ product }) => {
  const {
    state: { cart },
    addProduct,
    increaseProduct,
  } = useContext(CartContext);

  const { id, name, price, image } = product;

  const isInCart = (product) => {
    return !!cart.find((item) => item.id === product.id);
  };
  return (
    <div>
      <p>
        ID: {id}, Name: {name}, Price: {price}
        <img src={image} alt="cart-item" />
      </p>

      {isInCart(product) && (
        <button onClick={() => increaseProduct(id)}>Add more</button>
      )}

      {!isInCart(product) && (
        <button onClick={() => addProduct(product)}>Add to cart</button>
      )}
    </div>
  );
};
