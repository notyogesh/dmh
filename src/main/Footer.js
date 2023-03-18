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
            {" - DMH"}
            {"."}
            {"(All Rights Reserved)"}
          </Button>
        </Box>
        <Divider
          flexItem
          sx={{ orientation: { xs: "horizontal", md: "vertical" } }}
        />

        <Box component="footer" sx={{ flex: 1 }}>
          {/* <Typography variant="body1">Follow Us On: </Typography> */}
          <Button variant="contained" sx={{ mb: 2 }}>
            Follow Us On:
          </Button>
          <Stack>
            <Button
              startIcon={<FacebookIcon />}
              href="https://www.facebook.com/"
              target="_blank"
              variant="text"
              sx={{ mx: "auto" }}
            >
              Facebook
            </Button>
            <Button
              startIcon={<TwitterIcon />}
              href="https://twitter.com/"
              target="_blank"
              variant="text"
              sx={{ mx: "auto" }}
            >
              Twitter
            </Button>
            <Button
              startIcon={<InstagramIcon />}
              href="https://www.instagram.com/"
              target="_blank"
              variant="text"
              sx={{ mx: "auto" }}
            >
              Instagram
            </Button>
            <Button
              startIcon={<EmailIcon />}
              href="https://www.instagram.com/"
              target="_blank"
              variant="text"
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
// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import { Typography, Link, Box } from '@material-ui/core';
// import FacebookIcon from '@material-ui/icons/Facebook';
// import TwitterIcon from '@material-ui/icons/Twitter';
// import InstagramIcon from '@material-ui/icons/Instagram';

// const useStyles = makeStyles((theme) => ({
//   footer: {
//     backgroundColor: '#f2f2f2',
//     padding: theme.spacing(4),
//     marginTop: 'auto',
//   },
//   socialLinks: {
//     display: 'flex',
//     justifyContent: 'center',
//     marginTop: theme.spacing(2),
//   },
//   socialIcon: {
//     margin: theme.spacing(0, 1),
//     fontSize: '2rem',
//     color: '#666666',
//     '&:hover': {
//       color: '#000000',
//     },
//   },
// }));

// const Footer = () => {
//   const classes = useStyles();

//   return (
//     <Box component="footer" className={classes.footer}>
//       <Typography variant="body1">
//         Follow Us:
//       </Typography>
//       <div className={classes.socialLinks}>
//         <Link href="https://www.facebook.com/" target="_blank">
//           <FacebookIcon className={classes.socialIcon} />
//         </Link>
//         <Link href="https://twitter.com/" target="_blank">
//           <TwitterIcon className={classes.socialIcon} />
//         </Link>
//         <Link href="https://www.instagram.com/" target="_blank">
//           <InstagramIcon className={classes.socialIcon} />
//         </Link>
//       </div>
//     </Box>
//   );
// };

// export default Footer;
