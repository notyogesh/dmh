import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import { NavLink } from "react-router-dom";
// import HomeIcon from "@mui/icons-material/Home";
import { ListItemButton, ListItemIcon } from "@mui/material";
// import { Box } from "@mui/material";

import { useTheme } from "@mui/material/styles";

const menuItems = [
  { title: "Home", link: "/" },
  { title: "About Us", link: "/aboutus" },
  { title: "Services", link: "/projects" },
  { title: "Contact Us", link: "/contact" },
];
const ListComp = (props) => {
  const theme = useTheme();

  return (
    <List
      sx={{ display: { xs: "block", md: "flex" }, fontWeight: "bold" }}
      onClick={props.onClick}
    >
      {menuItems.map((item, i) => (
        <ListItemButton key={i}>
          <ListItemIcon>
            <NavLink
              to={item.link}
              // className={({ isActive }) =>
              //   isActive ? classes.active : classes.inactive
              // }
              style={({ isActive }) =>
                isActive
                  ? {
                      fontWeight: "bolder",
                      color: theme.palette.text.secondary,
                    }
                  : {
                      textDecoration: "none",
                      fontWeight: "lighter",
                      color: theme.palette.text.inactive,
                    }
              }
            >
              <ListItemText
                primary={item.title}
                primaryTypographyProps={{
                  fontWeight: "inherit",
                }}
              />
            </NavLink>
            {/* <CssBaseline /> */}
          </ListItemIcon>
        </ListItemButton>
      ))}
    </List>
  );
};
export default ListComp;
