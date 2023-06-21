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
// import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import ContactButton from "../utils/ContactButton";
import Seo from "../main/Seo";
// import FaxIcon from "@mui/icons-material/Fax";
// import Paper from "@mui/material/Paper";
const contacts = [
  {
    name: " +65 8056 7061",
    icon: <PhoneIcon />,
    link: "tel:+6580567061",
    textTransform: "lowercase",
  },
  {
    name: "sales@dmhgroup.com.sg",
    icon: <EmailIcon />,
    link: "mailto:sales@dmhgroup.com.sg",
    textTransform: "lowercase",
  },
];
const Contact = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", pb: 5 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          pb: { xs: 5, md: 10 },
          // minHeight: "100vh",
          // backgroundColor: (theme) => theme.palette.primary.main,
        }}
      >
        <CssBaseline />
        <Seo
          title="Contact Us - DMH"
          description=" Contact us today for inquiries, project requests, or any questions you may have.  Experience prompt and reliable communication as we guide you through your all of our service journey."
          name="D M H"
          type="Contact us  page "
        />
        <Box
          sx={{
            flex: 1,
            // textAlign: { xs: "center", md: "center" },
            // pl: { xs: 2, md: 15 },
            pt: { xs: 5, md: 12 },
            color: "#31344B",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            // backgroundColor: "red",
            // display: { xs: "none", md: "flex" }
          }}
        >
          <Box sx={{ textAlign: { xs: "center", md: "left" } }}>
            <Typography variant="h3" sx={{ fontWeight: "lighter" }}>
              Contact Us
            </Typography>
            <Typography
              variant="h2"
              sx={{
                pb: 3,
                fontWeight: "bolder",
                fontSize: { xs: 30, sm: 40, md: 50 },
              }}
            >
              We're here for you
            </Typography>
            <Typography variant="h5" sx={{ pl: { xs: 1, md: 10 } }}>
              Monday-Friday : <span>9am-6pm (SST)</span>
            </Typography>{" "}
          </Box>

          {/* <Button onClick={handleWhatsAppButtonClick}>Live chat</Button> */}
        </Box>
        <Box sx={{ flex: 1, pt: 5 }}>
          {/* <Card sx={{ minWidth: 275 }}> */}
          <Card
            sx={{
              maxWidth: { xs: 325, md: 400 },
              mx: "auto",
              borderRadius: 5,
              mb: { xs: 2, md: 0 },
              // px: 3,
              pt: 4,
              // pb: 2,

              boxShadow: "inset 2px 2px 5px #b8b9be,inset -3px -3px 7px #fff",
            }}
            // elevation={4}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: "bold",
                color: "#31344B",

                // textShadow:
                //   "-3px -3px 7px #ffffffb0, 3px 3px 5px rgba(94, 104, 121, 0.692)",
              }}
            >
              JAMES
            </Typography>

            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",

                color: "#6D7587",
                // pb: 2,
                textShadow: "1px 1px 1px #FFF",
              }}
            >
              Project Manager
            </Typography>
            <Typography
              variant="body2"
              sx={{
                textShadow: "1px 1px 1px #FFF",
                fontWeight: "bold",
                // color: "#31344B",
                color: "#6D7587",
                pb: 2,
              }}
            >
              DMH Construction & Engineering Pte.Ltd
            </Typography>

            <Divider />

            <Stack
              sx={{
                pt: 5,
                pb: 2,
                boxShadow: "inset 2px 2px 5px #b8b9be,inset -3px -3px 7px #fff",
              }}
            >
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
            </Stack>
          </Card>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          p: 4,
          mx: "auto",
          // borderRadius: "50% 50% 40% 60%/60% 45% 55% 40%",
          boxShadow: "6px 6px 12px #b8b9be,-6px -6px 12px #F3F0F1",
          border: "1px solid #d1d9e6",
          // justifyContent: "center",
          // alignItems: "center",
          borderRadius: "10px",
          width: { xs: "90%", md: "70%" },
          height: 450,
          // mt: 10,
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8034431546757!2d103.85088259999999!3d1.2923407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19a6ca76fba3%3A0xf9965f6b63244634!2s111%20North%20Bridge%20Rd%2C%20Singapore%20179098!5e0!3m2!1sen!2sin!4v1683356262380!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          // allowfullscreen=""
          loading="lazy"
          // referrerpolicy="no-referrer-when-downgrade"
          title="map location"
        ></iframe>
      </Box>
    </Box>
  );
};

export default Contact;
