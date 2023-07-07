import React, { useState } from "react";
// import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
// import gear from "../images/gear-min.png";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import TabPanel from "../utils/TabPanel2";
import AppBar from "@mui/material/AppBar";
import SimpleImageSlider from "react-simple-image-slider";
import AboutUsCard from "../utils/AboutUsCard";
import LeaderboardIcon from "@mui/icons-material/Leaderboard";
import GradeIcon from "@mui/icons-material/Grade";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import Seo from "../main/Seo";
import construction from "../images/construction2.webp";
import constructionMin from "../images/construction2-min.webp";

const whyUsConstruction = [
  {
    head: "Quality Control",
    body: "Our team of skilled technicians is committed to delivering top-quality workmanship. We use the finest materials, advanced techniques, and industry-best practices to ensure that every project is completed to the highest standards.",
    icon: <GradeIcon fontSize="large" />,
  },
  {
    head: "Customer Service",
    body: "We value our customers and strive to provide excellent customer service at every step of the process. Our team is responsive, professional, and dedicated to ensuring your complete satisfaction with our services.",
    icon: <LeaderboardIcon fontSize="large" />,
  },
  {
    head: "Green",
    body: "Our commitment lies in building green, incorporating energy efficiency, resource conservation, and healthy indoor environments",
    icon: <BeenhereIcon fontSize="large" />,
  },
];
// import TabContext from "@mui/lab/TabContext";
// import TabList from "@mui/lab/TabList";
// import TabPanel from "@mui/lab/TabPanel";
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Construction = () => {
  const [value, setValue] = useState(0);
  // const [imageNum, setImageNum] = useState(1);
  const constructionImage = construction || constructionMin;
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
        color: "#31344B",
        fontFamily: "Nunito Sans",
        pb: 5,
      }}
    >
      {" "}
      <Seo
        title="Construction - DMH construction work"
        description=" DMH Construction , Unparalleled Excellence in Building and Renovation Projects. Trust our skilled team of professionals to bring your vision to life."
        name="D M H"
        type="Construction  service  page "
        url="https://dmhgroup.com.sg/construction"
      />
      <Box
        sx={{
          // pt: { xs: "25vh", md: "20vh" },
          // pb: "20vh",
          display: "flex",
          flexDirection: { xs: "column ", md: "row" },
          mb: 15,
        }}
      >
        <Box sx={{ flex: "40%", mt: { xs: "10vh", md: "20vh" } }}>
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
              fontWeight: 600,
              // pl: { xs: 0, md: 5 },
              fontSize: { xs: 30, sm: 35, md: 40 },
              // backdropFilter: "blur(20px)",
              letterSpacing: "1.2px",
            }}
          >
            Construction
          </Typography>
        </Box>
        <Box sx={{ flex: "60%" }}>
          <img
            src={constructionImage}
            alt="construction"
            loading="eager"
            style={{
              width: "100%",
              filter: "grayscale(25%)",
              // filter: "hue-rotate(340deg)",
            }}
          />
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
        Welcome to DMH Construction & Engineering Pvt Ltd, your trusted partner
        for all your construction and engineering needs. We are a full-service
        construction company that specializes in various areas of construction,
        including civil engineering, structural engineering, architectural
        design, and project management.
      </Typography>
      <Typography
        variant="h4"
        sx={{ pt: 15, my: 3, textAlign: "center", fontWeight: "bold" }}
      >
        What We Do...
      </Typography>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <AppBar
            position="static"
            sx={{ backgroundColor: "#1976D2", color: "#fff" }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              indicatorColor="red"
              textColor="inherit"
              variant="fullWidth"
              // centered
              // sx={{ backgroundColor: "#444" }}
            >
              <Tab label="DESIGN DEVELOPMENT" {...a11yProps(0)} />
              <Tab
                label="VALUE ENGINEERING AND COST ESTIMATES"
                {...a11yProps(1)}
              />
              <Tab label="BIDDING AND CONSTRUCTION" {...a11yProps(2)} />
            </Tabs>
          </AppBar>
        </Box>
        <TabPanel value={value} index={0}>
          {/* <Box sx={{ width: { xs: 300, md: 500 } }}> */}
          <img
            src="https://img.freepik.com/free-vector/flat-engineering-construction-illustrated_23-2148892788.jpg?w=2000"
            alt="construction"
            style={{ width: "50vw" }}
          />
          {/* </Box>{" "} */}
        </TabPanel>
        <TabPanel value={value} index={1}>
          {/* <Box sx={{ width: 500, mx: "auto" }}> */}
          <img
            src="https://img.freepik.com/free-vector/construction-concept-illustration_114360-6373.jpg?w=740&t=st=1685258991~exp=1685259591~hmac=ccffdda83407db55aa8d84f58f2c99711578588ffbe26b6a4cfcdd51fff4b1c6"
            alt="construction"
            style={{ width: "50vw" }}
          />
          {/* </Box>{" "} */}
        </TabPanel>
        <TabPanel value={value} index={2}>
          {/* <Box sx={{ width: 500, mx: "auto" }}> */}
          <img
            src="https://img.freepik.com/free-vector/construction-concept-with-retro-style-concept-workers-machines-building-house-cartoon_1284-8104.jpg?size=626&ext=jpg&ga=GA1.1.2136575466.1684650788&semt=ais"
            alt="construction"
            style={{ width: "50vw" }}
          />
          {/* </Box>{" "} */}
        </TabPanel>
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
        At DMH Construction & Engineering, we understand the importance of
        quality construction, timely completion, and budgetary constraints.
        That's why we have a team of experienced professionals who are committed
        to delivering exceptional services to clients. Our team includes
        engineers, architects, project managers, construction supervisors, and
        other support staff who work together to ensure that your project is
        completed to your satisfaction.
      </Typography>
      <Typography
        variant="h4"
        sx={{ ml: "auto", my: 3, textAlign: "center", fontWeight: "bold" }}
      >
        Our Projects
      </Typography>
      <Box
        sx={{
          width: { xs: "90vw", md: "70vw" },
          mx: "auto",
          // p: 5,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <SimpleImageSlider
          width={"inherit"}
          height={450}
          images={sliderImages}
          showBullets={true}
          showNavs={true}
          autoPlay={true}
          // onStartSlide={(index, length) => {
          //   setImageNum(index);
          // }}
          autoPlayDelay={3}
        />
      </Box>
      <Typography
        variant="body1"
        sx={{
          textAlign: "center",
          color: "#31344B",
          pt: 5,
          px: { xs: 2, md: 20 },
          pb: { xs: 2, md: 2 },
        }}
      >
        We use the latest technologies and equipment to ensure that our
        construction projects are completed on time and within budget. We also
        place a high value on safety and environmental sustainability. Our
        construction projects adhere to strict safety standards, and we follow
        eco-friendly practices to minimize our impact on the environment. We
        have completed various construction projects in different sectors,
        including residential, commercial, and industrial. Some of our notable
        projects include the construction of shopping malls, hospitals, hotels,
        and residential buildings. We work closely with our clients to ensure
        that their projects are completed to their satisfaction.
      </Typography>
      {/* <Typography
        variant="body1"
        sx={{
          textAlign: "center",
          color: "#31344B",
          px: { xs: 2, md: 20 },
          pb: { xs: 2, md: 2 },
        }}
      >
        We have completed various construction projects in different sectors,
        including residential, commercial, and industrial. Some of our notable
        projects include the construction of shopping malls, hospitals, hotels,
        and residential buildings. We work closely with our clients to ensure
        that their projects are completed to their satisfaction.
      </Typography> */}
      <Typography
        variant="h4"
        sx={{ ml: "auto", my: 3, textAlign: "center", fontWeight: "bold" }}
      >
        Why Us
      </Typography>
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
        {whyUsConstruction.map((item, i) => (
          <AboutUsCard
            head={item.head}
            icon={item.icon}
            key={i}
            body={item.body}
            boxShadow="6px 6px 12px #b8b9be,-6px -6px 12px #f3f0f1"
          />
        ))}
      </Box>
      {/* <Typography variant="h4" sx={{ my: 2, textAlign: "center" }}>
        Contact Us:
      </Typography>
      Contact us today to discuss your construction needs, and let us help you
      turn your vision into a reality.
      <br /> <br /> */}
    </Box>
  );
};

export default Construction;
const sliderImages = [
  {
    url: "https://images.squarespace-cdn.com/content/v1/5d486b45c39bd4000167ac0c/1643322193541-DGLOUOAGECLI1RAOL4MD/LEIGHFAV.jpeg?format=1500w",
  },
  {
    url: "https://images.squarespace-cdn.com/content/v1/5d486b45c39bd4000167ac0c/1644134566039-LZJ8RKUP2DJX1RRTSJUH/newcypress.jpg?format=1500w",
  },
  {
    url: "https://images.squarespace-cdn.com/content/v1/5d486b45c39bd4000167ac0c/1644132678375-3X1J387TWUTW1ZKID1MV/mosaic.jpeg?format=1500w",
  },
  {
    url: "https://images.squarespace-cdn.com/content/v1/5d486b45c39bd4000167ac0c/1643322194418-HF0QSKDB209A76VEX2X5/PIPPINFAV.jpg?format=1500w",
  },
  {
    url: "https://images.squarespace-cdn.com/content/v1/5d486b45c39bd4000167ac0c/1565130411823-W8TDKVRHR16WTJRFS4EO/seresenior.jpg?format=1500w",
  },
];
