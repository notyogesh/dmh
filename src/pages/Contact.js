import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
// import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
// import Paper from "@mui/material/Paper";
const Contact = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        minHeight: "100vh",
        // backgroundColor: (theme) => theme.palette.primary.main,
      }}
    >
      <CssBaseline />
      <Box sx={{ flex: 1, display: { xs: "none", md: "flex" } }}>
        <Skeleton
          variant="rectangular"
          // animation="wave"
          width="100%"
          height="100%"
        />
      </Box>
      <Box sx={{ flex: 1, mt: 5 }}>
        {/* <Card sx={{ minWidth: 275 }}> */}
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          V.MURUGESAN
        </Typography>
        <Typography variant="body2">
          SRM Electrical & Aircon Engineering Pte.Ltd
        </Typography>
        <Button
          startIcon={<PhoneIcon />}
          href="tel:96549761"
          target="_blank"
          // variant="text"
          color="success"
          sx={{ mx: "auto" }}
        >
          +65 9654 9761
        </Button>
        <Divider />
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            mt: 2,
            // color: (theme) =>
            //   theme.palette.mode === "light" ? "#18191a" : "#D3d3d3",
          }}
        >
          Project Manager
        </Typography>
        <Stack>
          <Button
            startIcon={<PhoneIcon />}
            href="tel:62935657"
            target="_blank"
            color="success"
            // variant="text"
            sx={{ mx: "auto" }}
          >
            +65 6293 5657
          </Button>

          <Button
            startIcon={<EmailIcon />}
            href="mailto:srmeaepl@gmail.com"
            color="success"
            // target="_blank"
            // variant="text"
            sx={{ mx: "auto" }}
          >
            srmeaepl@gmail.com
          </Button>
          <Button
            startIcon={<LocationOnIcon />}
            // href="https://twitter.com/"

            // variant="text"
            color="success"
            sx={{ mx: "auto" }}
          >
            35 SELEGIE Road #09-02
            <br />
            Parklane Shopping Mall
            <br />
            Singapore - 188307
          </Button>
        </Stack>
        {/* </Card> */}
      </Box>
    </Box>
  );
};

export default Contact;
