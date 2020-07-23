import React from "react";

import "./Carousel.css";

const Carousel = () => {
  return (
    <div
      id="carouselExampleFade"
      className="carousel slide carousel-fade"
      data-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active" data-interval="4000">
          <div className="d-block w-100" id="Home-carousel-image-1" />
        </div>
        <div className="carousel-item" data-interval="4000">
          <div className="d-block w-100" id="Home-carousel-image-2" />
        </div>
        <div className="carousel-item" data-interval="4000">
          <div className="d-block w-100" id="Home-carousel-image-3" />
        </div>
        <div className="carousel-item" data-interval="4000">
          <div className="d-block w-100" id="Home-carousel-image-4" />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
