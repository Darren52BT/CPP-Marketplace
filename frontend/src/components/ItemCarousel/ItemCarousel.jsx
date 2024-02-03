import React, {useState} from 'react';
import {Image, Carousel, CarouselItem } from "react-bootstrap";
import "./ItemCarousel.css"
const ItemCarousel = ({images}) => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect} value={3000} wrap>
      {images.map((image, imageIndex) => (
        <CarouselItem key={imageIndex} style={{
          display: "flex",
          justifyContent:"center",
          marginTop:"2%"
        }}>
          <Image
            src ={image.image}
            style={{
              height: "400px",
              objectFit:"cover",
              margin: "auto"
              // paddingLeft: "40%",
              // paddingRight:"40%",
              // paddingTop: "2%",
              // paddingBottom: "5%"
            }}
          />
        </CarouselItem>
      ))}
    </Carousel>
  );
};

export default ItemCarousel;
