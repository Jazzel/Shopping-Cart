import React, { useContext } from "react";
import { Product } from "../components/Product";
import { Context } from "./../context/ProductContext";
import { Grid, Container, Box, Typography } from "@material-ui/core";

import { Header } from "./../components/Header";
import { Footer } from "./../components/Footer";
import "../components/component.css";
import "../components/demo.css";
import footImage from "./foot.png";

export const ProductList = () => {
  const {
    state: { products },
  } = useContext(Context);

  return (
    <Box>
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
        <br />
        <br />
        <section style={{ width: "100%" }}>
          <Container style={{ padding: "60px" }}>
            <Grid container>
              <Grid
                item
                lg={5}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div>
                  <Typography variant="h3">
                    All Classic Footwear <br />
                    Collections!
                  </Typography>
                  <Typography variant="h6">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                  </Typography>
                </div>
              </Grid>
              <Grid lg={7}>
                <div style={{ textAlign: "right" }}>
                  <img src={footImage} alt="" />
                </div>
              </Grid>
            </Grid>
          </Container>
        </section>
      </div>
      <Container>
        <br />
        <br />
        <br />
        <Typography variant="h4" align="center" className="styled-head">
          Trending Products
        </Typography>
        <hr />
        <section id="grid" className="grid clearfix">
          {products.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </section>

        <br />
      </Container>
      <Footer />
    </Box>
  );
};
