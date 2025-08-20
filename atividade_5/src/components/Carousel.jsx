import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

const Carousel = () => {
  return (
    <div className="p-4 lg:w-3/4 lg:mx-auto lg:h-3/4 h-72">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={15}
        slidesPerView={2.5}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img
            src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/d7px1FQxW4tngdACVRsCSaZq0Xl.jpg"
            className="w-full h-64 sm:h-64 md:h-56 lg:h-100 lg:w-auto"
            alt="imagem de filme teste"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"
            className="w-full h-64 sm:h-64 md:h-56 lg:h-100 lg:w-auto hover:scale-105 transition-transform duration-300"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/xRWht48C2V8XNfzvPehyClOvDni.jpg"
            className="w-full h-64 sm:h-64 md:h-56 lg:h-100 lg:w-auto hover:scale-105 transition-transform duration-300"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/4DK6wWZTp6v32NUXszkHOPGxm16.jpg"
            className="w-full h-64 sm:h-64 md:h-56 lg:h-100 lg:w-auto hover:scale-105 transition-transform duration-300"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/lBomQFW1vlm1yUYMNSbFZ45R4Ox.jpg"
            className="w-full h-64 sm:h-64 md:h-56 lg:h-100 lg:w-auto hover:scale-105 transition-transform duration-300"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/cij4dd21v2Rk2YtUQbV5kW69WB2.jpg"
            className="w-full h-64 sm:h-64 md:h-56 lg:h-100 lg:w-auto hover:scale-105 transition-transform duration-300"
            alt=""
          />
        </SwiperSlide>
        ...
      </Swiper>
    </div>
  );
};

export default Carousel;
