import React, { useState } from "react";

import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import { NavLink } from "react-router-dom";
// import HomeIcon from "@mui/icons-material/Home";
import { ListItemButton, ListItemIcon } from "@mui/material";
// import { Box } from "@mui/material";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import HomeIcon from "@mui/icons-material/Home";
import BiotechIcon from "@mui/icons-material/Biotech";
import EngineeringIcon from "@mui/icons-material/Engineering";
// import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
// import Button from "@mui/material/Button";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
// import { useTheme } from "@mui/material/styles";

const menuItems = [
  { title: "Home", link: "/", icon: <HomeIcon /> },
  {
    title: "About Us",
    link: "/aboutus",
    icon: <BiotechIcon />,
    end: <ArrowDropDownIcon />,
  },
  {
    title: "Service",
    link: "/service/projects",
    icon: <EngineeringIcon />,
    end: <ArrowDropDownIcon />,
    sub: [
      { title: "Services", link: "/service/projects" },
      { title: "Acmv", link: "/service/acmv" },
      {
        title: "Kitchen Exhaust System",
        link: "/service/kitchen-exhaust-system",
      },
      {
        title: "Electrical Services",
        link: "/service/electrical-services",
      },
      {
        title: "Scaffolding work",
        link: "/service/scaffolding-work",
      },
      {
        title: "Glass & Aluminum Work",
        link: "/service/glass-aluminum-work",
      },
    ],
  },
  {
    title: "Contact Us",
    link: "/contact",
    icon: <ConnectWithoutContactIcon />,
  },
];
const ListComp = (props) => {
  // const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  return (
    <List
      sx={{ display: { xs: "block", md: "flex" }, fontWeight: "bold" }}
      onClick={props.onClick}
    >
      {menuItems.map((item, i) => (
        <NavLink
          to={item.link}
          key={i}
          className={({ isActive }) => (isActive ? "active" : "inactive")}
          exact="true"
        >
          <ListItemButton
            key={i}
            onClick={item.sub ? handleMenuClick : handleMenuClose}
            onMouseOver={item.sub ? handleMenuClick : handleMenuClose}
            // onMouseLeave={handleMenuClose}
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
          {item.sub && (
            <>
              <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                {item.sub.map((item, i) => (
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
            </>
          )}
        </NavLink>
      ))}
    </List>
  );
};
export default ListComp;
