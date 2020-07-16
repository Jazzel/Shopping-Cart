import createDataContext from "./CreateDataContext";

const initialState = {
  products: [
    {
      id: 1,
      name: "Shoe 1",
      price: 10.09,
      image: "/1.png",
      details:"dsada",

    },
    {
      id: 2,
      name: "Shoe 2",
      price: 10.09,
      image: "/2.png",
      details:"dsada",
    },
    {
      id: 3,
      name: "Shoe 3",
      price: 10.09,
      image: "/3.png",
      details:"dsada",

    },
    {
      id: 4,
      name: "Shoe 4",
      price: 10.09,
      image: "/4.png",
      details:"dsada",

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
