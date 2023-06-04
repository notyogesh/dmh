import React from "react";
import { Typography, Button, Box, CssBaseline } from "@mui/material";
import { useRouteError } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
// import image from "../images/404.svg";
import Seo from "./Seo";
import HomeIcon from "@mui/icons-material/Home";
const ErrorPage = () => {
  const error = useRouteError();

  return (
    <Box
      sx={{
        backgroundColor: "#f3f0f1",
        height: "100vh",
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
          mx: "auto",
          px: 5,
          pt: 5,
          pb: 2,

          verticalAlign: "middle",
          border: "1px solid #d1d9e6",
          borderRadius: "5px",
          // boxShadow: "0 0.25rem 0.5rem rgb(38 40 51 / 50%)",
          boxShadow: " inset 2px 2px 5px #b8b9be,inset -3px -3px 7px #fff",
        }}
      >
        <Typography variant="h1" component="h1" align="center" gutterBottom>
          {error.status}
        </Typography>
        <Typography variant="h4" sx={{ fontFamily: "Nunito Sans" }}>
          Sorry, page not found!
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{ fontFamily: "Nunito Sans" }}
        >
          Sorry, we could't find the page you're looking for. Perhaps you've
          mistyped the URL? Be sure to check your spelling.
        </Typography>
        <Typography variant="h3" sx={{ pt: 3, mb: 3 }}>
          {(error && error.statusText) || error.message}
        </Typography>
        {/* <img src={image} alt="404 Error" loading="lazy" /> */}
        <Button
          to="/"
          component={RouterLink}
          size="large"
          // color="root"
          // disableElevation
          startIcon={<HomeIcon />}
          sx={{
            color: "#e6e7ee",
            backgroundColor: " #31344b",
            px: 3,
            fontWeight: "bold",
            borderRadius: "10px",
            // border: " 1px solid rgba(255, 255, 255, 0.2)",
            m: { xs: 1, md: 2 },

            // color: "#f3f0f1",
            // backgroundColor: "#6D7587",
            textTransform: "capitalize",
            "&:hover": {
              color: " #31344b",
              backgroundColor: "#e6e7ee",
              outline: "2px solid #31344b ",
              // boxShadow: "inset 2px 2px 5px #b8b9be, inset -3px -3px 7px #fff",
            },
          }}
        >
          Go Home
        </Button>
        <CssBaseline />
      </Box>
      {/* <h1>gggg</h1> */}
    </Box>
  );
};

export default ErrorPage;
