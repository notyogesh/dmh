import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
const Hero = () => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          backgroundColor: (theme) => theme.palette.primary.main,
        }}
      >
        <CssBaseline />
        <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
          <Typography
            variant="h2"
            // component="h1"
            // gutterBottom
            sx={{ color: "inherit" }}
          >
            DMH construction & Engineering Pvt.Ltd
          </Typography>
          <Typography variant="h5" gutterBottom>
            Construction Design & Build
          </Typography>
          <Typography variant="body1">Slogan</Typography>
        </Container>
      </Box>
    </div>
  );
};

export default Hero;
