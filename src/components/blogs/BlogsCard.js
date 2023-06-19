// import { Box } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { CardActionArea, CardActions } from "@mui/material";
import { Link } from "react-router-dom";
// import { blogs } from "./BlogsData";

const BlogsCard = (props) => {
  return (
    <Card
      sx={{ maxWidth: 345, mb: 5, textDecoration: "none" }}
      component={Link}
      to={props.to}
      // state={{ data: blogs[props.i] }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="190"
          image={props.img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5">
            {props.head}
          </Typography>
          {/* <Typography variant="body2" color="text.secondary">
            {props.body}
          </Typography> */}
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          component={Link}
          to={props.to}
          sx={{ ml: "auto", color: "#44476a" }}
        >
          Learn more
        </Button>
      </CardActions>
    </Card>
  );
};

export default BlogsCard;
