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
          border: "1px solid #d1d9e6",
          boxShadow: "14px 14px 20px #cbced1, -14px -14px 20px white",

          borderRadius: "9px",
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
