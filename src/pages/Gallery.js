import React from "react";
import GalleryComp from "../components/gallerycomp/GalleryComp";
import Seo from "../main/Seo";

const Gallery = () => {
  return (
    <div>
      <Seo
        title="Gallery | DMH "
        description="Experience DMH's recent works in construction and engineering through our captivating gallery. Witness our expertise in our variety of services."
        name="D M H"
        type="DMH Gallery page"
        url="https://dmhgroup.com.sg/gallery"
      />
      <GalleryComp />
    </div>
  );
};

export default Gallery;
