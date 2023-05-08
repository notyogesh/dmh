import React, { useState, useMemo } from "react";
import Navbar from "../main/navbar/NavBar";
import Divider from "@mui/material/Divider";

import { customTheme } from "../utils/Theme";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Outlet } from "react-router-dom";
import Footer from "../main/Footer";
import Box from "@mui/material/Box";
import ScrollToTop from "../main/ScrollToTop";
// import Hero2 from "../components/hero/Hero2";

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
    <Box style={{ textAlign: "center" }}>
      <ThemeProvider theme={theme}>
        <ScrollToTop>
          <Box
            sx={{
              // m: 2,
              // p: 1,
              minHeight: "100vh",
            }}
          >
            <Navbar onClick={changeTheme} />
            <Outlet />
          </Box>
        </ScrollToTop>
        <Divider />
        {/* <Hero2 /> */}
        {/* <Divider /> */}
        <Footer />
      </ThemeProvider>
    </Box>
  );
};

export default Root;
