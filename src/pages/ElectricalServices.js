import React from "react";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import peakpx from "../images/peakpx.jpg";

const ElectricalServices = () => {
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
    >
       <Box
        sx={{
          pt: { xs: "25vh", md: "20vh" },
          pb: "20vh",
          display: "flex",
          flexDirection: "column",
          mb: 10,
          // background: `url(${tile}) no-repeat `,
          // background-image: linear-gradient(to bottom, rgba(255,0,0,0), rgba(255,0,0,1)),
          backgroundImage: `linear-gradient(to bottom,  rgb(243,240,241) , transparent 50%), url(${peakpx})`,
          // backgroundOrigin: " border-box",
          backgroundSize: "cover",
          backgroundOrigin: "right",
          // backgroundSize: "100% 100%",
          minHeight: "60vh",
          backgroundPositionY: "bottom",
          backdropFilter: "blur(20)",
        }}
      >
        {" "}
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
          sx={{
            // textAlign: { xs: "center", md: "left" },
            fontWeight: 500,
            // pl: { xs: 0, md: 5 },
            fontSize: { xs: 30, sm: 35, md: 40 },
            // backdropFilter: "blur(20px)",
          }}
        >
            Electrical Work
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
      <Typography
        variant="h6"
        sx={{
          textAlign: "center",
          color: "#31344B",
          px: { xs: 2, md: 20 },
          pb: { xs: 2, md: 2 },
        }}
      >
      We are your go-to destination for all your electrical needs. Our
      team of skilled and certified electricians is dedicated to providing
      reliable, safe, and efficient electrical services for residential,
      commercial, and industrial properties. Whether you need simple repairs,
      complex installations, or routine maintenance, we have the expertise and
      experience to get the job done right.
      </Typography>
      {"      "}
      <br />
      <br />
      <Typography variant="h3" sx={{ my: 3, textAlign: "center" }}>
        Our Services:
      </Typography>
      <Typography variant="h4" sx={{ my: 2 }}>
        Electrical Repairs:
      </Typography>
      From fixing faulty outlets and switches to repairing damaged wiring and
      circuits, our technicians can diagnose and repair all types of electrical
      issues quickly and efficiently. We use state-of-the-art tools and
      techniques to ensure that your electrical system is safe and up to code.
      <br />
      <Typography variant="h4" sx={{ my: 2 }}>
        Electrical Installations:
      </Typography>
      If you're building a new home, renovating your existing space, or need to
      upgrade your electrical system, we can handle all types of installations.
      We can install new electrical panels, outlets, switches, lighting
      fixtures, and more, tailored to your specific needs and budget.
      <br /> <br />
      <Typography variant="h4" sx={{ my: 2 }}>
        Electrical Upgrades:
      </Typography>
      As technology evolves, so do electrical systems. If you need to upgrade
      your electrical panel, increase your electrical capacity, or install
      dedicated circuits for high-powered appliances, our team can provide
      expert advice and professional installation services to meet your
      requirements.
      <Typography variant="h4" sx={{ my: 2 }}>
        Lighting Solutions:
      </Typography>
      Lighting plays a crucial role in enhancing the ambiance and functionality
      of any space. We offer a wide range of lighting solutions, including
      indoor and outdoor lighting, LED lighting, recessed lighting, landscape
      lighting, and more. Our team can help you choose the right lighting
      options to suit your aesthetic preferences and energy-saving goals.
      <br /> <br />
      <Typography variant="h4" sx={{ my: 2 }}>
        Safety Inspections:
      </Typography>
      Electrical safety is our top priority. Our technicians can conduct
      thorough electrical safety inspections to identify potential hazards, code
      violations, and other issues that may compromise the safety of your
      electrical system. We can provide recommendations and implement necessary
      repairs or upgrades to ensure your home or business is safe from
      electrical hazards.
      <br /> <br />
      <Typography variant="h3" sx={{ my: 3, textAlign: "center" }}>
        Why Choose Us:
      </Typography>
      <Typography variant="h4" sx={{ my: 2 }}>
        Experienced and Certified Electricians:
      </Typography>
      Our team of electricians are highly trained, certified, and experienced in
      handling all types of electrical work. They stay updated with the latest
      industry standards and technologies to provide you with the best
      solutions.
      <br /> <br />
      <Typography variant="h4" sx={{ my: 2 }}>
        Quality Workmanship:
      </Typography>
      We take pride in delivering top-quality workmanship on every project we
      undertake. We pay attention to detail and use high-quality materials to
      ensure the durability and longevity of our electrical installations and
      repairs.
      <br /> <br />
      <Typography variant="h4" sx={{ my: 2 }}>
        Reliable and Prompt Service:
      </Typography>
      We understand the importance of timely service. Our team is prompt and
      reliable, arriving on time and completing the work efficiently without
      compromising on quality.
      <br /> <br />
      <Typography variant="h4" sx={{ my: 2 }}>
        Excellent Customer Service:
      </Typography>
      Our customers are our top priority. We strive to provide exceptional
      customer service, addressing your concerns, answering your questions, and
      providing honest and transparent communication throughout the project.
      <br /> <br />
      <Typography variant="h4" sx={{ my: 2 }}>
        Competitive Pricing:
      </Typography>
      We offer competitive and transparent pricing for our services, with no
      hidden charges. We provide detailed quotes upfront and work within your
      budget to provide cost-effective solutions without compromising on quality
      or safety.
      <br /> <br />
      <Typography variant="h4" sx={{ my: 2, textAlign: "center" }}>
        Contact Us:
      </Typography>
      Ready to experience top-notch electrical services? Contact us today to
      schedule an appointment or request a quote. Our team is standing by to
      assist you with all your electrical needs. Trust us for reliable, safe,
      and efficient electrical solutions for your home or business
      <br /> <br />
    </Box>
  );
};

export default ElectricalServices;
