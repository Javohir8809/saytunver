import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next"; // i18next ni chaqirish
import Select from "react-select"; // react-select ni import qilish
import logo from "../../assets/logo.png";
import bayroq from "../../assets/bayroq.jpg";
import Girb from "../../assets/img/gerb_uzbekistana.png";
import { FaMusic } from "react-icons/fa";

import { MdArrowDropDown } from "react-icons/md";
import { IoMenu } from "react-icons/io5";

import { Link, useNavigate } from "react-router";
import ButtonWithModal from "../ButtonWithModal ";
import { LiaJenkins } from "react-icons/lia";
import TestBanner from "../TestBanner";
const Header = () => {
  const { t, i18n } = useTranslation(); // i18next dan foydalanish
  const [fontSizeClass, setFontSizeClass] = useState("text-base");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Dropdownni boshqarish
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false); // Dropdownni boshqarish
  const [isDropdownOpen3, setIsDropdownOpen3] = useState(false);
  const [isDropdownOpen4, setIsDropdownOpen4] = useState(false);
  const [isDropdownOpen5, setIsDropdownOpen5] = useState(false);
  const [isDropdownOpen6, setIsDropdownOpen6] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modalni boshqarish
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsActive(!isActive);
  };
  console.log(!isActive);
  // Tildan kelib chiqib font o‘lchamini boshqarish
  useEffect(() => {
    if (i18n.language === "ru") {
      setFontSizeClass("text-sm"); // Rus tili uchun kichik font
    } else {
      setFontSizeClass("text-base"); // Boshqa tillar uchun standart font
    }
  }, [i18n.language]);

  // Tilni o‘zgartirish
  const handleLanguageChange = (selectedOption) => {
    i18n.changeLanguage(selectedOption.value);
  };

  // Til variantlari
  const languageOptions = [
    { value: "uz", label: "O‘zbek" },
    { value: "ru", label: "Русский" },
    { value: "en", label: "English" },
  ];

  return (
    <div className="fixed h-[100px]  top-0 left-0 w-full bg-[#EDEDED]  border-gray-900 z-50 ">
        <TestBanner/>
      <div className=" navbarc  flex items-center justify-between  py-2 px-5 max-w-[1210px] mx-auto">
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

        <div className="langui  ml-4 w-38 flex items-center bg-[#EDEDED]">
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
                  <img src={logo} alt="Logo" className="h-15 w-[50px] h-auto" />
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
                        <ul className="absolute left-full top-0 shadow-lg w-64 bg-white text-black hidden group-hover:block overflow-y-auto max-h-60">
                          <Link to={"/filialustovi"}>
                            <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                              Filial ustavi
                            </li>
                          </Link>
                          <Link to={"/filialnizomi"}>
                            <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                              Filial nizomi
                            </li>
                          </Link>
                          <Link to={"/filialtuzulmasi"}>
                            <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                              Filial tuzulmasi
                            </li>
                          </Link>
                          <Link to={"/rekvizitlar"}>
                            <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                              Rekvizitlar
                            </li>
                          </Link>
                          <Link to={"/aloqa"}>
                            <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                              Aloqa
                            </li>
                          </Link>
                        </ul>
                      </li>

                      {/* Hujjatlar */}
                      <li className="hover:bg-blue-700 px-4 py-2 cursor-pointer text-black relative group">
                        Hujjatlar
                        <ul className="absolute left-full top-0 shadow-lg w-64 bg-white text-black hidden group-hover:block overflow-y-auto max-h-60">
                          <Link to={"/qonunlar"}>
                            <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                              Qonunlar
                            </li>
                          </Link>
                          <Link to={"/farmonlar"}>
                            <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                              Farmonlar
                            </li>
                          </Link>
                          <Link to={"/qarorlar"}>
                            <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                              Qarorlar
                            </li>
                          </Link>
                          <Link to={"/nizomlarvaqoidalar"}>
                            <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                              Nizomlar va qoidalar
                            </li>
                          </Link>
                          <Link to={"/hisobotlar"}>
                            <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                              Hisobotlar
                            </li>
                          </Link>
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
                        <Link>Yangiliklar</Link>
                        <ul className="absolute left-full top-0 shadow-lg w-64 bg-white text-black hidden group-hover:block overflow-y-auto max-h-60">
                          <Link to={"/yigilishlar"}>
                            <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                              Yig‘ilishlar
                            </li>
                          </Link>
                          <Link to={"/uchrashuvlar"}>
                            <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                              Uchrashuvlar
                            </li>
                          </Link>
                          <Link to={"/seminarlar"}>
                            <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                              Seminarlar
                            </li>
                          </Link>
                          <Link to={"/davrasuhbatlari"}>
                            <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                              Davra suhbatlari
                            </li>
                          </Link>

                          <Link to={"/tashriflar"}>
                            <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                              Tashriflar
                            </li>
                          </Link>
                          <Link to={"/Brifinglar"}>
                            <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                              Brifinglar
                            </li>
                          </Link>
                        </ul>
                      </li>

                      {/* E‘lonlar */}
                      <li className="hover:bg-blue-700 px-4 py-2 cursor-pointer text-black relative group">
                        <Link>E‘lonlar</Link>
                        <ul className="absolute left-full top-0 shadow-lg w-64 bg-white text-black hidden group-hover:block overflow-y-auto max-h-60">
                          <Link to={"/yigilishlarelon"}>
                            <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                              Yig‘ilishlar
                            </li>
                          </Link>
                          <Link to={"/uchrashuvlarelon"}>
                            <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                              Uchrashuvlar
                            </li>
                          </Link>

                          <Link to={"/seminarlarelon"}>
                            <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                              Seminarlar
                            </li>
                          </Link>
                          <Link to={"/davrasuhbatlarielon"}>
                            <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                              Davra suhbatlari
                            </li>
                          </Link>
                          <Link to={"/tashriflarelon"}>
                            <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                              Tashriflar
                            </li>
                          </Link>

                          <Link to={"/Brifinglarelon"}>
                            <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                              Brifinglar
                            </li>
                          </Link>
                        </ul>
                      </li>

                      {/* Fotogalerya */}
                      <li className="hover:bg-blue-700 px-4 py-2 cursor-pointer text-black relative group">
                        Fotogalerya
                        <ul className="absolute left-full top-0 shadow-lg w-64 bg-white text-black hidden group-hover:block overflow-y-auto max-h-60">
                          <Link to={"/fotagalerya"}>
                            <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                              Universitet fotogaleryasi
                            </li>
                          </Link>

                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Tadbir fotogaleryasi
                          </li>
                        </ul>
                      </li>

                      {/* Videogalerya */}
                      <li className="hover:bg-blue-700 px-4 py-2 cursor-pointer text-black relative group">
                        Videogalerya
                        <ul className="absolute left-full top-0 shadow-lg w-64 bg-white text-black hidden group-hover:block overflow-y-auto max-h-60">
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
                        <ul className="absolute left-full top-0 shadow-lg w-64 bg-white text-black hidden group-hover:block overflow-y-auto max-h-60">
                          <Link to={"/filiald"}>
                            <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                              Filial direktori
                            </li>
                          </Link>
                          <Link to={"/urinbosar"}>
                            <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                              Direktor o‘rinbosarlari
                            </li>
                          </Link>
                        </ul>
                      </li>

                      {/* Fakultetlar */}
                      <li className="hover:bg-blue-700 px-4 py-2 cursor-pointer text-black relative group">
                        Fakultetlar
                        <ul className="absolute left-full top-0 shadow-lg w-64 bg-white text-black hidden group-hover:block overflow-y-auto max-h-60">
                          <Link to={"/pedagogika"}>
                            <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                              Pedagogika va tillarni o‘qitish
                            </li>
                          </Link>
                          <Link to={"/aniqvatabiy"}>
                            <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                              Aniq va tabiiy fanlar
                            </li>
                          </Link>
                        </ul>
                      </li>

                      {/* Kafedralar */}
                      <li className="hover:bg-blue-700 px-4 py-2 cursor-pointer text-black relative group">
                        Kafedralar
                        <ul className="absolute left-full top-0 shadow-lg w-64 bg-white text-black hidden group-hover:block overflow-y-auto max-h-60">
                          <Link to={"/maktabgacha"}>
                            <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                              Maktabgacha va boshlang‘ich ta‘lim, sport
                              kafedrasi
                            </li>
                          </Link>
                          <Link to={"/gumanitar"}>
                            <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                              O‘zbek tili gumanitar fanlar kafedrasi
                            </li>
                          </Link>
                          <Link to={"/chettil"}>
                            <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                              Xorijiy tillar kafedrasi
                            </li>
                          </Link>

                          <Link to={"/raqamlis"}>
                            <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                              Raqamli texnologiyalar va iqtisodiyot kafedrasi
                            </li>
                          </Link>
                          <Link to={"/aniqvatabiyfanlar"}>
                            <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                              Aniq va tabiy fanlar kafedrasi
                            </li>
                          </Link>
                        </ul>
                      </li>

                      {/* Markazlar */}
                      <li className="hover:bg-blue-700 px-4 py-2 cursor-pointer text-black relative group">
                        Markazlar
                        <ul className="absolute left-full top-0 shadow-lg w-64 bg-white text-black hidden group-hover:block">
                          <Link to={"/raqamli"}>
                            <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                              Raqamli texnologiyalari markazi
                            </li>
                          </Link>
                          <Link to={"/axborat"}>
                            <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                              Axborot-resurs markazi
                            </li>
                          </Link>
                        </ul>
                      </li>

                      {/* Bo‘limlar */}
                      <li className="hover:bg-blue-700 px-4 py-2 cursor-pointer text-black relative group">
                        Bo‘limlar
                        {/* Ichki menyu */}
                        <ul className="absolute left-full top-0 shadow-lg w-64 bg-white text-black hidden group-hover:block overflow-y-auto max-h-60 border">
                          <Link to={"/uslubiy"}>
                            <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                              O‘quv-uslubiy boshqarma
                            </li>
                          </Link>
                          <Link to={"/nazorat"}>
                            <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                              Ta‘lim sifatini nazorat qilish bo‘limi
                            </li>
                          </Link>
                          <Link to={"/yurdek"}>
                            <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                              Jismoniy va yuridik shaxslarning murojatlari bilan
                              ishlash, nazorat va monitoring sektori
                            </li>
                          </Link>
                          <Link to={"/ishlash"}>
                            <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                              Yoshlar bilan ishlash ma‘naviyat va ma‘rifat
                              bo‘limi
                            </li>
                          </Link>
                          <Link to={"/tadqiqot"}>
                            <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                              Ilmiy tadqiqotlar, innovatsiyalar sektori
                            </li>
                          </Link>
                          <Link to={"/turarjoy"}>
                            <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                              Talabalarni turar joy bilan ta‘minlash ishlarini
                              muvofiqlashtiruvchi bo‘lim
                            </li>
                          </Link>
                          <Link to={"/psixolog"}>
                            <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                              Psixolog
                            </li>
                          </Link>
                          <Link to={"/talabalariq"}>
                            <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                              Iqtidorli talabalarning ilmiy-tadqiqot faolyatini
                              tashkil etish sektori
                            </li>
                          </Link>
                          <Link to={"/bugalterya"}>
                            <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                              Buxgalteriya
                            </li>
                          </Link>
                          <Link to={"/auditor"}>
                            <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                              Bosh auditor
                            </li>
                          </Link>
                          <Link to={"/xodimlarbolimi"}>
                            <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                              Xodimlar bo‘limi
                            </li>
                          </Link>
                          <Link to={"/hamkorlik"}>
                            <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                              Xalqaro hamkorlik bo‘limi
                            </li>
                          </Link>
                          <Link to={"/birinchi"}>
                            <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                              1-bo‘lim
                            </li>
                          </Link>
                          <Link to={"/marketing"}>
                            <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                              Marketing va talabalar amaliyoti bo‘lim
                            </li>
                          </Link>
                          <Link to={"/konsolt"}>
                            <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                              Yuristkonsult
                            </li>
                          </Link>
                          <Link to={"/matbuat"}>
                            <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                              Matbuot kotibi
                            </li>
                          </Link>
                          <Link to={"/rejamoliya"}>
                            <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                              Reja-moliya bo‘limi
                            </li>
                          </Link>
                          <Link to={"/devanxona"}>
                            <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                              Devonxona va arxiv bo‘limi
                            </li>
                          </Link>
                          <Link to={"/sirtqi"}>
                            <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                              Sirtqi bo‘lim
                            </li>
                          </Link>
                          <Link to={"/kurash"}>
                            <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                              Korrupsiyaga qarshi kurashish "Komplaens-nazorat"
                              tizmini boshqarish bo‘limi
                            </li>
                          </Link>
                        </ul>
                      </li>

                      {/* O‘quv jarayoni */}
                      <li className="hover:bg-blue-700 px-4 py-2 cursor-pointer text-black relative group">
                        O‘quv jarayoni
                        <ul className="absolute left-full top-0 shadow-lg w-64 bg-white text-black hidden group-hover:block overflow-y-auto max-h-60">
                          <Link to={"/dasturlari"}>
                            <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                              O'quv dasturlari
                            </li>
                          </Link>
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
                      {/* O‘quv jarayoni */}
                      <li className="hover:bg-blue-700 px-4 py-2 cursor-pointer text-black relative group">
                        O‘quv jarayoni
                        <ul className="absolute left-full top-0 shadow-lg w-64 bg-white text-black hidden group-hover:block">
                          <Link to={"/yakuniynazoratsavolar"}>
                            <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                              Yakuniy nazorat savollar
                            </li>
                          </Link>
                          <Link to={"/malakatalabalar"}>
                            <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                              Malaka talablari
                            </li>
                          </Link>
                          <Link to={"/uquvrejalar"}>
                            <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                              O‘quv rejalar
                            </li>
                          </Link>

                          <Link to={"/uquvdasturlari"}>
                            <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                              O‘quv dasturlari
                            </li>
                          </Link>
                        </ul>
                      </li>

                      {/* Ilmiy faoliyat */}
                      <li className="hover:bg-blue-700 px-4 py-2 cursor-pointer text-black relative group">
                        Ilmiy faoliyat
                        <ul className="absolute left-full top-0 shadow-lg w-64 bg-white text-black hidden group-hover:block overflow-y-auto max-h-60">
                          <Link to={"/ilmiytoplam"}>
                            <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                              Ilmiy to‘plam va ommabop maqolalar
                            </li>
                          </Link>
                          <Link to={"/rejalar"}>
                            <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                              Istiqboldagi rejalar
                            </li>
                          </Link>
                          <Link to={"/konferinsiyalar"}>
                            <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                              Konferensiyalar
                            </li>
                          </Link>

                          <Link to={"/ilmiyfaolyatelon"}>
                            <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                              Ilmiy faoliyat e‘lon va yangiliklar
                            </li>
                          </Link>

                          <Link to={"/meninggoyam"}>
                            <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                              Mening innovatsiyon g‘oyam
                            </li>
                          </Link>

                          <Link to={"/avtoreferatlar"}>
                            <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                              Aftoreferatlar
                            </li>
                          </Link>

                          <Link to={"/ilmiyjurnallar"}>
                            <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                              Ilmiy jurnallar
                            </li>
                          </Link>

                          <Link to={"/filialkengashi"}>
                            <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                              Filial kengashi
                            </li>
                          </Link>

                          <Link to={"/tadqiqotyunalish"}>
                            <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                              Ilmiy tadqiqot yo‘nalishlar
                            </li>
                          </Link>

                          <Link to={"/ustozshogirt"}>
                            <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                              Ustoz-shogirt maktabi
                            </li>
                          </Link>

                          <Link to={"/nashirishlari"}>
                            <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                              Nashr ishlari
                            </li>
                          </Link>

                          <Link to={"/olimlarmaktabi"}>
                            <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                              Yosh olimlar maktabi
                            </li>
                          </Link>

                          <Link to={"/ilmiytadqiqot"}>
                            <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                              Ilmiy-tadqiqot faolyati
                            </li>
                          </Link>
                        </ul>
                      </li>

                      {/* Ma‘naviy-ma‘rifiy faoliyat */}
                      <li className="hover:bg-blue-700 px-4 py-2 cursor-pointer text-black relative group">
                        Ma‘naviy-ma‘rifiy faoliyat
                        <ul className="absolute left-full top-0 shadow-lg w-64 bg-white text-black hidden group-hover:block overflow-y-auto max-h-60">
                          <Link to={"/talabalarhayoti"}>
                            <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                              Talabalar hayoti
                            </li>
                          </Link>
                          <Link to={"/tyutor"}>
                            <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                              Tyutor faolyati
                            </li>
                          </Link>
                          <Link to={"/psixologi"}>
                            <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                              Filial psixologi
                            </li>
                          </Link>
                          <Link to={"/yotoqxona"}>
                            <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                              Yotoqxona
                            </li>
                          </Link>
                        </ul>
                      </li>

                      {/* Moliyaviy faoliyati */}
                      <li className="hover:bg-blue-700 px-4 py-2 cursor-pointer text-black relative group">
                        Moliyaviy faoliyat
                        <ul className="absolute left-full top-0 shadow-lg w-64 bg-white text-black hidden group-hover:block overflow-y-auto max-h-60">
                          <Link to={"/namunasi"}>
                            <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                              Shartnomalar namunasi
                            </li>
                          </Link>
                          <Link to={"/harajatlarsmetasi"}>
                            <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                              Harajatlar smetasi
                            </li>
                          </Link>
                          <Link to={"/shartnomalar"}>
                            <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                              Tuzulgan Shartnomalar
                            </li>
                          </Link>
                          <Link to={"/haridlari"}>
                            <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                              Davlat haridlari to‘g‘risidagi malumotlar
                            </li>
                          </Link>
                          <Link to={"/masabdorshaxslar"}>
                            <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                              Mansabdor shaxslarning xizmat safarlari va
                              xorijdan tashrif buyurgan mehmonlarni kutib olish
                              harajatlari
                            </li>
                          </Link>
                          <Link to={"/haridqilinishi"}>
                            <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                              Harid qilinishi rejalashtirilgan tovarlari
                            </li>
                          </Link>
                          <Link to={"/haridlari"}>
                            <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                              Davlat haridlari va invesstitsiya loyihalari
                            </li>
                          </Link>
                          <Link to={"/harajatlar"}>
                            <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                              Tasdiqlangan yillik harajatlar smetasi
                            </li>
                          </Link>
                          <Link to={"/kuchmasmulklar"}>
                            <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                              Kuchmas mulklar to‘g‘risidagi
                            </li>
                          </Link>
                        </ul>
                      </li>

                      {/* Ta‘lim sifati */}
                      <li className="hover:bg-blue-700 px-4 py-2 cursor-pointer text-black relative group">
                        Ta‘lim sifati
                        <ul className="absolute left-full top-0 shadow-lg w-64 bg-white text-black hidden group-hover:block overflow-y-auto max-h-60">
                          <Link to={'/katalogii'}>
                            <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                              Ta‘lim dasturi katalogi
                            </li>
                          </Link>
                          <Link to={'/yulxaretasi'}>
                            <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                              Yo‘l haritasi
                            </li>
                          </Link>
                          <Link to={'/tashabbusi'}>
                            <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                              Talabalar tashabbusi
                            </li>
                          </Link>

                          <Link to={'/anonim'}>
                            <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                              Anonim so‘rovnoma
                            </li>
                          </Link>

                          <Link to={'/sorovnomasi'}>
                            <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                              Ta‘lim sifat so‘rovnoma
                            </li>
                          </Link>
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
                      className="absolute left-0 top-full shadow-lg w-48 z-[1000] bg-[#E0D3F6] "
                      onMouseEnter={() => setIsDropdownOpen4(true)}
                      onMouseLeave={() => setIsDropdownOpen4(false)}
                    >
                      {/* Bakalavriat */}
                      <li className="hover:bg-blue-700 px-4 py-2 cursor-pointer text-black relative group">
                        Bakalavriat
                        <ul className="absolute left-full top-0 shadow-lg w-64 bg-white text-black hidden group-hover:block overflow-y-auto max-h-60">
                         <Link to={'/eslatma'}>
                         <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Eslatma
                          </li>
                         </Link>
                          <Link to={'/qabulnizomi'}>
                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Qabul nizomi
                          </li>
                          </Link>
                          <Link to={'/qabulkvotasi'}>
                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Qabul kvotasi
                          </li>
                          </Link>
                         <Link to={'/tuplami'}>
                         <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Hujjatlar to‘plami
                          </li>
                         </Link >
                         <Link to={'/fanlari'}>
                         <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Imtihon fanlari ro‘yxati
                          </li>
                         </Link>
                         <Link to={'/kommisiyasi'}>
                         <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Qabul komissiyasi joylashuv o‘rni
                          </li>
                         </Link>
                          <Link to={'/kallmarkaz'}>
                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Kall markazi
                          </li>
                          </Link>
                          <Link to={'/utishballari'}> 
                          
                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            O‘tish ballari
                          </li> 
                          </Link>
                          <Link to={'/keyingi'}>
                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Ikkinchi va undan keyingi oliy ta‘lim
                          </li>
                          </Link>
                          <Link to={'/tiklash'}>
                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            O‘qishni ko‘chirish qayta tiklash
                          </li>
                          </Link>
                          <Link to={'/kuziojizlar'}>
                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Ko‘zi ojizlar uchun o‘tkaziladigan fan bo‘yicha
                            kirish imtihonlarining dasturlari
                          </li>
                          </Link>

                        <Link to={'/bitiruvchialar'}>
                        <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Texnikum bitiruvchilari qabul qilish
                          </li>
                        </Link>
                         <Link to={'/imtixonlar'}>
                         <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Ijodiy intihonlar
                          </li>
                         </Link>
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
                        <ul className="absolute left-full top-0 shadow-lg w-64 bg-white text-black hidden group-hover:block overflow-y-auto max-h-60">
                          <Link to={'/yuriqnoma'}>
                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Yo‘riqnoma
                          </li>
                          </Link>
                          <Link to={'/kontingent'}>
                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Kontingent
                          </li>
                          </Link>
                          <Link to={'/darsjadvali'}>
                          <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Dars jadvali
                          </li>
                          </Link>
                        <Link to={'/stipendiya'}>
                        <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Stipendiyalar
                          </li>
                        </Link>
                        <Link to={'/talabalar'}>
                        <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Iqtidorli talabalar
                          </li>
                        </Link>
                      <Link to={'/imtihonlari'}>
                      <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Davlat imtihonlari
                          </li>
                      </Link>
                        <Link to={'/bitruv'}>
                        <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Bitiruv malakaviy ish himoyasi
                          </li>
                        </Link>
                       <Link to={'/odobaxloq'}>
                       <li className="hover:bg-gray-200 px-4 py-2 cursor-pointer">
                            Odob ahloq qoidalari
                          </li>
                       </Link>
                        </ul>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
              {/* <div>
                <ButtonWithModal />
              </div> */}
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
