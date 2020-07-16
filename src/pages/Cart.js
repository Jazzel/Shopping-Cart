import React, { useContext } from "react";
import { Context as CartContext } from "./../context/CartContext";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import { Header } from "./../components/Header";
import { Footer } from "./../components/Footer";
import {
  Paper,
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Avatar,
  Table,
  TableCell,
  TableBody,
  TableContainer,
  TableRow,
} from "@material-ui/core";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  cartContainer: {
    paddingLeft: 55,
    paddingRight: 55,
    width: "80%",
    margin: "auto",
  },
  links: {
    textDecoration: "none",
    color: "inherit",
  },
  emptyCart: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
  },
  large: {
    height: 150,
    width: 150,
  },

  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    minHeight: "400px",
  },
  success: {
    color: "#e74c3c",
  },
  info: {
    color: "#e74c3c",
  },
}));

export const Cart = () => {
  const classes = useStyles();

  const {
    state: { cart, items, total, checkout },
    increaseProduct,
    decreaseProduct,
    removeProduct,
    emptyCart,
    doCheckout,
  } = useContext(CartContext);

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

      <Box display="flex" width="100%" height="100%" alignItems="center">
        <Container>
          <br />
          <br />
          <Paper className={classes.paper} elevation={3}>
            <Typography
              className="styled-header"
              variant="h3"
              component="h2"
              gutterBottom
            >
              Cart
            </Typography>
            <Box className={classes.cartContainer}>
              <Grid container className={classes.cart}>
                {cart.length > 0 ? (
                  <Grid item xs={12} className={classes.cartItem}>
                    <Box
                      display="flex"
                      width="100%"
                      height="100%"
                      alignItems="center"
                      bgcolor="background.paper"
                    >
                      <TableContainer component={Paper} elevation={3}>
                        <Table
                          className={classes.table}
                          aria-label="simple table"
                        >
                          <TableBody>
                            {cart.map((cartItem) => (
                              <TableRow key={cartItem.id}>
                                <TableCell>
                                  <Avatar
                                    alt="cart-item"
                                    src={cartItem.image}
                                    className={classes.large}
                                  />
                                </TableCell>
                                <TableCell component="th" scope="row">
                                  <Typography variant="h6">
                                    {cartItem.name}
                                  </Typography>
                                </TableCell>

                                <TableCell align="center">
                                  <Button
                                    variant="outlined"
                                    onClick={() => increaseProduct(cartItem.id)}
                                    color="primary"
                                  >
                                    <ExpandLessIcon />
                                  </Button>
                                  <Typography style={{ padding: 5 }}>
                                    {cartItem.quantity}
                                  </Typography>
                                  {cartItem.quantity > 0 ? (
                                    <Button
                                      variant="outlined"
                                      onClick={() =>
                                        decreaseProduct(cartItem.id)
                                      }
                                      color="primary"
                                    >
                                      <ExpandMoreIcon />
                                    </Button>
                                  ) : null}
                                </TableCell>
                                <TableCell align="right">
                                  <Typography variant="h6">
                                    ${cartItem.price} x {cartItem.quantity} = $
                                    {cartItem.price * cartItem.quantity}
                                  </Typography>
                                </TableCell>
                                <TableCell align="right">
                                  <Button
                                    onClick={() => removeProduct(cartItem.id)}
                                  >
                                    <CloseIcon />
                                  </Button>
                                </TableCell>
                              </TableRow>
                            ))}
                          </TableBody>
                        </Table>
                      </TableContainer>
                    </Box>
                  </Grid>
                ) : checkout ? (
                  <Box className={classes.emptyCart}>
                    <div>
                      <Typography
                        variant="h6"
                        className={classes.success}
                        component="h2"
                        gutterBottom
                      >
                        Checkout successfull.
                      </Typography>
                      <Button variant="outlined">
                        <Link to="/" className={classes.links}>
                          Go Back to home
                        </Link>
                      </Button>
                    </div>
                  </Box>
                ) : (
                  <Box className={classes.emptyCart}>
                    <div>
                      <Typography
                        variant="h6"
                        className={classes.info}
                        component="h2"
                        gutterBottom
                      >
                        You haven't added anything in the cart.
                      </Typography>
                      <Button variant="outlined">
                        <Link to="/" className={classes.links}>
                          Go back to home
                        </Link>
                      </Button>
                    </div>
                  </Box>
                )}
              </Grid>
              <br />
              {cart.length > 0 && (
                <Box className={classes.emptyCart}>
                  <TableContainer component={Paper} elevation={3}>
                    <Table className={classes.table} aria-label="simple table">
                      <TableBody>
                        <TableRow>
                          <TableCell>
                            <Typography variant="h6">
                              Total items: {items} &nbsp; - &nbsp; Total: $
                              {total}
                            </Typography>
                          </TableCell>
                          <TableCell align="right">
                            <Grid
                              container
                              spacing={2}
                              alignItems="flex-start"
                              justify="flex-end"
                              direction="row"
                            >
                              <Grid item>
                                <Button variant="outlined">
                                  <Link to="/" className={classes.links}>
                                    Go to Home
                                  </Link>
                                </Button>
                              </Grid>
                              <Grid item>
                                <Button
                                  color="secondary"
                                  variant="contained"
                                  onClick={() => emptyCart()}
                                >
                                  Empty Cart
                                </Button>
                              </Grid>
                              <Grid item>
                                {total > 0 ? (
                                  <Button
                                    onClick={doCheckout}
                                    color="primary"
                                    variant="contained"
                                  >
                                    CHECKOUT
                                  </Button>
                                ) : (
                                  <Button
                                    onClick={doCheckout}
                                    color="primary"
                                    variant="contained"
                                    disabled
                                  >
                                    CHECKOUT
                                  </Button>
                                )}
                              </Grid>
                            </Grid>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Box>
              )}
            </Box>
            <br />
            <br />
          </Paper>
          <br /> <br />
        </Container>
      </Box>
      <Footer />
    </div>
  );
};
