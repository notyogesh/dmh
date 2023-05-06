import React from "react";
import { Box, Typography } from "@mui/material";

const AboutUsCard = (props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        borderRadius: "8px",
        px: 1,
        py: 3,

        mb: { xs: 2, md: 0 },
        // boxShadow: "6px 6px 12px #b8b9be,-6px -6px 12px #fff",
        // border: "0.2px solid #d1d9e6",
        alignItems: "center",
        flex: 1,
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "80px",
          height: "80px",
          borderRadius: "50%",
          boxShadow: props.boxShadow,
          alignItems: "center",
          textAlign: "center",
          mb: 4,
        }}
      >
        {props.icon}
      </Box>

      <Typography variant="h4" sx={{ pb: 2 }}>
        {props.head}
      </Typography>
      <Typography variant="body1" sx={{ fontFamily: "Nunito Sans" }}>
        {props.body}
      </Typography>
    </Box>
  );
};

export default AboutUsCard;
