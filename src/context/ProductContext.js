import createDataContext from "./CreateDataContext";

const initialState = {
  products: [
    {
      id: 1,
      name: "Red Shirt",
      price: 10.09,
      image: "/pp.jpeg",
    },
    {
      id: 2,
      name: "Black Shirt",
      price: 10.09,
      image: "/pp.jpeg",
    },
    {
      id: 3,
      name: "White Shirt",
      price: 10.09,
      image: "/pp.jpeg",
    },
  ],
};

const productReducer = (state, action) => {
  switch (action.type) {
    case "GET_ITEM":
      console.log(action.payload);
      return;
    default:
      return state;
  }
};

const getProduct = (dispatch) => {
  return (id) => {
    dispatch({ type: "GET_ITEM", payload: id });
  };
};

export const { Context, Provider } = createDataContext(
  productReducer,
  { getProduct },
  { products: initialState.products }
);
