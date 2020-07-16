import React, { useContext } from "react";
import { Context as CartContext } from "./../context/CartContext";

import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./component.css";

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
            style={{ backgroundColor: "#e74c3c", color: "white" }}
            onClick={() => increaseProduct(id)}
            fullWidth
            size="large"
          >
            <ShoppingBasketIcon /> &nbsp; Add more
          </Button>
        )}

        {!isInCart(product) && (
          <Button
            variant="contained"
            style={{ backgroundColor: "#e74c3c", color: "white" }}
            onClick={() => addProduct(product)}
            fullWidth
            size="large"
          >
            <ShoppingBasketIcon /> &nbsp; Add to cart
          </Button>
        )}
      </Box>
    );
  }

  return (
    <>
      <Link
        to={`product/${product.id}`}
        style={{ textDecoration: "none", color: "black" }}
        data-path-hover="m 0,0 0,47.7775 c 24.580441,3.12569 55.897012,-8.199417 90,-8.199417 34.10299,0 65.41956,11.325107 90,8.199417 L 180,0 z"
      >
        <figure style={{ height: "420px" }}>
          <div className="imageFix">
            <img src={image} alt="cart" />
          </div>
          <svg viewBox="0 0 180 320" preserveAspectRatio="none">
            <path d="m 0,0 0,171.14385 c 24.580441,15.47138 55.897012,24.75772 90,24.75772 34.10299,0 65.41956,-9.28634 90,-24.75772 L 180,0 0,0 z"></path>
            <desc>Created with Snap</desc>
            <defs></defs>
          </svg>
          <figcaption>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography variant="h6" color="textSecondary" component="p">
              Price: ${price}
            </Typography>
            <p>Click to see more details.</p>

            <button>View</button>
          </figcaption>
        </figure>
      </Link>

      {/* <Box boxShadow={3}>
        <Card>
          <Link
            to={`product/${product.id}`}
            style={{ textDecoration: "none", color: "black" }}
          >
            <CardActionArea>
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
          </Link>
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
      </Box> */}
    </>
  );
};
