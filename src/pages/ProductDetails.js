import React, { useContext, useState, useEffect } from "react";
import { Product } from "../components/Product";
import { Context } from "./../context/ProductContext";
import { Grid, Typography, Container } from "@material-ui/core";

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
    <div
      style={{
        backgroundColor: "rgb(238,241,243)",
        background:
          "linear-gradient(180deg, rgba(238,241,243,1) 0%, rgba(238,241,243,1) 35%, rgba(248,250,250,1) 75%, rgba(255,255,255,1) 100%)",
        color: "black",
      }}
    >
      <br />
      <Container>
        <Header />
      </Container>
      <Container>
        {selectedProduct.id ? (
          <Grid container style={{ padding: 40 }} spacing={3}>
            <Grid
              item
              xs={12}
              sm={6}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div style={{ width: "100%" }}>
                <Typography variant="h3">
                  #{selectedProduct.id} - {selectedProduct.name}
                </Typography>
                <Typography variant="h4">
                  Price: ${selectedProduct.price}
                </Typography>
                <hr />
                <br />
                <Typography variant="h6" align="center">
                  Description: {selectedProduct.details}
                </Typography>
                <br />
                <br />
                <Product
                  key={selectedProduct.id}
                  page="details"
                  product={selectedProduct}
                />
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <img
                width="100%"
                height="550px"
                src={selectedProduct.image}
                alt="product"
              />
            </Grid>
          </Grid>
        ) : null}
      </Container>
      <Footer />
    </div>
  );
};
