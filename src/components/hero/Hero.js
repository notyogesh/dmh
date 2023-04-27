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
      <Container component="main" sx={{ mt: 8, mb: 2 }} maxWidth="sm">
        <Typography
          variant="h2"
          // component="h1"
          gutterBottom
          sx={{
            color: "#444",
            // textShadow:
            //   " -3px -3px 7px #ffffffb0,  3px 3px 5px rgba(94, 104, 121, 0.692)",
            textShadow:
              "0 1px 0 #ccc, 0 2px 0 #c9c9c9, 0 3px 0 #bbb, 0 4px 0 #b9b9b9, 0 5px 0 #aaa, 0 6px 1px rgba(0,0,0,.1), 0 0 5px rgba(0,0,0,.1), 0 1px 3px rgba(0,0,0,.3), 0 3px 5px rgba(0,0,0,.2),  0 5px 10px rgba(0,0,0,.25), 0 10px 10px rgba(0,0,0,.2), 0 20px 20px rgba(0,0,0,.15)",
          }}
        >
          DMH Construction & Engineering Pte.Ltd
        </Typography>
        <div>
          <Button
            variant="contained"
            // color="root"
            sx={{
              fontWeight: "bold",
              mt: 5,
              px: 3,
              py: 1,
              mr: { xs: 0, md: 2 },
              borderRadius: "50%",
              color: "#6D7587",
              backgroundColor: "#f2f2f2",
              textShadow: "3px 3px 3px #FFF",
              // boxShadow: '0px 1px 0px rgba(255, 255, 255, 0.2), 0px 2px 1px rgba(0, 0, 0, 0.15), 0px 0px 2px rgba(0, 0, 0, 0.1), 0px -1px 0px rgba(0, 0, 0, 0.1)',

              boxShadow:
                " -3px -3px 7px rgba(255, 255, 255, 0.2),  3px 3px 5px rgba(94, 104, 121, 0.692)",
              "&:hover": {
                backgroundColor: "#f3f0f1",
                boxShadow:
                  " -3px -3px 7px #ffffffb0,  3px 3px 5px rgba(94, 104, 121, 0.692)",
              },
              // boxShadow:
              //   " inset 14px 14px 20px #cbced1,inset -14px -14px 20px white",
            }}
          >
            stay COOL
          </Button>
          <Button
            variant="contained"
            // color="root"
            sx={{
              fontWeight: "bold",
              mt: { xs: 6, md: 15 },
              mr: { xs: 0, md: 2 },
              px: 3,
              py: 1,
              borderRadius: "50%",
              color: "#6D7587",
              backgroundColor: "#f2f2f2",
              textShadow: "3px 3px 3px #FFF",
              // boxShadow: '0px 1px 0px rgba(255, 255, 255, 0.2), 0px 2px 1px rgba(0, 0, 0, 0.15), 0px 0px 2px rgba(0, 0, 0, 0.1), 0px -1px 0px rgba(0, 0, 0, 0.1)',

              boxShadow:
                " -3px -3px 7px rgba(255, 255, 255, 0.2),  3px 3px 5px rgba(94, 104, 121, 0.692)",
              "&:hover": {
                backgroundColor: "#f3f0f1",
                boxShadow:
                  " -3px -3px 7px #ffffffb0,  3px 3px 5px rgba(94, 104, 121, 0.692)",
              },
              // boxShadow:
              //   " inset 14px 14px 20px #cbced1,inset -14px -14px 20px white",
            }}
          >
            Stay COMFORTABLE
          </Button>
          <Button
            variant="contained"
            sx={{
              fontWeight: "bold",
              mt: { xs: 6, md: 25 },

              px: 3,
              py: 1,
              borderRadius: "50%",
              color: "#6D7587",
              backgroundColor: "#f2f2f2",
              textShadow: "3px 3px 3px #FFF",
              boxShadow:
                " -3px -3px 7px rgba(255, 255, 255, 0.2),  3px 3px 5px rgba(94, 104, 121, 0.692)",
              "&:hover": {
                backgroundColor: "#f3f0f1",
                boxShadow:
                  " -3px -3px 7px #ffffffb0,  3px 3px 5px rgba(94, 104, 121, 0.692)",
              },
            }}
          >
            with DMH
          </Button>
        </div>
      </Container>
    </Box>
  );
};

export default Hero;
