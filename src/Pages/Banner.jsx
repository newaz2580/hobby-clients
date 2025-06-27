import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Banner = () => {
  return (
    <div id="dark" className="text">
      <h2 className="text-center py-5 font-bold text-4xl text-blue-800">
        Hobby Group
      </h2>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        autoplay={{ delay: 2500 }}
        pagination={{ clickable: true }}
        loop={true}
        className=" h-[400px] rounded-lg"
      >
        <SwiperSlide>
          <img
            src="https://i.ibb.co/vCPL0xtB/jonathan-zerger-yzz-Jbq-Q1-O-Y-unsplash.jpg"
            alt="Slide 1"
            className="w-full  h-full object-cover rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/jvRxZ7G5/neom-e-OWabm-CNEdg-unsplash.jpg"
            alt="Slide 2"
            className="w-full h-full object-cover rounded-lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/LDfTrYtZ/mesut-kaya-e-Ocyhe5-9s-Q-unsplash.jpg"
            alt="Slide 3"
            className="w-full h-full object-cover rounded-lg"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
