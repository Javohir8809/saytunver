import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// Import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Swaperkorupsiya = () => {
  return (
    <Swiper 
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
    //   pagination={{
    //     clickable: true,
    //   }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper mt-5"
    >
      <SwiperSlide className="flex justify-center items-center bg-blue-500 text-white text-lg font-bold h-40 rounded-lg shadow-md">
        Slide 1
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center bg-green-500 text-white text-lg font-bold h-40 rounded-lg shadow-md">
        Slide 2
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center bg-red-500 text-white text-lg font-bold h-40 rounded-lg shadow-md">
        Slide 3
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center bg-yellow-500 text-white text-lg font-bold h-40 rounded-lg shadow-md">
        Slide 4
      </SwiperSlide>
      <SwiperSlide className="flex justify-center items-center bg-purple-500 text-white text-lg font-bold h-40 rounded-lg shadow-md">
        Slide 5
      </SwiperSlide>
    </Swiper>
  );
};

export default Swaperkorupsiya;
