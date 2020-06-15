import React, { useContext } from "react";
import { Context as CartContext } from "./../context/CartContext";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Box } from "@material-ui/core";

export const Product = ({ product, page }) => {
  const {
    state: { cart },
    addProduct,
    increaseProduct,
  } = useContext(CartContext);

  const { id, name, price, image } = product;

  const isInCart = (product) => {
    return !!cart.find((item) => item.id === product.id);
  };

  if (page === "details") {
    return (
      <Box>
        {isInCart(product) && (
          <Button
            variant="contained"
            color="primary"
            onClick={() => increaseProduct(id)}
            fullWidth
          >
            <ShoppingBasketIcon /> &nbsp; Add more
          </Button>
        )}

        {!isInCart(product) && (
          <Button
            variant="contained"
            color="primary"
            onClick={() => addProduct(product)}
            fullWidth
          >
            <ShoppingBasketIcon /> &nbsp; Add to cart
          </Button>
        )}
      </Box>
    );
  }

  return (
    <Box boxShadow={3}>
      <Card>
        <CardActionArea href={`product/${product.id}`}>
          <CardMedia component="img" alt="cart-image" image={image} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              #{id} - {name}
            </Typography>
            <Typography variant="h6" color="textSecondary" component="p">
              Price: ${price}
            </Typography>
            <Typography color="textSecondary" component="p">
              Click to see more details.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {isInCart(product) && (
            <Button
              variant="contained"
              size="small"
              color="primary"
              onClick={() => increaseProduct(id)}
              fullWidth
            >
              <ShoppingBasketIcon /> &nbsp; Add more
            </Button>
          )}

          {!isInCart(product) && (
            <Button
              variant="contained"
              size="small"
              color="primary"
              onClick={() => addProduct(product)}
              fullWidth
            >
              <ShoppingBasketIcon /> &nbsp; Add to cart
            </Button>
          )}
        </CardActions>
      </Card>
    </Box>
  );
};
