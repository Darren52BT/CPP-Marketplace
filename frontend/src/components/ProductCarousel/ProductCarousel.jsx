/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { useState } from "react";
import ProductCarouselItem from "./ProductCarouselItem";
import { Carousel, CarouselItem } from "react-bootstrap";

// eslint-disable-next-line react/prop-types
export default function ProductCarousel({ products }) {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel activeIndex={index} onSelect={handleSelect} value={3000} wrap>
      {products.map((product, productIndex) => (
        <CarouselItem>
          <ProductCarouselItem
            key={productIndex}
            productImage={product.image}
          />
        </CarouselItem>
      ))}
    </Carousel>
  );
}