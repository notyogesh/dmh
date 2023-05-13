import React from "react";
import { Box } from "@mui/material";
import Typography from "@mui/material/Typography";
import tile from "../images/tile.png";

const GlassAluminumWork = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f3f0f1",
        textAlign: "left",
        // px: { xs: 2, md: 20 },
        // py: 2,
        // minHeight: "100vh",
        color: "#31344B",
      }}
    >
      {" "}
      <Box
        sx={{
          pt: "20vh",
          pb: "20vh",
          display: "flex",
          flexDirection: "column",
          mb: 10,
          // background: `url(${tile}) no-repeat `,
          // background-image: linear-gradient(to bottom, rgba(255,0,0,0), rgba(255,0,0,1)),
          backgroundImage: `linear-gradient(to bottom,  rgb(243,240,241) , transparent 50%), url(${tile})`,
          // backgroundOrigin: " border-box",
          backgroundSize: "cover",
          backgroundOrigin: "right",
          // backgroundSize: "100% 100%",
          minHeight: "60vh",
          backgroundPositionY: "bottom",
        }}
      >
        {" "}
        <Typography
          variant="h3"
          sx={{
            textAlign: { xs: "center", md: "left" },
            fontWeight: 600,
            pl: { xs: 1, md: 25 },
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
          }}
        >
          Glass & Aluminum Work
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
          {/* We are your trusted source for all your glass and aluminum needs. With
          years of experience in the industry, we are proud to offer a wide
          range of services including glass installation, aluminum fabrication,
          repairs, and more. Our team of skilled professionals is dedicated to
          providing top-quality workmanship and exceptional customer service. */}
        </Typography>
      </Box>
      <Typography variant="h3" sx={{ ml: "auto", my: 3, textAlign: "center" }}>
        Services We Offer:
      </Typography>
      <Typography variant="h4" sx={{ my: 2 }}>
        Glass Installation:
      </Typography>
      Whether you need glass windows, doors, or partitions for your home or
      business, we can handle it all. Our expert team will ensure precise
      measurements, proper installation, and flawless finishing to give you
      stunning results that enhance the aesthetics of your space.
      <br />
      <Typography variant="h4" sx={{ my: 2 }}>
        Aluminum Fabrication:
      </Typography>
      We specialize in custom aluminum fabrication for a wide range of
      applications including windows, doors, storefronts, curtain walls, and
      more. Our skilled craftsmen work with high-quality materials to create
      durable and visually appealing aluminum structures that meet your specific
      requirements.
      <br /> <br />
      <Typography variant="h4" sx={{ my: 2 }}>
        Repairs and Maintenance:
      </Typography>
      Accidents happen, and when your glass or aluminum structures are damaged,
      you can count on us for reliable repairs and maintenance. Our team will
      assess the damage, provide prompt and efficient repairs, and help you
      maintain the longevity of your glass and aluminum fixtures.
      <Typography variant="h4" sx={{ my: 2 }}>
        Custom Design:
      </Typography>
      We understand that every project is unique, and we offer custom design
      services to bring your vision to life. Our design experts will work
      closely with you to understand your needs, provide creative solutions, and
      ensure that the final product exceeds your expectations.
      <br /> <br />
      <Typography variant="h3" sx={{ ml: "auto", my: 3, textAlign: "center" }}>
        Why Choose Us:
      </Typography>
      <Typography variant="h4" sx={{ my: 2 }}>
        Quality Workmanship:
      </Typography>
      Our team of skilled technicians is committed to delivering top-quality
      workmanship. We use the finest materials, advanced techniques, and
      industry-best practices to ensure that every project is completed to the
      highest standards.
      <br /> <br />
      <Typography variant="h4" sx={{ my: 2 }}>
        Experience and Expertise:
      </Typography>
      With years of experience in the glass and aluminum industry, we have the
      knowledge and expertise to handle projects of all sizes and complexities.
      From residential to commercial, we have the skills and resources to meet
      your requirements. <br /> <br />
      <Typography variant="h4" sx={{ my: 2 }}>
        Excellent Customer Service:
      </Typography>
      We value our customers and strive to provide excellent customer service at
      every step of the process. Our team is responsive, professional, and
      dedicated to ensuring your complete satisfaction with our services.
      <br /> <br />
      <Typography variant="h4" sx={{ my: 2 }}>
        Competitive Pricing:
      </Typography>
      We understand the importance of budget in any project, and we offer
      competitive pricing without compromising on quality. We provide detailed
      quotes and transparent pricing to help you make informed decisions and get
      the best value for your investment.
      <br /> <br />
      <Typography variant="h4" sx={{ my: 2 }}>
        Timely Completion:
      </Typography>
      We know that time is of the essence in any project, and we are committed
      to completing your glass and aluminum work within the agreed-upon
      timeline. We work efficiently, follow strict schedules, and ensure timely
      project completion. <br />
    </Box>
  );
};

export default GlassAluminumWork;
