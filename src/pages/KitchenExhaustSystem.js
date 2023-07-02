import React from "react";
import { Box, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
// import firesystem from "../images/firesystem.png";
import Stack from "@mui/material/Stack";
// import clean from "../images/clean.png";
// import install from "../images/install.png";
// import kit from "../images/kit.png";
// import cabinet from "../images/cabinet.png";
import AddCircleIcon from "@mui/icons-material/AddCircle"; // import curvyback from "../images/wave2.svg";
import KitchenCard from "../utils/KitchenCard";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import TuneIcon from "@mui/icons-material/Tune";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import BeenhereIcon from "@mui/icons-material/Beenhere";
// import AssuredWorkloadIcon from "@mui/icons-material/AssuredWorkload";
import Diversity2Icon from "@mui/icons-material/Diversity2";
import ExtensionIcon from "@mui/icons-material/Extension";
import Seo from "../main/Seo";
// import itsimportant from "../images/itsimportant.png";
const KitchenExhaustSystem = () => {
  // const imageRef = useRef(null);

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // function handleScroll() {
  //   const scrollPos = window.pageYOffset / 10;
  //   imageRef.current.style.transform = `rotate(${scrollPos}deg)`;
  // }

  return (
    <Box
      sx={{
        // backgroundColor: "#f3f0f1",
        // textAlign: "left",
        // px: { xs: 2, md: 20 },
        // py: 2,
        // minHeight: "100vh",
        // color: "#FFF4FB",
        color: "#31344B",
        backgroundColor: "#E6E7EE",
        // backgroundColor: "#BDA5AD",
        fontFamily: "Nunito Sans",
        pb: 5,
      }}
    >
      <Seo
        title="Kitchen Exhaust System | DMH"
        description="DMH Kitchen Exhaust System: Clean, Efficient, and Reliable Ventilation Solutions. Discover the power of DMH's advanced kitchen exhaust systems. Our specialized solutions effectively remove smoke, grease, odors, and airborne contaminants from commercial kitchens, ensuring a healthy and safe environment."
        name="D M H"
        type="Kitchen Exhaust System Page"
        url="https://dmhgroup.com.sg/kitchen-exhaust-system"
      />
      <Box
        sx={{
          pt: "20vh",
          display: "flex",
          flexDirection: "row",
          // mb: 10,
          // width: "100%",
          // position: "relative",
          backgroundColor: "#f3f0f1",
          color: "#31344B",

          // background: `url(${smoke})  `,
          // backgroundOrigin: " border-box",
          // backgroundSize: "cover",
          // backgroundSize: "100% 100%",
          // minHeight: "60vh",
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h3"
            sx={{
              textAlign: "center",
              fontWeight: 800,

              // flex: 1,
              // textShadow: "2px 1px 2px #000",
            }}
          >
            DMH
          </Typography>
          <Typography
            variant="h3"
            component="h1"
            sx={{
              textAlign: "center",
              fontWeight: 600,

              // flex: 1,
              // textShadow: "2px 1px 2px #000",
            }}
          >
            Kitchen Exhaust Ducting
          </Typography>
          <Button
            elevation={3}
            // startIcon={<ContactPageIcon />}
            sx={{
              color: "#f3f0f1",
              my: 5,
              backgroundColor: "#44476a",
              textTransform: "capitalize",
              mx: "auto",
              boxShadow: "3px 3px 6px #b8b9be, -3px -3px 6px #fff",
              // border: "1px solid #d1d9e6",
              "&:hover": {
                color: "#f3f0f1",

                backgroundColor: "#75779D",
              },
            }}
          >
            Breathe easy with Us !
          </Button>
        </Box>
      </Box>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#F3F0F1"
          fillOpacity="1"
          d="M0,32L34.3,42.7C68.6,53,137,75,206,122.7C274.3,171,343,245,411,245.3C480,245,549,171,617,144C685.7,117,754,139,823,170.7C891.4,203,960,245,1029,256C1097.1,267,1166,245,1234,202.7C1302.9,160,1371,96,1406,64L1440,32L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
        ></path>
      </svg>

      <Typography
        variant="h6"
        sx={{
          textAlign: "center",
          // px: 10,
          pt: 5,
          pb: 3,
          fontWeight: 600,
          px: { xs: 2, md: 20 },
          // width: "350px",
          zIndex: 2,
          // backgroundColor: "#31344B",
          // fontFamily: "Nunito Sans",
          //
          // color: "#4F4350",
        }}
      >
        We are your go-to experts for professional and reliable kitchen exhaust
        ducting installation services. Our team of skilled technicians has years
        of experience in the industry and can provide top-notch solutions for
        all your kitchen ventilation needs. Whether you're a homeowner or a
        business owner, we have the expertise to deliver exceptional results.
      </Typography>
      {/* <CssBaseline /> */}
      <KitchenCard
        head="It's important?"
        body="Proper kitchen exhaust ducting installation is critical for the efficient and safe operation of your kitchen ventilation system. A well-designed and properly installed ducting system helps to remove grease, smoke, heat, and odors from your kitchen, creating a healthy and comfortable environment for your family, employees, or customers. It also helps to comply with local building codes and regulations, ensuring the safety and well-being of your property and those inside"
        img="https://drive.google.com/uc?export=download&id=1J1wPlplQDWHmgyMkUGmRTz0pymExCZyH"
      ></KitchenCard>
      <Box
      // sx={{
      //   // background: `url(${smoke})   `,
      //   // opacity: ".5",
      //   position: "relative",
      // }}
      >
        <Box
          sx={{
            // backgroundColor: "#31344B",
            // color: "#FFF5FF",
            pb: 3,
            pt: 1,
            position: "relative",
            // background: `url(${smoke}) no-repeat right center `,
          }}
        >
          <Typography
            variant="h4"
            sx={{ ml: "auto", my: 3, textAlign: "center", fontWeight: 600 }}
          >
            Our Services
          </Typography>
          <Typography variant="subtitle1" sx={{ px: { xs: 2, md: 30 } }}>
            As a leading provider of kitchen exhaust ducting installation
            services, we offer a wide range of solutions tailored to your
            specific needs. Our services include,
          </Typography>
        </Box>
        {services.map((item, i) => (
          <KitchenCard
            head={item.head}
            body={item.body}
            img={item.img}
            key={i}
            i={i}
            backgroundColor={"#E6E7EE"}
          />
        ))}
        <Box
          sx={{
            // backgroundColor: "#31344B",
            // color: "#FFF5FF",
            pb: 3,
            pt: 3,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              // my: 2,
              textAlign: "center",
              fontWeight: 600,

              pb: 2,
              // pt: 3,
            }}
          >
            Why Choose Us?
          </Typography>
          When it comes to kitchen exhaust ducting installation, you can trust
          us for several reasons:{" "}
        </Box>
        <Box
          sx={{
            // boxShadow: "6px 6px 12px #b8b9be,-6px -6px 12px #fff",
            // border: "1px solid #d1d9e6",
            // pt: 5,
            // pb: 2,
            mt: 8,
            // backgroundColor: red,
            mx: { xs: 2, md: 20 },
            borderRadius: "9px",
          }}
        >
          {whyUs.map((item, i) => (
            <Box
              key={i}
              sx={{
                textAlign: "left",
                color: "#4F4350",

                // background: `url(${smoke}) no-repeat right center `,
              }}
            >
              <Accordion square sx={{ bgcolor: "#CBC9D5" }}>
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
              {/* <Divider className={i === whyUs.length - 1 ? "divider" : ""} /> */}
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default KitchenExhaustSystem;
const whyUs = [
  {
    head: "Expertise:",
    body: "Our team of technicians has extensive experience in the field and stays up-to-date with the latest industry trends and regulations. We have the knowledge and skills to design and install ducting systems that meet the highest standards of quality and safety.",
    icon: <TuneIcon />,
  },
  {
    head: "Customized Solutions:",
    body: "We understand that every kitchen is unique, and we tailor our services to your specific requirements. Our team will work closely with you to understand your needs and design a ducting system that fits seamlessly into your kitchen layout and ventilation needs.",

    icon: <ExtensionIcon />,
  },
  {
    head: "Quality Materials:",
    body: "We use only high-quality materials that are durable, fire-resistant, and compliant with local building codes. Our ductwork is fabricated to precise specifications and installed with meticulous attention to detail, ensuring longevity and performance.",
    icon: <BeenhereIcon />,
  },
  {
    head: "Professionalism:",
    body: "We take pride in our professionalism and commitment to excellent customer service. Our team is reliable, punctual, and respectful of your property. We strive to exceed your expectations with our prompt, efficient, and courteous service.",
    icon: <DashboardCustomizeIcon />,
  },
  {
    head: "Compliance",
    body: "We understand the importance of complying with local building codes and regulations. Our team is knowledgeable about the latest codes and standards related to kitchen exhaust ducting installation, and we ensure that our work meets all relevant requirements.",
    icon: <Diversity2Icon />,
  },
];
const services = [
  {
    head: " Kitchen Exhaust Duct Design:",
    body: "Our team of experts will assess your kitchen layout and design a customized exhaust ducting system that meets local building codes and industry standards. We consider factors such as the size of your kitchen, the type of cooking equipment you use, and the layout of your building to create an efficient and effective ducting system.",
    img: "https://drive.google.com/uc?export=download&id=13IJfcQxLkYxDAYjECN46xyuNgI0hCId7",
  },
  {
    head: "Duct Fabrication and Installation:",
    body: "We use high-quality materials and advanced fabrication techniques to create custom ductwork that fits seamlessly into your kitchen. Our skilled technicians will install the ducting system with precision, ensuring proper alignment, sealing, and insulation for optimal performance.",
    img: "https://ouch-cdn2.icons8.com/H1oT_UUstmkVWpR997EgIfgxb4nol9QH9eBHFLnkHBw/rs:fit:256:121/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNjUy/L2EyMWM2ZmY1LTdi/ZjEtNDBmMi1iZmU1/LTkzMGUxOTFlMDc2/MC5zdmc.png",
  },
  {
    head: "Fresh Air System",
    body: "We can recommend, supply, and install high-quality exhaust fans that are suitable for your kitchen's needs. Properly sized and installed exhaust fans are crucial for effective ventilation, and our team will ensure that your fans are correctly positioned and connected to the ducting system for maximum efficiency. ",
    img: "https://drive.google.com/uc?export=download&id=1VexMsLpyWWZ13y87RmJp5e5lB--ZR59Z",
  },
  {
    head: "Electrostatic Air Cleaner",
    body: "Our electrostatic air cleaner installation offers cleaner and healthier air by effectively capturing and removing airborne particles, allergens, and pollutants. we ensuring your specific needs make  optimal placement and integration with your existing system",
    img: "https://drive.google.com/uc?export=download&id=1AGQ4Y5VTMPrSKd5GwhbuL-N8BxHxuNZ6",
  },
  {
    head: "Fire suppression system for Kitchen",
    body: "Our customizable fire suppression solutions are designed and installed by certified professionals, guaranteeing compliance with regulations and tailored protection for your specific needs.With automatic activation and a specialized suppression agent, our system rapidly extinguishes fires, minimizing damage and protecting lives and property. Integrated alarms and shutdown capabilities enhance safety by alerting occupants and shutting down equipment, preventing fire spread and re-ignition",
    img: "https://drive.google.com/uc?export=download&id=1fpm42Y0-eaCh4ByfbBIEmAMwIcsqhcQK",
  },
  {
    head: "Box Cabinet installation",
    body: "With our box/cabinet centrifugal fan installation, you can expect optimal airflow management and improved air quality, providing a comfortable and safe environment. Our experts will customize the installation to fit your specific requirements, ensuring seamless integration with existing systems and maximizing the fan's performance.",
    img: "https://drive.google.com/uc?export=download&id=18HoNWAphn-I6fNGdCprERKm793IBbsxb",
  },
  {
    head: "Duct Cleaning and Maintenance:",
    body: "We offer comprehensive construction and building services for commercial and residential properties. From concept to completion,  including design, planning, and construction management. We  ensure that each project is completed to the highest standards of quality and safety. Whether you're looking to build a new property from scratch or renovate an existing one.",
    img: "https://drive.google.com/uc?export=download&id=1dLIAa-V0B_Vwd3umWxIuFzXVds6zTGp6",
  },
];
