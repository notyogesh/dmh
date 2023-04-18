import React, { useState, useMemo } from "react";
import Navbar from "../main/navbar/NavBar";
import Divider from "@mui/material/Divider";

import { customTheme } from "../utils/Theme";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Outlet } from "react-router-dom";
import Footer from "../main/Footer";
import Box from "@mui/material/Box";

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
    <div style={{ textAlign: "center" }}>
      <ThemeProvider theme={theme}>
        <Box
          sx={{
            m: 2,
            minHeight: "100vh",
          }}
        >
          <Navbar onClick={changeTheme} />
          <Outlet />
        </Box>
        <Divider />
        <Footer />
      </ThemeProvider>
    </div>
  );
};

export default Root;
