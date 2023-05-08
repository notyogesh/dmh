import React from "react";
import { Box, Typography } from "@mui/material";

const AcmvCard = (props) => {
  return (
    <Box
      sx={{
        // boxShadow: " 6px 6px 12px #b8b9be,-6px -6px 12px #fff",
        border: "1px solid #d1d9e6",
        mt: 12,
        flex: 1,
        borderRadius: "9px",
        backgroundColor: "#f3f0f1",
      }}
    >
      <Box
        sx={{
          p: 5,
          borderRadius: "50%",
          boxShadow: "inset 2px 2px 5px #b8b9be,inset -3px -3px 7px #fff",
          width: "80px",
          height: "80px",
          border: "1px solid #d1d9e6",
          mt: "-80px",
          ml: 5,
          backgroundColor: "#e6e7ee",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={props.icon}
          alt="g"
          width="80px"
          height="80px"
          style={{ color: "#94D82D" }}
        />
        {/* {props.icon} */}
      </Box>
      <Box sx={{ textAlign: "left", p: 5 }}>
        <Typography variant="h6" sx={{ pb: 2 }}>
          {props.head}
        </Typography>
        <Typography variant="body2" sx={{ fontFamily: "Nunito Sans" }}>
          {props.body}
        </Typography>
      </Box>
    </Box>
  );
};

export default AcmvCard;
