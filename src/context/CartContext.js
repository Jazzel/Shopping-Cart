import createDataContext from "./CreateDataContext";

const initialState = {
  cart: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const item = state.cart.find((item) => item.id === action.payload.id);
      if (!item) {
        state.cart.push({
          ...action.payload,
          quantity: 1,
        });
      }

      return { ...state, cart: [...state.cart] };
    case "INCREASE_ITEM":
      state.cart[state.cart.findIndex((item) => item.id === action.payload.id)]
        .quantity++;
      return {
        ...state,
        cart: [...state.cart],
      };
    case "DECREASE_ITEM":
      state.cart[state.cart.findIndex((item) => item.id === action.payload.id)]
        .quantity--;
      return {
        ...state,
        cartItems: [...state.cart],
      };
    default:
      return state;
  }
};

const increaseProduct = (dispatch) => {
  return (product) => {
    dispatch({ type: "INCREASE_ITEM", payload: product });
  };
};

const addProduct = (dispatch) => {
  return (product) => {
    dispatch({ type: "ADD_ITEM", payload: product });
  };
};

export const { Context, Provider } = createDataContext(
  cartReducer,
  { addProduct, increaseProduct },
  { cart: initialState.cart }
);
