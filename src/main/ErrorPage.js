import React from "react";
import { Typography, Button, Box } from "@mui/material";
import { useRouteError } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
// import image from "../images/404.svg";
import Seo from "./Seo";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <Seo
        title="404 | D M H"
        description="Page you are looking for is not found !"
        name="D M H"
        type="error"
      />
      <Box
        sx={{
          maxWidth: "sm",
          margin: "0 auto",
          // display: "flex",
          // flexDirection: "column",
          // justifyContent: "center",
          // alignItems: "center",
        }}
      >
        <Typography variant="h1" component="h1" align="center" gutterBottom>
          {error.status}
        </Typography>
        <Typography variant="h3">Sorry, page not found!</Typography>
        <Typography paragraph color="textSecondary">
          Sorry, we could't find the page you're looking for. Perhaps you've
          mistyped the URL? Be sure to check your spelling.
        </Typography>
        <Typography variant="h3">
          {(error && error.statusText) || error.message}
        </Typography>
        {/* <img src={image} alt="404 Error" loading="lazy" /> */}
        <Button
          to="/"
          variant="contained"
          component={RouterLink}
          size="large"
          disableElevation
        >
          Go to Home
        </Button>
      </Box>
    </>
  );
};

export default ErrorPage;
