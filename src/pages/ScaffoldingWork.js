import React from "react";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import paper from "../images/paper.png";

const ScaffoldingWork = () => {
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
    ><Box
    sx={{
      pt: { xs: "25vh", md: "20vh" },
      pb: "20vh",
      display: "flex",
      flexDirection: "column",
      mb: 10,
    
      backgroundImage: `linear-gradient(to bottom,  rgb(243,240,241) , transparent 50%), url(${paper})`,
          // backgroundImage: `url(${paper})`,

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
      sx={{
        textAlign: { xs: "center", md: "center" },
        fontWeight: 500,
        // pl: { xs: 0, md: 5 },
        fontSize: { xs: 30, sm: 35, md: 40 },
        // backdropFilter: "blur(20px)",
      }}
    >
 Scaffolding Work{" "}    </Typography>
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
      
      {"      "}At DMH, we are experts in providing top-quality scaffolding
      services for various construction, maintenance, and repair projects. With
      years of experience and a team of skilled professionals, we are committed
      to delivering safe and reliable scaffolding solutions to our clients.
      <br />
      <br />
      <Typography variant="h3" sx={{ ml: "auto", my: 3, textAlign: "center" }}>
        Our Services:
      </Typography>
      <Typography variant="h4" sx={{ my: 2 }}>
        Scaffolding Rental:
      </Typography>
      We offer a wide range of scaffolding options for rent, including standard
      scaffolding, mobile scaffolding, and suspended scaffolding. Our
      scaffolding is made from high-quality materials, designed to meet safety
      standards, and can be customized to suit your project's unique
      requirements.
      <br />
      <Typography variant="h4" sx={{ my: 2 }}>
        Scaffolding Erection and Dismantling:
      </Typography>
      Our trained and certified scaffolding erectors can efficiently set up and
      dismantle scaffolding structures, ensuring that they are installed safely
      and securely. We follow industry best practices and comply with all
      relevant regulations to ensure the safety of workers on site.
      <br /> <br />
      <Typography variant="h4" sx={{ my: 2 }}>
        Scaffolding Inspection and Maintenance:
      </Typography>
      We provide regular inspection and maintenance services for scaffolding
      structures to identify and address any potential safety hazards. Our team
      conducts thorough inspections and performs necessary repairs or
      replacements to keep the scaffolding in optimal condition throughout the
      project.
      <Typography variant="h4" sx={{ my: 2 }}>
        Design and Engineering:
      </Typography>
      We have experienced design and engineering professionals who can create
      customized scaffolding solutions tailored to your project's specific
      requirements. We use state-of-the-art tools and software to design safe
      and efficient scaffolding structures that meet all applicable regulations.
      <br /> <br />
      <Typography variant="h3" sx={{ ml: "auto", my: 3, textAlign: "center" }}>
        Why Choose Us:
      </Typography>
      <Typography variant="h4" sx={{ my: 2 }}>
        Safety First:
      </Typography>
      Safety is our top priority. We strictly adhere to industry safety
      standards and regulations, and our team of skilled professionals is
      trained in safe scaffolding practices. We conduct regular safety audits
      and inspections to ensure that our scaffolding structures are safe for
      workers to use.
      <br /> <br />
      <Typography variant="h4" sx={{ my: 2 }}>
        Quality Materials:
      </Typography>
      We use only high-quality materials in our scaffolding structures, ensuring
      durability and stability. Our materials are sourced from reputable
      suppliers and comply with relevant industry standards. <br /> <br />
      <Typography variant="h4" sx={{ my: 2 }}>
        Expertise and Experience:
      </Typography>
      Our team of skilled scaffolding professionals has extensive experience in
      the industry. We have successfully completed numerous scaffolding projects
      of varying sizes and complexities, and we bring that expertise to every
      job we undertake. <br /> <br />
      <Typography variant="h4" sx={{ my: 2 }}>
        Customization:
      </Typography>
      We understand that every project is unique, and we offer customized
      scaffolding solutions to meet your specific requirements. Our design and
      engineering team works closely with you to create scaffolding structures
      that are tailored to your project's needs, ensuring maximum efficiency and
      safety.
      <br /> <br />
      <Typography variant="h4" sx={{ my: 2 }}>
        Timely Delivery:
      </Typography>
      We understand the importance of meeting project deadlines, and we strive
      to deliver our scaffolding services on time and within budget. Our team
      works efficiently to ensure that your scaffolding is erected, used, and
      dismantled as per your project schedule. <br />
      <br />
      <Typography variant="h4" sx={{ my: 2, textAlign: "center" }}>
        Contact Us:
      </Typography>
      For reliable and professional scaffolding services, trust DMH. Contact us
      today to discuss your scaffolding needs and receive a competitive quote.
      Our team is available to answer any questions and provide expert guidance
      for your next construction project. Partner with us for safe and efficient
      scaffolding solutions!
    </Box>
  );
};

export default ScaffoldingWork;
