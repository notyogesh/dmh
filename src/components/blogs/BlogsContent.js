// import { Button } from "@mui/material";
import React from "react";
import { useParams } from "react-router-dom";
// import { useLocation } from "react-router-dom";
import Btn1 from "../../utils/Btn1";
import TextSnippetIcon from "@mui/icons-material/TextSnippet";
// import { Typography } from "@mui/material";
import { blogs } from "./BlogsData";
import { Box, Typography } from "@mui/material";
import Seo from "../../main/Seo";
const BlogsContent = () => {
  const params = useParams();
  // const location = useLocation();
  // const data = location.state?.data;

  const filteredData = blogs.find(
    (item) => item.head.replace(/\s+/g, "-").toLowerCase() === params.blogName
  );

  // const filteredData = blogs[data];
  return (
    <div>
      <Seo
        title={filteredData.head}
        description="A comprehensive resource for all things related to air conditioning, electrical systems, construction, kitchen exhaust, scaffolding, and glass & aluminum work."
        name="D M H"
        type="Blogs page "
      />
      <Box sx={{ display: "flex", p: { xs: 1, md: 5 } }}>
        <Btn1 to="/blogs" icon={<TextSnippetIcon />} sx={{ ml: "auto" }}>
          All Blogs
        </Btn1>
      </Box>

      <Box sx={{ p: { xs: 1, md: 5 } }}>
        <Box sx={{ width: { xs: "90vw", md: "50vw" }, mx: "auto" }}>
          <img
            src={filteredData.img}
            alt={filteredData.head}
            style={{ width: "inherit" }}
          />
        </Box>

        <Typography variant="h4" sx={{ py: 2 }}>
          {filteredData.head}
        </Typography>
        <Box>{filteredData.body}</Box>
      </Box>

      {/* <Typography variant="h3">{state.data.head}</Typography> */}
    </div>
  );
};

export default BlogsContent;
