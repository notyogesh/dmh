import React from "react";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import electrical from "../images/electrical.png";
import lightningsol from "../images/lightningsol.png";

import KitchenCard from "../utils/KitchenCard";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import ExtensionIcon from "@mui/icons-material/Extension";
import TuneIcon from "@mui/icons-material/Tune";
// import AssuredWorkloadIcon from "@mui/icons-material/AssuredWorkload";
import Stack from "@mui/material/Stack";
import Seo from "../main/Seo";
// import repair from "../images/repair.png";
import repair from "../images/repair.png";
import safetyelectrical from "../images/safetyelectrical.png";
import elecinstall from "../images/electinstall.png";
import elecup from "../images/elecup.png";

const ElectricalServices = () => {
  return (
    <Box
      sx={{
        // backgroundColor: "#f3f0f1",
        // textAlign: "left",
        // px: { xs: 2, md: 20 },
        // py: 2,
        // minHeight: "100vh",
        // color: "#E6E7EE",
        // backgroundColor: "#E6E7EE",
        backgroundColor: "#f3f0f1",
        fontFamily: "Nunito Sans",
        color: "#31344B",
        pb: 5,
      }}
    >
      <Seo
        title="Electrical Services - DMH"
        description="DMH Electrical Services: Unleash the Power of Excellence in Electrical Solutions. Discover top-notch electrical services provided by DMH. Our experienced and certified electricians offer a wide range of services including installations, repairs, and maintenance for residential, commercial, and industrial projects. "
        name="D M H"
        type="Electrical Services Page"
      />
      <Box
        sx={{
          // pt: { xs: "25vh", md: "20vh" },
          // pb: "20vh",
          display: "flex",
          flexDirection: { xs: "column ", md: "row" },
          mb: 10,
        }}
      >
        <Box sx={{ flex: 1, mt: { xs: "10vh", md: "20vh" } }}>
          <Typography
            variant="h3"
            sx={{
              // textAlign: { xs: "center", md: "left" },
              fontWeight: 600,
              // pl: { xs: 1, md: 25 },
            }}
          >
            DMH
          </Typography>
          <Typography
            variant="h4"
            component="h1"
            sx={{
              // textAlign: { xs: "center", md: "left" },
              fontWeight: 500,
              // pl: { xs: 0, md: 5 },
              fontSize: { xs: 30, sm: 35, md: 40 },
              // backdropFilter: "blur(20px)",
              letterSpacing: "1.2px",
            }}
          >
            Electrical Work
          </Typography>
        </Box>
        <Box sx={{ flex: 1 }}>
          <img src={electrical} alt="electrical" style={{ width: "50%" }} />
        </Box>
      </Box>
      <Typography
        variant="h6"
        sx={{
          textAlign: "center",
          color: "#31344B",
          px: { xs: 2, md: 20 },
          pb: { xs: 2, md: 2 },
        }}
      >
        We are your go-to destination for all your electrical needs. Our team of
        skilled and certified electricians is dedicated to providing reliable,
        safe, and efficient electrical services for residential, commercial, and
        industrial properties. Whether you need simple repairs, complex
        installations, or routine maintenance, we have the expertise and
        experience to get the job done right.
      </Typography>
      {"      "}
      <br />
      <br />
      <Typography variant="h3" sx={{ my: 3, textAlign: "center" }}>
        Our Services:
      </Typography>
      {servicesElectrical.map((item, i) => (
        <KitchenCard
          head={item.head}
          body={item.body}
          img={item.img}
          key={i}
          i={i}
          backgroundColor={"#F3F0F1"}
        />
      ))}
      <Typography variant="h3" sx={{ ml: "auto", my: 3, textAlign: "center" }}>
        Why Choose Us:
      </Typography>
      <Box
        sx={{
          // boxShadow: "6px 6px 12px #b8b9be,-6px -6px 12px #fff",
          // border: "1px solid #d1d9e6",
          // pt: 5,
          // pb: 2,
          mt: 8,
          backgroundColor: "#F3F0F1",
          mx: { xs: 2, md: 20 },
          borderRadius: "9px",
        }}
      >
        {whyUsElectrical.map((item, i) => (
          <Box
            key={i}
            sx={{
              textAlign: "left",
              // color: "#4F4350",
            }}
          >
            <Accordion
              square
              sx={{ backgroundColor: "#DFE0DF", border: "1px solid #f3f0f1" }}
            >
              <AccordionSummary
                expandIcon={<AddCircleIcon />}
                aria-controls="panel1a-content"
                id={item.head + i}
              >
                {" "}
                {/* <TuneIcon /> {item.head} */}
                <Stack direction="row" alignItems="center" sx={{ pl: 2 }}>
                  {item.icon}
                  <Typography
                    variant="h5"
                    sx={{
                      pb: 2,
                      px: 5,
                      pt: 2,
                      // mx: "auto",
                      display: "flex",
                      fontWeight: 500,
                    }}
                  >
                    {item.head}
                  </Typography>
                </Stack>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  variant="body1"
                  sx={{ px: 5, pb: 4, fontWeight: 600 }}
                >
                  {item.body}{" "}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Box>
        ))}
      </Box>

      {/* <Typography variant="h4" sx={{ my: 2, textAlign: "center" }}>
        Contact Us:
      </Typography>
      Ready to experience top-notch electrical services? Contact us today to
      schedule an appointment or request a quote. Our team is standing by to
      assist you with all your electrical needs. Trust us for reliable, safe,
      and efficient electrical solutions for your home or business
      <br /> <br /> */}
    </Box>
  );
};

export default ElectricalServices;

const servicesElectrical = [
  {
    head: "Electrical Repairs:",
    body: "From fixing faulty outlets and switches to repairing damaged wiring and circuits, our technicians can diagnose and repair all types of electrical issues quickly and efficiently. We use state-of-the-art tools and techniques to ensure that your electrical system is safe and up to code.",
    img: repair,
  },

  {
    head: "Electrical Installations:",
    body: "If you're building a new home, renovating your existing space, or need to upgrade your electrical system, we can handle all types of installations. We can install new electrical panels, outlets, switches, lighting fixtures, and more, tailored to your specific needs and budget.",
    img: elecinstall,
  },
  {
    head: "Electrical Upgrades:",
    body: "As technology evolves, so do electrical systems. If you need to upgrade your electrical panel, increase your electrical capacity, or install dedicated circuits for high-powered appliances, our team can provide expert advice and professional installation services to meet your requirements.",
    img: elecup,
  },
  {
    head: "Lighting Solutions:",
    body: "Lighting plays a crucial role in enhancing the ambiance and functionality of any space. We offer a wide range of lighting solutions, including indoor and outdoor lighting, LED lighting, recessed lighting, landscape lighting, and more. Our team can help you choose the right lighting options to suit your aesthetic preferences and energy-saving goals.",
    img: lightningsol,
  },
  {
    head: "Safety Inspections:",
    body: "Electrical safety is our top priority. Our technicians can conduct thorough electrical safety inspections to identify potential hazards, code violations, and other issues that may compromise the safety of your electrical system. We can provide recommendations and implement necessary repairs or upgrades to ensure your home or business is safe from electrical hazards.",
    img: safetyelectrical,
  },
];
const whyUsElectrical = [
  {
    head: "Quality Workmanship:",
    body: "Our team of skilled technicians is committed to delivering top-quality workmanship. We use the finest materials, advanced techniques, and industry-best practices to ensure that every project is completed to the highest standards.",
    icon: <BeenhereIcon />,
    // icon: <TuneIcon />,
  },
  {
    head: "Experience and Expertise:",
    body: "With years of experience in the glass and aluminum industry, we have the knowledge and expertise to handle projects of all sizes and complexities. From residential to commercial, we have the skills and resources to meet your requirements.",
    icon: <TuneIcon />,
    // icon: <ExtensionIcon />,
  },
  {
    head: "Excellent Customer Service:",
    body: "We value our customers and strive to provide excellent customer service at every step of the process. Our team is responsive, professional, and dedicated to ensuring your complete satisfaction with our services.",
    icon: <ExtensionIcon />,
  },
  {
    head: "Competitive Pricing:",
    body: "We understand the importance of budget in any project, and we offer competitive pricing without compromising on quality. We provide detailed quotes and transparent pricing to help you make informed decisions and get the best value for your investment.",
    icon: <DashboardCustomizeIcon />,
  },
  {
    head: "Timely Completion:",
    body: "We know that time is of the essence in any project, and we are committed to completing your glass and aluminum work within the agreed-upon timeline. We work efficiently, follow strict schedules, and ensure timely project completion.",
    icon: <Diversity2Icon />,
  },
];
