import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next"; // i18next ni chaqirish
import Select from "react-select"; // react-select ni import qilish
import saytlogo from "../assets/photo_2021-11-03_09-02-49.jpg";
import bayroq from "../assets/bayroq.jpg";
import Girb from "../assets/img/gerb_uzbekistana.png";
import { FaMusic } from "react-icons/fa";
import "../assets/style/font.css";
import { MdArrowDropDown } from "react-icons/md";
import { IoMenu } from "react-icons/io5";

import '../assets/style/font.css'
import { Link } from "react-router";
const Header = () => {
  const { t, i18n } = useTranslation(); // i18next dan foydalanish
  const [fontSizeClass, setFontSizeClass] = useState("text-base");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Dropdownni boshqarish
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false); // Dropdownni boshqarish
  const [isDropdownOpen3, setIsDropdownOpen3] = useState(false);
  const [isDropdownOpen4, setIsDropdownOpen4] = useState(false);
  const [isDropdownOpen5, setIsDropdownOpen5] = useState(false);
  const [isDropdownOpen6, setIsDropdownOpen6] = useState(false);
  const [isDropdownOpen7, setIsDropdownOpen7] = useState(false);
  const [isActive, setIsActive] = useState(false);



  const toggleMenu  = () => {
    setIsActive(!isActive);
  };
  console.log(!isActive); 
  // Tildan kelib chiqib font o'lchamini boshqarish
  useEffect(() => {
    if (i18n.language === "ru") {
      setFontSizeClass("text-sm"); // Rus tili uchun kichik font
    } else {
      setFontSizeClass("text-base"); // Boshqa tillar uchun standart font
    }
  }, [i18n.language]);

  // Tilni o'zgartirish
  const handleLanguageChange = (selectedOption) => {
    i18n.changeLanguage(selectedOption.value);
  };

  // Til variantlari
  const languageOptions = [
    { value: "uz", label: "O'zbek" },
    { value: "ru", label: "Русский" },
    { value: "en", label: "English" },
  ];

  return (
    <div className="fixed  top-0 left-0 w-full bg-beige/90 backdrop-blur-md  border-gray-300 z-50 h-16">
      <div className=" navbarc  flex items-center justify-between  py-2 px-[20px] max-w-[1210px] mx-auto">
        <div
          className={` herro  text-center items-center flex   gap-2 ${fontSizeClass}`}
        >
          <img
            src={bayroq}
            alt="UZ"
            className="h-auto w-10 mr-2 cursor-pointer hover:scale-105 hover:bg-gray-200 p-1 rounded"
          />
          <span className="hover:text-blue-500 cursor-pointer">|</span>
          <img
            src={Girb}
            alt="UZ.Gerbi"
            className="h-auto w-10 mr-2 cursor-pointer hover:scale-105 hover:bg-gray-200 p-1 rounded"
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
            Ishonch telefoni: <strong>+998557041174</strong>
          </span>
          <span className="hover:text-blue-500 cursor-pointer">|</span>
        </div>

        <div className="langui  ml-4 w-38 flex items-center">
          {/* Zamonaviy Select */}
          <h1>Assemblerrghjfjhgjhgj</h1>
          <Select
            options={languageOptions}
            defaultValue={languageOptions.find(
              (option) => option.value === i18n.language
            )}
            onChange={handleLanguageChange}
            isSearchable={false}
            className="react-select-container  "
            classNamePrefix="react-select"
          />
        </div>
      </div>
      <div className="bg-[#1B6B50] text-white  bg-beige/90 backdrop-blur-md  border-gray-300  ">
        <div className="container max-w-[1210px] px-[20px] mx-auto">
          <header className={`flex items-center  ${fontSizeClass}`}>
            <nav className="navbar flex items-center py-2 w-full justify-between">
              <ul className="ul_sayt flex items-center gap-2">
                <img
                  src={saytlogo}
                  alt="Logo"
                  className="h-15 w-[50px] h-auto"
                />
                <div className="max-w-[290px] samdu">
                  <span className="text-[14px]">{t("university")}</span>
                </div>
              </ul>

              <ul 
  id="menu-id" 
  className={` li_ul flex items-center justify-between max-w-[800px] gap-3`}
>
                {/* Dropdown menu */}
                <li
                  className="relative flex"
                  onMouseEnter={() => setIsDropdownOpen(true)} // Hover qilganda menyuni ochish
                  onMouseLeave={() => setIsDropdownOpen(false)} // Hoverdan chiqganda menyuni yopish
                >
                  <button className="flex items-center gap-1 hover:text-yellow-400">
                    <MdArrowDropDown />
                  </button>

                  <button className=" text-white items-center font-sans relative hover:text-white flex  ">
                    {t("filial")}
                  </button>
                  {isDropdownOpen && (
                    <ul
                      className="absolute left-0 top-full  shadow-lg w-48 z-[1000] bg-[#E0D3F6]"
                      onMouseEnter={() => setIsDropdownOpen(true)}
                      onMouseLeave={() => setIsDropdownOpen(false)}
                    >
                      {/* Ichki menyu */}
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

                <li
                  className="relative flex"
                  onMouseEnter={() => setIsDropdownOpen2(true)} // Hover qilganda menyuni ochish
                  onMouseLeave={() => setIsDropdownOpen2(false)} // Hoverdan chiqganda menyuni yopish
                >
                  <button className="flex items-center gap-1 hover:text-yellow-400">
                    <MdArrowDropDown />
                  </button>

                  <button className=" text-white items-center font-sans relative hover:text-white flex  ">
                    {t("faoliyat")}
                  </button>
                  {isDropdownOpen2 && (
                    <ul
                      className="absolute left-0 top-full  shadow-lg w-48 z-[1000] bg-[#E0D3F6]"
                      onMouseEnter={() => setIsDropdownOpen2(true)}
                      onMouseLeave={() => setIsDropdownOpen2(false)}
                    >
                      {/* Ichki menyu */}
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

                <li
                  className="relative flex"
                  onMouseEnter={() => setIsDropdownOpen3(true)} // Hover qilganda menyuni ochish
                  onMouseLeave={() => setIsDropdownOpen3(false)} // Hoverdan chiqganda menyuni yopish
                >
                  <button className="flex items-center gap-1 hover:text-yellow-400">
                    <MdArrowDropDown />
                  </button>

                  <button className=" text-white items-center font-sans relative hover:text-white flex ">
                    {t("info")}
                  </button>
                  {isDropdownOpen3 && (
                    <ul
                      className="absolute left-0 top-full  shadow-lg w-48 z-[1000] bg-[#E0D3F6]"
                      onMouseEnter={() => setIsDropdownOpen3(true)}
                      onMouseLeave={() => setIsDropdownOpen3(false)}
                    >
                      {/* Ichki menyu */}
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

                <li
                  className="relative flex"
                  onMouseEnter={() => setIsDropdownOpen4(true)} // Hover qilganda menyuni ochish
                  onMouseLeave={() => setIsDropdownOpen4(false)} // Hoverdan chiqganda menyuni yopish
                >
                  <button className="flex items-center gap-1 hover:text-yellow-400">
                    <MdArrowDropDown />
                  </button>

                  <button className=" text-white items-center font-sans relative hover:text-white flex ">
                    {t("hujjatlar")}
                  </button>
                  {isDropdownOpen4 && (
                    <ul
                      className="absolute left-0 top-full  shadow-lg w-48 z-[1000] bg-[#E0D3F6]"
                      onMouseEnter={() => setIsDropdownOpen4(true)}
                      onMouseLeave={() => setIsDropdownOpen4(false)}
                    >
                      {/* Ichki menyu */}
                      <Link to={'/contact'}>
                      <li className="hover:bg-blue-700 px-4 py-2 cursor-pointer text-black">
                        TATU missiyasi
                      </li>
                      </Link>
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

                <li
                  className="relative flex"
                  onMouseEnter={() => setIsDropdownOpen5(true)} // Hover qilganda menyuni ochish
                  onMouseLeave={() => setIsDropdownOpen5(false)} // Hoverdan chiqganda menyuni yopish
                >
                  <button className="flex items-center gap-1 hover:text-yellow-400">
                    <MdArrowDropDown />
                  </button>
                  <button className=" text-white items-center font-sans relative hover:text-white flex   ">
                    {t("talabalar")}{" "}
                  </button>
                  {isDropdownOpen5 && (
                    <ul
                      className="absolute left-0 top-full  shadow-lg w-48 z-[1000] bg-[#E0D3F6]"
                      onMouseEnter={() => setIsDropdownOpen5(true)}
                      onMouseLeave={() => setIsDropdownOpen5(false)}
                    >
                      {/* Ichki menyu */}
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

                <li
                  className="relative flex"
                  // Hoverdan chiqganda menyuni yopish
                >
                  <button className="flex items-center gap-1 hover:text-yellow-400">
                    <MdArrowDropDown />
                  </button>
                  <button className=" text-white items-center font-sans relative hover:text-white flex  ">
                    {t("aloqa")}{" "}
                  </button>
                  {isDropdownOpen6 && (
                    <ul
                      className="absolute left-0 top-full  shadow-lg w-48 z-[1000] bg-[#E0D3F6]"
                      onMouseEnter={() => setIsDropdownOpen6(true)}
                      onMouseLeave={() => setIsDropdownOpen6(false)}
                    >
                      {/* Ichki menyu */}
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
               
              </ul>
              

              
             <ul>
             <button className={`menubtn ${isActive ? "active" : ""}`} onClick={toggleMenu}>
        <IoMenu className={`w-10 h-10 ${isActive ? "text-red-500" : ""}`} />
      </button>
             </ul>
            </nav>
            <ul
  id="menu-id"
  className={`li_ul ${
    isActive ? "block" : "hidden"
  } lg:flex items-center justify-between max-w-[800px] gap-3`}
>
  
</ul>
          </header>
        </div>
      </div>
    </div>
  );
};

export default Header;
