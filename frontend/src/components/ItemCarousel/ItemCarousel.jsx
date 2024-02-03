import React, {useState} from 'react';
import {Image, Carousel, CarouselItem } from "react-bootstrap";

const ItemCarousel = ({images}) => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect} value={3000} wrap>
      {images.map((image, imageIndex) => (
        <CarouselItem key={imageIndex}>
          <Image
            src ={image.image}
          />
        </CarouselItem>
      ))}
    </Carousel>
  );
};

export default ItemCarousel;

