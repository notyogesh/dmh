import React, { Suspense } from "react";
// import "./App.css";

import { RouterProvider } from "react-router-dom";

import CircularProgress from "@mui/material/CircularProgress";

import { router } from "./Routes";

// const AboutUs = React.lazy(() => import("./pages/AboutUs"));
// const Projects = React.lazy(() => import("./pages/Projects"));
// const Contact = React.lazy(() => import("./pages/Contact"));

const App = () => {
  // const location = useLocation();
  // // Scroll to top if path changes
  // useLayoutEffect(() => {
  //   window.scrollTo(0, 0);
  // }, [location.pathname]);
  return (
    <div>
      <Suspense fallback={<CircularProgress variant="determinate" />}>
        <RouterProvider router={router} />
      </Suspense>
    </div>
  );
};

export default App;
