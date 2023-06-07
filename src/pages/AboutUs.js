import React from "react";

import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import { Link } from "react-router-dom";
import AboutUsCard from "../utils/AboutUsCard";
import VisibilityIcon from "@mui/icons-material/Visibility";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import PrecisionManufacturingIcon from "@mui/icons-material/PrecisionManufacturing";
// import Divider from "@mui/material/Divider";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import GradeIcon from "@mui/icons-material/Grade";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import Seo from "../main/Seo";

const AboutUs = () => {
  const aboutCardContent = [
    {
      head: "Target Audience",
      body: "At DMH, we use human, brand perception, and cultural trends to identify and capitalize on our home and business consumers",
      icon: <VisibilityIcon fontSize="large" />,
    },
    {
      head: "Branding",
      body: "Despite being cautioned not to judge a book by its cover, we all do it every day. We make your establishment looks better.",
      icon: <WorkspacePremiumIcon fontSize="large" />,
    },
    {
      head: "Production",
      body: "Today, truly creative sells. Get innovative ideas and polished finish pieces from our creative agency.",
      icon: <PrecisionManufacturingIcon fontSize="large" />,
    },
  ];
  const aboutCard2Content = [
    {
      head: "Virtue",
      body: " Maintenance isn't just about oil cans & cleaning chemicals - it's about trust , about knowledge, about understanding each other, about honesty, about reliability and doing what we say we are going to do.",
      icon: <GradeIcon fontSize="large" />,
    },
    {
      head: "Capability",
      body: "We are  one of the few  general facilities management provider in our sector , and  We're equipped to handle any task and finish the work on time, thanks to our resources, knowledge, experience and skills",
      icon: <LeaderboardIcon fontSize="large" />,
    },
    {
      head: "Efficacious",
      body: "At DMH we design , install , maintain and service for all our systems.  We endeavour to support the role of the building facilities manager by providing a reliable & Cost effective  service. ",
      icon: <BeenhereIcon fontSize="large" />,
    },
  ];
  return (
    <Box
      sx={{
        backgroundColor: "#f3f0f1",
        // textAlign: "left",
        color: "#31344B",
        // px: { xs: 2, md: 20 },
        // py: 2,
        // minHeight: "100vh",
        pb: 5,
        m: 1,
      }}
    >
      {" "}
      <Seo
        title="D M H - About Us"
        description=" Discover our comprehensive range of services, from residential and commercial construction to specialized electrical, glass, aluminum, and more. "
        name="D M H"
        type="about us page "
      />
      <Box
        sx={{ pt: "20vh", display: "flex", flexDirection: "column", mb: 10 }}
      >
        <Typography variant="h3" sx={{ textAlign: "center", fontWeight: 600 }}>
          Hola, we are DMH
        </Typography>
        <Typography
          variant="body1"
          sx={{
            textAlign: "center",
            // px: 10,
            pt: 5,
            pb: 3,
            fontWeight: 600,
            px: { xs: 2, md: 20 },
            // width: "350px",
          }}
        >
          DMH is privately held singapore based company that is involved in the
          various field of construction and engineering industry. Including air
          conditioning, kitchen exhaust duct system construction and
          maintenance, Electrical work, aluminum and glass work, and scaffolding
          work.
        </Typography>

        <Button
          to="/contact"
          elevation={3}
          component={Link}
          startIcon={<ContactPageIcon />}
          sx={{
            backgroundColor: "#f3f0f1",
            my: 5,
            color: "#44476a",
            textTransform: "capitalize",
            mx: "auto",
            boxShadow: "3px 3px 6px #b8b9be, -3px -3px 6px #fff",
            border: "1px solid #d1d9e6",
            "&:hover": {
              boxShadow: "inset 2px 2px 5px #b8b9be, inset -3px -3px 7px #fff",
            },
          }}
        >
          Contact Us
        </Button>
      </Box>
      <Typography
        variant="h4"
        sx={{ textAlign: "center", fontWeight: 600, pb: 5 }}
      >
        Our Aim
      </Typography>
      <Typography
        variant="body1"
        sx={{
          textAlign: "center",
          fontWeight: 600,
          px: { xs: 2, md: 20 },
          pb: { xs: 2, md: 10 },
        }}
      >
        Our aim is to be our clients & prospectiv clients preferred parter for
        the installation of aircon and Mechanical ventilation equipment ,
        forging relationships for the benefit of each other, the wider community
        & the environment . like the sound of this ? Read on....
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-evenly",
          // boxShadow: "6px 6px 12px #b8b9be,-6px -6px 12px #fff",
          // border: "0.2px solid #d1d9e6",
          pt: 5,
          pb: 8,
          px: { xs: 2, md: 10 },
          mx: { xs: 2, md: 5 },
          gap: 5,
          // borderRadius: "9px",
        }}
      >
        {aboutCardContent.map((item, i) => (
          <AboutUsCard
            head={item.head}
            icon={item.icon}
            key={i}
            body={item.body}
            boxShadow="inset 2px 2px 5px #b8b9be,inset -3px -3px 7px #fff"
          />
        ))}
      </Box>
      {/* <Divider /> */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-evenly",

          pt: 5,
          pb: 8,
          px: { xs: 2, md: 10 },
          mx: { xs: 2, md: 5 },
          gap: 5,
        }}
      >
        {aboutCard2Content.map((item, i) => (
          <AboutUsCard
            head={item.head}
            icon={item.icon}
            key={i}
            body={item.body}
            boxShadow="6px 6px 12px #b8b9be,-6px -6px 12px #fff"
          />
        ))}
      </Box>
      <Box
        sx={{
          boxShadow: "6px 6px 12px #b8b9be,-6px -6px 12px #fff",
          border: "0.2px solid #d1d9e6",
          p: { xs: 1, md: 5 },

          display: "flex",
          flexDirection: "column",
          mx: "auto",
          mb: 5,
          borderRadius: "9px",
          width: { xs: "auto", md: "70%" },
        }}
      >
        <Typography
          variant="h4"
          sx={{ textAlign: "center", fontWeight: 600, pb: 5 }}
        >
          DMH Mission Statement{" "}
        </Typography>
        <Box sx={{ display: { xs: "block", md: "flex" }, gap: 5 }}>
          <img
            src="https://img.icons8.com/ios-filled/200/null/mission-of-a-company.png"
            alt="mission"
            // wisth
          />
          <Typography
            variant="body1"
            sx={{
              textAlign: "center",
              fontWeight: 500,
              pt: 3,
              // color:" "#6D7587""
              // px: { xs: 2, md: 20 },
              // pb: { xs: 2, md: 15 },
            }}
          >
            To be our clients preferred any aircon system maintenance parter
            that through our knowledge, passion and exemplary service we improve
            the comport of our clients and facilitate their operations by
            delivering an enduring & reliable solution.
            <br /> <br />
            To provide a progressive, rewarding and cohesive atmosphere for
            employees that fosters respect of the trust customers, colleagues
            and suppliers place in us. <br />
            Conduct all out business with respect for the community and
            environment.{" "}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutUs;
