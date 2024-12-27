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
    <div className="py-10">
      <h1 className=" text-4xl font-bold mb-5 text-gray-800">
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
          modules={[Navigation, Autoplay]}
          className="mySwiper rounded-lg "
        >
          <SwiperSlide className="flex  gap-3   font-bold text-xl h-48">
            <div className="bg-white   w-[400px] h-[150px] px-2 rounded-xl ">
              <div className="flex  pt-5  justify-center">
                <div className="w-[55px] h-auto">
                  <img
                    src={mygovuz}
                    alt=""
                    className="object-contain h-[20px]"
                  />
                </div>
                <div>
                  <p className="text-lg w-[300px] ">
                    Yagona interaktiv davlat xizmatlari portali
                  </p>
                </div>
              </div>
              <div className="text-left px-2 pt-9 pl-2">
                <a
                  className="text-blue-500 underline hover:text-blue-700 pt-2"
                  href="https://my.gov.uz/oz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://my.gov.uz/oz
                </a>
              </div>
            </div>

            <div className="bg-white   w-[400px] h-[150px] px-2 rounded-xl ">
              <div className="flex  pt-5  justify-center">
                <div className="w-[55px] h-auto">
                  <img
                    src={mlykutubxona}
                    alt=""
                    className="object-contain w-[100px] h-[10px]"
                  />
                </div>
                <div>
                  <p className="text-lg w-[300px] ">
                    ALISHER NAVOIY NOMIDAGI O'ZBEKISTON MILLIY KUTUBXONASI
                  </p>
                </div>
              </div>
              <div className="text-left px-2 pt-3 pl-2 text-blue-500 underline hover:text-blue-700">
                <a
                  className=" underline hover:text-blue-700"
                  href=" http://natlib.uz/"
                >
                  http://natlib.uz/
                </a>
              </div>
            </div>

            <div className="bg-white   w-[400px] h-[150px] px-2 rounded-xl ">
              <div className="flex  pt-5  justify-center">
                <div className="w-[55px] h-auto">
                  <img
                    src={ziyonet}
                    alt=""
                    className="object-contain h-[20px]"
                  />
                </div>
                <div>
                  <p className="text-lg w-[300px] ">Ziyonet ta'lim portali </p>
                </div>
              </div>
              <div className="text-left px-2 pt-9 pl-2 ">
                <a
                  className="text-blue-500 underline hover:text-blue-700"
                  href="https://ziyonet.uz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://ziyonet.uz
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="flex items-center justify-center  gap-3   font-bold  h-48">

            <div className="bg-white   w-[400px] h-[150px] px-2 rounded-xl ">
              <div className="flex  pt-5  justify-center">
                <div className="w-[55px] h-auto">
                  <img src={gerb} alt="" className="object-contain h-[20px]" />
                </div>
                <div>
                  <p className="text-lg w-[300px] ">
                    {" "}
                    O'zbekiston Respublikasi Prezidenti rasmiy veb-sayti{" "}
                  </p>
                </div>
              </div>
              <div className="text-left px-2 pt-9 pl-2 ">
                <a
                  className="text-blue-500 underline hover:text-blue-700"
                  href="https://ziyonet.uz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://ziyonet.uz
                </a>
              </div>
            </div>

            <div className="bg-white   w-[400px] h-[150px] px-2 rounded-xl ">
              <div className="flex  pt-5  justify-center">
                <div className="w-[55px] h-auto">
                  <img
                    src={inavatsiyalar}
                    alt=""
                    className="object-contain h-[20px]"
                  />
                </div>
                <div>
                  <p className="text-lg w-[300px] ">
                    O'zbekiston Respublikasi Oliy ta'lim, fan va innovatsiyalar
                    vazirligi
                  </p>
                </div>
              </div>
              <div className="text-left px-2 pt-2 pl-2 ">
                <a
                  className="text-blue-500 underline hover:text-blue-700"
                  href="https://gov.uz/oz/edu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://gov.uz/oz/edu
                </a>
              </div>
            </div>

            <div className="bg-white   w-[400px] h-[150px] px-2 rounded-xl ">
              <div className="flex  pt-5  justify-center">
                <div className="w-[55px] h-auto">
                  <img src={gerb} alt="" className="object-contain h-[20px]" />
                </div>
                <div>
                  <p className="text-lg w-[300px] ">
                    {" "}
                    O'zbekiston Respublikasi Prezidenti rasmiy veb-sayti{" "}
                  </p>
                </div>
              </div>
              <div className="text-left px-2 pt-9 pl-2 ">
                <a
                  className="text-blue-500 underline hover:text-blue-700"
                  href="https://ziyonet.uz"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://ziyonet.uz
                </a>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="flex items-center justify-center  gap-3   font-bold  h-48"></SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
