import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";

import AdbIcon from "@mui/icons-material/Adb";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import { NavLink } from "react-router-dom";
import LightDark from "./LightDark";
import { Drawer, Box, ListItemButton, ListItemIcon } from "@mui/material";

const menuItems = [
  { title: "Home", link: "/" },
  { title: "About Us", link: "/page2" },
  { title: "Projects", link: "/page3" },
  { title: "Contact Us", link: "/page4" },
];
const ListComb = () => {
  return (
    <List sx={{ display: { xs: "block", md: "flex" } }}>
      {" "}
      {menuItems.map((item, i) => (
        <ListItemButton key={i}>
          <ListItemIcon>
            <NavLink to={item.link}>
              <ListItemText primary={item.title} />
            </NavLink>
          </ListItemIcon>
        </ListItemButton>
      ))}
    </List>
  );
};
function NavBar(props) {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <AppBar
      position="static"
      sx={{ width: "100%", boxShadow: "5px 10px 10px #888888" }}
    >
      <Toolbar>
        <AdbIcon />
        <Typography
          variant="h5"
          sx={{ my: 2, color: "inherit", display: "inline-block" }}
        >
          DMH
        </Typography>

        <Box sx={{ display: "flex", ml: "auto", alignItems: "center" }}>
          <LightDark onClick={props.onClick} />
          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              ml: "auto",
              whiteSpace: "nowrap",
            }}
          >
            <ListComb />
          </Box>
          <IconButton
            onClick={() => setOpenDrawer((prev) => !prev)}
            color="inherit"
            sx={{
              display: { xs: "flex", md: "none" },
              ml: "auto",
            }}
          >
            <MenuIcon />
          </IconButton>
        </Box>

        <Drawer
          open={openDrawer}
          // variant="temporary"
          anchor={"right"}
          onClose={() => {
            setOpenDrawer(false);
          }}
        >
          {" "}
          <Box onClick={() => setOpenDrawer(false)}>
            <ListComb sx={{ bgcolor: "background.paper" }} />
          </Box>
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}
export default NavBar;
