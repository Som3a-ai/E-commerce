"use client";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/image-gallery.css";

import React from "react";

export default function ProductImages({
  images,
}: {
  images: { original: string; thumbnail: string }[];
}) {
  return (
<ImageGallery
  items={images}
  showNav={false}
  showPlayButton={false}
  showFullscreenButton={false}
  thumbnailPosition="bottom"
  infinite={false}
/>
  );
}
