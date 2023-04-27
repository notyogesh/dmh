import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
const FooterButton = (props) => {
  const navigate = useNavigate();

  const to = () => {
    navigate(props.to);
  };
  return (
    <>
      <Button
        onClick={to}
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
