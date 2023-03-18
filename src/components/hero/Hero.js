import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Button } from "@mui/material";
import Seo from "../../main/Seo";

// import Link from "@mui/material/Link";
const Hero = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        // backgroundColor: (theme) =>
        //   theme.palette.mode === "light"
        //     ? theme.palette.root.mainGradient
        //     : "default",
        backgroundImage: (theme) =>
          theme.palette.mode === "light"
            ? `linear-gradient(to right, #ffffff 0%, #D3D3D3 100%)`
            : "default",
      }}
    >
      {" "}
      <Seo
        title="D M H"
        description="construction & Engineering Pte.Ltd"
        name="D M H"
        type="landing page "
      />
      <CssBaseline />
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
        <Typography
          variant="h2"
          // component="h1"
          gutterBottom
          sx={{
            color: "inherit",
            textShadow: (theme) =>
              theme.palette.mode === "light" ? "5px 5px 2px #c5c5c5" : "none",
          }}
        >
          DMH construction & Engineering Pte.Ltd
        </Typography>
        <Typography variant="h5" gutterBottom>
          Construction Design & Build
        </Typography>
        <Button
          color="success"
          variant="contained"
          disableElevation
          sx={{ fontWeight: "bold" }}
        >
          Every work of art tells a story
        </Button>
      </Container>
    </Box>
  );
};

export default Hero;
