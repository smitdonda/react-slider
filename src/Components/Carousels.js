import React from "react";
import Carousel from "react-bootstrap/Carousel";
import data from "./Carousels.json";

function ReactCarousels() {
  return (
    <div className="d-flex flex-row justify-content-center align-items-center">
      <div>
        <h3 className="my-3">Carousel</h3>
        <Carousel className="carousel-main" touch={true}>
          {data.map(({ image, altName }) => {
            return (
              <Carousel.Item>
                <img
                  className="carousel-img"
                  src={image}
                  alt={altName}
                  width="650px"
                  height="380px"
                />
              </Carousel.Item>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}

export default ReactCarousels;
