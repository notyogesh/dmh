import React from "react";
// import Paper from "@mui/material/Paper";
// import Container from "@mui/material/Container";
// import { styled } from "@mui/material/styles";
// import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
// }));
const AboutUs = () => {
  return (
    <Box
      sx={{
        // p: 3,
        backgroundColor: (theme) => theme.palette.background.default,
      }}
    >
      <Card
        elevation={3}
        sx={{
          textAlign: "left",
          px: { xs: 2, md: 20 },
          py: 2,
          minHeight: "100dvh",
        }}
      >
        <Typography variant="h2" sx={{ ml: "auto" }}>
          SRM{" "}
        </Typography>
        Our aim is to be our clients & prospectiv clients preferred parter for
        the installation of aircon and Mechanical ventilation equipment ,
        forging relationships for the benefit of each other, the wider community
        & the environment . like the sound of this ? Read on....
        <br />
        <br />
        Maintaining ACMV equipment isn't just about oil cans & cleaning
        chemicals - it's about trust , about knowledge, about understanding each
        other, about honesty, about reliability and doing what we say we are
        going to do. <br />
        At SRM we design , install , maintain and service air conditioning
        systems, industrial VRV system, mechanical ventilation system. We
        endeavour to support the role of the building facilities manager by
        providing a reliable & Cost effective ACMV maintenance service. We
        specialise in this and only this, we are not a general facilities
        management provider.
        <br /> <br />
        Regular maintenance is proven to improve the operation & efficiency of
        the equipment, is a legal requirment ( for certain equipment ) and helps
        prevent operational issues, saving you both time & money. <br />
        We look forward to discussing your maintenances requirements & treating
        you to the SRM Experience !
        <Typography variant="h4" sx={{ my: 2 }}>
          SRM Mission Statement{" "}
        </Typography>
        To be our clients preferred any aircon system maintenance parter that
        through our knowledge, passion and exemplary service we improve the
        comport of our clients and facilitate their operations by delivering an
        enduring & reliable solution.
        <br /> <br />
        To provide a progressive, rewarding and cohesive atmosphere for
        employees that fosters respect of the trust customers, colleagues and
        suppliers place in us. <br />
        Conduct all out business with respect for the community and environment.{" "}
      </Card>
    </Box>
  );
};

export default AboutUs;
