import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import rasimlar from "../assets/img/korrupsiya/1.png";
import rasimlar1 from "../assets/img/korrupsiya/2.png";
import rasimlar2 from "../assets/img/korrupsiya/3.png";
import rasimlar3 from "../assets/img/korrupsiya/4.png";
import rasimlar4 from "../assets/img/korrupsiya/5.png";
import rasimlar5 from "../assets/img/korrupsiya/6.png";
import rasimlar6 from "../assets/img/korrupsiya/7.png";
import rasimlar7 from "../assets/img/korrupsiya/8.png";

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
      className="mt-5 w-[680px] h-[680px]"
    >
      <SwiperSlide className="">
      <img
            src={rasimlar}
            alt="Image"
            className=""
          />
      </SwiperSlide>
      <SwiperSlide className="">
      <img
            src={rasimlar1}
            alt="Image"
            className=""
          />
      </SwiperSlide>
      <SwiperSlide className="">
      <img
            src={rasimlar2}
            alt="Image"
            className=""
          />
      </SwiperSlide>
      <SwiperSlide className="">
      <img
            src={rasimlar3}
            alt="Image"
            className=""
          />
      </SwiperSlide>
      <SwiperSlide className="">
      <img
            src={rasimlar4}
            alt="Image"
            className=""
          />
      </SwiperSlide>
      <SwiperSlide className="">
      <img
            src={rasimlar5}
            alt="Image"
            className=""
          />
      </SwiperSlide>
      <SwiperSlide className="">
      <img
            src={rasimlar6}
            alt="Image"
            className=""
          />
      </SwiperSlide>
      <SwiperSlide className="">
      <img
            src={rasimlar7}
            alt="Image"
            className=""
          />
      </SwiperSlide>
    </Swiper>
  );
};

export default Swaperkorupsiya;

