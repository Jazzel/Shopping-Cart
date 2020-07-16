import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Typography, Box } from "@material-ui/core";
import Link from "@material-ui/core/Link";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://github.com/Jazz-hash">
        Muhammad Jazzel Mehmood - jazzelmehmood4@gmail.com -
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.default,
    color: "black",
    // marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
}));

export const Footer = (props) => {
  const classes = useStyles();

  return (
    <Box boxShadow={5}>
      <footer className={classes.footer}>
        <Container maxWidth="lg">
          <Typography variant="h6" align="center" gutterBottom>
            Shopping Cart
          </Typography>
          <Copyright />
          <Typography variant="subtitle1" align="center" component="p">
            Github Repo:{" "}
            <a
              style={{ color: "#e74c3c" }}
              href="https://github.com/Jazz-hash/Shopping-Cart"
            >
              https://github.com/Jazz-hash/Shopping-Cart
            </a>
          </Typography>
        </Container>
      </footer>
    </Box>
  );
};
