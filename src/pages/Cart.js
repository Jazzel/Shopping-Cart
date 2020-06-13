import React, { useContext } from "react";
import { Context as CartContext } from "./../context/CartContext";
import { Link } from "react-router-dom";

export const Cart = () => {
  const {
    state: { cart, items, total,checkout },
    increaseProduct,
    decreaseProduct,
    removeProduct,
    emptyCart,
    doCheckout,
  } = useContext(CartContext);
  return (
    <div>
      <ul>
        {cart.length > 0 ? (
          cart.map((cartItem) => (
            <div key={cartItem.id}>
              <li>
                {cartItem.name} -{" "}
                <button onClick={() => decreaseProduct(cartItem.id)}>-</button>{" "}
                {cartItem.quantity}{" "}
                <button onClick={() => increaseProduct(cartItem.id)}>+</button>{" "}
                - ${cartItem.price} - ${cartItem.price * cartItem.quantity} -{" "}
                <button onClick={() => removeProduct(cartItem.id)}>x</button>
              </li>
            </div>
          ))
        ) : checkout ? (
          <div className="p-3 text-center text-success">
            <p>Checkout successfull</p>
            <Link to="/" className="btn btn-outline-success btn-sm">
              BUY MORE
            </Link>
          </div>
        ) : (
          <li>Cart is empty</li>
        )}
        <br />
        {cart.length > 0 && (
          <div>
            <p>
              Items: {items} - Total: ${total}
            </p>
            <button onClick={() => emptyCart()}>Empty</button>
            <button
              type="button"
              className="btn btn-primary mb-2"
              onClick={doCheckout}
            >
              CHECKOUT
            </button>
          </div>
        )}
      </ul>
      <Link to="/">Go to Home</Link>
    </div>
  );
};
