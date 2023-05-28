import React, { useState, useEffect } from "react";
// import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Outlet, useLocation } from "react-router-dom";
import logo from "../images/logo.png";
const Loader = ({ children }) => {
  const [isFetching, setIsFetching] = useState(true);
  const { pathname } = useLocation();
  //   console.log(pathname);
  useEffect(() => {
    setIsFetching(true);
    setTimeout(function () {
      setIsFetching(false);
    }, 1000);
  }, [pathname]);

  if (isFetching) {
    return (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "90vh",
          position: "relative",
        }}
      >
        <img src={logo} id="loader" alt="gg" />
      </Box>
    );
  }

  return children ?? <Outlet />;
};

export default Loader;
