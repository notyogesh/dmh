import React from "react";
import { Box, Typography } from "@mui/material";

const KitchenCard = (props) => {
  return (
    <Box
      sx={{
        display: { xs: "block", md: "flex" },
        my: 10,
        flexDirection: props.i % 2 === 0 ? "row-reverse" : "row",
        p: { xs: 1, md: 4 },
      }}
    >
      <Box
        sx={{
          // p: 4,
          // borderRadius: "50%",
          //   boxShadow: "6px 6px 12px #b8b9be,-6px -6px 12px #fff",
          //   border: "1px solid #d1d9e6",
          flex: 1,
          width: "100%",
          backgroundColor: props.backgroundColor,
          // aspectRatio: "1 / 1",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={props.img}
          alt={props.head}
          loading="lazy"
          style={{
            // flex: 1,
            // borderRadius: "50%",
            width: "70%",
            backgroundColor: props.backgroundColor,
          }}
        />
      </Box>
      <Box
        sx={{
          flex: 1,
          textAlign: "center",
          px: 5,
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
        <Typography variant="body1" sx={{ fontWeight: 600 }}>
          {" "}
          {props.body}
        </Typography>
      </Box>
    </Box>
  );
};

export default KitchenCard;
