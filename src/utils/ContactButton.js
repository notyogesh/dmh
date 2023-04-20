import React from "react";
import Button from "@mui/material/Button";

const ContactButton = (props) => {
  return (
    <>
      <Button
        startIcon={props.icon}
        href={props.link}
        target="_blank"
        sx={{
          // backgroundColor: "#e5e5e5",
          mx: "auto",
          mb: 2,
          px: 2,
          color: "#6D7587",
          textTransform: props.textTransform,
          textShadow: "1px 1px 1px #FFF",

          boxShadow: "14px 14px 20px #cbced1, -14px -14px 20px white",
          // position: "relative",
          // boxShadow:
          //   "2px  1px  2px 0 rgba(0, 0, 0, 0.025),4px  2px  4px 0 rgba(0, 0, 0, 0.025), 8px  4px  8px 0 rgba(0, 0, 0, 0.05),16px  8px 16px 0 rgba(0, 0, 0, 0.05),32px 16px 32px 0 rgba(0, 0, 0, 0.05),64px 32px 64px 0 rgba(0, 0, 0, 0.05)",
          // borderRadius: "20px",
          // zIndex: "0",
          // "&:before": {
          //   position: "absolute",
          //   top: "0",
          //   left: "0",
          //   width: "100%",
          //   height: "100%",

          //   zIndex: "-1",
          //   boxShadow:
          //     "-2px  -1px  2px 0 rgba(255, 255, 255, 0.4),-4px  -2px  4px 0 rgba(255, 255, 255, 0.4),-8px  -4px  8px 0 rgba(255, 255, 255, 0.4),-16px  -8px 16px 0 rgba(255, 255, 255, 0.4),-32px -16px 32px 0 rgba(255, 255, 255, 0.4),-64px -32px 64px 0 rgba(255, 255, 255, 0.4)",
          // },
          "&:hover": {
            backgroundColor: "#f3f0f1",
          },
        }}
      >
        {props.name || props.children}
      </Button>
    </>
  );
};

export default ContactButton;
