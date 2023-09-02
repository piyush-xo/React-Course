import React from 'react';
import img from "../assets/rikzzz.jpeg";
import imgPlaceholder from "../assets/rikzzz_placeholder.jpg";
import { LazyLoadImage } from 'react-lazy-load-image-component';

function LazyImage() {
  return (
    // <img src={img} width="100%" alt="Rikzzz"/>
    <LazyLoadImage src={img} placeholderSrc={imgPlaceholder} width="100%" height="auto" alt="Rikzzz"/>
  )
}

export default LazyImage;