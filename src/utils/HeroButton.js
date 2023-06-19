import React from "react";
import Button from "@mui/material/Button";

const HeroButton = (props) => {
  return (
    <Button
      variant="contained"
      sx={{
        fontWeight: "bold",
        display: "block",

        alignSelf: props.align,
        mt: 2,
        px: 3,
        py: 1,
        //   mr: { xs: 0, md: 2 },
        borderRadius: "50%",
        // color: "#6D7587",

        color: "#44476a",
        backgroundColor: "#f2f2f2",
        textShadow: "3px 3px 3px #FFF",
        // boxShadow: '0px 1px 0px rgba(255, 255, 255, 0.2), 0px 2px 1px rgba(0, 0, 0, 0.15), 0px 0px 2px rgba(0, 0, 0, 0.1), 0px -1px 0px rgba(0, 0, 0, 0.1)',

        boxShadow:
          " -3px -3px 7px rgba(255, 255, 255, 0.2),  3px 3px 5px rgba(94, 104, 121, 0.692)",
        "&:hover": {
          backgroundColor: "#f3f0f1",
          boxShadow:
            " -3px -3px 7px #ffffffb0,  3px 3px 5px rgba(94, 104, 121, 0.692)",
        },
        // boxShadow:
        //   " inset 14px 14px 20px #cbced1,inset -14px -14px 20px white",
      }}
    >
      {props.name || props.children}
    </Button>
  );
};

export default HeroButton;
