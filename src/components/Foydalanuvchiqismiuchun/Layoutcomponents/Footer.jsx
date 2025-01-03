import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import rasimimg from "../../Fakulimg/2022_LOGO_NEW_2015_ver_17 copy.svg";
import teligram from "../../Fakulimg/telegram.svg";
import istagram from "../../Fakulimg/icons8-instagram (1).svg";
import facebook from "../../Fakulimg/icons8-facebook.svg";
import youtube from "../../Fakulimg/icons8-youtube.svg";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

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
    <footer className="bg-[#1B4D3E] text-white py-10 mt-[200px]">
      <div className="container max-w-[1200px] mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Asosiy menyu */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Asosiy Menu</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-gray-300 transition">Bosh sahifa</a></li>
              <li><a href="#" className="hover:text-gray-300 transition">Faoliyat</a></li>
              <li><a href="#" className="hover:text-gray-300 transition">Yangiliklar</a></li>
              <li><a href="#" className="hover:text-gray-300 transition">Bog‘lanish</a></li>
            </ul>
          </div>

          {/* Logo va Bog‘lanish */}
          <div>
            <div className="flex items-center space-x-4 mb-6">
              <img
                src={rasimimg}
                alt="University Logo"
                className="w-[70px] h-[70px] object-contain"
              />
              <h3 className="text-lg font-bold">
                Samarqand davlat universiteti <br /> Kattaqo'rg'on Filiali
              </h3>
            </div>
            <div className="flex space-x-4 mb-4">
              <a href="https://t.me/samdukf_mx" target="_blank" rel="noopener noreferrer">
                <img
                  src={teligram}
                  alt="Telegram"
                  className="w-8 h-8 hover:scale-110 transition"
                />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img
                  src={facebook}
                  alt="Facebook"
                  className="w-8 h-8 hover:scale-110 transition"
                />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img
                  src={istagram}
                  alt="Instagram"
                  className="w-8 h-8 hover:scale-110 transition"
                />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <img
                  src={youtube}
                  alt="YouTube"
                  className="w-8 h-8 hover:scale-110 transition"
                />
              </a>
            </div>
            <div>
              <h4 className="text-lg font-semibold">Bog‘lanish</h4>
              <ul className="list-none space-y-2 text-sm">
                <li>Manzil: Kattaqo'rg'on shahar Amir Temur  ko‘chasi 27a uy</li>
                <li>Telefon: +998557041174</li>
                <li>Email: info@samdukf.uz</li>
                <li>Ish grafigi: Dushanba - Shanba 8:30 - 17:00</li>
                <li>Yakshanba dam olish kuni</li>
              </ul>
            </div>
          </div>

          {/* Savol yuborish */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Savol yuborish</h4>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="F.I.O"
                className="w-full p-2 border border-gray-400 rounded bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <input
                type="text"
                placeholder="Telefon raqami"
                className="w-full p-2 border border-gray-400 rounded bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <textarea
                placeholder="Kontent"
                className="w-full p-2 border border-gray-400 rounded bg-transparent text-white focus:outline-none focus:ring-2 focus:ring-green-400"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded transition"
              >
                Yuborish
              </button>
            </form>
          </div>

          {/* Xarita */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Manzilimiz</h4>
            <div className="w-full h-[200px] md:h-[250px]">
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
        </div>

        {/* Quyidagi ma'lumotlar */}
        <div className="mt-10 border-t border-gray-600 pt-5 flex items-center justify-between text-sm">
          <div>© Samarqand davlat universiteti Kattaqo'rg'on Filiali</div>
          <div>
            <img
              src="https://counter.yadro.ru/logo?47"
              alt="Visitor counter"
              className="w-16"
            />
          </div>
          {isVisible && (
            <button
              onClick={scrollToTop}
              className="bg-green-500 text-white p-2 rounded-full shadow-md hover:bg-green-600 transition fixed bottom-8 right-8"
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
