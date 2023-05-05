import React from "react";
import Typography from "@mui/material/Typography";
import ServiceCard from "../../utils/ServiceCard";

const Services = () => {
  const services = [
    {
      head: "ACMV",
      body: "(Air Conditioning and Mechanical Ventilation System) Heating, ventilation, and air conditioning  services,We offer a comprehensive range of HVAC services, including installation, maintenance, and repairs. ",
      img: "https://images.unsplash.com/photo-1635604866833-70844856de75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=822&q=80",
      to: "/service/acmv",
    },
    {
      head: "Plumbing & Electrical Services",
      body: " we offer reliable and efficient plumbing and electrical services to our clients. From minor repairs to major installations, we do it all",
      img: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZWxlY3RyaWNhbCUyMCUyMGluZHVzdHJ5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      to: "/service/electrical-services",
    },
    {
      head: "Kitchen Exhaust System",
      body: "We provide kitchen exhaust ducting services, including installation, cleaning, and maintenance.And make sure  your kitchen exhaust system operates efficiently and meets all safety and health codes.",
      img: "https://www.baremetalstandard.com/wp-content/uploads/2017/07/commercial-kitchen.jpg",
      to: "/service/kitchen-exhaust-system",
    },
    {
      head: "Glass & Aluminum Work",
      body: "We offer Glass and Aluminum work services for commercial and residential properties. Including installation, repair, and maintenance of glass windows, doors, and storefronts, as well as aluminum fabrication and installation. Whether you're  upgrading  or improve its energy efficiency we can deliver the desired results",
      img: "https://4.imimg.com/data4/QN/AB/MY-9630668/aluminium-partition-work-500x500.jpg",
      to: "/service/glass-aluminum-work",
    },
    {
      head: "Scaffolding Work",
      body: "We provide scaffolding work services for a range of industries, including construction, maintenance, and renovation. Providing safe and reliable access to hard-to-reach areas. We use high-quality materials and equipment, and strictly adhere to safety regulations to ensure the protection of our clients and workers. ",
      img: "https://images.unsplash.com/photo-1504964670878-71b73cec0ce1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c2NhZmZvbGRpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
      to: "/service/scaffolding-work",
    },
    {
      head: "Construction Design & Build",
      body: "We offer comprehensive construction and building services for commercial and residential properties. From concept to completion,  including design, planning, and construction management. We  ensure that each project is completed to the highest standards of quality and safety. Whether you're looking to build a new property from scratch or renovate an existing one.",
      img: "https://www.doegedevelopment.com/wp-content/uploads/commercial-design-build.jpg",
      to: "/service/construction",
    },
  ];
  return (
    <div>
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
    </div>
  );
};

export default Services;
