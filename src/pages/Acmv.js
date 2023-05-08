import React from "react";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import AcmvCard from "../utils/AcmvCard";
// import VisibilityIcon from "@mui/icons-material/Visibility";
import HeatPumpIcon from "@mui/icons-material/HeatPump";
import HvacIcon from "@mui/icons-material/Hvac";
import Snowfall from "react-snowfall";
import aircon from "../images/aircon.png";
const Acmv = () => {
  const acmvCardContent = [
    {
      head: "AIR PURIFICATION & AIR-CON INSTALLATION",
      body: "Professional air-conditioning installation in Singapore for home, office or vehicle use.",
      icon: <HeatPumpIcon fontSize="large" />,
      img: aircon,
    },
    {
      head: "AIR-CON SERVICING, REPAIR & MAINTENANCE",
      body: "Our quality AC maintenance keeps each of your air-con units in top condition for 100% peace of mind.",
      icon: <HvacIcon fontSize="large" />,
    },
  ];
  return (
    <Box
      sx={{
        // backgroundColor: "#f3f0f1",
        // textAlign: "left",
        color: "#31344B",
        // px: { xs: 2, md: 20 },
        // py: 2,
        // minHeight: "100vh",
        //
      }}
    >
      <Box
        sx={{
          pt: "20vh",
          pb: "35vh",
          display: "flex",
          flexDirection: "column",
          // mb: 10,
          minHeight: { xs: "90vh", md: "" },
          backgroundImage: `linear-gradient(to bottom, #f3f0f1 0%, #76777C 100%)`,
          // backgroundImage: `linear-gradient(to bottom,#f3f0f1 0%, #76777C 90%,#f3f0f1 100%)`,
          fontFamily: "Nunito Sans",
        }}
      >
        <Snowfall />
        <Typography variant="h2" sx={{ textAlign: "center", fontWeight: 600 }}>
          DMH
        </Typography>
        <Typography variant="h4" sx={{ textAlign: "center", fontWeight: 500 }}>
          AIR-CON SERVICES - SINGAPORE
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
            color: "#fff",
          }}
        >
          Heating, Ventilating & Air conditioning Services
        </Typography>
      </Box>
      {/* <Divider /> */}
      <Box
        sx={{
          backgroundImage: `linear-gradient(to top, #f3f0f1 0%, #76777C 100%)`,
        }}
      >
        <Box
          sx={{
            // backgroundImage: `linear-gradient(to top, #f3f0f1 0%, #76777C 100%)`,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            p: 5,
            gap: 5,
          }}
        >
          {acmvCardContent.map((item, i) => (
            <AcmvCard
              head={item.head}
              icon={item.icon}
              key={i}
              body={item.body}
              img={item.img}
            />
          ))}{" "}
        </Box>
      </Box>
      <Typography variant="h2" sx={{ ml: "auto", textAlign: "center" }}>
        AIRCON Installation{" "}
      </Typography>
      {"      "}Welcome to our air conditioning installation website! We are
      your trusted experts in providing top-notch air conditioning installation
      services for residential and commercial properties. With our team of
      skilled technicians and years of experience in the industry, we guarantee
      reliable, efficient, and cost-effective solutions to meet all your cooling
      needs. Here's what you need to know about our aircon installation
      services:
      <br />
      <br />
      <Typography variant="h4" sx={{ my: 2 }}>
        Professional Installation:
      </Typography>
      Our certified technicians are trained to install all types and brands of
      air conditioning systems. From split systems to ducted systems, we have
      the expertise to handle any installation job with precision and care. We
      follow industry standards and best practices to ensure that your air
      conditioning system is installed correctly for optimal performance and
      energy efficiency.
      <br />
      <Typography variant="h4" sx={{ my: 2 }}>
        Customized Solutions:
      </Typography>
      We understand that every property is unique, and cooling requirements may
      vary. That's why we offer customized solutions tailored to your specific
      needs. Our team will assess your property, take into consideration factors
      such as room size, layout, insulation, and your budget, and recommend the
      best aircon installation solution that fits your requirements.
      <br /> <br />
      <Typography variant="h4" sx={{ my: 2 }}>
        Maintenance:
      </Typography>
      Regular maintenance is proven to improve the operation & efficiency of the
      equipment, is a legal requirment ( for certain equipment ) and helps
      prevent operational issues, saving you both time & money. <br />
      We look forward to discussing your maintenances requirements & treating
      you to the DMH Experience !
      <Typography variant="h4" sx={{ my: 2 }}>
        Quality Products:
      </Typography>
      We only work with reputable brands and suppliers to ensure that you get
      the best quality air conditioning systems for your installation. Our
      products are energy-efficient, environmentally friendly, and designed to
      provide reliable cooling for years to come. We can also provide guidance
      on selecting the right type and size of air conditioning system that suits
      your property and usage patterns.
      <br /> <br />
      <Typography variant="h4" sx={{ my: 2 }}>
        Competitive Pricing:
      </Typography>
      We believe in providing transparent and competitive pricing for our aircon
      installation services. Our team will provide you with a detailed quote
      that includes all costs upfront, so you know exactly what to expect. We
      strive to offer affordable options without compromising on quality or
      service. <br /> <br />
      <Typography variant="h4" sx={{ my: 2 }}>
        Timely Installation:{" "}
      </Typography>
      We understand that air conditioning is essential for your comfort,
      especially in hot weather. That's why we prioritize timely installation to
      minimize downtime and ensure that you can enjoy cool and comfortable
      indoor spaces as soon as possible. Our team will work efficiently and
      professionally to complete the installation within the agreed-upon
      timeframe. <br /> <br />
      <Typography variant="h4" sx={{ my: 2 }}>
        Excellent Customer Service:
      </Typography>
      We are committed to providing exceptional customer service throughout the
      aircon installation process. Our friendly and knowledgeable team is
      available to answer all your questions, provide expert advice, and address
      any concerns you may have. We believe in building long-term relationships
      with our customers based on trust, reliability, and satisfaction. <br />{" "}
      <br />
      <Typography variant="h4" sx={{ my: 2 }}>
        Warranty and Support:
      </Typography>
      We stand by the quality of our work and the products we install. That's
      why we offer warranties on our installation services and the air
      conditioning systems we install. In case of any issues or concerns, our
      team is readily available to provide prompt and reliable support to ensure
      your complete satisfaction.
      <br /> <br /> <br />
      If you're looking for a reliable aircon installation service, you've come
      to the right place. Contact us today to schedule an appointment or request
      a quote, and let us help you achieve a comfortable and cool indoor
      environment for your home or business. <br />
    </Box>
  );
};

export default Acmv;
