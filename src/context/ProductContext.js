import createDataContext from "./CreateDataContext";

const initialState = {
  products: [
    {
      id: 1,
      name: "Red Shirt",
      price: 10.09,
    },
    {
      id: 2,
      name: "Red Shirt",
      price: 10.09,
    },
    {
      id: 3,
      name: "Red Shirt",
      price: 10.09,
    },
  ],
};

const productReducer = (state, action) => {
  switch (action.type) {
    case "GET_ITEM":
      console.log(action.payload);
      return ;
    default:
      return state;
  }
};

const getProduct = (dispatch) => {
  return (id) => {
    dispatch({ type: "GET_ITEM", payload:id });
  };
};

export const { Context, Provider } = createDataContext(
  productReducer,
  {getProduct},
  { products: initialState.products }
);
