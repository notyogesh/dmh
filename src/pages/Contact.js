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
        minHeight: "100dvh",
        // backgroundColor: (theme) => theme.palette.primary.main,
      }}
    >
      <CssBaseline />
      <Box sx={{ flex: 1 }}>
        <Skeleton
          variant="rectangular"
          // animation="wave"
          width="100%"
          height="100%"
        />
      </Box>
      <Box sx={{ flex: 1 }}>
        {/* <Card sx={{ minWidth: 275 }}> */}
        <Typography variant="h4">DAVID</Typography>
        <Typography variant="body2">
          DMH CONSTRUCTION & ENGINEERING PTE LTD
        </Typography>
        <Divider />
        <Typography variant="h6">Project Manager</Typography>
        <Stack>
          <Button
            startIcon={<PhoneIcon />}
            href="https://www.facebook.com/"
            target="_blank"
            variant="text"
            sx={{ mx: "auto" }}
          >
            +6591289466
          </Button>

          <Button
            startIcon={<EmailIcon />}
            href="https://www.email.com/"
            target="_blank"
            variant="text"
            sx={{ mx: "auto" }}
          >
            dmh.group23@gmail.com
          </Button>
          <Button
            startIcon={<LocationOnIcon />}
            href="https://twitter.com/"
            target="_blank"
            variant="text"
            sx={{ mx: "auto" }}
          >
            111 North Bridge ROad #08-16
            <br />
            Peninsula Plaza
            <br />
            Singapore - 179098
          </Button>
        </Stack>
        {/* </Card> */}
      </Box>
    </Box>
  );
};

export default Contact;
