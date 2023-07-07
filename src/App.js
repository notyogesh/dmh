import React, {
  Suspense,
  // useEffect
} from "react";
// import "./App.css";

import { RouterProvider } from "react-router-dom";

import CircularProgress from "@mui/material/CircularProgress";

import { router } from "./Routes";

// const AboutUs = React.lazy(() => import("./pages/AboutUs"));
// const Projects = React.lazy(() => import("./pages/Projects"));
// const Contact = React.lazy(() => import("./pages/Contact"));

const App = () => {
  // const handleHttpsRedirect = () => {
  //   window.location.replace("https://www.dmhgroup.com.sg");
  // };

  // useEffect(() => {
  //   handleHttpsRedirect();
  // }, []);
  return (
    <div>
      <Suspense fallback={<CircularProgress variant="determinate" />}>
        <RouterProvider router={router} />
      </Suspense>
    </div>
  );
};

export default App;
