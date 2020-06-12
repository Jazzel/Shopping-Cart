import React from 'react'
import createDataContext from "./CreateDataContext";
import {  Redirect } from 'react-router-dom';

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
      return state;
    default:
      return state;
  }
};


export const { Context, Provider } = createDataContext(
  productReducer,
  {},
  { products: initialState.products }
);
