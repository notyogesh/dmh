import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import HomeIcon from "@mui/icons-material/Home";
import BiotechIcon from "@mui/icons-material/Biotech";
import EngineeringIcon from "@mui/icons-material/Engineering";
// import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';
import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
export const menuItems = [
  { title: "Home", link: "/", icon: <HomeIcon />, id: "1" },
  {
    title: "About Us",
    link: "/aboutus",
    icon: <BiotechIcon />,
    id: "2",
    end: <ArrowDropDownIcon />,
    // sub: [
    //   // { title: "Services", link: "/service/projects" },
    //   { title: "fdfd" },
    //   {
    //     title: "Kitchen Exhaust System",
    //   },
    // ],
  },
  {
    title: "Service",
    // link: "/service/projects",
    icon: <EngineeringIcon />,
    end: <ArrowDropDownIcon />,
    id: "3",
    sub: [
      // { title: "Services", link: "/service/projects" },
      { title: "Acmv", link: "/service/acmv" },
      {
        title: "Kitchen Exhaust System",
        link: "/service/kitchen-exhaust-system",
      },
      {
        title: "Electrical Services",
        link: "/service/electrical-services",
      },
      {
        title: "Scaffolding work",
        link: "/service/scaffolding-work",
      },
      {
        title: "Glass & Aluminum Work",
        link: "/service/glass-aluminum-work",
      },
      {
        title: "Construction",
        link: "/service/construction",
      },
    ],
  },
  {
    title: "Contact Us",
    link: "/contact",
    icon: <ConnectWithoutContactIcon />,
    id: "4",
  },
];
