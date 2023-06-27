import React from "react";
import ListItemButton from "@mui/material/ListItemButton";
const ListItemButton1 = (props) => {
  return (
    <ListItemButton
      onClick={props.onClick}
      disableRipple={true}
      sx={{
        borderRadius: "35px",
        boxShadow: {
          xs: "inset -5px -5px 7px #ffffffb0,inset  3px 3px 5px rgba(94, 104, 121, 0.692)",
          md: "none",
        },
        "&:hover": {
          boxShadow: "inset 2px 2px 5px #b8b9be, inset -3px -3px 7px #fff",
        },
      }}
    >
      {props.children}
    </ListItemButton>
  );
};

export default ListItemButton1;
