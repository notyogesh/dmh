import React from "react";
import { Box, Button } from "@mui/material";
import Typography from "@mui/material/Typography";
// import HeatPumpIcon from '@mui/icons-material/HeatPump';
// import smoke from "../images/smoke.png";
import smoke from "../images/web.png";

import clean from "../images/clean.png";
import install from "../images/install.png";
import kit from "../images/kit.png";
import AddCircleIcon from "@mui/icons-material/AddCircle"; // import curvyback from "../images/wave2.svg";
import KitchenCard from "../utils/KitchenCard";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import AcUnitIcon from "@mui/icons-material/AcUnit";
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
        // color: "#E6E7EE",
        // backgroundColor: "#E6E7EE",
        backgroundColor: "#FFF5FF",
        fontFamily: "Nunito Sans",
        pb: 5,
      }}
    >
      <Box
        sx={{
          pt: "20vh",
          display: "flex",
          flexDirection: "row",
          // mb: 10,
          // width: "100%",
          position: "relative",
          backgroundColor: "#f3f0f1",
          color: "#31344B",

          // background: `url(${smoke})  `,
          // backgroundOrigin: " border-box",
          // backgroundSize: "cover",
          // backgroundSize: "100% 100%",
          minHeight: "80vh",
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
        <svg
          className="wave"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#FFF5FF"
            // fill-opacity="1"
            d="M0,64L80,90.7C160,117,320,171,480,208C640,245,800,267,960,245.3C1120,224,1280,160,1360,128L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
        <img
          src={smoke}
          alt="smoke"
          // willReadFrequently
          style={{
            width: "100%",
            // height: "300px",
            // marginTop: "-20px",
            // paddingRight: "10%",
            // flex: 1,
            // aspectRatio: 1 / 1,
            // height: "80vh",
            // zIndex: 1,
            opacity: ".2",
            position: "absolute",
            top: "0",
            left: "0",
            // right: "50%",
          }}
        />
      </Box>
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
          color: "#4F4350",
        }}
      >
        We are your go-to experts for professional and reliable kitchen exhaust
        ducting installation services. Our team of skilled technicians has years
        of experience in the industry and can provide top-notch solutions for
        all your kitchen ventilation needs. Whether you're a homeowner or a
        business owner, we have the expertise to deliver exceptional results.
      </Typography>
      <KitchenCard
        head="It's important?"
        body="Proper kitchen exhaust ducting installation is critical for the efficient and safe operation of your kitchen ventilation system. A well-designed and properly installed ducting system helps to remove grease, smoke, heat, and odors from your kitchen, creating a healthy and comfortable environment for your family, employees, or customers. It also helps to comply with local building codes and regulations, ensuring the safety and well-being of your property and those inside"
        img="https://ouch-cdn2.icons8.com/ei-wRarjKvOFs-LObA0jx2y0OKJ_jryu1vY-NUSF17A/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMzI5/L2RkMWFlNzFhLWMy/MGQtNGZkOC1iOWI1/LWNkNDc4NTMzMDkz/MS5zdmc.png"
      ></KitchenCard>
      <Box
        sx={{
          // background: `url(${smoke})   `,
          // opacity: ".5",
          position: "relative",
        }}
      >
        {/* <img
          src={smoke}
          alt="smoke"
          // ref={imageRef}
          // willReadFrequently
          style={{
            width: "100%",
            aspectRatio: 1 / 1,
            opacity: ".2",
            position: "fixed",
            top: "0",
            backgroundSize: "cover",
            left: "0",
            // transform: "rotate(270deg)",
            // transition: "transform 0.2s ease-out",
            // right: "50%",
          }}
        /> */}

        <Box
          sx={{
            backgroundColor: "#31344B",
            color: "#FFF5FF",
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
            specific needs.
          </Typography>
          Our services include:
        </Box>
        {services.map((item, i) => (
          <KitchenCard
            head={item.head}
            body={item.body}
            img={item.img}
            key={i}
            i={i}
          />
        ))}
        <Box
          sx={{
            backgroundColor: "#31344B",
            color: "#FFF5FF",
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
              backgroundColor: "#31344B",
              color: "#FFF5FF",
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
            backgroundColor: "#F3F0F1",
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
              <Accordion square>
                <AccordionSummary
                  expandIcon={<AddCircleIcon />}
                  aria-controls="panel1a-content"
                  id={item.head + i}
                >
                  <Typography
                    variant="h5"
                    sx={{
                      pb: 2,
                      px: 5,
                      pt: 2,
                      // mx: "auto",

                      fontWeight: 500,
                    }}
                  >
                    {" "}
                    <AcUnitIcon /> {item.head}
                  </Typography>
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
  },
  {
    head: "Customized Solutions:",
    body: "We understand that every kitchen is unique, and we tailor our services to your specific requirements. Our team will work closely with you to understand your needs and design a ducting system that fits seamlessly into your kitchen layout and ventilation needs.",
  },
  {
    head: "Quality Materials:",
    body: "We use only high-quality materials that are durable, fire-resistant, and compliant with local building codes. Our ductwork is fabricated to precise specifications and installed with meticulous attention to detail, ensuring longevity and performance.",
  },
  {
    head: "Professionalism:",
    body: "We take pride in our professionalism and commitment to excellent customer service. Our team is reliable, punctual, and respectful of your property. We strive to exceed your expectations with our prompt, efficient, and courteous service.",
  },
  {
    head: "Compliance",
    body: "We understand the importance of complying with local building codes and regulations. Our team is knowledgeable about the latest codes and standards related to kitchen exhaust ducting installation, and we ensure that our work meets all relevant requirements.",
  },
];
const services = [
  {
    head: " Kitchen Exhaust Duct Design:",
    body: "Our team of experts will assess your kitchen layout and design a customized exhaust ducting system that meets local building codes and industry standards. We consider factors such as the size of your kitchen, the type of cooking equipment you use, and the layout of your building to create an efficient and effective ducting system.",
    img: install,
    to: "/kitchen-exhaust-system",
  },
  {
    head: "Duct Fabrication and Installation:",
    body: "We use high-quality materials and advanced fabrication techniques to create custom ductwork that fits seamlessly into your kitchen. Our skilled technicians will install the ducting system with precision, ensuring proper alignment, sealing, and insulation for optimal performance.",
    img: "https://ouch-cdn2.icons8.com/H1oT_UUstmkVWpR997EgIfgxb4nol9QH9eBHFLnkHBw/rs:fit:256:121/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvNjUy/L2EyMWM2ZmY1LTdi/ZjEtNDBmMi1iZmU1/LTkzMGUxOTFlMDc2/MC5zdmc.png",
    to: "/glass-aluminum-work",
  },
  {
    head: "Exhaust Fan Installation:",
    body: "We can recommend, supply, and install high-quality exhaust fans that are suitable for your kitchen's needs. Properly sized and installed exhaust fans are crucial for effective ventilation, and our team will ensure that your fans are correctly positioned and connected to the ducting system for maximum efficiency. ",
    img: kit,
    to: "/scaffolding-work",
  },
  {
    head: "Duct Cleaning and Maintenance:",
    body: "We offer comprehensive construction and building services for commercial and residential properties. From concept to completion,  including design, planning, and construction management. We  ensure that each project is completed to the highest standards of quality and safety. Whether you're looking to build a new property from scratch or renovate an existing one.",
    img: clean,
    to: "/construction",
  },
];
