import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next"; // i18next ni chaqirish
import saytlogo from "../assets/photo_2021-11-03_09-02-49.jpg";
import bayroq from "../assets/bayroq.jpg";
import Girb from "../assets/Gerb.png";
import { FaMusic } from "react-icons/fa";
import "../assets/style/font.css";

const Header = () => {
  const { t, i18n } = useTranslation(); // i18next dan foydalanish
  const [fontSizeClass, setFontSizeClass] = useState("text-base");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Dropdownni boshqarish

  // Tildan kelib chiqib font o'lchamini boshqarish
  useEffect(() => {
    if (i18n.language === "ru") {
      setFontSizeClass("text-sm"); // Rus tili uchun kichik font
    } else {
      setFontSizeClass("text-base"); // Boshqa tillar uchun standart font
    }
  }, [i18n.language]);

  // Tilni o'zgartirish
  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div>
      <div className="flex items-center justify-between p-2 max-w-[1210px] mx-auto">
        <div
          className={`text-center items-center flex ml-4 gap-2 ${fontSizeClass}`}
        >
          <img
            src={bayroq}
            alt="UZ"
            className="h-6 mr-2 cursor-pointer hover:scale-105 hover:bg-gray-200 p-1 rounded"
          />
          <span className="hover:text-blue-500 cursor-pointer">|</span>
          <img
            src={Girb}
            alt="UZ"
            className="h-5 mr-2 cursor-pointer hover:scale-105 hover:bg-gray-200 p-1 rounded"
          />
          <span className="hover:text-blue-500 cursor-pointer">|</span>
          <div>
            <FaMusic className="cursor-pointer hover:text-blue-500 hover:scale-105" />
          </div>
          <span className="hover:text-blue-500 cursor-pointer">|</span>
          <p className="text-[#337AB7] hover:text-blue-500 cursor-pointer">
            {t("mail")}
          </p>
          <span className="pl-2 text-[#337AB7] hover:text-blue-500 cursor-pointer">
            Ishonch telefoni: <strong>+998770268254</strong>
          </span>
          <span className="hover:text-blue-500 cursor-pointer">|</span>
        </div>

        <div className="ml-4">
          <select
            className="border p-2 rounded"
            onChange={handleLanguageChange} // Tilni o'zgartirish
            value={i18n.language}
          >
            <option value="uz">O'zbek</option>
            <option value="ru">Русский</option>
            <option value="en">English</option>
          </select>
        </div>
      </div>
      <div className="bg-white border-b-2 border-t-2 border-gray-300">
        <div className="container max-w-[1210px] mx-auto">
          <header className={`flex items-center py-2 ${fontSizeClass}`}>
            <nav className="flex items-center w-full justify-between">
              <ul className="flex items-center">
                <img
                  src={saytlogo}
                  alt="Logo"
                  className="h-15 w-[50px] h-auto"
                />
                <div className="max-w-[240px]">
                  <span className="text-[14px]">{t("university")}</span>
                </div>
              </ul>

              <ul className="flex items-center justify-between max-w-[800px] gap-2">
              <li
  className="relative"
  onMouseEnter={() => setIsDropdownOpen(true)}
  onMouseLeave={() => setIsDropdownOpen(false)}
>
  <button
    className="text-[#687074] font-sans relative hover:text-blue-500"
    onClick={() => setIsDropdownOpen((prev) => !prev)} // Tugma bosilganda toggling
  >
    {t("filial")}
  </button>
  {isDropdownOpen && (
    <ul
      className="absolute left-0 top-full mt-2 text-blue rounded-md shadow-lg w-48 z-[1000] bg-white"
      onMouseEnter={() => setIsDropdownOpen(true)} // Dropdown ichiga kirganda yopilmasin
      onMouseLeave={() => setIsDropdownOpen(false)} // Dropdowndan chiqishda yopilsin
    >
      <li className="hover:bg-blue-700 px-4 py-2 cursor-pointer text-black">
        TATU missiyasi
      </li>
      <li className="hover:bg-blue-700 px-4 py-2 cursor-pointer text-black">
        Tuzilma
      </li>
      <li className="hover:bg-blue-700 px-4 py-2 cursor-pointer text-black">
        Me'yoriy hujjatlar
      </li>
      <li className="hover:bg-blue-700 px-4 py-2 cursor-pointer text-black">
        Umumiy ma'lumot
      </li>
      <li className="hover:bg-blue-700 px-4 py-2 cursor-pointer text-black">
        Rekvizitlar
      </li>
      <li className="hover:bg-blue-700 px-4 py-2 cursor-pointer text-black">
        Rektor virtual qabulxonasi
      </li>
      <li className="hover:bg-blue-700 px-4 py-2 cursor-pointer text-black">
        Ochiq ma'lumotlar
      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#687074] font-sans text-sm relative hover:text-blue-500"
                  >
                    {t("faoliyat")}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#687074] font-sans text-sm relative hover:text-blue-500"
                  >
                    {t("info")}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#687074] font-sans text-sm relative hover:text-blue-500"
                  >
                    {t("hujjatlar")}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#687074] font-sans text-sm relative hover:text-blue-500"
                  >
                    {t("talabalar")}
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-[#687074] font-sans text-sm relative hover:text-blue-500"
                  >
                    {t("aloqa")}
                  </a>
                </li>
              </ul>
            </nav>
          </header>
        </div>
      </div>
    </div>
  );
};

export default Header;
