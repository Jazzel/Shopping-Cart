import createDataContext from "./CreateDataContext";

export const cartTotal = (cart) => {
  savingData(cart);
  let items = cart.reduce((total, product) => total + product.quantity, 0);
  let total = cart
    .reduce((total, product) => total + product.price * product.quantity, 0)
    .toFixed(2);
  return { items, total };
};

const savingData = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart.length > 0 ? cart : []));
};

const previousData = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];
const initialState = {
  cart: previousData,
  ...cartTotal(previousData),
  checkout: false,
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

      return { ...state, ...cartTotal(state.cart), cart: [...state.cart] };
    case "INCREASE_ITEM":
      state.cart[state.cart.findIndex((item) => item.id === action.payload)]
        .quantity++;
      return {
        ...state,
        ...cartTotal(state.cart),
        cart: [...state.cart],
      };
    case "DECREASE_ITEM":
      state.cart[state.cart.findIndex((item) => item.id === action.payload)]
        .quantity--;
      return {
        ...state,
        ...cartTotal(state.cart),
        cart: [...state.cart],
      };
    case "REMOVE_ITEM":
      return {
        ...state,
        ...cartTotal(state.cart),
        cart: [...state.cart.filter((item) => item.id !== action.payload)],
      };
    case "EMPTY_CART":
      return {
        ...cartTotal([]),
        ...state,
        cart: [],
      };
    case "CHECKOUT":
      return {
        cart: [],
        checkout: true,
        ...cartTotal([]),
      };
    default:
      return state;
  }
};

const increaseProduct = (dispatch) => {
  return (productID) => {
    dispatch({ type: "INCREASE_ITEM", payload: productID });
  };
};

const decreaseProduct = (dispatch) => {
  return (productID) => {
    dispatch({ type: "DECREASE_ITEM", payload: productID });
  };
};

const removeProduct = (dispatch) => {
  return (productID) => {
    dispatch({ type: "REMOVE_ITEM", payload: productID });
  };
};

const addProduct = (dispatch) => {
  return (product) => {
    dispatch({ type: "ADD_ITEM", payload: product });
  };
};

const emptyCart = (dispatch) => {
  return () => {
    dispatch({ type: "EMPTY_CART" });
  };
};

const doCheckout = (dispatch) => {
  return () => {
    dispatch({ type: "CHECKOUT" });
  };
};

export const { Context, Provider } = createDataContext(
  cartReducer,
  {
    addProduct,
    increaseProduct,
    decreaseProduct,
    removeProduct,
    emptyCart,
    doCheckout,
  },
  {
    cart: initialState.cart,
    items: initialState.items,
    total: initialState.total,
    checkout: initialState.checkout,
  }
);
