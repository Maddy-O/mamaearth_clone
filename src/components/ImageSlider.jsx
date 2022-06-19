import { Image } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageSlider = ({ slides }) => {
  return (
    <Carousel autoPlay={"true"} infiniteLoop showThumbs={false}>
      {slides.map((slide) => {
        return (
          <Image key={slide.id} src={slide.image} height="auto" width="800px" />
        );
      })}
    </Carousel>
  );
};

export default ImageSlider;
