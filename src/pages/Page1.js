import React, { useState, useMemo } from "react";
// import LightDark from "../components/LightDark.js";
import Navbar from "../components/navbar/NavBar";
// import Theme from "../main/Theme";
// import ToggleColorMode from "../main/ToggleColorMode";
import { ThemeProvider, useTheme, createTheme } from "@mui/material/styles";
import { Outlet } from "react-router-dom";
import Footer from "../main/Footer";
const light = {
  palette: {
    primary: {
      main: "#FFF",
    },
    text: {
      default: "#FFFF00",
    },
  },
};

const dark = {
  palette: {
    primary: {
      main: "#3c1361",
    },
    text: {
      default: "#FFFF00",
    },
  },
};
const Page1 = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const changeTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };
  const theme = useMemo(
    () => (isDarkTheme ? createTheme(dark) : createTheme(light)),
    [isDarkTheme]
  );

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Navbar onClick={changeTheme} />
        <Outlet />
        <Footer />
        {/* <ToggleColorMode /> */}
      </ThemeProvider>
    </div>
  );
};

export default Page1;
// const homePageStyles = (
//   <GlobalStyles
//     styles={{
//       body: { backgroundColor: 'cyan' },
//       '.MuiTypography-root': {
//         color: 'red',
//       },
//     }}
//   />
// );
// {
//   item ? (
//     <img
//       style={{
//         width: 210,
//         height: 118,
//       }}
//       alt={item.title}
//       src={item.src}
//     />
//   ) : (
//     <Skeleton variant="rectangular" width={210} height={118} />
//   );
// }
