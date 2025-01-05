import React from 'react';
import rasim from '../../assets/kameraimg/97f85629e28ad9389b2a8ed836816c48.png';
import { FaCircle, FaClock } from 'react-icons/fa';

const Jonli = () => {
  return (
    <div className="container mx-auto max-w-[1210px] px-4 py-6">
      {/* Asosiy karta */}
      <div className="bg-[#c2cbcd] rounded-2xl flex flex-col md:flex-row items-center justify-between shadow-lg overflow-hidden">
        {/* Matn bo'limi */}
        <div className="pl-6 pr-6 py-8 md:pl-12 md:py-10 flex-1">
          <h1 className="text-2xl md:text-4xl font-bold font-lato text-gray-800">Imtihonlar</h1>
          <p className="text-base md:text-lg text-gray-700 mt-4 md:mt-6 leading-relaxed">
            Samarqand davlat universitetining Kattaqo‘rg‘on filialida “2024-2025 o‘quv yili birinchi yarim yillik 
            yakuniy nazoratlarini o‘tkazish to‘g‘risida” 2024-yil 16-dekabrdagi 150-ij sonli buyrug‘i asosida.
          </p>
          {/* Tugmalar */}
          <div className="flex flex-col md:flex-row gap-4 mt-6 md:mt-10">
            <a
              href="https://live.samdukf.uz"
              className="flex items-center justify-center bg-red-600 text-white text-sm md:text-base font-semibold py-3 px-5 rounded-lg shadow hover:bg-red-700 transition duration-300"
            >
              <div className="flex items-center justify-center relative mr-2">
                <FaCircle className="animate-ping text-xs text-white" />
                <FaCircle className="absolute text-white text-xs opacity-70" />
              </div>
              JONLI KO'RISH
            </a>
            <a
              href="https://drive.google.com/file/d/1B22nvt91UWOmlADlcyXXFU7jTSxOxYTw/view?usp=sharing"
              className="flex items-center justify-center bg-blue-600 text-white text-sm md:text-base font-semibold py-3 px-5 rounded-lg shadow hover:bg-blue-700 transition duration-300"
            >
              <FaClock className="mr-2 text-lg" />
              IMTIXON VAQTLARI
            </a>
          </div>
        </div>
        {/* Rasm bo'limi */}
        <div className="flex-1">
          <img
            src={rasim}
            alt="Imtihon"
            className="w-full md:w-[550px] object-cover py-5 px-2 rounded-b-2xl md:rounded-none md:rounded-r-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Jonli;
