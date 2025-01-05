import React, { useState } from "react";
import rasimlar from "../../../../assets/img/Amerka.jpg";
import Swaperkorupsiya from "../../../../components/Swaperkorupsiya";

const Korupsiyagaqarshikurash = () => {
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
    <div className="container max-w-[1210px] mx-auto mt-[200px] px-4 sm:px-6 lg:px-8">
      {/* Profile Section */}
      <div className="flex flex-wrap md:flex-nowrap border-5 rounded-xl shadow-xl border-blue-500 mb-10 bg-gray-100">
        <div className="w-full md:w-[319px] bg-gray-200 rounded-tl-xl flex justify-center items-center md:pt-[80px] pb-20 py-6">
          <img
            src=''
            alt="Image"
            className="border-4 border-blue-500 rounded-full w-24 h-24 md:w-32 md:h-32"
          />
        </div>
        <div className="w-full md:w-[450px] px-4 py-6 md:py-0">
          <h1 className="text-center text-lg md:text-2xl font-semibold">
            KORRUPSIYAGA QARSHI KURASHISH BO'LIMI
          </h1>
          <div className="mt-4 space-y-2">
            <p>
              <strong>F.I.O.:</strong> <span>_________________</span>
            </p>
            <p>
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
          <p className="description mt-4 text-sm">
            Navoy davlat universitetida Korruptsiyaga qarshi kurashish
            “Kompleans nazorat” tizimini boshqarish bo'limi...
          </p>
        </div>
      </div>

      {/* Footer Text */}
      <p className="footer-text text-sm leading-relaxed">
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

      {/* Swaperkorupsiya Component */}
      <Swaperkorupsiya />

      {/* Documents Section */}
      <div className="mt-10 space-y-6">
        <div className="w-full shadow-xl rounded-lg py-4 px-6 bg-gray-100">
          <h2 className="text-lg font-semibold">Bo'lim Hujjatlari</h2>
          <ul className="mt-2 space-y-2">
            <li>
              <a className="text-blue-600 font-bold" href="#">
                Korruptsiyaga Qarshi Kurashish Qonuni
              </a>
            </li>
            <li>
              <a className="text-blue-600 font-bold" href="#">
                2020-2021 Yillarda Korruptsiyaga Qarshi Kurashish Bo'yicha
                Amaliyotlar
              </a>
            </li>
            <li>
              <a className="text-blue-600 font-bold" href="#">
                Korruptsiyaga Qarshi Kurashish Tizimini Rasmiylashtirish
              </a>
            </li>
            <li>
              <a className="text-blue-600 font-bold" href="#">
                Hujjatlar va Hisobotlar
              </a>
            </li>
          </ul>
        </div>

        <div className="w-full shadow-xl rounded-lg py-4 px-6 bg-gray-100">
          <h2 className="text-lg font-semibold">
            Manfatlar to'qnashuvi bo'yicha namunaviy deklaratsiya 2024-yil
          </h2>
          <ul className="mt-2">
            <li>
              <a className="text-blue-600 font-bold" href="#">
                Manfaatlar to'qnashuvi bo'yicha namunaviy deklaratsiyani ko'rish
                va yuklab olish
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Korupsiyagaqarshikurash;
