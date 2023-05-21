import React from "react";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import gear from "../images/gear.png";

const Construction = () => {
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
      pb: 5,
    }}
    > <Box
    sx={{
      pt: { xs: "25vh", md: "20vh" },
      pb: "20vh",
      display: "flex",
      flexDirection: "column",
      mb: 10,
      // background: `url(${tile}) no-repeat `,
      // background-image: linear-gradient(to bottom, rgba(255,0,0,0), rgba(255,0,0,1)),
      backgroundImage: `linear-gradient(to bottom,  rgb(243,240,241) , transparent 50%), url(${gear})`,
      // backgroundOrigin: " border-box",
      backgroundSize: "cover",
      // backgroundOrigin: "right",
      // backgroundSize: "100% 100%",
      minHeight: "60vh",
      // backgroundPositionY: "bottom",
      // backdropFilter: "blur(50px)",
      // backdropFilter:blur(8px),
      transform: "scaleX(-1)",
      // filter: "blur(8px)",
    }}
  >
    {" "}
    <Typography
      variant="h3"
      sx={{
        textAlign: { xs: "center", md: "left" },
        fontWeight: 600,
        // pl: { xs: 1, md: 25 },
        pl: { xs: 0, md: 5 },
        transform: "scaleX(-1)",
      }}
    >
      DMH
    </Typography>
    <Typography
      variant="h4"
      sx={{
        textAlign: { xs: "center", md: "left" },
        fontWeight: 500,
        pl: { xs: 0, md: 5 },
        fontSize: { xs: 30, sm: 35, md: 40 },
        transform: "scaleX(-1)",
        // backdropFilter: "blur(20px)",
      }}
    >
      Construction
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
     
    </Typography>
  </Box>
      
      Welcome to DMH Construction & Engineering Pvt Ltd, your trusted partner
      for all your construction and engineering needs. We are a full-service
      construction company that specializes in various areas of construction,
      including civil engineering, structural engineering, architectural design,
      and project management.
      <br />
      <br />
      At DMH Construction & Engineering, we understand the importance of quality
      construction, timely completion, and budgetary constraints. That's why we
      have a team of experienced professionals who are committed to delivering
      exceptional services to clients. Our team includes engineers, architects,
      project managers, construction supervisors, and other support staff who
      work together to ensure that your project is completed to your
      satisfaction.
      <br />
      We use the latest technologies and equipment to ensure that our
      construction projects are completed on time and within budget. We also
      place a high value on safety and environmental sustainability. Our
      construction projects adhere to strict safety standards, and we follow
      eco-friendly practices to minimize our impact on the environment. We have
      completed various construction projects in different sectors, including
      residential, commercial, and industrial. Some of our notable projects
      include the construction of shopping malls, hospitals, hotels, and
      residential buildings. We work closely with our clients to ensure that
      their projects are completed to their satisfaction.
      <br /> <br />
      We have completed various construction projects in different sectors,
      including residential, commercial, and industrial. Some of our notable
      projects include the construction of shopping malls, hospitals, hotels,
      and residential buildings. We work closely with our clients to ensure that
      their projects are completed to their satisfaction.
      <br /> <br />
      <Typography variant="h4" sx={{ my: 2, textAlign: "center" }}>
        Contact Us:
      </Typography>
      Contact us today to discuss your construction needs, and let us help you
      turn your vision into a reality.
      <br /> <br />
    </Box>
  );
};

export default Construction;
