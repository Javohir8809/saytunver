import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./styles.css";
import rasimlar1 from '../assets/swagerimg/SamDU Kattaqorgon Render 01.jpg';
import rasimlar from '../assets/swagerimg/SamDU Kattaqorgon Render 02.jpg';
import rasimlar3 from '../assets/swagerimg/SamDU Kattaqorgon Render 04.jpg';
import rasimlar4 from '../assets/swagerimg/SamDU Kattaqorgon Render 05.jpg';
import rasimlar5 from '../assets/swagerimg/SamDU Kattaqorgon Render 00.jpg';

import { Pagination, Navigation, Autoplay } from "swiper/modules";

export default function App() {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      autoplay={{
        delay: 3000,  // Set the delay for switching slides (3 seconds)
        disableOnInteraction: false,  // Allows autoplay to continue even after interaction
      }}
      modules={[Pagination, Navigation, Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide><img className="w-full h-auto" src={rasimlar1} alt="imgSamdukf" /></SwiperSlide>
      <SwiperSlide><img className="w-full h-auto" src={rasimlar} alt="imgSamdukf" /></SwiperSlide>
      <SwiperSlide><img className="w-full h-auto" src={rasimlar3} alt="imgSamdukf" /></SwiperSlide>
      <SwiperSlide><img className="w-full h-auto" src={rasimlar4} alt="imgSamdukf" /></SwiperSlide>
      <SwiperSlide><img className="w-full h-auto" src={rasimlar} alt="imgSamdukf" /></SwiperSlide>
      <SwiperSlide><img className="w-full h-auto" src={rasimlar} alt="imgSamdukf" /></SwiperSlide>
      <SwiperSlide><img className="w-full h-auto" src={rasimlar} alt="imgSamdukf" /></SwiperSlide>
    </Swiper>
  );
}
