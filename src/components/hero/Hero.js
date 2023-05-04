import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Button } from "@mui/material";
import Seo from "../../main/Seo";
import heroImg from "../../images/heroto.png";
import HeroButton from "../../utils/HeroButton";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
// import IconButton from "@mui/material/IconButton";

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
        description="Construction &       Engineering Pte.Ltd"
        name="D M H"
        type="landing page "
      />
      <CssBaseline />
      <Container component="main" sx={{ mt: 8, mb: 2, flex: 1 }} maxWidth="sm">
        <Typography
          variant="h3"
          // component="h1"
          gutterBottom
          sx={{
            color: "#444",
            // pl: 1,
            // fontFamily: "Nunito Sans",
            fontWeight: 600,
            // textShadow:
            //   " -3px -3px 7px #ffffffb0,  3px 3px 5px rgba(94, 104, 121, 0.692)",
            textShadow:
              " -1px -1px 7px #ffffffb0,  1px 1px 5px rgba(94, 104, 121, 0.692)",
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
            p: { xs: 0, md: 4.5 },
          }}
        >
          <HeroButton name=" Stay COOL" align="start" />
          <HeroButton name=" Stay COMFORTABLE" align="center" />
          <HeroButton name="  with DMH" align="end" />
        </Box>
        <Box sx={{ display: "flex", mt: { xs: 2, md: 0 } }}>
          <Button
            href="https://wa.me/6580567061?text=I'm%20interested%20in%20your%20company%20profile"
            variant="contained"
            endIcon={<WhatsAppIcon />}
            sx={{
              color: "#fff",
              fontWeight: 600,
              ml: "auto",
              mr: "90px",
              backgroundColor: "#36C33A",
              // boxShadow: "14px 14px 20px #cbced1, -14px -14px 20px white",
              textTransform: "capitalize",
              borderRadius: "20px",
              "&:hover": {
                backgroundColor: "#fff",
                color: "#36C33A",
                border: "2px solid #36C33A",
              },
            }}
          >
            WhatsApp Us
          </Button>
        </Box>
      </Container>
      <Container sx={{ mt: 9, mb: 2, flex: 1 }} maxWidth="sm">
        <img
          src={heroImg}
          alt="DMH"
          // className="heroimg"
          loading="lazy"
          style={{
            // borderRadius: "50%",
            width: "inherit",
            // width: { xs: "300px", md: "550px" },a
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
