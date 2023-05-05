import React from "react";
import { Box, Typography } from "@mui/material";
// import IconButton from "@mui/material/IconButton";

const HeroCard = (props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        borderRadius: "8px",
        px: 1,
        py: 3,
        mb: { xs: 2, md: 0 },
        boxShadow: "6px 6px 12px #b8b9be,-6px -6px 12px #fff",
        border: "0.2px solid #d1d9e6",
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
          boxShadow: "inset 2px 2px 5px #b8b9be,inset -3px -3px 7px #fff",
          alignItems: "center",
          textAlign: "center",
          mb: 4,
        }}
      >
        {" "}
        {/* <props.icon fontSize="large" /> */}
        {/* <IconButton size="large">
        <CurrencyExchangeIcon fontSize="inherit" />
      </IconButton> */}
        {props.icon}
      </Box>

      <Typography variant="h4" sx={{ pb: 2 }}>
        {props.head}
      </Typography>
      <Typography variant="body2" sx={{ fontFamily: "Nunito Sans" }}>
        {props.body}
      </Typography>
    </Box>
  );
};

export default HeroCard;
