import React from "react";
import saytlogo from '../assets/photo_2021-11-03_09-02-49.jpg'
import bayroq from '../assets/bayroq.jpg'
import Girb from '../assets/Gerb.png'
const Header = () => {
  return (
    <div>
      <head className="flex items-center justify-end p-2 container mx-auto">
          <img
            src={bayroq}
            alt="UZ"
            className="h-6 mr-2 cursor-pointer "
          />
          <img
            src={Girb}
            alt="UZ"
            className="h-5 mr-2 cursor-pointer"
          />
          <img src="" alt="" />
          <i className="fas fa-envelope mr-2 text-xl cursor-pointer"></i>
          <i className="fas fa-phone mr-2 text-xl cursor-pointer"></i>
          <div className="ml-4">
           <select name="" id="" className="border-4">
            <option value="salom">langue</option>
            <option value="salom">uzbek</option>
            <option value="salom">rus</option>
            <option value="salom">Engilis tili</option>
           </select>
          </div>
        </head>
      <div className="bg-white border-b-2 border-t-2 border-gray-300 ">
       
      <div className="container mx-auto">
       

        <header className="flex flex-wrap justify-between   items-center py-2 px-5 ">
          <div className="flex items-center flex-1">
            <img src={saytlogo} alt="Logo" className="h-15 w-[50px] h-auto mr-3" />
            <div className="font-bold text-lg text-gray-800">
              Samarqand davlat universiteti Kattaqo‘rg‘on filiali
            </div>
          </div>

          <nav className="flex items-center flex-2 justify-center">
            <a
              href="#"
              className="text-gray-800 mx-3 text-sm relative hover:text-blue-500"
            >
              UNIVERSITET
              <span className="block w-0 h-0.5 bg-blue-500 transition-all duration-300 hover:w-full"></span>
            </a>
            <a
              href="#"
              className="text-gray-800 mx-3 text-sm relative hover:text-blue-500"
            >
              FAOLIYAT
              <span className="block w-0 h-0.5 bg-blue-500 transition-all duration-300 hover:w-full"></span>
            </a>
            <a
              href="#"
              className="text-gray-800 mx-3 text-sm relative hover:text-blue-500"
            >
              REYTING
              <span className="block w-0 h-0.5 bg-blue-500 transition-all duration-300 hover:w-full"></span>
            </a>
            <a
              href="#"
              className="text-gray-800 mx-3 text-sm relative hover:text-blue-500"
            >
              TALABALARGA
              <span className="block w-0 h-0.5 bg-blue-500 transition-all duration-300 hover:w-full"></span>
            </a>
            <a
              href="#"
              className="text-gray-800 mx-3 text-sm relative hover:text-blue-500"
            >
              ABITURIYENT
              <span className="block w-0 h-0.5 bg-blue-500 transition-all duration-300 hover:w-full"></span>
            </a>
            <a
              href="#"
              className="text-gray-800 mx-3 text-sm relative hover:text-blue-500"
            >
              FAXRLARIMIZ
              <span className="block w-0 h-0.5 bg-blue-500 transition-all duration-300 hover:w-full"></span>
            </a>
            <a
              href="#"
              className="text-gray-800 mx-3 text-sm relative hover:text-blue-500"
            >
              ALOQA
              <span className="block w-0 h-0.5 bg-blue-500 transition-all duration-300 hover:w-full"></span>
            </a>
          </nav>
        </header>
      </div>
    </div>
    </div>
  );
};

export default Header;
