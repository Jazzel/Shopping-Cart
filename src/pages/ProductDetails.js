import React, { useContext, useState, useEffect } from "react";
import { Product } from "../components/Product";
import { Context } from "./../context/ProductContext";

export const ProductDetails = (route) => {
  const [selectedProduct, setSelectedProduct] = useState({
    id: null,
    name: "",
    price: "",
  });
  const {
    state: { products },
  } = useContext(Context);
  const currentProductId = route.match.params.id;

  useEffect(() => {
    const productId = currentProductId;
    const selectedProduct = products.find(
      (item) => item.id === parseInt(productId)
    );
    setSelectedProduct(selectedProduct);
  }, []);

  return (
    <div>
      {selectedProduct.id ? (
        <Product key={selectedProduct.id} product={selectedProduct} />
      ) : null}
    </div>
  );
};
