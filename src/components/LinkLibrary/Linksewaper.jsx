import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import './swaper.css';

// Import required modules
import { Navigation, Autoplay } from 'swiper/modules';

export default function Linksewaper() {
  return (
    <div className="bg-gray-100 py-10">
      <h1 className="text-center text-2xl font-bold mb-5 text-gray-800">
        Swiper with Smooth Transition
      </h1>
      <div className="w-full mx-auto">
        <Swiper
          navigation={true} // Navigation tugmalari
          autoplay={{
            delay: 5000, // Har 3 soniyada o'zgarish
            disableOnInteraction: false, // Foydalanuvchi aralashuvida autoplay davom etadi
          }}
          speed={1000} // 1 soniya davomida slayder tranzitsiyasi
          modules={[Navigation, Autoplay]} // Modullar
          className="mySwiper rounded-lg shadow-lg"
        >
          <SwiperSlide className="flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold text-xl h-48">
            Slide 1
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center bg-gradient-to-r from-green-500 to-green-700 text-white font-bold text-xl h-48">
            Slide 2
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center bg-gradient-to-r from-red-500 to-red-700 text-white font-bold text-xl h-48">
            Slide 3
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center bg-gradient-to-r from-yellow-500 to-yellow-700 text-white font-bold text-xl h-48">
            Slide 4
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center bg-gradient-to-r from-purple-500 to-purple-700 text-white font-bold text-xl h-48">
            Slide 5
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
