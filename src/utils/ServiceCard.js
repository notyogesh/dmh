import { Box, Typography } from "@mui/material";
import React from "react";
import Btn1 from "./Btn1";
const ServiceCard = (props) => {
  return (
    <Box
      sx={{
        display: { xs: "block", md: "flex" },
        my: 10,
        flexDirection: props.i % 2 === 0 ? "row-reverse" : "row",
      }}
    >
      <Box
        sx={{
          p: 4,
          borderRadius: "63% 37% 30% 70%/50% 45% 55% 50%",
          boxShadow: "6px 6px 12px #b8b9be,-6px -6px 12px #F3F0F1",
          border: "1px solid #d1d9e6",
          flex: 1,
          width: "100%",
          // backgroundColor: "#fff",
        }}
      >
        <img
          src={props.img}
          alt={props.head}
          loading="eager"
          style={{
            flex: 1,
            borderRadius: "63% 37% 30% 70%/50% 45% 55% 50%",
            width: "inherit",
          }}
        />
      </Box>
      <Box
        sx={{
          flex: 1,
          textAlign: "center",
          px: { xs: 1, md: 5 },
          pt: 2,
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold", pb: 2 }}>
          {" "}
          {props.head}
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: "normal" }}>
          {" "}
          {props.body}
        </Typography>

        <Btn1 to={props.to} sx={{ ml: "auto", mt: 5, px: 1 }}>
          Learn More
        </Btn1>
      </Box>
    </Box>
  );
};

export default ServiceCard;
