import React from "react";
import Typography from "@mui/material/Typography";
import ServiceCard from "../../utils/ServiceCard";
import { Box } from "@mui/material";

const Services = () => {
  const services = [
    {
      head: "Construction Design & Build",
      body: "We offer comprehensive construction and building services for commercial and residential properties. From concept to completion,  including design, planning, and construction management. We  ensure that each project is completed to the highest standards of quality and safety. Whether you're looking to build a new property from scratch or renovate an existing one.",
      img: "https://drive.google.com/uc?export=download&id=1zNGUbg7DGsPZ4xpk_vu3PDlvRX0KxUxt",
      to: "/construction",
    },
    {
      head: "AirConditioning & Mechanical Ventilation System",
      body: "(Air Conditioning and Mechanical Ventilation System) Heating, ventilation, and air conditioning  services,We offer a comprehensive range of HVAC services, including installation, maintenance, and repairs. ",
      img: "https://drive.google.com/uc?export=download&id=12ftZeqZok88VLdYnWlJ0RHzhFNBCKhiX",
      to: "/airconditioning-mechanical-ventilation-system",
    },
    {
      head: "Plumbing & Electrical Services",
      body: " we offer reliable and efficient plumbing and electrical services to our clients. From minor repairs to major installations, we do it all",
      img: "https://drive.google.com/uc?export=download&id=1YWV5XZS_HZmWeloq0KQhFGX2PCSk7utK",
      to: "/electrical-services",
    },
    {
      head: "Kitchen Exhaust System",
      body: "We provide kitchen exhaust ducting services, including installation, cleaning, and maintenance.And make sure  your kitchen exhaust system operates efficiently and meets all safety and health codes.",
      img: "https://drive.google.com/uc?export=download&id=1qPl7RQ-SJt0WW3zYckjLAHX31qYFEKeO",
      to: "/kitchen-exhaust-system",
    },
    {
      head: "Glass & Aluminum Work",
      body: "We offer Glass and Aluminum work services for commercial and residential properties. Including installation, repair, and maintenance of glass windows, doors, and storefronts, as well as aluminum fabrication and installation. Whether you're  upgrading  or improve its energy efficiency we can deliver the desired results",
      img: "https://drive.google.com/uc?export=download&id=1EikIZF6ve5U5I5gI0xHnsKwevjnl71ZU",
      to: "/glass-aluminum-work",
    },
    {
      head: "Scaffolding Work",
      body: "We provide scaffolding work services for a range of industries, including construction, maintenance, and renovation. Providing safe and reliable access to hard-to-reach areas. We use high-quality materials and equipment, and strictly adhere to safety regulations to ensure the protection of our clients and workers. ",
      img: "https://drive.google.com/uc?export=download&id=1MiKpn4cQol0HrQFdmUnYpgwDcbqTzadq",
      to: "/scaffolding-work",
    },
  ];
  return (
    <Box sx={{ m: { xs: 0, md: 1 } }}>
      <Typography variant="h3" sx={{ mb: 5, fontWeight: "bold" }}>
        Services
      </Typography>
      {services.map((item, i) => (
        <ServiceCard
          head={item.head}
          body={item.body}
          img={item.img}
          key={i}
          i={i}
          to={item.to}
        />
      ))}
    </Box>
  );
};

export default Services;
