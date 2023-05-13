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
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Stack from "@mui/material/Stack";
// import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
// import Fab from "@mui/material/Fab";

import Divider from "@mui/material/Divider";
import SocialButton from "../utils/SocioButton";
import Typography from "@mui/material/Typography";
import FooterButton from "../utils/FooterButton";

const socio = [
  {
    name: "Facebook",
    icon: <FacebookIcon />,
    link: "https://www.facebook.com/profile.php?id=100092418425772",
  },
  { name: "Twitter", icon: <TwitterIcon />, link: "http://www.twitter.com" },
  {
    name: "Instagram",
    icon: <InstagramIcon />,
    link: "https://instagram.com/dmh.group?igshid=YmMyMTA2M2Y=",
  },
  {
    name: "Linkedin",
    icon: <LinkedInIcon />,
    link: "https://www.linkedin.com/company/dmhconstructionengineering/",
  },
  {
    name: "Email",
    icon: <EmailIcon />,
    link: "mailto:dmhconstructionengineering@gmail.com",
  },
];
const Footer = () => {
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
          backgroundColor: (theme) => theme.palette.background.default,
        }}
      >
        <Box
          maxWidth="sm"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
            // alignItems: "center",
            flex: 1,
            mt: { xs: 2, md: 0 },
          }}
        >
          <FooterButton to="privacy-policy">Privacy Policy</FooterButton>
          {/* <Divider /> */}
          <FooterButton to="terms&conditions">Terms & Condition </FooterButton>
          {/* <Divider orientation="vertical" flexItem /> */}
          <FooterButton>
            {" "}
            {"Copyright  © "}
            {new Date().getFullYear()}
            {" - DMH"}
            {"."}
            {"(All Rights Reserved)"}
            <br />
            {/* {"Reg.No. 2000924197W"} */}{" "}
          </FooterButton>
        </Box>
        <Divider
          flexItem
          sx={{
            orientation: { xs: "horizontal", md: "vertical", color: "#000" },
          }}
        />

        <Box
          maxWidth="sm"
          sx={{
            flex: 1,
          }}
        >
          <Card
            sx={{
              maxWidth: { xs: 325, md: 230 },
              mx: "auto",
              borderRadius: 5,
              mb: { xs: 2, md: 0 },
            }}
            elevation={4}
          >
            <Typography
              variant="h6"
              color="#333333"
              className="text"
              sx={{
                my: 2,
                mt: 1,
                textShadow: "1px 1px 3px #565656",
                // backgroundColor: " #565656",
              }}
            >
              Social Links
            </Typography>
            {/* <Fab variant="extended">Navigate</Fab> */}
            <Stack>
              {socio.map((item, i) => (
                <SocialButton
                  name={item.name}
                  icon={item.icon}
                  key={i}
                  link={item.link}
                />
              ))}
            </Stack>
          </Card>
        </Box>
      </Box>
    </>
  );
};
export default Footer;
