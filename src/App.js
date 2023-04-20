import React, { Suspense } from "react";
// import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./main/ErrorPage";
import CircularProgress from "@mui/material/CircularProgress";
import Root from "./pages/Root";
import Hero from "./components/hero/Hero";
import AboutUs from "./pages/AboutUs";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Acmv from "./pages/Acmv";
import KitchenExhaustSystem from "./pages/KitchenExhaustSystem";
import ElectricalServices from "./pages/ElectricalServices";
import ScaffoldingWork from "./pages/ScaffoldingWork";
import GlassAluminumWork from "./pages/GlassAluminumWork";
import Construction from "./pages/Construction";

// const AboutUs = React.lazy(() => import("./pages/AboutUs"));
// const Projects = React.lazy(() => import("./pages/Projects"));
// const Contact = React.lazy(() => import("./pages/Contact"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Hero />,
      },
      {
        path: "/aboutus",
        element: <AboutUs />,
      },
      {
        path: "/service",
        // element: <Hero />,
        // element: <Projects />,
        // index: true,
        children: [
          {
            path: "projects",
            element: <Projects />,
          },
          {
            path: "acmv",
            element: <Acmv />,
          },
          {
            path: "kitchen-exhaust-system",
            element: <KitchenExhaustSystem />,
          },
          {
            path: "electrical-services",
            element: <ElectricalServices />,
          },
          {
            path: "scaffolding-work",
            element: <ScaffoldingWork />,
          },
          {
            path: "glass-aluminum-work",
            element: <GlassAluminumWork />,
          },
          {
            path: "construction",
            element: <Construction />,
          },
        ],
      },
      // {
      //   path: "/service",
      //   element: <Projects />,
      // },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

const App = () => {
  return (
    <div className="App">
      <Suspense fallback={<CircularProgress variant="determinate" />}>
        <RouterProvider router={router} />
      </Suspense>
    </div>
  );
};

export default App;
