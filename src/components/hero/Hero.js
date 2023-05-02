import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Button } from "@mui/material";
import Seo from "../../main/Seo";
import heroImg from "../../images/Home.png";
import HeroButton from "../../utils/HeroButton";
// import Link from "@mui/material/Link";
const Hero = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        minHeight: "100vh",
        // maxWidth: "100vw",
        // backgroundColor: (theme) =>
        //   theme.palette.mode === "light"
        //     ? theme.palette.root.mainGradient
        //     : "default",
        // backgroundImage: (theme) =>
        //   theme.palette.mode === "light"
        //     ? `linear-gradient(to right, #ffffff 0%, #D3D3D3 100%)`
        //     : "default",
      }}
    >
      {" "}
      <Seo
        title="D M H"
        description="Construction &   Engineering Pte.Ltd"
        name="D M H"
        type="landing page "
      />
      <CssBaseline />
      <Container component="main" sx={{ mt: 8, mb: 2, flex: 1 }} maxWidth="sm">
        <Typography
          variant="h2"
          // component="h1"
          gutterBottom
          sx={{
            color: "#444",

            textShadow:
              " -3px -3px 7px #ffffffb0,  3px 3px 5px rgba(94, 104, 121, 0.692)",
            // textShadow:
            //   "0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.3), 0 3px 5px rgba(0,0,0,.2),  0 5px 10px rgba(0,0,0,.25), 0 10px 10px rgba(0,0,0,.2), 0 20px 20px rgba(0,0,0,.15)",
          }}
        >
          DMH Construction & Engineering Pte.Ltd
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            p: 5,
          }}
        >
          <HeroButton name=" Stay COOL" align="start" />
          <HeroButton name=" Stay COMFORTABLE" align="center" />
          <HeroButton name="  with DMH" align="end" />
        </Box>
      </Container>
      <Container sx={{ mt: 8, mb: 2, flex: 1 }} maxWidth="sm">
        <img
          src={heroImg}
          alt="index"
          style={{
            // borderRadius: "50%",
            width: "300px",
            // border: "1px solid rgba(255, 255, 255, 0.5)",
            // boxShadow:
            //   " -3px -3px 7px #ffffffb0,  3px 3px 5px rgba(94, 104, 121, 0.692)",
          }}
        />
      </Container>
    </Box>
  );
};

export default Hero;
