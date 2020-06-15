import React, { useContext } from "react";
import { Product } from "../components/Product";
import { Context } from "./../context/ProductContext";
import { Grid, Container } from "@material-ui/core";

export const ProductList = () => {
  const {
    state: { products },
  } = useContext(Context);

  return (
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
  );
};
