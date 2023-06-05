import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./main/ErrorPage";
import Loader from "./main/Loader";
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
import TermsAndConditions from "./components/terms/TermsAndConditions";
import PrivacyPolicy from "./components/terms/PrivacyPolicy";
export const router = createBrowserRouter([
  {
    element: <Loader />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Root />,
        // errorElement: <ErrorPage />,
        children: [
          {
            index: true,
            element: <Hero />,
          },
          {
            path: "/aboutus",
            element: <AboutUs />,
          },
          // {
          //   path: "/services",
          //   // element: <Hero />,
          //   // element: <Projects />,
          //   // index: true,
          //   children: [
          {
            path: "projects",
            element: <Projects />,
          },
          {
            path: "airconditioning&mechanical-vendilation-system",
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
          //   ],
          // },
          // {
          //   path: "/service",
          //   element: <Projects />,
          // },
          {
            path: "/contact",
            element: <Contact />,
          },
          {
            path: "/privacy-policy",
            element: <PrivacyPolicy />,
          },
          {
            path: "/terms&conditions",
            element: <TermsAndConditions />,
          },
        ],
      },
    ],
  },
]);
