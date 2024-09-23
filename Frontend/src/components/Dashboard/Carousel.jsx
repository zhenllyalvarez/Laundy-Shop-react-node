import React from "react";

const Carousel = () => {
  return (
    <div className="flex max-w-full justify-center py-12">
      <div className="">
        <div className="carousel-item">
          <img
            className="flex max-h-96 w-[500px]"
            src="../../src/assets/img/2.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
