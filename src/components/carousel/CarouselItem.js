import React from "react";

/* Module style */
import "./Carousel.css";

const CarouselItem = ({children, width}) => {
  return (
    <div className="carousel-item" style={{width: width}}>
      {children}
    </div>
  );
};

export default CarouselItem;
