import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
// import AdbIcon from "@mui/icons-material/Adb";
import logo from "../../images/logo.png";
// import LightDark from "./LightDark";
import { Drawer, Box } from "@mui/material";
import ListComp from "./ListComp";
import { useNavigate } from "react-router-dom";

function NavBar(props) {
  const [openDrawer, setOpenDrawer] = useState(false);
  const navigate = useNavigate();
  const to = () => {
    navigate("/");
  };
  return (
    <AppBar
      // position="static"
      elevation={0}
      position="sticky"
      sx={{
        // boxShadow:
        //   "inset -3px -3px 7px #ffffffb0, inset 3px 3px 5px rgba(94, 104, 121, 0.692)",
        // mb: 2,
        // backdropFilter: "blur(4px)",
        // borderRadius: "10px",
        backgroundColor: "#f3f0f1",
        // backgroundColor: (theme) =>
        //   theme.palette.mode === "light" ? "#f3f0f1" : "#393A3E",
      }}
    >
      <Toolbar>
        {/* <AdbIcon
          sx={{
            color: (theme) =>
              theme.palette.mode === "light" ? "#2C2C2C" : "inherit",
          }}
        /> */}
        <img
          src={logo}
          alt="logo"
          style={{
            borderRadius: "50%",
            width: "40px",
            border: "1px solid #000",
            // boxShadow:
            //   " -3px -3px 7px #ffffffb0,  3px 3px 5px rgba(94, 104, 121, 0.692)",
          }}
          onClick={to}
        />
        <Typography
          variant="h5"
          onClick={to}
          sx={{
            my: 2,
            ml: 0.7,
            color: "#31344B",
            // textShadow:
            //   " -3px -3px 7px #ffffffb0,  3px 3px 5px rgba(94, 104, 121, 0.692)",

            letterSpacing: 1,
            fontWeight: "bolder",
          }}
        >
          DMH
        </Typography>

        <Box sx={{ display: "flex", ml: "auto", alignItems: "center" }}>
          {/* <LightDark onClick={props.onClick} /> */}

          <Box
            sx={{
              display: { xs: "none", md: "flex" },
              ml: "auto",
              whiteSpace: "nowrap",
              my: 1,
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
