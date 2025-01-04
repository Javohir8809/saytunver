import React, { useState } from "react";
import rasimlar from "../../../../assets/img/Amerka.jpg";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import Swiper from "swiper";
import Swaperkorupsiya from "../../../../components/Swaperkorupsiya";

const CorruptionDepartment = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const showSlide = (index) => {
    const slides = document.querySelectorAll(".slider-images img");
    if (index >= slides.length) {
      setCurrentSlide(0);
    } else if (index < 0) {
      setCurrentSlide(slides.length - 1);
    } else {
      setCurrentSlide(index);
    }
  };

  const nextSlide = () => {
    showSlide(currentSlide + 1);
  };

  const prevSlide = () => {
    showSlide(currentSlide - 1);
  };

  return (
    <div className="container  max-w-[1210px] mx-auto mt-[250px] ">
      <div className="flex border-5 rounded-xl shadow-xl border-blue-500  h-[319px] mb-10">
        <div className="bg-[rgb(243,244,246)]   rounded-tl-xl w-[319px] overflow-hidden flex justify-center pt-[80px]">
          <img
            src={rasimlar}
            alt="Image"
            className="profile-img border-4 border-blue-500 rounded-full w-32 h-32"
          />
        </div>
        <div>
          <div className="w-[319px]">
            <h1 className="text-center font-lato text-[24px] w-[450px] pt-4">
              KORRUPSIYAGA QARSHI KURASHISH BO'LIMI
            </h1>
            <div className=" pl-5 ">
              <p>
                <strong>F.I.O.:</strong> <span>_________________</span>
              </p>
              <p className="w-[453px]">
                <strong>Lavozimi:</strong>{" "}
                <span>
                  Korruptsiyaga qarshi kurashish “Kompleans nazorat” tizimini
                  boshqarish bo'limi boshlig'i
                </span>
              </p>
              <p>
                <strong>Ilmiy darajasi va unvoni:</strong>{" "}
                <span>_________________</span>
              </p>
              <p>
                <strong>Telefon:</strong> <span>_________________</span>
              </p>
              <p>
                <strong>E-mail:</strong> <span>_________________</span>
              </p>
            </div>
            <p className="description w-[517px] pl-5 pt-2 ">
              Navoy davlat universitetida Korruptsiyaga qarshi kurashish
              “Kompleans nazorat” tizimini boshqarish bo'limi...
            </p>
          </div>
        </div>
      </div>

      <p className="footer-text">
        Korruptsiyaga qarshi kurashish “Kompleans nazorat” tizimini boshqarish
        bo'limi Navoiy davlat universitetining korruptsiyaga qarshi kurashish
        bo'yicha faoliyatini muvofiqlashtirish, universitetda korruptsiyaga
        qarshi kurashish bo'yicha tashabbuslarni amalga oshirish, korruptsiyaga
        qarshi kurashish bo'yicha mavjud qonun va qoidalarni bajarishni nazorat
        qilish, korruptsiyaga qarshi kurashish bo'yicha xalqaro tajriba va
        amaliyotlarni o'rganish, korruptsiyaga qarshi kurashish bo'yicha
        tashkilotlar va tashkilotlar bilan hamkorlik qilish uchun tashkil
        etilgan bo'lib, universitetning barcha turdagi korruptsiyaga qarshi
        kurashish faoliyatini boshqaradi.
      </p>
      <Swaperkorupsiya  />

      <div className="mt-10">
        <div className="w-full shadow-xl rounded-lg py-2 px-5 bg-[#F3F4F6]">
          <span className="  text-[20px]">Bo'lim Hujjatlari</span>
          <li className="list-none">
            <a className="text-[#003087] font-bold" href="#">Korruptsiyaga Qarshi Kurashish Qonuni</a>
          </li>
          <li className="list-none">
            <a className="text-[#003087] font-bold" href="#">
              {" "}
              2020-2021 Yillarda Korruptsiyaga Qarshi Kurashish Bo'yicha
              Amaliyotlar
            </a>
          </li>
          <li className="list-none">
            <a className="text-[#003087] font-bold" href="#">
              Korruptsiyaga Qarshi Kurashish Tizimini Rasmiylashtirish
            </a>
          </li>
          <li className="list-none">
         
          <a className="text-[#003087] font-bold" href="#"> Hujjatlar va Hisobotlar</a>
          </li>
        </div>

        <div className="mt-10">
        <div className="w-full shadow-xl rounded-lg py-2 px-5 bg-[#F3F4F6]">
          <span className="text-[20px]">Manfatlar to'qnashuvi bo'yicha namunaviy deklaratsiya 2024-yil
          </span>
          <li className="list-none">
            <a className="text-[#003087] font-bold" href="#">Manfaatlar to'qnashuvi bo'yicha namunaviy deklaratsiyani ko'rish va yuklab olish</a>
          </li>
          
        </div>
        </div>
      </div>
    </div>
  );
};

export default CorruptionDepartment;
