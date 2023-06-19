import React from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const Btn1 = (props) => {
  return (
    <Button
      to={props.to}
      //   elevation={3}
      component={Link}
      startIcon={props.icon}
      sx={{
        ...props.sx,
        backgroundColor: "#f3f0f1",

        color: "#44476a",
        textTransform: "capitalize",

        boxShadow: "3px 3px 6px #b8b9be, -3px -3px 6px #f3f0f1",
        border: "1px solid #d1d9e6",
        "&:hover": {
          boxShadow: "inset 2px 2px 5px #b8b9be, inset -3px -3px 7px #fff",
        },
      }}
    >
      {props.children}
    </Button>
  );
};

export default Btn1;
