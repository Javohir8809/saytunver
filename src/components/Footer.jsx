import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import rasimimg from "./Fakulimg/2022_LOGO_NEW_2015_ver_17 copy.svg";
import teligram from "./Fakulimg/telegram.svg";
import istagram from "./Fakulimg/icons8-instagram (1).svg";
import facebook from "./Fakulimg/icons8-facebook.svg";
import youtube from "./Fakulimg/icons8-youtube.svg";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Tugmani faqat skroll qilinganda ko'rsatish funksiyasi
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Yuqoriga smooth scroll
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <footer className="bg-[#1B6B50] text-white py-6 mt-5">
      <div className="container max-w-[1210px] mx-auto">
        {/* Asosiy bo'lim */}
        <div className="flex items-center justify-between">
          {/* Chap qism: Logo va bog'lanish ma'lumotlari */}
          <div className="md:w-1/2 text-center md:text-left mb-6 md:mb-0">
            <div className="flex flex-col items-center md:items-start">
              {/* Logo */}
              <div className="flex justify-center items-center mb-4">
                <img
                  src={rasimimg}
                  alt="University Logo"
                  className="w-[120px] h-[120px] object-contain"
                />
              </div>
              {/* Universitet nomi */}
              <h3 className="text-lg font-bold text-center md:text-left">
                Samarqand davlat universiteti Kattaqo'rg'on Filiali
              </h3>
              {/* Ijtimoiy tarmoqlar */}
              <div className="flex space-x-4 mt-4">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <img
                    src={teligram}
                    alt="Telegram"
                    className="w-10 h-10 hover:scale-110 transition"
                  />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <img
                    src={facebook}
                    alt="Facebook"
                    className="w-10 h-10 hover:scale-110 transition"
                  />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <img
                    src={istagram}
                    alt="Instagram"
                    className="w-10 h-10 hover:scale-110 transition"
                  />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <img
                    src={youtube}
                    alt="YouTube"
                    className="w-10 h-10 hover:scale-110 transition"
                  />
                </a>
              </div>
            </div>
            {/* Bog'lanish */}
            <div className="mt-6">
              <h4 className="text-lg font-semibold">Bog‘lanish</h4>
              <ul className="list-disc list-inside space-y-2 text-sm">
                <li>Manzil: Kattaqo'rg'on shahar</li>
                <li>Telefon:+998557041174</li>
                <li>Email: info@tuit.uz</li>
                <li>Ish grafigi: Dushanba - Juma 8:30 - 18:00</li>
                <li>Shanba Yakshanba dam olish kuni</li>
              </ul>
            </div>
          </div>

          {/* O'ng qism: Google xarita */}
          <div className="w-[400px] md:w-1/2 h-[300px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2801.6492876167804!2d66.28904158316173!3d39.903522013314735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4d8d95f9019933%3A0x7434ea567d8ad122!2sSamarqand%20davlat%20universiteti%20Kattaqo'rg'on%20filiali!5e1!3m2!1sru!2s!4v1735319133036!5m2!1sru!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Quyida qo'shimcha ma'lumotlar */}
        <div className="mt-8 border-t border-gray-600 pt-4 flex items-center justify-between">
          {/* Copywright */}
          <div className="text-sm">
            © Samarqand davlat universiteti Kattaqo'rg'on Filiali
          </div>

          {/* Tashriflar hisoblagichi */}
          <div>
            <img
              src="https://counter.yadro.ru/logo?47"
              alt="Visitor counter"
              className="w-16"
            />
          </div>

          {/* Yuqoriga qaytish tugmasi */}
          {isVisible && (
            <button
              onClick={scrollToTop}
              className="bg-blue-500 text-white p-2 rounded-full shadow-md hover:bg-blue-700 transition fixed bottom-8 right-8"
              title="Yuqoriga qaytish"
            >
              <FaArrowUp />
            </button>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
