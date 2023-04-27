import React, { useState } from "react";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import { NavLink } from "react-router-dom";
// import HomeIcon from "@mui/icons-material/Home";
import {
  Box,
  ListItemButton,
  ListItemIcon,
  // ListItemSecondaryAction,
} from "@mui/material";
// import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { menuItems } from "./Data";
// import Typography from '@mui/material/Typography';

// import Button from "@mui/material/Button";

import SubMenu from "./SubMenu";

const ListComp = (props) => {
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState();
  const [open, setOpen] = useState(false);

  const handleMenuClick = (e) => {
    setAnchorEl(e.currentTarget);

    setOpen(true);
  };
  // const handleMenuClose = () => {
  //   setAnchorEl(null);
  //   setOpen(false);
  // };
  const handleMenuClose = (e) => {
    if (e.currentTarget.localName !== "ul") {
      const menu = document.getElementById("simple-menu").children[2];
      const menuBoundary = {
        left: menu.offsetLeft,
        top: e.currentTarget.offsetTop + e.currentTarget.offsetHeight,
        right: menu.offsetLeft + menu.offsetHeight,
        bottom: menu.offsetTop + menu.offsetHeight,
      };
      if (
        e.clientX >= menuBoundary.left &&
        e.clientX <= menuBoundary.right &&
        e.clientY <= menuBoundary.bottom &&
        e.clientY >= menuBoundary.top
      ) {
        return;
      }
    }

    setOpen(false);
  };

  theme.props = {
    MuiList: {
      onMouseLeave: (e) => {
        handleMenuClose(e);
      },
    },
  };
  return (
    <List
      sx={{ display: { xs: "block", md: "flex" }, fontWeight: "bold" }}
      onClick={props.onClick}
    >
      {menuItems.map((item, i) =>
        item.sub ? (
          <Box key={i}>
            <ListItemButton
              key={i}
              id={i}
              // onClick={(e) => handleMenuClick(e)}
              // onMouseOver={handleMenuClick}
              // aria-owns={open ? "simple-menu" : undefined}
              // aria-haspopup="true"
              onMouseEnter={handleMenuClick}
              onMouseLeave={handleMenuClose}
              style={{ zIndex: 10 }}
              sx={{
                borderRadius: 5,
                boxShadow: {
                  xs: "inset -5px -5px 7px #ffffffb0,inset  3px 3px 5px rgba(94, 104, 121, 0.692)",
                  md: "none",
                },
              }}
            >
              <ListItemIcon>
                {item.icon}
                <ListItemText
                  primary={item.title}
                  primaryTypographyProps={{
                    fontWeight: "inherit",
                  }}
                />
                {item.end}
              </ListItemIcon>
            </ListItemButton>

            <SubMenu
              anchorEl={anchorEl}
              open={open}
              close={handleMenuClose}
              item={item.sub}
            />
          </Box>
        ) : (
          <NavLink
            to={item.link}
            key={i + 3}
            className={({ isActive }) => (isActive ? "active" : "inactive")}
            exact="true"
          >
            <ListItemButton
              key={i}
              // onClick={item.sub ? handleMenuClick : handleMenuClose}
              // onMouseOver={item.sub ? handleMenuClick : handleMenuClose}
              // onMouseLeave={handleMenuClose}
              style={{ zIndex: 10 }}
              sx={{
                borderRadius: 5,
                boxShadow: {
                  xs: "inset -5px -5px 7px #ffffffb0,inset  3px 3px 5px rgba(94, 104, 121, 0.692)",
                  md: "none",
                },
              }}
            >
              <ListItemIcon>
                {item.icon}
                <ListItemText
                  primary={item.title}
                  primaryTypographyProps={{
                    fontWeight: "inherit",
                  }}
                />
                {item.end}
              </ListItemIcon>
            </ListItemButton>
          </NavLink>
        )
      )}
    </List>
  );
};
export default ListComp;
