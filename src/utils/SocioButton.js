import React from "react";
import Button from "@mui/material/Button";

const SocialButton = (props) => {
  // console.log(props.link);
  return (
    <>
      <Button
        startIcon={props.icon}
        href={props.link}
        target="_blank"
        // variant="button"
        // onClick={()=>}
        sx={{
          mx: "auto",
          mb: 2,
          color: "#6D7587",
          // backgroundColor: "#E0E0E0",
          boxShadow: "14px 14px 20px #cbced1, -14px -14px 20px white",
          borderRadius: "20px",
          "&:hover": {
            backgroundColor: "#E0E0E0",
          },
        }}
      >
        {props.name || props.children}
      </Button>
    </>
  );
};

export default SocialButton;
