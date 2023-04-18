import React from "react";
import Button from "@mui/material/Button";

const FooterButton = (props) => {
  return (
    <>
      <Button
        sx={{
          color: "#6D7587",
          mx: "auto",
          // boxShadow:
          //   "inset -3px -3px 7px #ffffffb0, inset 3px 3px 5px rgba(94, 104, 121, 0.692)",
          borderRadius: "20px",
          mb: { xs: 2, md: 0 },
        }}
      >
        {props.children}
      </Button>
    </>
  );
};

export default FooterButton;
