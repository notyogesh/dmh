import React from "react";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import ConstructionIcon from "@mui/icons-material/Construction";
import MiscellaneousServicesIcon from "@mui/icons-material/MiscellaneousServices";
import HeroCard from "../../utils/HeroCard";
import { Box } from "@mui/material";

const HeroCards = () => {
  const cardcontent = [
    {
      head: "Quality Servicing",
      body: "We strive to deliver quality service in all aspects of our operations,and we focus on meeting the needs and expectations of our clients, and being responsive to client inquiries, addressing any concerns promptly, and being willing to go the extra mile to ensure satisfaction.",
      icon: <ManageAccountsIcon fontSize="large" />,
    },
    {
      head: "Expert Workers",
      body: " We take pride in our team of highly skilled and experienced workers who are committed to delivering exceptional results. Our workers possess a range of expertise and experience, from structural engineering to project management, and are dedicated to providing the highest standards of quality and workmanship on every project.",
      icon: <ConstructionIcon fontSize="large" />,
    },
    {
      head: "Rightly Equipment",
      body: "At DMH, we believe that having the right tools for the job is essential to delivering exceptional results.So that we can tackle even the most complex projects with ease and efficiency. We use advanced technology and equipment to streamline our processes, increase efficiency, and reduce the time and cost of  projects.",
      icon: <MiscellaneousServicesIcon fontSize="large" />,
    },
  ];
  return (
    <Box
      sx={{
        display: { xs: "block", md: "flex" },
        justifyContent: "space-evenly",

        px: 2,
        gap: 3,
      }}
    >
      {cardcontent.map((item, i) => (
        <HeroCard head={item.head} icon={item.icon} key={i} body={item.body} />
      ))}
    </Box>
  );
};

export default HeroCards;
