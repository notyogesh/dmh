import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
const ServiceCard = (props) => {
  const navigate = useNavigate();
  const to = () => {
    navigate(props.to);
  };
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
          boxShadow: "6px 6px 12px #b8b9be,-6px -6px 12px #fff",
          border: "1px solid #d1d9e6",
          flex: 1,
        }}
      >
        <img
          src={props.img}
          alt={props.head}
          style={{
            flex: 1,
            borderRadius: "63% 37% 30% 70%/50% 45% 55% 50%",
            width: "350px",
          }}
        />
      </Box>
      <Box
        sx={{
          flex: 1,
          textAlign: "center",
          px: 5,
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
        <Button
          onClick={to}
          //   variant="contained"
          elevation={3}
          sx={{
            backgroundColor: "#f3f0f1",
            // mx: "auto",
            // mb: 2,
            // px: 2,
            display: "flex",
            // marginTop: "auto",
            mt: 5,
            ml: "auto",
            // position: "absolute",
            // bottom: 0,
            // right: 16,
            color: "#44476a",
            textTransform: "capitalize",
            // textShadow: "1px 1px 1px #FFF",
            boxShadow: "3px 3px 6px #b8b9be, -3px -3px 6px #fff",
            border: "1px solid #d1d9e6",
            "&:hover": {
              backgroundColor: "#f3f0f1",
              boxShadow: "inset 2px 2px 5px #b8b9be, inset -3px -3px 7px #fff",
            },
          }}
        >
          Learn More
        </Button>
      </Box>
    </Box>
  );
};

export default ServiceCard;
