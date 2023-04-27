import React from "react";
import { NavLink } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
// import Popover from "@mui/material/Popover";

const SubMenu = (props) => {
  return (
    <Menu
      id="simple-menu"
      //   sx={{
      //     pointerEvents: "none",
      //   }}
      keepMounted
      anchorEl={props.anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      open={props.open}
      // open={Boolean(anchorEl)}
      onClose={props.close}
      disableRestoreFocus
    >
      {props.item.map((item, i) => (
        <MenuItem
          onClick={props.close}
          component={NavLink}
          to={item.link}
          key={i}
        >
          {item.title}
        </MenuItem>
      ))}
    </Menu>
  );
};

export default SubMenu;
