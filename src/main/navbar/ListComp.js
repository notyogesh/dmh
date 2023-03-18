import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import { NavLink } from "react-router-dom";
// import HomeIcon from "@mui/icons-material/Home";
import { ListItemButton, ListItemIcon } from "@mui/material";
// import { makeStyles } from "@mui/material/styles";
import makeStyles from "@mui/styles/makeStyles";

const useStyles = makeStyles((theme) => ({
  active: {
    // textDecoration: "none",
    color: theme.palette.text.secondary,
    fontWeight: "bold",
    // border: "1px solid deeppink",
  },
  inactive: {
    textDecoration: "none",
    color: theme.palette.text.inactive,
    // opacity: 1;
    fontWeight: "lighter",
  },
}));
const menuItems = [
  { title: "Home", link: "/" },
  { title: "About Us", link: "/aboutus" },
  { title: "Projects", link: "/projects" },
  { title: "Contact Us", link: "/contact" },
];
const ListComp = () => {
  const classes = useStyles();

  return (
    <List sx={{ display: { xs: "block", md: "flex" }, fontWeight: "bold" }}>
      {" "}
      {menuItems.map((item, i) => (
        <ListItemButton key={i}>
          <ListItemIcon>
            <NavLink
              to={item.link}
              className={({ isActive }) =>
                isActive ? classes.active : classes.inactive
              }
            >
              <ListItemText
                primary={item.title}
                primaryTypographyProps={{
                  fontWeight: "inherit",
                }}
              />
            </NavLink>
          </ListItemIcon>
        </ListItemButton>
      ))}
    </List>
  );
};
export default ListComp;
