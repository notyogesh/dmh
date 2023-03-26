import * as React from "react";
// import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";
// import Link from "@mui/material/Link";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";

export default function Footer() {
  return (
    <>
      <Box
        component="footer"
        sx={{
          py: 3,
          px: 2,
          mt: "auto",
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[900]
              : "#212121",
        }}
      >
        <Box
          // maxWidth="sm"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            // alignItems: "center",
            flex: 1,
          }}
        >
          <Button sx={{ mx: "auto" }}>Privacy Policy</Button>
          {/* <Divider /> */}
          <Button sx={{ mx: "auto" }}>Terms & Condition </Button>
          {/* <Divider orientation="vertical" flexItem /> */}
          <Button sx={{ mx: "auto" }}>
            {"Copyright  © "}
            {new Date().getFullYear()}
            {" - SRM"}
            {"."}
            {"(All Rights Reserved)"}
            <br />
            {"Reg.No. 2000924197W"}
          </Button>
        </Box>
        <Divider
          flexItem
          sx={{ orientation: { xs: "horizontal", md: "vertical" } }}
        />

        <Box component="footer" sx={{ flex: 1 }}>
          {/* <Typography variant="body1">Follow Us On: </Typography> */}
          <Button variant="contained" color="root" sx={{ mb: 2 }}>
            Follow Us On:
          </Button>
          <Stack>
            <Button
              startIcon={<FacebookIcon />}
              href="https://www.facebook.com/"
              target="_blank"
              variant="text"
              color="root"
              sx={{ mx: "auto" }}
            >
              Facebook
            </Button>
            <Button
              startIcon={<TwitterIcon />}
              href="https://twitter.com/"
              target="_blank"
              variant="text"
              color="root"
              sx={{ mx: "auto" }}
            >
              Twitter
            </Button>
            <Button
              startIcon={<InstagramIcon />}
              href="https://www.instagram.com/"
              target="_blank"
              variant="text"
              color="root"
              sx={{ mx: "auto" }}
            >
              Instagram
            </Button>
            <Button
              startIcon={<EmailIcon />}
              href="mailto:srmeaepl@gmail.com"
              target="_blank"
              variant="text"
              color="root"
              sx={{ mx: "auto" }}
            >
              E-mail
            </Button>
          </Stack>
        </Box>
      </Box>
    </>
  );
}
