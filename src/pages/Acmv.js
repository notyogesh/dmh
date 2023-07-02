import React from "react";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
// import AcmvCard from "../utils/AcmvCard";
// import VisibilityIcon from "@mui/icons-material/Visibility";
import Snowfall from "react-snowfall";
// import acinstall from "../images/acinstall.png";
// import repairmain from "../images/repairmain.png";
// import qualityac from "../images/qualityac.png";
import KitchenCard from "../utils/KitchenCard";

// import lowprice from "../images/lowprice.png";
// import warranty from "../images/warranty.png";
// import cussolution from "../images/cussolution.png";
// import customersupport from "../images/customersupport.png";
// import deer from "../images/onedeer1.png";
import snow from "../images/snow.png";
import Seo from "../main/Seo";
// import Nav from "../main/navbar/NavBar"
const Acmv = () => {
  const acmvCardContent = [
    {
      head: "Air-Con Installation",
      body: " Our certified technicians are trained to install all types and brands of air conditioning systems. From split systems to ducted systems, we have the expertise to handle any installation job with precision and care. We follow industry standards and best practices to ensure that your air conditioning system is installed correctly for optimal performance and energy efficiency.",

      img: "https://drive.google.com/uc?export=download&id=1Sa_30H_i27TmZNk0LTSJfflkiVB5to74",
    },
    {
      head: "Repair & Maintenance",
      body: "  Regular maintenance is proven to improve the operation & efficiency of the equipment, is a legal requirment ( for certain equipment ) and helps prevent operational issues, saving you both time & money.  We look forward to discussing your maintenances requirements & treating you to the DMH Experience !",

      img: "https://drive.google.com/uc?export=download&id=1oZvLD3CK4WO-H10PfUjFIqD3F0wwh16-",
    },

    {
      head: " Quality Products:",
      body: " We only work with reputable brands and suppliers to ensure that you get the best quality air conditioning systems for your installation. Our products are energy-efficient, environmentally friendly, and designed to provide reliable cooling for years to come. We can also provide guidance on selecting the right type and size of air conditioning system that suits your property and usage patterns.",

      img: "https://drive.google.com/uc?export=download&id=1ru6zxQJiQlOablf680SqIw1YD-uQZ-pB",
    },
    {
      head: "Customized Solutions:",
      body: "  We understand that every property is unique, and cooling requirements may vary. That's why we offer customized solutions tailored to your specific needs. Our team will assess your property, take into consideration factors such as room size, layout, insulation, and your budget, and recommend the best aircon installation solution that fits your requirements.",

      img: "https://drive.google.com/uc?export=download&id=1maCe-_Yx6fuyQFRC4TsOpeyeq41u7iFP",
    },
    {
      head: "Pricing",
      body: " We believe in providing transparent and competitive pricing for our aircon installation services. Our team will provide you with a detailed quote that includes all costs upfront, so you know exactly what to expect. We strive to offer affordable options without compromising on quality or service.",

      img: "https://drive.google.com/uc?export=download&id=1avdLzelIo7B44SeKVZLp9x3zPRD4BVMp",
    },
    // {
    //   head: "  Timely Installation:",
    //   body: "  We understand that air conditioning is essential for your comfort, especially in hot weather. That's why we prioritize timely installation to minimize downtime and ensure that you can enjoy cool and comfortable indoor spaces as soon as possible. Our team will work efficiently and professionally to complete the installation within the agreed-upon timeframe. ",

    //   img: maintenance,
    // },
    {
      head: " Excellent Customer Service:",
      body: "   We are committed to providing exceptional customer service throughout the aircon installation process. Our friendly and knowledgeable team is available to answer all your questions, provide expert advice, and address any concerns you may have. We believe in building long-term relationships with our customers based on trust, reliability, and satisfaction.",

      img: "https://drive.google.com/uc?export=download&id=1ovsHgt-KmPJxk37KZ0OYn6FWsrq-3TZr",
    },
    {
      head: " Warranty",
      body: "  We stand by the quality of our work and the products we install. That's why we offer warranties on our installation services and the air conditioning systems we install. In case of any issues or concerns, our team is readily available to provide prompt and reliable support to ensure your complete satisfaction. If you're looking for a reliable aircon installation service, you've come to the right place. Contact us today to schedule an appointment or request a quote, and let us help you achieve a comfortable and cool indoor environment for your home or business. ",

      img: "https://drive.google.com/uc?export=download&id=1Run9v4ky8q3rM_JkFx2Ah82ULQVXVbxo",
    },
  ];
  return (
    <Box
      sx={{
        // backgroundColor: "#f3f0f1",
        // textAlign: "left",
        // color: "#8E8E8E",
        color: "#31344B",
        // px: { xs: 2, md: 20 },
        // py: 2,
        // minHeight: "100vh",
        //
      }}
    >
      <Seo
        title="AirConditioning & Mechanical Vendilation System"
        description=" DMH AirConditioning & Mechanical Vendilation System , Heating , Vendilating & Air Conditioning Services"
        name="D M H"
        type=" AirConditioning & Mechanical Vendilation System service  page "
      />
      <Box
        sx={{
          pt: "20vh",
          pb: "35vh",
          display: "flex",
          flexDirection: "column",
          // color: "#8E8E8E",
          // mb: 10,
          // minHeight: { xs: "90vh", md: "" },
          // backgroundImage: `linear-gradient(to bottom, #f3f0f1 0%, #76777C 100%)`,
          backgroundImage: `linear-gradient(to bottom,#f3f0f1 0%, #76777C 95%,#f3f0f1 100%)`,
          // backgroundImage: `radial-gradient(#f3f0f1, #76777C)`,
          // fontFamily: "Nunito Sans",
          // backgroundImage: `url(${deer})`,
          // backgroundRepeat: "no-repeat",
          // height: "100%",
          // backgroundSize: "cover",
          // background: `url(${deer}) no-repeat center center fixed`,
        }}
      >
        {/* <Nav/> */}
        <Snowfall />
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            fontWeight: 700,
            letterSpacing: "5px",
            textShadow: "2px 2px 5px #fff",
          }}
          // className="glow"
        >
          DMH
        </Typography>
        <Typography
          // variant="h4"
          variant="h4"
          component="h1"
          sx={{
            textAlign: "center",
            fontWeight: 500,
            textShadow: "1px 1px 5px #fff",
          }}
        >
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
            color: "#E6E6E6",
            textShadow: "1px 1px 5px #8E8E8E",
          }}
        >
          Heating, Ventilating & Air conditioning Services
        </Typography>
        {/* <img
          src={deer}
          alt="deer"
          style={{
            width: "170px",
            opacity: ".2",
            position: "absolute",
            right: "10vw",
            bottom: "10vh",
          }}
        /> */}
        <img
          src={snow}
          alt="snow"
          // willReadFrequently
          style={{
            width: "100%",
            height: "80vh",
            opacity: ".5",
            position: "absolute",
            right: "0",
            bottom: "0",
          }}
        />
      </Box>
      {/* <Divider /> */}
      {/* <Box
        sx={
          {
            // backgroundImage: `linear-gradient(to top, #f3f0f1 0%, #76777C 100%)`,
          }
        }
      > */}
      <Typography
        variant="h3"
        sx={{ pb: 2, pt: 10, color: "#31344B", fontWeight: 500 }}
      >
        AIR - CON
      </Typography>
      <Typography
        variant="h6"
        sx={{
          textAlign: "center",
          color: "#31344B",
          px: { xs: 2, md: 20 },
          pb: { xs: 2, md: 2 },
        }}
      >
        Welcome to our air conditioning installation website! We are your
        trusted experts in providing top-notch air conditioning installation
        services for residential and commercial properties. With our team of
        skilled technicians and years of experience in the industry, we
        guarantee reliable, efficient, and cost-effective solutions to meet all
        your cooling needs. Here's what you need to know about our aircon
        installation services:{" "}
      </Typography>
      {/* <Box
        sx={{
          // backgroundImage: `linear-gradient(to top, #f3f0f1 0%, #76777C 100%)`,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-evenly",
          p: 5,
          gap: 2,
          flexWrap: "wrap",
        }}
      > */}
      {acmvCardContent.map((item, i) => (
        <KitchenCard
          head={item.head}
          key={i}
          i={i}
          body={item.body}
          img={item.img}
          backgroundColor={"#F3F0F1"}
        />
      ))}{" "}
      {/* </Box> */}
    </Box>
  );
};

export default Acmv;
