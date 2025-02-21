"use client";

import React from "react";

// Swiper components, modules and styles
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Our custom button component
import SliderButtons from "./SliderButtons";
import {MediaCard} from "@zeiss/beyond-online-react";

interface Slide {
  id: number;
  title: string;
  tagline: string;
  image: string;
}

interface DemoSliderProps {
  data: Slide[];
}

const DemoSlider: React.FC<DemoSliderProps> = ({ data }) => {
  return (
    <Swiper
      navigation
      pagination={{ type: "bullets", clickable: true }}
      autoHeight={true}
      cardsEffect={{
        perSlideOffset: 20
      }}
      slidesPerView={1}
      spaceBetween={10}
      breakpoints={{
        376: {
          slidesPerView: 1,
          spaceBetween: 10
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 10
        },
        1028: {
          slidesPerView: 5,
          spaceBetween: 10
        }
      }}
      autoplay={false}
      loop={true}
      modules={[Autoplay, Navigation, Pagination]}
    >
      {data.map(({ id, image, tagline, title }) => (
        <SwiperSlide key={id}>
          <MediaCard
            description={tagline}
            headline={title}
            imageUrl={image}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

/*
slidesPerView: 1,
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  }
 */

export default DemoSlider;
