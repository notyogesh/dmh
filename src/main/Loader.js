import React, { useState, useEffect } from "react";
// import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
// import { Outlet, useLocation } from "react-router-dom";
import logo from "../images/logo1.png";
const Loader = ({ children }) => {
  const [isFetching, setIsFetching] = useState(true);
  // const { pathname } = useLocation();

  useEffect(() => {
    setIsFetching(true);
    setTimeout(function () {
      setIsFetching(false);
    }, 100);
  }, []);

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
  return children;
  // return children ?? <Outlet />;
};

export default Loader;
