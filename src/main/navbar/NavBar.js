import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";

import AdbIcon from "@mui/icons-material/Adb";

import LightDark from "./LightDark";
import { Drawer, Box } from "@mui/material";
import ListComp from "./ListComp";

function NavBar(props) {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <AppBar
      // position="static"
      position="sticky"
      sx={{
        // boxShadow: 3,
        backgroundColor: (theme) =>
          theme.palette.mode === "light" ? "#C0FF02" : "default",
      }}
    >
      <Toolbar>
        <AdbIcon />
        <Typography
          variant="h5"
          sx={{
            my: 2,
            color: "inherit",
            // display: "inline-block",
            letterSpacing: 1,
            fontWeight: "bolder",
          }}
        >
          SRM
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
            <ListComp />
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
          <ListComp
            sx={{ bgcolor: "background.paper" }}
            onClick={() => setOpenDrawer(false)}
          />
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}
export default NavBar;
