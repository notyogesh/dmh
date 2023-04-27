// import React, { useState } from "react";

// import List from "@mui/material/List";
// import ListItemText from "@mui/material/ListItemText";
// import { NavLink } from "react-router-dom";
// // import HomeIcon from "@mui/icons-material/Home";
// import { ListItemButton, ListItemIcon } from "@mui/material";
// // import { Box } from "@mui/material";

// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// import HomeIcon from "@mui/icons-material/Home";
// import BiotechIcon from "@mui/icons-material/Biotech";
// import EngineeringIcon from "@mui/icons-material/Engineering";
// // import ElectricalServicesIcon from '@mui/icons-material/ElectricalServices';
// import ConnectWithoutContactIcon from "@mui/icons-material/ConnectWithoutContact";
// // import Button from "@mui/material/Button";

// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// // import { useTheme } from "@mui/material/styles";

// const menuItems = [
//   { title: "Home", link: "/", icon: <HomeIcon /> },
//   {
//     title: "About Us",
//     link: "/aboutus",
//     icon: <BiotechIcon />,
//     end: <ArrowDropDownIcon />,
//   },
//   {
//     title: "Service",
//     link: "/service/projects",
//     icon: <EngineeringIcon />,
//     end: <ArrowDropDownIcon />,
//     sub: [
//       { title: "Services", link: "/service/projects" },
//       { title: "Acmv", link: "/service/acmv" },
//       {
//         title: "Kitchen Exhaust System",
//         link: "/service/kitchen-exhaust-system",
//       },
//       {
//         title: "Electrical Services",
//         link: "/service/electrical-services",
//       },
//       {
//         title: "Scaffolding work",
//         link: "/service/scaffolding-work",
//       },
//       {
//         title: "Glass & Aluminum Work",
//         link: "/service/glass-aluminum-work",
//       },
//       {
//         title: "Construction",
//         link: "/service/construction",
//       },
//     ],
//   },
//   {
//     title: "Contact Us",
//     link: "/contact",
//     icon: <ConnectWithoutContactIcon />,
//   },
// ];
// const ListComp = (props) => {
//   // const theme = useTheme();
//   const [anchorEl, setAnchorEl] = useState(null);

//   const handleMenuClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };
//   return (
//     <List
//       sx={{ display: { xs: "block", md: "flex" }, fontWeight: "bold" }}
//       onClick={props.onClick}
//     >
//       {menuItems.map((item, i) => (
//         <NavLink
//           to={item.link}
//           key={i}
//           className={({ isActive }) => (isActive ? "active" : "inactive")}
//           exact="true"
//         >
//           <ListItemButton
//             key={i}
//             onClick={item.sub ? handleMenuClick : handleMenuClose}
//             onMouseOver={item.sub ? handleMenuClick : handleMenuClose}
//             // onMouseLeave={handleMenuClose}
//             sx={{
//               borderRadius: 5,
//               boxShadow: {
//                 xs: "inset -5px -5px 7px #ffffffb0,inset  3px 3px 5px rgba(94, 104, 121, 0.692)",
//                 md: "none",
//               },
//             }}
//           >
//             <ListItemIcon>
//               {item.icon}
//               <ListItemText
//                 primary={item.title}
//                 primaryTypographyProps={{
//                   fontWeight: "inherit",
//                 }}
//               />
//               {item.end}
//             </ListItemIcon>
//           </ListItemButton>
//           {item.sub && (
//             <>
//               <Menu
//                 id="simple-menu"
//                 anchorEl={anchorEl}
//                 keepMounted
//                 open={Boolean(anchorEl)}
//                 onClose={handleMenuClose}
//               >
//                 {item.sub.map((item, i) => (
//                   <MenuItem
//                     onClick={handleMenuClose}
//                     component={NavLink}
//                     to={item.link}
//                     key={i}
//                   >
//                     {item.title}
//                   </MenuItem>
//                 ))}
//               </Menu>
//             </>
//           )}
//         </NavLink>
//       ))}
//     </List>
//   );
// };
// export default ListComp;

// import React, { useState } from "react";
// import List from "@mui/material/List";
// import ListItemText from "@mui/material/ListItemText";
// import { NavLink } from "react-router-dom";
// // import HomeIcon from "@mui/icons-material/Home";
// import {
//   Box,
//   ListItemButton,
//   ListItemIcon,
//   // ListItemSecondaryAction,
// } from "@mui/material";
// // import { Box } from "@mui/material";
// import { useTheme } from "@mui/material/styles";
// import { menuItems } from "./Data";
// // import Typography from '@mui/material/Typography';

// // import Button from "@mui/material/Button";

// import SubMenu from "./SubMenu";

// const ListComp = (props) => {
//   const theme = useTheme();

//   const [anchorEl, setAnchorEl] = useState();
//   const [open, setOpen] = useState(false);

//   const handleMenuClick = (e) => {
//     setAnchorEl(e.currentTarget);
//     console.log(e);
//     // props.setAnchorEl(event.currentTarget);
//     setOpen(true);
//   };
//   // const handleMenuClose = () => {
//   //   setAnchorEl(null);
//   //   setOpen(false);
//   // };
//   const handleMenuClose = (e) => {
//     if (e.currentTarget.localName !== "ul") {
//       const menu = document.getElementById("simple-menu").children[2];
//       const menuBoundary = {
//         left: menu.offsetLeft,
//         top: e.currentTarget.offsetTop + e.currentTarget.offsetHeight,
//         right: menu.offsetLeft + menu.offsetHeight,
//         bottom: menu.offsetTop + menu.offsetHeight,
//       };
//       if (
//         e.clientX >= menuBoundary.left &&
//         e.clientX <= menuBoundary.right &&
//         e.clientY <= menuBoundary.bottom &&
//         e.clientY >= menuBoundary.top
//       ) {
//         return;
//       }
//     }

//     setOpen(false);
//   };

//   theme.props = {
//     MuiList: {
//       onMouseLeave: (e) => {
//         handleMenuClose(e);
//       },
//     },
//   };
//   return (
//     <List
//       sx={{ display: { xs: "block", md: "flex" }, fontWeight: "bold" }}
//       onClick={props.onClick}
//     >
//       {menuItems.map((item, i) =>
//         item.sub ? (
//           <Box key={i}>
//             <ListItemButton
//               key={i}
//               id={i}
//               onClick={(e) => handleMenuClick(e)}
//               onMouseOver={handleMenuClick}
//               // aria-owns={open ? "simple-menu" : undefined}
//               // aria-haspopup="true"
//               // onMouseEnter={handleMenuClick}
//               // onMouseLeave={handleMenuClose}

//               style={{ zIndex: 10 }}
//               sx={{
//                 borderRadius: 5,
//                 boxShadow: {
//                   xs: "inset -5px -5px 7px #ffffffb0,inset  3px 3px 5px rgba(94, 104, 121, 0.692)",
//                   md: "none",
//                 },
//               }}
//             >
//               <ListItemIcon>
//                 {item.icon}
//                 <ListItemText
//                   primary={item.title}
//                   primaryTypographyProps={{
//                     fontWeight: "inherit",
//                   }}
//                 />
//                 {item.end}
//               </ListItemIcon>
//             </ListItemButton>

//             <SubMenu
//               anchorEl={anchorEl}
//               open={open}
//               close={handleMenuClose}
//               item={item.sub}
//             />
//           </Box>
//         ) : (
//           <NavLink
//             to={item.link}
//             key={i + 3}
//             className={({ isActive }) => (isActive ? "active" : "inactive")}
//             exact="true"
//           >
//             <ListItemButton
//               key={i}
//               // onClick={item.sub ? handleMenuClick : handleMenuClose}
//               // onMouseOver={item.sub ? handleMenuClick : handleMenuClose}
//               // onMouseLeave={handleMenuClose}
//               style={{ zIndex: 10 }}
//               sx={{
//                 borderRadius: 5,
//                 boxShadow: {
//                   xs: "inset -5px -5px 7px #ffffffb0,inset  3px 3px 5px rgba(94, 104, 121, 0.692)",
//                   md: "none",
//                 },
//               }}
//             >
//               <ListItemIcon>
//                 {item.icon}
//                 <ListItemText
//                   primary={item.title}
//                   primaryTypographyProps={{
//                     fontWeight: "inherit",
//                   }}
//                 />
//                 {item.end}
//               </ListItemIcon>
//             </ListItemButton>
//           </NavLink>
//         )
//       )}
//     </List>
//   );
// };
// export default ListComp;

// import React from "react";
// import { NavLink } from "react-router-dom";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// // import Popover from "@mui/material/Popover";

// const SubMenu = (props) => {
//   //   console.log(props);
//   return (
//     <Menu
//       id="simple-menu"
//       //   sx={{
//       //     pointerEvents: "none",
//       //   }}
//       keepMounted
//       anchorEl={props.anchorEl}
//       anchorOrigin={{
//         vertical: "bottom",
//         horizontal: "left",
//       }}
//       open={props.open}
//       // open={Boolean(anchorEl)}
//       onClose={props.close}
//       disableRestoreFocus
//     >
//       {props.item.map((item, i) => (
//         <MenuItem
//           onClick={props.close}
//           component={NavLink}
//           to={item.link}
//           key={i}
//         >
//           {item.title}
//         </MenuItem>
//       ))}
//     </Menu>
//   );
// };

// export default SubMenu;
