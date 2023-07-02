import React from "react";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import tile from "../images/tile1.png";
import KitchenCard from "../utils/KitchenCard";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import TuneIcon from "@mui/icons-material/Tune";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import AddCircleIcon from "@mui/icons-material/AddCircle";
// import glassinstall from "../images/glassinstall.png";
// import glassrepair from "../images/glassrepair.png";

// import AssuredWorkloadIcon from "@mui/icons-material/AssuredWorkload";
import Stack from "@mui/material/Stack";

import Diversity2Icon from "@mui/icons-material/Diversity2";
import ExtensionIcon from "@mui/icons-material/Extension";
import Seo from "../main/Seo";
const GlassAluminumWork = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f3f0f1",
        textAlign: "left",
        // px: { xs: 2, md: 20 },
        // py: 2,
        // minHeight: "100vh",
        color: "#31344B",
        pb: 5,
      }}
    >
      {" "}
      <Seo
        title="Glass & Aluminum works - DMH"
        description="DMH Glass & Aluminum Services: Transforming Spaces with Precision and Elegance. Explore the exceptional glass and aluminum services offered by DMH. Our skilled team specializes in designing, fabricating, and installing stunning glass and aluminum solutions for residential, commercial, and architectural projects. "
        name="D M H"
        type="Glass & Aluminum services Page"
      />
      <Box
        sx={{
          pt: { xs: "25vh", md: "20vh" },
          pb: "20vh",
          display: "flex",
          flexDirection: "column",
          mb: 10,
          // background: `url(${tile}) no-repeat `,
          // background-image: linear-gradient(to bottom, rgba(255,0,0,0), rgba(255,0,0,1)),
          backgroundImage: `linear-gradient(to bottom,  rgb(243,240,241) , transparent 50%), url(${tile})`,
          // backgroundOrigin: " border-box",
          backgroundSize: "cover",
          backgroundOrigin: "right",
          // backgroundSize: "100% 100%",
          minHeight: "60vh",
          backgroundPositionY: "bottom",
          backdropFilter: "blur(20)",
        }}
      >
        {" "}
        <Typography
          variant="h3"
          sx={{
            textAlign: { xs: "center", md: "left" },
            fontWeight: 600,
            pl: { xs: 1, md: 25 },
          }}
        >
          DMH
        </Typography>
        <Typography
          variant="h4"
          component="h1"
          sx={{
            textAlign: { xs: "center", md: "left" },
            fontWeight: 500,
            pl: { xs: 0, md: 5 },
            fontSize: { xs: 30, sm: 35, md: 40 },
            // backdropFilter: "blur(20px)",
          }}
        >
          Glass & Aluminum Work
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
        ></Typography>
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
        We are your trusted source for all your glass and aluminum needs. With
        years of experience in the industry, we are proud to offer a wide range
        of services including glass installation, aluminum fabrication, repairs,
        and more. Our team of skilled professionals is dedicated to providing
        top-quality workmanship and exceptional customer service.
      </Typography>
      <Typography variant="h3" sx={{ ml: "auto", my: 3, textAlign: "center" }}>
        Services We Offer:
      </Typography>
      {servicesGlass.map((item, i) => (
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
          mt: 8,
          backgroundColor: "#F3F0F1",
          mx: { xs: 2, md: 20 },
          borderRadius: "9px",
        }}
      >
        {whyUsGlass.map((item, i) => (
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
    </Box>
  );
};

export default GlassAluminumWork;
const servicesGlass = [
  {
    head: "Glass Installation:",
    body: "Whether you need glass windows, doors, or partitions for your home or business, we can handle it all. Our expert team will ensure precise measurements, proper installation, and flawless finishing to give you stunning results that enhance the aesthetics of your space.",
    img: "https://drive.google.com/uc?export=download&id=1SwrUN73lRxOd-3QFEp5zUinShdfrMeca",
  },
  {
    head: "Aluminum Fabrication:",
    body: "We specialize in custom aluminum fabrication for a wide range of applications including windows, doors, storefronts, curtain walls, and more. Our skilled craftsmen work with high-quality materials to create durable and visually appealing aluminum structures that meet your specific requirements.",
    img: "https://img.freepik.com/free-photo/empty-closed-door_1339-6351.jpg?size=626&ext=jpg&uid=R105808813&ga=GA1.2.2136575466.1684650788&semt=ais",
  },
  {
    head: "Repairs and Maintenance:",
    body: "Accidents happen, and when your glass or aluminum structures are damaged, you can count on us for reliable repairs and maintenance. Our team will assess the damage, provide prompt and efficient repairs, and help you maintain the longevity of your glass and aluminum fixtures.",
    img: "https://drive.google.com/uc?export=download&id=1mcbTFkfkakzZy2cYb3a7KY3J4tV9_d6U",
  },
  {
    head: "Custom Design:",
    body: "We understand that every project is unique, and we offer custom design services to bring your vision to life. Our design experts will work closely with you to understand your needs, provide creative solutions, and ensure that the final product exceeds your expectations.",
    img: "https://img.freepik.com/free-photo/directly-shot-glass-skylight_1359-921.jpg?size=626&ext=jpg&uid=R105808813&ga=GA1.2.2136575466.1684650788&semt=ais",
  },
];
const whyUsGlass = [
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
