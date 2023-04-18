import React from "react";
import { Typography, Button, Box, CssBaseline } from "@mui/material";
import { useRouteError } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
// import image from "../images/404.svg";
import Seo from "./Seo";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <Box
      sx={{
        backgroundColor: "#f3f0f1",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Seo
        title="404 | D M H"
        description="Page you are looking for is not found !"
        name="D M H"
        type="error"
      />
      <Box
        sx={{
          maxWidth: "sm",
          m: "auto",
          p: 2,
          verticalAlign: "middle",
          boxShadow:
            " inset 14px 14px 20px #cbced1,inset -14px -14px 20px white",
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
          // color="root"
          // disableElevation

          sx={{
            // color: "#444",
            // backgroundColor: "#f3f0f1",

            fontWeight: "bold",
            borderRadius: "10px",
            border: " 1px solid rgba(255, 255, 255, 0.2)",
            m: { xs: 1, md: 2 },

            color: "#f3f0f1",
            backgroundColor: "#6D7587",
            boxShadow: "14px 14px 20px #cbced1, -14px -14px 20px white",

            "&:hover": {
              backgroundColor: "#6D7587",
            },
          }}
        >
          Go to Home
        </Button>
        <CssBaseline />
      </Box>
      {/* <h1>gggg</h1> */}
    </Box>
  );
};

export default ErrorPage;
