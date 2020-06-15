import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Toolbar, Button } from "@material-ui/core/";
import Typography from "@material-ui/core/Typography";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import { Context as CartContext } from "./../context/CartContext";
import { Link } from "react-router-dom";

const CartBadge = withStyles((theme) => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `3px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
    fontFamily: "Pacifico",
    marginBottom: 5,
  },
  toolbarSecondary: {
    justifyContent: "space-between",
    overflowX: "auto",
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
  searchBar: {
    paddingBottom: 5,
    marginTop: 0,
    flex: 1,
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
  },
  formField: {
    flex: 1,
    alignSelf: "stretch",
  },
}));

export const Header = () => {
  const classes = useStyles();

  const {
    state: { cart },
  } = useContext(CartContext);
  const itemCount = cart.length;

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Typography
          component="h1"
          variant="h4"
          color="inherit"
          align="center"
          className="styled-head"
        >
          <Link
            className="styled-link"
            style={{ textDecoration: "none", color: "black" }}
            to="/"
          >
            Shopping Cart
          </Link>
        </Typography>
        <a href="/cart/">
          <Button variant="outlined" size="small">
            <CartBadge badgeContent={itemCount} color="primary">
              <ShoppingCartIcon />
            </CartBadge>
          </Button>
        </a>
      </Toolbar>
    </React.Fragment>
  );
};
