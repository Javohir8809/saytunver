import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next"; // i18next ni chaqirish
import Select from "react-select"; // react-select ni import qilish
import logo from "../../public/logo.png";
import bayroq from "../assets/bayroq.jpg";
import Girb from "../assets/img/gerb_uzbekistana.png";
import { FaMusic } from "react-icons/fa";
import "../assets/style/font.css";
import { MdArrowDropDown } from "react-icons/md";
import { IoMenu } from "react-icons/io5";

import "../assets/style/font.css";
import { Link, useNavigate } from "react-router";
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
  const [isModalOpen, setIsModalOpen] = useState(false); // Modalni boshqarish
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const navigate = useNavigate();

  const toggleMenu = () => {
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
    <div className="fixed  top-0 left-0 w-full bg-beige/90 backdrop-blur-md  border-gray-900 z-50 h-16">
      <div className=" navbarc  flex items-center justify-between  py-2 px-[20px] max-w-[1210px] mx-auto">
        <div
          className={` herro  text-center items-center flex   gap-2 ${fontSizeClass}`}
        >
        <Link to="/bayroq">
          <img
            src={bayroq}
            alt="UZ"
            className="h-auto w-10 mr-2 cursor-pointer hover:scale-105 hover:bg-gray-200 p-1 rounded"
          />
          </Link>
          <span className="hover:text-blue-500 cursor-pointer">|</span>
          <Link to="/gerb">
          <img
            src={Girb}
            alt="UZ.Gerbi"
            className="h-auto w-10 mr-2 cursor-pointer hover:scale-105 hover:bg-gray-200 p-1 rounded"
          />
          </Link>
          <span className="hover:text-blue-500 cursor-pointer">|</span>
          <Link to="/">
          <div>
            <FaMusic className="cursor-pointer hover:text-blue-500 hover:scale-105" />
          </div>
          </Link>
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
              <Link to="/">
              <ul className="ul_sayt flex items-center gap-2">
                <img
                  src={logo}
                  alt="Logo"
                  className="h-15 w-[50px] h-auto"
                />
                <div className="max-w-[290px] samdu">
                  <span className="text-[14px]">{t("university")}</span>
                </div>
              </ul>
              </Link>

              <ul
                id="menu-id"
                className={` li_ul flex items-center justify-between max-w-[800px] gap-3`}
              >
                {/* Dropdown menu */}
                {/* FILIAL */}
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
                    className="absolute left-0 top-full shadow-lg w-48 z-[1000] bg-[#E0D3F6]"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    {/* Filial haqida */}
                    <li className="hover:bg-blue-700 px-4 py-2 cursor-pointer text-black relative group">
                      Filial haqida
                      <ul className="absolute left-full top-0 shadow-lg w-64 bg-white text-black hidden group-hover:block">
                        <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                          Filial ustavi
                        </li>
                        <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                          Filial nizomi
                        </li>
                        <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                          Filial tuzulmasi
                        </li>
                        <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                          Rekvizitlar
                        </li>
                        <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                          Aloqa
                        </li>
                      </ul>
                    </li>
                  
                    {/* Hujjatlar */}
                    <li className="hover:bg-blue-700 px-4 py-2 cursor-pointer text-black relative group">
                      Hujjatlar
                      <ul className="absolute left-full top-0 shadow-lg w-64 bg-white text-black hidden group-hover:block">
                        <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                          Qonunlar
                        </li>
                        <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                          Farmonlar
                        </li>
                        <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                          Qarorlar
                        </li>
                        <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                          Nizomlar va qoidalar
                        </li>
                        <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                          Hisobotlar
                        </li>
                      </ul>
                    </li>
                  </ul>
                  
                  )}
                </li>

                {/* Yangiliklar */}
                <li
                  className="relative flex"
                  onMouseEnter={() => setIsDropdownOpen3(true)} // Hover qilganda menyuni ochish
                  onMouseLeave={() => setIsDropdownOpen3(false)} // Hoverdan chiqganda menyuni yopish
                >
                  <button className="flex items-center gap-1 hover:text-yellow-400">
                    <MdArrowDropDown />
                  </button>
                  <button className="text-white items-center font-sans relative hover:text-white flex">
                    {t("info")}
                  </button>
                  {isDropdownOpen3 && (
                    <ul
                      className="absolute left-0 top-full shadow-lg w-48 z-[1000] bg-[#E0D3F6]"
                      onMouseEnter={() => setIsDropdownOpen3(true)}
                      onMouseLeave={() => setIsDropdownOpen3(false)}
                    >
                      {/* Yangiliklar */}
                      <li className="hover:bg-blue-700 px-4 py-2 cursor-pointer text-black relative group">
                        <Link to="/Oliytalimyangiliklari">Yangiliklar</Link>
                        <ul className="absolute left-full top-0 shadow-lg w-64 bg-white text-black hidden group-hover:block">
                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Yig'ilishlar
                          </li>
                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Uchrashuvlar
                          </li>
                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Seminarlar
                          </li>
                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Davra suhbatlari
                          </li>

                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Tashriflar
                          </li>
                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Brifinglar
                          </li>
                        </ul>
                      </li>

                      {/* E'lonlar */}
                      <li className="hover:bg-blue-700 px-4 py-2 cursor-pointer text-black relative group">
                        <Link to="/Omaviytadbirlar">E'lonlar</Link>
                        <ul className="absolute left-full top-0 shadow-lg w-64 bg-white text-black hidden group-hover:block">
                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Yig'ilishlar
                          </li>
                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Uchrashuvlar
                          </li>
                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Davra suhbatlari
                          </li>
                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Tashriflar
                          </li>

                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Brifinglar
                          </li>
                        </ul>
                      </li>

                      {/* Fotogalerya */}
                      <li className="hover:bg-blue-700 px-4 py-2 cursor-pointer text-black relative group">
                        <Link to="/Elonlar">Fotogalerya</Link>
                        <ul className="absolute left-full top-0 shadow-lg w-64 bg-white text-black hidden group-hover:block">
                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Universitet fotogaleryasi
                          </li>
                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Tadbir fotogaleryasi
                          </li>
                        </ul>
                      </li>

                      {/* Videogalerya */}
                      <li className="hover:bg-blue-700 px-4 py-2 cursor-pointer text-black relative group">
                        Videogalerya
                        <ul className="absolute left-full top-0 shadow-lg w-64 bg-white text-black hidden group-hover:block">
                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Universitet videolar
                          </li>
                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Tadbir videolari
                          </li>
                        </ul>
                      </li>
                    </ul>
                  )}
                </li>

                {/* Tuzulma */}
                <li
                  onMouseEnter={() => setIsDropdownOpen6(true)} // Hover qilganda menyuni ochish
                  onMouseLeave={() => setIsDropdownOpen6(false)} // Hoverdan chiqganda menyuni yopish
                  className="relative flex"
                >
                  <button className="flex items-center gap-1 hover:text-yellow-400">
                    <MdArrowDropDown />
                  </button>
                  <button className="text-white items-center font-sans relative hover:text-white flex">
                    {t("tuzilma")}
                  </button>
                  {isDropdownOpen6 && (
                    <ul
                      className="absolute left-0 top-full shadow-lg w-48 z-[1000] bg-[#E0D3F6]"
                      onMouseEnter={() => setIsDropdownOpen6(true)}
                      onMouseLeave={() => setIsDropdownOpen6(false)}
                    >
                      {/* Rahbariyat */}
                      <li className="hover:bg-blue-700 px-4 py-2 cursor-pointer text-black relative group">
                        Rahbariyat
                        <ul className="absolute left-full top-0 shadow-lg w-64 bg-white text-black hidden group-hover:block">
                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Filial direktori
                          </li>
                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Direktor o'rinbosarlari
                          </li>
                        </ul>
                      </li>

                      {/* Fakultetlar */}
                      <li className="hover:bg-blue-700 px-4 py-2 cursor-pointer text-black relative group">
                        Fakultetlar
                        <ul className="absolute left-full top-0 shadow-lg w-64 bg-white text-black hidden group-hover:block">
                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Pedagogika va tillarni o'qitish
                          </li>
                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Aniq va tabiiy fanlar
                          </li>
                        </ul>
                      </li>

                      {/* Kafedralar */}
                      <li className="hover:bg-blue-700 px-4 py-2 cursor-pointer text-black relative group">
                        Kafedralar
                        <ul className="absolute left-full top-0 shadow-lg w-64 bg-white text-black hidden group-hover:block">
                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Maktabgacha va boshlang'ich ta'lim, sport kafedrasi
                          </li>
                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            O'zbek tili gumanitar fanlar kafedrasi
                          </li>
                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Xorijiy tillar kafedrasi
                          </li>

                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Raqamli texnologiyalar va iqtisodiyot kafedrasi
                          </li>
                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Aniq va tabiy fanlar kafedrasi
                          </li>
                        </ul>
                      </li>

                      {/* Markazlar */}
                      <li className="hover:bg-blue-700 px-4 py-2 cursor-pointer text-black relative group">
                        Markazlar
                        <ul className="absolute left-full top-0 shadow-lg w-64 bg-white text-black hidden group-hover:block">
                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Raqamli texnologiyalari markazi
                          </li>
                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Axborot-resurs markazi
                          </li>
                        </ul>
                      </li>

                      {/* Bo'limlar */}
                      <li className="hover:bg-blue-700 px-4 py-2 cursor-pointer text-black relative group">
                        Bo'limlar
                        <ul className="absolute left-full top-0 shadow-lg w-64 bg-white text-black hidden group-hover:block">
                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            O'quv-uslubiy boshqarma
                          </li>
                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer"></li>
                          Ta'lim sifatini nazorat qilish bo'limi
                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer"></li>
                          Jismoniy va yuridik shaxslarning murojatlari bilan
                          ishlash, nazorat va monitoring sektori
                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer"></li>
                          Yoshlar bilan ishlash ma'naviyat va ma'rifat bo'limi
                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer"></li>
                          Ilmiy tadqiqotlar, innovatsiyalar sektori
                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer"></li>
                          Talabalarni turar joy bilan ta'minlash ishlarini
                          muvofiqlashtiruvchi bo'lim
                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer"></li>
                          Psixolog
                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer"></li>
                          Iqtidorli talabalarning ilmiy-tadqiqot faolyatini
                          tashkil etish sektori
                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer"></li>
                          Buxgalteriya
                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer"></li>
                          Bosh auditor
                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Xodimlar bo'limi
                          </li>
                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Xalqaro hamkorlik bo'limi
                          </li>
                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            1-bo'lim
                          </li>
                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Marketing va talabalar amaliyoti bo'lim
                          </li>
                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Yuristkonsult
                          </li>
                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Matbuot kotibi
                          </li>
                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Reja-moliya bo'limi
                          </li>
                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Devonxona va arxiv bo'limi
                          </li>
                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Sirtqi bo'lim
                          </li>
                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Devonxona va arxiv bo'limi Korrupsiyaga qarshi
                            kurashish "Komplaens-nazorat" tizmini boshqarish
                            bo'limi
                          </li>
                        </ul>
                      </li>

                      {/* O'quv jarayoni */}
                      <li className="hover:bg-blue-700 px-4 py-2 cursor-pointer text-black relative group">
                        O'quv jarayoni
                        <ul className="absolute left-full top-0 shadow-lg w-64 bg-white text-black hidden group-hover:block">
                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Dars jadvali
                          </li>
                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            O'quv dasturlari
                          </li>
                        </ul>
                      </li>
                    </ul>
                  )}
                </li>

                {/* FAOLYAT */}
                <li
                  className="relative flex"
                  onMouseEnter={() => setIsDropdownOpen2(true)} // Hover qilganda menyuni ochish
                  onMouseLeave={() => setIsDropdownOpen2(false)} // Hoverdan chiqganda menyuni yopish
                >
                  <button className="flex items-center gap-1 hover:text-yellow-400">
                    <MdArrowDropDown />
                  </button>

                  <button className="text-white items-center font-sans relative hover:text-white flex">
                    {t("faoliyat")}
                  </button>
                  {isDropdownOpen2 && (
                    <ul
                      className="absolute left-0 top-full shadow-lg w-48 z-[1000] bg-[#E0D3F6]"
                      onMouseEnter={() => setIsDropdownOpen2(true)}
                      onMouseLeave={() => setIsDropdownOpen2(false)}
                    >
                      {/* O'quv jarayoni */}
                      <li className="hover:bg-blue-700 px-4 py-2 cursor-pointer text-black relative group">
                        O'quv jarayoni
                        <ul className="absolute left-full top-0 shadow-lg w-64 bg-white text-black hidden group-hover:block">
                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Yakuniy nazorat savollar
                          </li>
                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Malaka talablari
                          </li>
                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            O'quv rejalar
                          </li>

                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            O'quv dasturlari
                          </li>
                        </ul>
                      </li>

                      {/* Ilmiy faoliyat */}
                      <li className="hover:bg-blue-700 px-4 py-2 cursor-pointer text-black relative group">
                        Ilmiy faoliyat
                        <ul className="absolute left-full top-0 shadow-lg w-64 bg-white text-black hidden group-hover:block">
                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Ilmiy to'plam va ommabop maqolalar
                          </li>
                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Istiqboldagi rejalar
                          </li>
                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Konferensiyalar
                          </li>

                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Ilmiy faoliyat e'lon va yangiliklar
                          </li>

                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Mening innovatsiyon g'oyam
                          </li>

                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Filial loyihalar
                          </li>

                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Aftoreferatlar
                          </li>

                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Ilmiy jurnallar
                          </li>

                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Filial kengashi
                          </li>

                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Ilmiy tadqiqot yo'nalishlar
                          </li>

                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Ustoz-shogirt maktabi
                          </li>

                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Nashr ishlari
                          </li>

                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Yosh olimlar maktabi
                          </li>

                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Ilmiy-tadqiqot faolyati
                          </li>
                        </ul>
                      </li>

                      {/* Ma'naviy-ma'rifiy faoliyat */}
                      <li className="hover:bg-blue-700 px-4 py-2 cursor-pointer text-black relative group">
                        Ma'naviy-ma'rifiy faoliyat
                        <ul className="absolute left-full top-0 shadow-lg w-64 bg-white text-black hidden group-hover:block">
                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Talabalar hayoti
                          </li>
                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Tyutor faolyati
                          </li>
                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Filial psixologi
                          </li>
                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Yotoqxona
                          </li>
                        </ul>
                      </li>

                      {/* Moliyaviy faoliyati */}
                      <li className="hover:bg-blue-700 px-4 py-2 cursor-pointer text-black relative group">
                        Moliyaviy faoliyat
                        <ul className="absolute left-full top-0 shadow-lg w-64 bg-white text-black hidden group-hover:block">
                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Shartnomalar namunasi
                          </li>
                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Harajatlar smetasi
                          </li>
                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Tuzulgan Shartnomalar
                          </li>
                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Davlat haridlari to'g'risidagi malumotlar
                          </li>
                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Mansabdor shaxslarning xizmat safarlari va xorijdan
                            tashrif buyurgan mehmonlarni kutib olish harajatlari
                          </li>
                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Harid qilinishi rejalashtirilgan tovarlari
                          </li>
                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Davlat haridlari va invesstitsiya loyihalari
                          </li>
                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Tasdiqlangan yillik harajatlar smetasi
                          </li>
                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Kuchmas mulklar to'g'risidagi
                          </li>
                        </ul>
                      </li>

                      {/* Ta'lim sifati */}
                      <li className="hover:bg-blue-700 px-4 py-2 cursor-pointer text-black relative group">
                        Ta'lim sifati
                        <ul className="absolute left-full top-0 shadow-lg w-64 bg-white text-black hidden group-hover:block">
                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Ta'lim dasturi katalogi
                          </li>
                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Yo'l haritasi
                          </li>
                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Talabalar tashabbusi
                          </li>

                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Anonim so'rovnoma
                          </li>

                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Ta'lim sifat so'rovnoma
                          </li>
                        </ul>
                      </li>
                    </ul>
                  )}
                </li>

                {/* Qabul24 */}
                <li
                  className="relative flex"
                  onMouseEnter={() => setIsDropdownOpen4(true)} // Hover qilganda menyuni ochish
                  onMouseLeave={() => setIsDropdownOpen4(false)} // Hoverdan chiqganda menyuni yopish
                >
                  <button className="flex items-center gap-1 hover:text-yellow-400">
                    <MdArrowDropDown />
                  </button>

                  <button className="text-white items-center font-sans relative hover:text-white flex">
                    {t("qabul2024")}
                  </button>
                  {isDropdownOpen4 && (
                    <ul
                      className="absolute left-0 top-full shadow-lg w-48 z-[1000] bg-[#E0D3F6]"
                      onMouseEnter={() => setIsDropdownOpen4(true)}
                      onMouseLeave={() => setIsDropdownOpen4(false)}
                    >
                      {/* Bakalavriat */}
                      <li className="hover:bg-blue-700 px-4 py-2 cursor-pointer text-black relative group">
                        Bakalavriat
                        <ul className="absolute left-full top-0 shadow-lg w-64 bg-white text-black hidden group-hover:block">
                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Eslatma
                          </li>
                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Qabul nizomi
                          </li>
                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Qabul kvotasi
                          </li>
                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Hujjatlar to‘plami
                          </li>
                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Imtihon fanlari ro‘yxati
                          </li>
                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Qabul komissiyasi joylashuv o‘rni
                          </li>
                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Kall markazi
                          </li>
                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            O'tish ballari
                          </li>
                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Ikkinchi va undan keyingi oliy ta'lim
                          </li>
                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            O'qishni ko'chirish qayta tiklash
                          </li>
                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Ko‘zi ojizlar uchun o'tkaziladigan fan bo'yicha
                            kirish imtihonlarining dasturlari
                          </li>

                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Texnikum bitiruvchilari qabul qilish
                          </li>
                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Ijodiy intihonlar
                          </li>
                        </ul>
                      </li>
                    </ul>
                  )}
                </li>

                {/* Talabalarga */}
                <li
                  className="relative flex"
                  onMouseEnter={() => setIsDropdownOpen5(true)} // Hover qilganda menyuni ochish
                  onMouseLeave={() => setIsDropdownOpen5(false)} // Hoverdan chiqganda menyuni yopish
                >
                  <button className="flex items-center gap-1 hover:text-yellow-400">
                    <MdArrowDropDown />
                  </button>
                  <button className="text-white items-center font-sans relative hover:text-white flex">
                    {t("talabalar")}{" "}
                  </button>
                  {isDropdownOpen5 && (
                    <ul
                      className="absolute left-0 top-full shadow-lg w-48 z-[1000] bg-[#E0D3F6]"
                      onMouseEnter={() => setIsDropdownOpen5(true)}
                      onMouseLeave={() => setIsDropdownOpen5(false)}
                    >
                      {/* Bakalavriat */}
                      <li className="hover:bg-blue-700 px-4 py-2 cursor-pointer text-black relative group">
                        Bakalavriat
                        <ul className="absolute left-full top-0 shadow-lg w-64 bg-white text-black hidden group-hover:block">
                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Yo'riqnoma
                          </li>
                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Kontingent
                          </li>
                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Dars jadvali
                          </li>
                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Stipendiyalar
                          </li>
                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Iqtidorli talabalar
                          </li>
                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Davlat imtihonlari
                          </li>
                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Bitiruv malakaviy ish himoyasi
                          </li>
                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Odob ahloq qoidalari
                          </li>
                        </ul>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
              <div>
                {/* Sayt xaretasi tugmasi
                <ul>
                  <button
                    onClick={openModal}
                    className="bg-blue-950 text-white py-1 px-4 rounded-md"
                  >
                    Sayt xaritasi
                  </button>
                </ul> */}

                {/* Modal */}
                {isModalOpen && (
                  <div className="fixed inset-0 bg-black bg-opacity-50 flex mt-[200px]  text-black items-center justify-center z-50">
                    <div className="bg-white w-[90%] md:w-[50%] p-6 rounded-lg shadow-lg relative">
                      <h2 className="text-lg font-bold mb-4">Sayt xaretasi</h2>
                      <ul className="list-disc list-inside">
                        <li>Asosiy sahifa</li>
                        <li>Biz haqimizda</li>
                        <li>Xizmatlar</li>
                        <li>Kontaktlar</li>
                      </ul>
                      <div className="mt-6 flex justify-end">
                        <button
                          className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-700 transition"
                          onClick={closeModal}
                        >
                          Yopish
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <ul>
                <button
                  className={`menubtn ${isActive ? "active" : ""}`}
                  onClick={toggleMenu}
                >
                  <IoMenu
                    className={`w-10 h-10 ${isActive ? "text-red-500" : ""}`}
                  />
                </button>
              </ul>
            </nav>
            <ul
              id="menu-id"
              className={`li_ul ${
                isActive ? "block" : "hidden"
              } lg:flex items-center justify-between max-w-[800px] gap-3`}
            ></ul>
          </header>
        </div>
      </div>
    </div>
  );
};

export default Header;
