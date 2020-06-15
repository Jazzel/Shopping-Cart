import React, { useContext, useState, useEffect } from "react";
import { Product } from "../components/Product";
import { Context } from "./../context/ProductContext";
import { Grid, Typography } from "@material-ui/core";

import { Header } from "./../components/Header";
import { Footer } from "./../components/Footer";

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
    const fetchData = () => {
      const productId = currentProductId;
      const selectedProduct = products.find(
        (item) => item.id === parseInt(productId)
      );
      setSelectedProduct(selectedProduct);
    };
    fetchData();
  }, [currentProductId, products]);

  return (
    <div>
      <Header />
      {selectedProduct.id ? (
        <Grid container style={{padding:40}} spacing={3}>
          <Grid item xs={12} sm={6}>
            <img width="100%"  src={selectedProduct.image} alt="product" />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography
              variant="h3"
            >
            #{selectedProduct.id} - {selectedProduct.name}
            </Typography>
            <Typography
              variant="h4"
            >
            Price: ${selectedProduct.price}
            </Typography>
            <hr />
            <Typography
              variant="h6"
              color="textSecondary"
            >
            Description: {selectedProduct.details}
            </Typography>
          <Product key={selectedProduct.id} page="details" product={selectedProduct} />
            
          </Grid>
        </Grid>
      ) : null}
      <Footer />

    </div>
  );
};
