import React, { useState, useMemo } from "react";
import Navbar from "../main/navbar/NavBar";
import Divider from "@mui/material/Divider";
import { Box } from "@mui/material";

import { customTheme } from "../utils/Theme";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Outlet } from "react-router-dom";
import Footer from "../main/Footer";

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
        <Box sx={{ flexGrow: 1, minheight: "100dvh" }}>
          <Navbar onClick={changeTheme} />
          <Divider />
          <Outlet />
        </Box>

        <Divider />
        <Footer />
      </ThemeProvider>
    </div>
  );
};

export default Root;
