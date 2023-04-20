import React from "react";
// import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import ContactButton from "../utils/ContactButton";
// import FaxIcon from "@mui/icons-material/Fax";

// import Paper from "@mui/material/Paper";
const contacts = [
  {
    name: " +65 8024 0521",
    icon: <PhoneIcon />,
    link: "http://www.facebook.com",
    textTransform: "lowercase",
  },
  {
    name: "dmhconstructionengineering@gmail.com",
    icon: <EmailIcon />,
    link: "http://www.twitter.com",
    textTransform: "lowercase",
  },
];
const Contact = () => {
  const handleWhatsAppButtonClick = () => {
    const phoneNumber = "9787820695"; // Replace with the recipient's phone number
    const message = "Hello!"; // Replace with your pre-defined message
    const url = `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;
    window.open(url);
  };

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
      <Box
        sx={{
          flex: 1,
          textAlign: "left",
          pl: 5,
          mt: 7,
          // display: { xs: "none", md: "flex" }
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: "lighter" }}>
          Contact Us
        </Typography>
        <Typography variant="h2" sx={{ pb: 3, fontWeight: "bolder" }}>
          We're here for you
        </Typography>
        <Typography variant="h5" sx={{ textAlign: "center" }}>
          Monday-Friday : <span>9am-6pm (SST)</span>
        </Typography>
        <Button onClick={handleWhatsAppButtonClick}>Live chat</Button>
      </Box>
      <Box sx={{ flex: 1, mt: 7 }}>
        {/* <Card sx={{ minWidth: 275 }}> */}
        <Card
          sx={{
            maxWidth: { xs: 325, md: 400 },
            mx: "auto",
            borderRadius: 5,
            mb: { xs: 2, md: 0 },
            px: 3,
            py: 7,
          }}
          elevation={4}
        >
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              pb: 1,
              textShadow:
                "-3px -3px 7px #ffffffb0, 3px 3px 5px rgba(94, 104, 121, 0.692)",
            }}
          >
            DAVID
          </Typography>
          <Typography
            variant="body2"
            sx={{
              textShadow: "1px 1px 1px #FFF",
              fontWeight: "bold",
              color: "#6D7587",
            }}
          >
            DMH Construction & Engineering Pte.Ltd
          </Typography>
          {/* <Button
          startIcon={<PhoneIcon />}
          href="tel:96549761"
          target="_blank"
          // variant="text"
          color="success"
          sx={{ mx: "auto" }}
        >
          +65 8024 0521
        </Button> */}
          <Divider />
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              mt: 2,
              pb: 2,
              // textShadow:
              //   "-1px -1px 1px #ffffffb0, 1px 1px 3px rgba(94, 104, 121, 0.692)",
              textShadow: "1px 1px 1px #FFF",
              // color: (theme) =>
              //   theme.palette.mode === "light" ? "#18191a" : "#D3d3d3",
            }}
          >
            Project Manager
          </Typography>
          <Stack>
            {contacts.map((item, i) => (
              <ContactButton
                name={item.name}
                icon={item.icon}
                key={i}
                link={item.link}
                textTransform={item.textTransform}
              />
            ))}
            <ContactButton
              // name={item.name}
              icon={<LocationOnIcon />}
              // key={i}
              link="https://maps.app.goo.gl/W1kQbLLZpy19UEV6A"
              textTransform="capitalize"
            >
              111, North Bridge Road #08-16
              <br />
              Peninsula Plaza,
              <br />
              Singapore - 179098
            </ContactButton>
            {/* <Button
              startIcon={<PhoneIcon />}
              // endIcon={<FaxIcon />}
              href="tel:80240521"
              target="_blank"
              // variant="text"
              sx={{ mx: "auto" }}
            >
              +65 8024 0521
            </Button>

            <Button
              startIcon={<EmailIcon />}
              href="mailto:dmhconstructionengineering@gmail.com"
              target="_blank"
              // variant="text"
              sx={{ mx: "auto", textTransform: "lowercase" }}
            >
              dmhconstructionengineering@gmail.com
            </Button> */}
            {/* <Button
              startIcon={<LocationOnIcon />}
              href="https://maps.app.goo.gl/W1kQbLLZpy19UEV6A"
              // variant="text"

              target="_blank"
              sx={{ mx: "auto", textTransform: "capitalize" }}
            >
              111, North Bridge Road #08-16
              <br />
              Peninsula Plaza,
              <br />
              Singapore - 179098
            </Button> */}
          </Stack>
        </Card>
      </Box>
    </Box>
  );
};

export default Contact;
