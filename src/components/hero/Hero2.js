import React from "react";
import { Box, Typography } from "@mui/material";

import { InView } from "react-intersection-observer";
import HeroCards from "./HeroCards";
// import Slide from "@mui/material/Slide";
// import Grow from "@mui/material/Grow";
// import Zoom from '@mui/material/Zoom';

const Hero2 = () => {
  // const { ref: cardRef, inView: cardIsVisible } = useInView({
  //   triggerOnce: true,
  // });

  return (
    <InView
      triggerOnce
      //  rootMargin={"-200px"}
      threshold={0.3}
    >
      {({ inView, ref }) => (
        <Box sx={{ py: 7 }} ref={ref}>
          <Typography variant="h3" sx={{ pb: 5, fontWeight: "bold" }}>
            Why Choose Us
          </Typography>
          {/* <Collapse
            orientation="horizontal"
            in={inView}
            // collapsedSize={"50%"}
            // mountOnEnter
            // unmountOnExit
            timeout={2000}
          > */}
          <HeroCards inView={inView} />
          {/* </Collapse> */}
        </Box>
      )}
    </InView>
  );
};

export default Hero2;
