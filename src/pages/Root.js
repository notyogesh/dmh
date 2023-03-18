import React, { useState, useMemo } from "react";
// import LightDark from "../components/LightDark.js";
import Navbar from "../main/navbar/NavBar";
import Divider from "@mui/material/Divider";

import { customTheme } from "../utils/Theme";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Outlet } from "react-router-dom";
import Footer from "../main/Footer";
// import { Box } from "@mui/system";

const Root = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };
  const theme = useMemo(
    () =>
      isDarkTheme
        ? createTheme(customTheme("dark"))
        : createTheme(customTheme("light")),
    [isDarkTheme]
  );

  return (
    <div className="root">
      <ThemeProvider theme={theme}>
        <Navbar onClick={changeTheme} />
        <Divider />
        {/* <div className="content"> */}
        <Outlet />
        {/* </div> */}
        <Divider />
        <Footer />
      </ThemeProvider>
    </div>
  );
};

export default Root;
