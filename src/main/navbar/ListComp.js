import React, { useState } from "react";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import { NavLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import BiotechIcon from "@mui/icons-material/Biotech";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import EngineeringIcon from "@mui/icons-material/Engineering";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import {
  // Box,
  ListItemButton,
  ListItemIcon,
  // ListItemSecondaryAction,
} from "@mui/material";
// import { Box } from "@mui/material";
// import { useTheme } from "@mui/material/styles";
import { sub } from "./Data";
// import Typography from '@mui/material/Typography';
// import Button from "@mui/material/Button";
// import SubMenu from "./SubMenu";
const ListComp = (props) => {
  // const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState();
  // const [open, setOpen] = useState(false);

  const handleMenuClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
    props.onClick();
  };
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
          sx={{
            borderRadius: 5,
            boxShadow: {
              xs: "inset -5px -5px 7px #ffffffb0,inset  3px 3px 5px rgba(94, 104, 121, 0.692)",
              md: "none",
            },
          }}
        >
          <ListItemIcon>
            <HomeIcon />
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
          sx={{
            borderRadius: 5,
            boxShadow: {
              xs: "inset -5px -5px 7px #ffffffb0,inset  3px 3px 5px rgba(94, 104, 121, 0.692)",
              md: "none",
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
        className="inactive"
        // exact="true"
      >
        <ListItemButton
          onClick={handleMenuClick}
          sx={{
            borderRadius: 5,
            boxShadow: {
              xs: "inset -5px -5px 7px #ffffffb0,inset  3px 3px 5px rgba(94, 104, 121, 0.692)",
              md: "none",
            },
          }}
        >
          <ListItemIcon>
            <EngineeringIcon />
            <ListItemText
              primary="Service"
              primaryTypographyProps={{
                fontWeight: "lighter",
              }}
            />
            <ArrowDropDownIcon />
          </ListItemIcon>
        </ListItemButton>
        <Menu
          id="simple-menu"
          keepMounted
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
          disableRestoreFocus
        >
          {sub.map((item, i) => (
            <MenuItem
              onClick={handleMenuClose}
              component={NavLink}
              to={item.link}
              key={i}
            >
              {item.title}
            </MenuItem>
          ))}
        </Menu>
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) => (isActive ? "active" : "inactive")}
        exact="true"
      >
        <ListItemButton
          onClick={props.onClick}
          sx={{
            borderRadius: 5,
            boxShadow: {
              xs: "inset -5px -5px 7px #ffffffb0,inset  3px 3px 5px rgba(94, 104, 121, 0.692)",
              md: "none",
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
