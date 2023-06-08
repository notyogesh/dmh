import React, { useState } from "react";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import { NavLink, Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import BiotechIcon from "@mui/icons-material/Biotech";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import EngineeringIcon from "@mui/icons-material/Engineering";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { styled } from "@mui/material/styles";

import {
  // Box,
  ListItemButton,
  ListItemIcon,
  // ListItemSecondaryAction,
} from "@mui/material";
// import { Box } from "@mui/material";
// import { useTheme } from "@mui/material/styles";
import { sub } from "./Data";
const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: " rgb(55, 65, 81)",
    border: "1px solid #d1d9e6",
    boxShadow: "6px 6px 12px #b8b9be, -6px -6px 12px #F3F0F1",
    // boxShadow:
    //   "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        // fontSize: 18,
        // color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:hover": {
        // m: 1,
        boxShadow:
          "inset -5px -5px 7px #ffffffb0,inset  3px 3px 5px rgba(94, 104, 121, 0.692)",
      },
    },
  },
}));
const ListComp = (props) => {
  // const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState();
  // const [open, setOpen] = useState(false);
  const activeClass = window.location.pathname.startsWith("/acmv")
    ? "active"
    : "inactive";
  // console.log(activeClass);
  const handleMenuClick = (e) => {
    // setAnchorEl(e.currentTarget);
    if (anchorEl !== e.currentTarget) {
      setAnchorEl(e.currentTarget);
    }
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
    // props.onClick();
  };
  const navHandleClick = (e) => {
    e.preventDefault();

    // handleMenuClick();
  };
  // function handlePropClick() {
  //   props.onClick();
  // }
  // onMouseEnter={handleMenuClick}
  //         onMouseLeave={handleMenuClose}
  return (
    <List
      sx={{ display: { xs: "block", md: "flex" }, fontWeight: "bold" }}
      // onClick={props.onClick}
    >
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "active" : "inactive")}
        exact="true"
      >
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
          <ListItemIcon>
            <HomeIcon sx={{ transform: "translateY(10%)" }} />
            <ListItemText
              primary="Home"
              primaryTypographyProps={{
                fontWeight: "inherit",
              }}
            />
          </ListItemIcon>
        </ListItemButton>
      </NavLink>
      <NavLink
        to="/aboutus"
        className={({ isActive }) => (isActive ? "active" : "inactive")}
        exact="true"
      >
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
          <ListItemIcon>
            <BiotechIcon />
            <ListItemText
              primary="About Us"
              primaryTypographyProps={{
                fontWeight: "inherit",
              }}
            />
          </ListItemIcon>
        </ListItemButton>
      </NavLink>
      <NavLink
        onClick={navHandleClick}
        to="/dd"
        className={({ isActive }) => (isActive ? "active" : "inactive")}
        // exact="true"
        // onMouseLeave={handleMenuClose}
      >
        <ListItemButton
          onClick={handleMenuClick}
          className={activeClass}
          // onMouseOver={handleMenuClick}
          // onMouseEnter={handleMenuClick}
          // onMouseLeave={() => setAnchorEl(null)}
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
          <ListItemIcon>
            <EngineeringIcon />
            <ListItemText
              primary="Service"
              primaryTypographyProps={{
                fontWeight: "inherit",
              }}
            />
            <ArrowDropDownIcon />
          </ListItemIcon>
        </ListItemButton>
        <StyledMenu
          id="simple-menu"
          keepMounted
          anchorEl={anchorEl}
          // anchorOrigin={{
          //   vertical: "bottom",
          //   horizontal: "left",
          // }}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          MenuListProps={{ onMouseLeave: handleMenuClose }}
          // disableRestoreFocus
          onClick={props.onClick}
        >
          {sub.map((item, i) => (
            <MenuItem
              onClick={() => {
                handleMenuClose();
                // props.onClick;
              }}
              // onClick={() => {
              //   handleMenuClose();
              //   handlePropClick();
              // }}
              component={Link}
              to={item.link}
              key={i}
            >
              {item.title}
            </MenuItem>
          ))}
        </StyledMenu>
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) => (isActive ? "active" : "inactive")}
        exact="true"
      >
        <ListItemButton
          onClick={props.onClick}
          disableRipple={true}
          // onMouseLeave={handleMenuClose}
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
          <ListItemIcon>
            <ConnectWithoutContactIcon />
            <ListItemText
              primary="Contact Us"
              primaryTypographyProps={{
                fontWeight: "inherit",
              }}
            />
          </ListItemIcon>
        </ListItemButton>
      </NavLink>
    </List>
  );
};
export default ListComp;
