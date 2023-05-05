import React from "react";
import { Box, Typography } from "@mui/material";

import { useInView } from "react-intersection-observer";
import Collapse from "@mui/material/Collapse";
import HeroCards from "./HeroCards";
// import Slide from "@mui/material/Slide";
// import Grow from "@mui/material/Grow";
// import Zoom from '@mui/material/Zoom';

const Hero2 = () => {
  const { ref: cardRef, inView: cardIsVisible } = useInView();
  // console.log(cardIsVisible);

  return (
    <Box sx={{ py: 7 }} ref={cardRef}>
      <Typography variant="h3" sx={{ pb: 5, fontWeight: "bold" }}>
        Why Choose Us
        {/* {cardIsVisible ? " Why s" : "Why Choose Us"} */}
      </Typography>
      <Collapse
        orientation="horizontal"
        in={cardIsVisible}
        collapsedSize={"50%"}
        mountOnEnter
        unmountOnExit
        timeout={2000}
      >
        <HeroCards />
      </Collapse>
    </Box>
  );
};

export default Hero2;
