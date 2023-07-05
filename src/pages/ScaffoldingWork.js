import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Stack,
} from "@mui/material";
import Typography from "@mui/material/Typography";
import paper from "../images/paper.png";
// import PropTypes from "prop-types";
import KitchenCard from "../utils/KitchenCard";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import TuneIcon from "@mui/icons-material/Tune";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import ExtensionIcon from "@mui/icons-material/Extension";
// import TabPanel from "../utils/TabPanel";
import Seo from "../main/Seo";
// import { ContactSupportOutlined } from "@mui/icons-material";

// const tab =[{head:"one",body:"two"},{head:"three",body:"dgddeee"},{head:"gevgg",body:"dgeeevv"}]
const ScaffoldingWork = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f3f0f1",
        fontFamily: "Nunito Sans",
        pb: 5,
        color: "#31344B",
      }}
    >
      {" "}
      <Seo
        title="Scaffolding Work | DMH"
        description="DMH Scaffolding Work: Elevate Your Projects with Safe and Reliable Solutions. Explore DMH's comprehensive scaffolding services for construction, maintenance, and renovation projects. Our skilled team provides sturdy and secure scaffolding structures that ensure safe access and support for workers at various heights."
        name="D M H"
        type="Kitchen Exhaust System Page"
        url="https://dmhgroup.com.sg/scaffolding-work"
      />
      <Box
        sx={{
          pt: { xs: "25vh", md: "20vh" },
          pb: "20vh",
          display: "flex",
          flexDirection: "column",
          mb: 10,

          backgroundImage: `linear-gradient(to bottom,  rgb(243,240,241) , transparent 50%), url(${paper})`,
          // backgroundImage: `url(${paper})`,
          backgroundLoading: "eager",
          // backgroundSize: "cover",
          // backgroundOrigin: "right",

          minHeight: "60vh",
          // backgroundPositionY: "bottom",
          // backdropFilter: "blur(20)",
        }}
      >
        {" "}
        <Typography
          variant="h3"
          sx={{
            textAlign: { xs: "center", md: "center" },
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
            textAlign: { xs: "center", md: "center" },
            fontWeight: 500,
            // pl: { xs: 0, md: 5 },
            fontSize: { xs: 30, sm: 35, md: 40 },
            // backdropFilter: "blur(20px)",
          }}
        >
          Scaffolding Work{" "}
        </Typography>
      </Box>
      <Typography
        variant="h6"
        sx={{
          textAlign: "center",
          color: "#31344B",
          px: { xs: 2, md: 20 },
          pb: { xs: 2, md: 10 },
        }}
      >
        At DMH, we are experts in providing top-quality scaffolding services for
        various construction, maintenance, and repair projects. With years of
        experience and a team of skilled professionals, we are committed to
        delivering safe and reliable scaffolding solutions to our clients.
      </Typography>
      <Typography variant="h3" sx={{ textAlign: "center" }}>
        Our Services:
      </Typography>
      {servicesScaffolding.map((item, i) => (
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
        {whyUsScaffolding.map((item, i) => (
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
      <Typography variant="body1" sx={{ my: 2, textAlign: "center" }}>
        For reliable and professional scaffolding services, trust DMH. Contact
        us today to discuss your scaffolding needs and receive a competitive
        quote. Our team is available to answer any questions and provide expert
        guidance for your next construction project. Partner with us for safe
        and efficient scaffolding solutions!
      </Typography> */}
    </Box>
  );
};

export default ScaffoldingWork;
const servicesScaffolding = [
  {
    head: "Scaffolding Rental:",
    body: "We offer a wide range of scaffolding options for rent, including standard scaffolding, mobile scaffolding, and suspended scaffolding. Our scaffolding is made from high-quality materials, designed to meet safety standards, and can be customized to suit your project's unique requirements.",
    img: "https://images.unsplash.com/photo-1636362740480-46941debefb7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8U2NhZmZvbGRpbmclMjBSZW50YWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
  },

  {
    head: "Scaffolding Erection and Dismantling:",
    body: "Our trained and certified scaffolding erectors can efficiently set up and dismantle scaffolding structures, ensuring that they are installed safely and securely. We follow industry best practices and comply with all relevant regulations to ensure the safety of workers on site.",
    img: "https://www.safework.nsw.gov.au/__data/assets/image/0004/176755/erecting_altering_dismantling_scaffolding_prefabricated_steel_modular_scaffolding_industry_safety_standard_2373-21-figure-5.gif",
  },
  {
    head: "Scaffolding Inspection and Maintenance:",
    body: "We provide regular inspection and maintenance services for scaffolding structures to identify and address any potential safety hazards. Our team conducts thorough inspections and performs necessary repairs or replacements to keep the scaffolding in optimal condition throughout the project.",
    img: "https://img.freepik.com/free-vector/scaffold-concept-illustration_114360-6964.jpg?w=740&t=st=1685982365~exp=1685982965~hmac=a7511afe8f6d2a430e4cbfb9e6eb80252fb349a3c77e836921ddd520c88369da",
  },
  {
    head: "Design and Engineering:",
    body: "We have experienced design and engineering professionals who can create customized scaffolding solutions tailored to your project's specific requirements. We use state-of-the-art tools and software to design safe and efficient scaffolding structures that meet all applicable regulations.",
    img: "https://cdn-resources.accasoftware.com/accasoftware/images/certus-scaffolding/certus-scaffolding-cover.webp",
  },
];
const whyUsScaffolding = [
  {
    head: "Safety First",
    body: "Safety is our top priority. We strictly adhere to industry safety standards and regulations, and our team of skilled professionals is trained in safe scaffolding practices. We conduct regular safety audits and inspections to ensure that our scaffolding structures are safe for workers to use.",
    icon: <BeenhereIcon />,
    // icon: <TuneIcon />,
  },
  {
    head: "Quality Materials",
    body: "We use only high-quality materials in our scaffolding structures, ensuring durability and stability. Our materials are sourced from reputable suppliers and comply with relevant industry standards.",
    icon: <TuneIcon />,
    // icon: <ExtensionIcon />,
  },
  {
    head: "Expertise and Experience",
    body: "Our team of skilled scaffolding professionals has extensive experience in the industry. We have successfully completed numerous scaffolding projects of varying sizes and complexities, and we bring that expertise to every job we undertake.",
    icon: <ExtensionIcon />,
  },
  {
    head: "Customization",
    body: "We understand that every project is unique, and we offer customized scaffolding solutions to meet your specific requirements. Our design and engineering team works closely with you to create scaffolding structures that are tailored to your project's needs, ensuring maximum efficiency and safety.",
    icon: <DashboardCustomizeIcon />,
  },
  {
    head: "Timely Delivery",
    body: "We understand the importance of meeting project deadlines, and we strive to deliver our scaffolding services on time and within budget. Our team works efficiently to ensure that your scaffolding is erected, used, and dismantled as per your project schedule.",
    icon: <Diversity2Icon />,
  },
];
