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
          px: 2,
          color: "#6D7587",
          fontWeight: 600,
          // backgroundColor: "#E0E0E0",
          boxShadow: "14px 14px 20px #cbced1, -14px -14px 20px white",
          borderRadius: "20px",
          "&:hover": {
            // backgroundColor: "#E0E0E0",
            boxShadow: "inset 2px 2px 5px #b8b9be, inset -3px -3px 7px #fff",
          },
        }}
      >
        {props.name || props.children}
      </Button>
    </>
  );
};

export default SocialButton;
