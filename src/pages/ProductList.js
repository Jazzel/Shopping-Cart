import React, { useContext } from "react";
import { Product } from "../components/Product";
import { Context } from "./../context/ProductContext";
import { Grid, Container, Box } from "@material-ui/core";

import { Header } from "./../components/Header";
import { Footer } from "./../components/Footer";

export const ProductList = () => {
  const {
    state: { products },
  } = useContext(Context);

  return (
    <Box>
      <Header />

      <Container>
        <br />
        <br />
        <Grid container align="center" spacing={1}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={3} key={product.id}>
              <Product product={product} />
            </Grid>
          ))}
        </Grid>
        <br />
      </Container>
      <Footer />
    </Box>
  );
};
