import { Box } from "@mui/material";
import React from "react";
// import { Outlet } from "react-router-dom";
import BlogsCard from "./BlogsCard";
import { blogs } from "./BlogsData";
import Seo from "../../main/Seo";
const Blogs = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        gap: 3,
        p: 5,
      }}
    >
      <Seo
        title="Blogs | D M H"
        description="A comprehensive resource for all things related to air conditioning, electrical systems, construction, kitchen exhaust, scaffolding, and glass & aluminum work."
        name="D M H"
        type="Blogs page "
        url="https://dmhgroup.com.sg/blogs"
      />
      {blogs.map((item, i) => (
        <BlogsCard
          key={i}
          // i={i}
          head={item.head}
          body={item.body}
          to={`/blogs/${item.head.replace(/\s+/g, "-").toLowerCase()}`}
          img={item.img}
        />
      ))}
      {/* <BlogsCard /> */}
    </Box>
  );
};

export default Blogs;
