import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import mygovuz from "./imgs/mygovuz (1).png";
import mlykutubxona from "./imgs/100.jfif";
import gerb from "./imgs/gerb_uzbekistana.png";
import ziyonet from "./imgs/Ziyonet.jfif";
import inavatsiyalar from "./imgs/vazirlik.jfif";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import "./swaper.css";

// Import required modules
import { Navigation, Autoplay } from "swiper/modules";

export default function Linksewaper() {
  return (
    <div className="py-10 px-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-5 text-gray-800 text-center">
        Foydali havolalar
      </h1>
      <div className="w-full mx-auto">
      <Swiper
  navigation={true}
  autoplay={{
    delay: 5000,
    disableOnInteraction: false,
  }}
  speed={1000}
  slidesPerView={3} 
  spaceBetween={0} 
  breakpoints={{
    300: {
      slidesPerView: 1, 
      spaceBetween: 0, 
    },
    640: {
      slidesPerView: 2, 
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 3, 
      spaceBetween: 20, 
    },
  }}
  modules={[Navigation, Autoplay]}
  className="mySwiper rounded-lg bg-white"
>

          {/* Slayd 1 */}
          <SwiperSlide className="h-[200px] flex items-center justify-center">
            <div className="bg-white w-full max-w-[300px] h-full px-4 py-4 rounded-xl shadow-md flex flex-col justify-between items-center">
              <div className="flex flex-col items-center gap-2">
                <img
                  src={mygovuz}
                  alt="MyGov"
                  className="object-contain h-[50px] w-[50px]"
                />
                <p className="text-lg font-semibold text-center">
                  Yagona interaktiv davlat xizmatlari portali
                </p>
              </div>
              <div className="text-left mt-2">
                <a
                  href="https://my.gov.uz/oz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline hover:text-blue-700"
                >
                  https://my.gov.uz/oz
                </a>
              </div>
            </div>
          </SwiperSlide>

          {/* Slayd 2 */}
          <SwiperSlide className="h-[200px] flex items-center justify-center">
            <div className="bg-white w-full max-w-[300px] h-full px-4 py-4 rounded-xl shadow-md flex flex-col justify-between items-center">
              <div className="flex flex-col items-center gap-2">
                <img
                  src={mlykutubxona}
                  alt="Kutubxona"
                  className="object-contain h-[50px] w-[50px]"
                />
                <p className="text-lg font-semibold text-center">
                  ALISHER NAVOIY NOMIDAGI O'ZBEKISTON MILLIY KUTUBXONASI
                </p>
              </div>
              <div className="text-left mt-2">
                <a
                  href="http://natlib.uz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline hover:text-blue-700"
                >
                  http://natlib.uz/
                </a>
              </div>
            </div>
          </SwiperSlide>

          {/* Slayd 3 */}
          <SwiperSlide className="h-[200px] flex items-center justify-center">
            <div className="bg-white w-full max-w-[300px] h-full px-4 py-4 rounded-xl shadow-md flex flex-col justify-between items-center">
              <div className="flex flex-col items-center gap-2">
                <img
                  src={ziyonet}
                  alt="Ziyonet"
                  className="object-contain h-[50px] w-[50px]"
                />
                <p className="text-lg font-semibold text-center">
                  Ziyonet ta'lim portali
                </p>
              </div>
              <div className="text-left mt-2">
                <a
                  href="https://ziyonet.uz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline hover:text-blue-700"
                >
                  https://ziyonet.uz
                </a>
              </div>
            </div>
          </SwiperSlide>

          {/* Slayd 4 */}
          <SwiperSlide className="h-[200px] flex items-center justify-center">
            <div className="bg-white w-full max-w-[300px] h-full px-4 py-4 rounded-xl shadow-md flex flex-col justify-between items-center">
              <div className="flex flex-col items-center gap-2">
                <img
                  src={gerb}
                  alt="Gerb"
                  className="object-contain h-[50px] w-[50px]"
                />
                <p className="text-lg font-semibold text-center">
                  O'zbekiston Respublikasi Prezidenti rasmiy veb-sayti
                </p>
              </div>
              <div className="text-left mt-2">
                <a
                  href="https://ziyonet.uz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline hover:text-blue-700"
                >
                  https://ziyonet.uz
                </a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
