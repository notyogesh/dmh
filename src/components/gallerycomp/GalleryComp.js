import React from "react";
import {
  Container,
  Box,
  //  Paper,
  Divider,
} from "@mui/material";
import { Typography } from "@mui/material";
import { imagesData } from "./GalleryImageData";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const GalleryComp = () => {
  // const reversedImageArray = [...images].reverse();

  return (
    <Box
      sx={{ backgroundColor: "#F3F0F1", p: { xs: 1, md: 5 }, color: "#31344B" }}
    >
      <Container>
        <div style={{ display: "flex" }}>
          <Typography
            variant="h3"
            align="center"
            gutterBottom
            sx={{
              bgcolor: "#31344B",
              color: "#F3F0F1",
              mx: "auto",
              px: 2,
              borderRadius: "3px",
            }}
          >
            Our Recent Works
          </Typography>
        </div>

        {imagesData
          .slice(0)
          .reverse()
          .map((item, i) => (
            <Box
              key={i}
              sx={{ display: "flex", flexDirection: "column", pt: 3 }}
            >
              <Typography
                variant="h4"
                align="center"
                sx={{ textDecoration: "underline" }}
                gutterBottom
              >
                {item.head}
              </Typography>
              <ImageGallery
                items={item.images}
                showNav={true}
                showPlayButton={false}
                autoPlay
                thumbnailPosition="left"
                showFullscreenButton={false}
              />

              {/* <Box sx={{ display: "flex", overflowX: "auto", padding: "16px" }}>
                {" "}
                {item.img.map((im, i) => (
                  <Box key={i} sx={{ flex: "0 0 auto", marginRight: "16px" }}>
                    <Paper sx={{ height: "200px" }}>
                      <img
                        src={im}
                        alt={`gallery ${i + 1}`}
                        style={{ width: "100%", maxHeight: "200px" }}
                      />
                    </Paper>
                  </Box>
                ))}
              </Box>{" "} */}
              <Divider sx={{ py: 2 }} />
            </Box>
          ))}
      </Container>
    </Box>
  );
};

export default GalleryComp;
