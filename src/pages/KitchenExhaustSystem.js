import React from "react";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
// import HeatPumpIcon from '@mui/icons-material/HeatPump';
import clean from "../images/clean.png";
import install from "../images/install.png";

// import curvyback from "../images/wave2.svg";
import KitchenCard from "../utils/KitchenCard";

const KitchenExhaustSystem = () => {
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
      img: "https://ouch-cdn2.icons8.com/XCl-VFKIwIRLBfMtw1hQXYsZK_djoHYdJCUWcopps_A/rs:fit:256:181/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMzcz/LzM2YWFlMTNkLWJi/MjUtNDc2Zi04ODY4/LTk5ZjZmNmFlYjhi/NS5zdmc.png",
      to: "/scaffolding-work",
    },
    {
      head: "Duct Cleaning and Maintenance:",
      body: "We offer comprehensive construction and building services for commercial and residential properties. From concept to completion,  including design, planning, and construction management. We  ensure that each project is completed to the highest standards of quality and safety. Whether you're looking to build a new property from scratch or renovate an existing one.",
      img: clean,
      to: "/construction",
    },
  ];
  return (
    <Box
      sx={{
        // backgroundColor: "#f3f0f1",
        // textAlign: "left",
        // px: { xs: 2, md: 20 },
        // py: 2,
        // minHeight: "100vh",
        color: "#31344B",
        // backgroundColor: "#E6E7EE",
        backgroundColor: "#FFF5FF",
        fontFamily: "Nunito Sans",
      }}
    >
      <Box
        sx={{
          pt: "20vh",
          display: "flex",
          flexDirection: "column",
          // mb: 10,
          // width: "100%",
          position: "relative",
          backgroundColor: "#F3F0F1",
          // background: `url(${curvyback}) no-repeat  `,
          // backgroundOrigin: " border-box",
          // backgroundSize: "cover",
          // backgroundSize: "100% 100%",
          minHeight: "90vh",
        }}
      >
        <Typography variant="h3" sx={{ textAlign: "center", fontWeight: 600 }}>
          Kitchen Exhaust Duct
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
            zIndex: 2,
          }}
        >
          Welcome to our kitchen exhaust ducting installation website! We are
          your go-to experts for professional and reliable kitchen exhaust
          ducting installation services. Our team of skilled technicians has
          years of experience in the industry and can provide top-notch
          solutions for all your kitchen ventilation needs. Whether you're a
          homeowner or a business owner, we have the expertise to deliver
          exceptional results.
        </Typography>
        <svg
          className="wave"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#FFF5FF"
            fill-opacity="1"
            d="M0,64L80,90.7C160,117,320,171,480,208C640,245,800,267,960,245.3C1120,224,1280,160,1360,128L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </Box>
      <KitchenCard
        head="It's important?"
        body="Proper kitchen exhaust ducting installation is critical for the efficient and safe operation of your kitchen ventilation system. A well-designed and properly installed ducting system helps to remove grease, smoke, heat, and odors from your kitchen, creating a healthy and comfortable environment for your family, employees, or customers. It also helps to comply with local building codes and regulations, ensuring the safety and well-being of your property and those inside"
        img="https://ouch-cdn2.icons8.com/ei-wRarjKvOFs-LObA0jx2y0OKJ_jryu1vY-NUSF17A/rs:fit:256:256/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9zdmcvMzI5/L2RkMWFlNzFhLWMy/MGQtNGZkOC1iOWI1/LWNkNDc4NTMzMDkz/MS5zdmc.png"
      ></KitchenCard>
      <Box sx={{ backgroundColor: "#31344B", color: "#FFF5FF", pb: 5, pt: 3 }}>
        <Typography
          variant="h2"
          sx={{ ml: "auto", my: 3, textAlign: "center" }}
        >
          Our Services
        </Typography>
        <Typography variant="subtitle1" sx={{ px: { xs: 2, md: 30 } }}>
          As a leading provider of kitchen exhaust ducting installation
          services, we offer a wide range of solutions tailored to your specific
          needs.
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
      <Typography variant="h2" sx={{ ml: "auto", my: 3, textAlign: "center" }}>
        Our Services
      </Typography>
      <Typography variant="body1">
        As a leading provider of kitchen exhaust ducting installation services,
        we offer a wide range of solutions tailored to your specific needs.
        <br />
        Our services include:
      </Typography>
      <Typography variant="h4" sx={{ my: 2 }}>
        Why is Kitchen Exhaust Ducting Installation Important?
      </Typography>
      <br />
      <Typography variant="h4" sx={{ my: 2, textAlign: "center" }}></Typography>
      As a leading provider of kitchen exhaust ducting installation services, we
      offer a wide range of solutions tailored to your specific needs. Our
      services include:
      <br /> <br />
      <Typography variant="h4" sx={{ my: 2 }}>
        Kitchen Exhaust Duct Design:
      </Typography>
      <Typography variant="h4" sx={{ my: 2 }}>
        Duct Fabrication and Installation:
      </Typography>
      We use high-quality materials and advanced fabrication techniques to
      create custom ductwork that fits seamlessly into your kitchen. Our skilled
      technicians will install the ducting system with precision, ensuring
      proper alignment, sealing, and insulation for optimal performance.
      <br /> <br />
      <Typography variant="h4" sx={{ my: 2 }}>
        Exhaust Fan Installation:{" "}
      </Typography>
      We can recommend, supply, and install high-quality exhaust fans that are
      suitable for your kitchen's needs. Properly sized and installed exhaust
      fans are crucial for effective ventilation, and our team will ensure that
      your fans are correctly positioned and connected to the ducting system for
      maximum efficiency. <br /> <br />
      <Typography variant="h4" sx={{ my: 2 }}>
        Duct Cleaning and Maintenance:
      </Typography>
      Regular maintenance and cleaning of your kitchen exhaust ducting system
      are essential to keep it functioning at its best. Our team can provide
      professional duct cleaning and maintenance services to prevent grease
      buildup, remove debris, and keep your system running smoothly and safely.{" "}
      <br /> <br />
      <Typography variant="h4" sx={{ my: 2, textAlign: "center" }}>
        Why Choose Us?
      </Typography>
      When it comes to kitchen exhaust ducting installation, you can trust us
      for several reasons: <br /> <br />
      <Typography variant="h4" sx={{ my: 2 }}>
        Expertise:{" "}
      </Typography>
      Our team of technicians has extensive experience in the field and stays
      up-to-date with the latest industry trends and regulations. We have the
      knowledge and skills to design and install ducting systems that meet the
      highest standards of quality and safety.
      <br /> <br />
      <Typography variant="h4" sx={{ my: 2 }}>
        Customized Solutions:
      </Typography>
      We understand that every kitchen is unique, and we tailor our services to
      your specific requirements. Our team will work closely with you to
      understand your needs and design a ducting system that fits seamlessly
      into your kitchen layout and ventilation needs. <br />
      <br />
      <Typography variant="h4" sx={{ my: 2 }}>
        Quality Materials:
      </Typography>
      We use only high-quality materials that are durable, fire-resistant, and
      compliant with local building codes. Our ductwork is fabricated to precise
      specifications and installed with meticulous attention to detail, ensuring
      longevity and performance. <br />
      <br />
      <Typography variant="h4" sx={{ my: 2 }}>
        Professionalism:
      </Typography>
      We take pride in our professionalism and commitment to excellent customer
      service. Our team is reliable, punctual, and respectful of your property.
      We strive to exceed your expectations with our prompt, efficient, and
      courteous service.
      <br />
      <br />
      <Typography variant="h4" sx={{ my: 2 }}>
        Compliance:
      </Typography>
      We understand the importance of complying with local building codes and
      regulations. Our team is knowledgeable about the latest codes and
      standards related to kitchen exhaust ducting installation, and we ensure
      that our work meets all relevant requirements.
      <br />
      <br />
      <Typography variant="h4" sx={{ my: 2, textAlign: "center" }}>
        Contact Us
      </Typography>
      Ready to get started with your kitchen exhaust ducting installation
      project? Contact us today to schedule a consultation with our team of
      experts. We will assess your needs, provide a detailed proposal, and
      deliver exceptional results that exceed your expectations. Trust us for
      all your kitchen ventilation needs!
      <br />
      <br />
    </Box>
  );
};

export default KitchenExhaustSystem;
