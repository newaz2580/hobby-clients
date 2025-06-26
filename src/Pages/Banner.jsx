import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
const Banner = () => {
  return (
    <div id="dark" className="text">
      <h2 className="text-center py-5 font-bold text-4xl  text-orange-600 ">
        Hobby Group 
      </h2>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 2500 }}
        pagination={{ clickable: true }}
        loop={true}
      >
        <SwiperSlide>
          <img
            src="https://i.ibb.co/7JXzwQ9Q/fishing.webp"
            alt="Slide 1"
            className="w-full lg:h-[650px] object-fit rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/DgQWF3fr/travel.webp"
            alt="Slide 2"
            className="w-full lg:h-[650px] object-fit rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/k2Zh5nYD/cooking-hobby.webp"
            alt="Slide 3"
            className="w-full lg:h-[650px] object-fit rounded-lg"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
