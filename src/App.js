import React, { Suspense } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./main/ErrorPage";
import CircularProgress from "@mui/material/CircularProgress";
import Hero from "./main/Hero";

const Page1 = React.lazy(() => import("./pages/Page1"));
const Page2 = React.lazy(() => import("./pages/Page2"));
const Page3 = React.lazy(() => import("./pages/Page3"));
const Page4 = React.lazy(() => import("./pages/Page4"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Page1 />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Hero />,
      },
      {
        path: "/page2",
        element: <Page2 />,
      },
      {
        path: "/page3",
        element: <Page3 />,
      },
      {
        path: "/page4",
        element: <Page4 />,
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
