import React, { useState } from "react";
import { useTranslation } from "react-i18next"; // i18next ni chaqirish
import saytlogo from "../assets/photo_2021-11-03_09-02-49.jpg";
import bayroq from "../assets/bayroq.jpg";
import Girb from "../assets/Gerb.png";

const Header = () => {
  const { t, i18n } = useTranslation(); // i18next dan foydalanish

  // Tilni o'zgartirish
  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div>
      <div className="flex items-center justify-between p-2 max-w-[1210px] mx-auto">
        <div className="text-center items-center flex ml-4">
          <img src={bayroq} alt="UZ" className="h-6 mr-2 cursor-pointer" />
          <img src={Girb} alt="UZ" className="h-5 mr-2 cursor-pointer" />
          <p>{t('mail')}</p> {/* i18next orqali matnni chiqarish */}
        </div>

        <div className="ml-4">
          <select
            className="border-4"
            onChange={handleLanguageChange} // Tilni o'zgartirish
            value={i18n.language}
          >
            <option value="uz">O'zbek</option>
            <option value="ru">Ruskiy</option>
            <option value="en">English</option>
          </select>
        </div>
      </div>
      <div className="bg-white border-b-2 border-t-2 border-gray-300">
        <div className="container max-w-[1210px] mx-auto">
          <header className="flex flex-wrap justify-between items-center py-2 px-[20px]">
            <div className="flex flex-1">
              <img
                src={saytlogo}
                alt="Logo"
                className="h-15 w-[50px] h-auto mr-3"
              />
              <div className="w-[250px]">
                <span className="font-[Roboto, sans-serif, Arial] h-[15px] text-[13px] text-[#212121]">
                  {t('university')} {/* Tilga mos matn */}
                </span>
              </div>
            </div>

            <nav className="flex items-center flex-2 justify-center">
              <a href="#" className="text-gray-800 mx-3 text-sm relative hover:text-blue-500">
                {t('filial')} {/* i18next orqali matn */}
              </a>
              <a href="#" className="text-gray-800 mx-3 text-sm relative hover:text-blue-500">
                {t('talim')} {/* i18next orqali matn */}
              </a>
              <a href="#" className="text-gray-800 mx-3 text-sm relative hover:text-blue-500">
                {t('info')} {/* i18next orqali matn */}
              </a>
              <a href="#" className="text-gray-800 mx-3 text-sm relative hover:text-blue-500">
                {t('faoliyat')} {/* i18next orqali matn */}
              </a>
              <a href="#" className="text-gray-800 mx-3 text-sm relative hover:text-blue-500">
                {t('hujjatlar')} {/* i18next orqali matn */}
              </a>
              <a href="#" className="text-gray-800 mx-3 text-sm relative hover:text-blue-500">
                {t('talabalar')} {/* i18next orqali matn */}
              </a>
              <a href="#" className="text-gray-800 mx-3 text-sm relative hover:text-blue-500">
                {t('aloqa')} {/* i18next orqali matn */}
              </a>
            </nav>
          </header>
        </div>
      </div>
    </div>
  );
};

export default Header;
