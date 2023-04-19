import React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import StarIcon from "@mui/icons-material/Star";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { CssBaseline } from "@mui/material";

const services = [
  "Aircon Installation",
  "Kitchen Exhaust System",
  "Electrical Services",
  // "Troubleshooting & Repair",
  "Scaffolding Work",
  "Glass & Aluminum Work",
];
const Projects = () => {
  return (
    <Box
      sx={{
        backgroundColor: (theme) => theme.palette.background.default,
        minHeight: "100dvh",
      }}
    >
      <CssBaseline />
      <Typography
        variant="h4"
        sx={{ fontWeight: "bold", py: 4, color: "inherit" }}
      >
        Our Specialised Services
      </Typography>
      <Stack>
        <List sx={{ mx: "auto" }}>
          {services.map((item, i) => (
            <ListItem key={i}>
              <ListItemButton>
                <ListItemIcon>
                  <StarIcon />
                </ListItemIcon>
                <ListItemText
                  primary={item}
                  primaryTypographyProps={{
                    color: (theme) => theme.palette.text,
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Stack>
    </Box>
  );
};

export default Projects;
