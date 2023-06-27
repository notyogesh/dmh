import React, { useState } from "react";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import { NavLink, Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import BiotechIcon from "@mui/icons-material/Biotech";
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import EngineeringIcon from "@mui/icons-material/Engineering";
import MenuItem from "@mui/material/MenuItem";
// import NotesIcon from "@mui/icons-material/Notes";
// import NotesIcon from "@mui/icons-material/TextSnippet";
import NotesIcon from "@mui/icons-material/NoteAlt";
// import ListItemButton from "../../utils/ListItemButton1";
import ListItemButton1 from "../../utils/ListItemButton";
import {
  // Box,
  ListItemButton,
  ListItemIcon,
  // ListItemSecondaryAction,
} from "@mui/material";
// import { Box } from "@mui/material";
// import { useTheme } from "@mui/material/styles";
import { sub, sub2 } from "./Data";
import StyledMenu from "./StyledMenu";

const ListComp = (props) => {
  // const theme = useTheme();

  const [anchorEl, setAnchorEl] = useState();
  const [anchorEl2, setAnchorEl2] = useState();

  // const [open, setOpen] = useState(false);
  // const activeClass = window.location.pathname.startsWith("/acmv")
  //   ? "active"
  //   : "inactive";

  const handleMenuClick = (e) => {
    // setAnchorEl(e.currentTarget);
    if (anchorEl !== e.currentTarget) {
      setAnchorEl(e.currentTarget);
    }
  };
  const handleMenuClick2 = (e) => {
    // setAnchorEl(e.currentTarget);
    if (anchorEl2 !== e.currentTarget) {
      setAnchorEl2(e.currentTarget);
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
  const handleMenuClose2 = () => {
    setAnchorEl2(null);
    // props.onClick();
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
        <ListItemButton1 onClick={props.onClick}>
          <ListItemIcon>
            <HomeIcon sx={{ transform: "translateY(8%)" }} />
            <ListItemText
              primary="Home"
              primaryTypographyProps={{
                fontWeight: "inherit",
              }}
            />
          </ListItemIcon>
        </ListItemButton1>
      </NavLink>
      <NavLink
        to="/aboutus"
        className={({ isActive }) => (isActive ? "active" : "inactive")}
        exact="true"
      >
        <ListItemButton1 onClick={props.onClick}>
          <ListItemIcon>
            <BiotechIcon />
            <ListItemText
              primary="About Us"
              primaryTypographyProps={{
                fontWeight: "inherit",
              }}
            />
          </ListItemIcon>
        </ListItemButton1>
      </NavLink>
      <NavLink
        onClick={navHandleClick}
        to="/construction"
        className={({ isActive }) => (isActive ? "active" : "inactive")}
        // exact="true"
        // onMouseLeave={handleMenuClose}
      >
        <ListItemButton
          onClick={handleMenuClick}
          // className={activeClass}
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
        onClick={navHandleClick}
        to="/resources"
        className={({ isActive }) => (isActive ? "active" : "inactive")}
        // exact="true"
        // onMouseLeave={handleMenuClose}
      >
        <ListItemButton
          onClick={handleMenuClick2}
          // className={activeClass}
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
            <NotesIcon sx={{ transform: "translateY(12%)" }} />
            <ListItemText
              primary="Resources"
              primaryTypographyProps={{
                fontWeight: "inherit",
              }}
            />
            <ArrowDropDownIcon />
          </ListItemIcon>
        </ListItemButton>
        <StyledMenu
          // id="simple-menu"
          keepMounted
          anchorEl={anchorEl2}
          // anchorOrigin={{
          //   vertical: "bottom",
          //   horizontal: "left",
          // }}
          open={Boolean(anchorEl2)}
          onClose={handleMenuClose2}
          MenuListProps={{ onMouseLeave: handleMenuClose }}
          // disableRestoreFocus
          onClick={props.onClick}
        >
          {sub2.map((item, i) => (
            <MenuItem
              onClick={() => {
                handleMenuClose2();
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
        <ListItemButton1 onClick={props.onClick}>
          <ListItemIcon>
            <ConnectWithoutContactIcon />
            <ListItemText
              primary="Contact Us"
              primaryTypographyProps={{
                fontWeight: "inherit",
              }}
            />
          </ListItemIcon>
        </ListItemButton1>
      </NavLink>
    </List>
  );
};
export default ListComp;
