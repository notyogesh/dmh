import React from "react";
import { Box, Typography } from "@mui/material";
// import Slide from "@mui/material/Slide";
// import { InView } from "react-intersection-observer";

const AcmvCard = (props) => {
  // const width = props.i < 2 ? 500 : props.i < 5 ? 325 : 500;
  const width = 500;
  return (
    <Box
      sx={{
        // boxShadow: " 6px 6px 12px #b8b9be,-6px -6px 12px #fff",
        boxShadow: "inset 2px 2px 5px #b8b9be,inset -3px -3px 7px #fff",
        // border: "1px solid #d1d9e6",
        mt: 20,
        // flex: 1,
        borderRadius: "9px",
        backgroundColor: "#f3f0f1",
        width: { xs: "auto", md: width },
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
          backgroundColor: "#f3f0f1",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={props.img}
          alt="g"
          width="80px"
          height="80px"
          style={{ color: "#94D82D" }}
        />
        {/* {props.icon} */}
      </Box>
      <Box sx={{ textAlign: "left", px: 4, pt: 2, pb: 3 }}>
        <Typography
          variant="h5"
          sx={{ pb: 2, color: "#31344B", fontWeight: 600 }}
        >
          {props.head}
        </Typography>
        <Typography sx={{ fontFamily: "Nunito Sans", fontWeight: 400 }}>
          {props.body}
        </Typography>
      </Box>
    </Box>
  );
};

export default AcmvCard;
