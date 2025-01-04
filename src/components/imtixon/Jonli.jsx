import React from 'react';
import rasim from '../../assets/kameraimg/97f85629e28ad9389b2a8ed836816c48.png';
import { FaCircle, FaClock } from 'react-icons/fa';

const Jonli = () => {
  return (
    <div className="container mx-auto max-w-[1210px] px-2 rounded-3xl">
      <div className="bg-[#c2cbcd] h-[390px] flex flex-col md:flex-row justify-between">
        <div className="pl-10 pt-8 md:pl-12 md:pt-10">
          <h1 className="text-lg font-lato text-[32px] md:text-[44px]">Imtihonlar</h1>
          <p className="w-full md:w-[370px] pt-5 text-[16px] md:text-[20px]">
            Samarqand davlat universitetining Kattaqo‘rg‘on filialida “2024-2025 o‘quv yili birinchi yarim yillik yakuniy nazoratlarini o‘tkazish to‘g‘risida” 2024-yil 16-dekabrdagi 150-ij sonli buyrug‘i asosida
          </p>
          <div className="flex gap-4 mt-8 md:mt-[80px] flex-col md:flex-row">
            <button className="flex items-center bg-red-600 text-white text-sm font-bold py-2 px-4 rounded-lg shadow-md hover:bg-red-700 transition">
              <div className="flex items-center justify-center mr-2">
                <FaCircle className="animate-ping text-xs" />
                <FaCircle className="absolute text-white text-xs opacity-70" />
              </div>
              <a href="https://live.samdukf.uz"> JONLI KO'RISH</a>
             
            </button>
            <button className="flex items-center bg-blue-600 text-white text-sm font-bold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition mt-4 md:mt-0">
              <FaClock className="mr-2 text-lg" />
              <a href="https://drive.google.com/file/d/1B22nvt91UWOmlADlcyXXFU7jTSxOxYTw/view?usp=sharing">IMTIXON VAQTLARI</a>
            </button>
          </div>
        </div>
        <div className="pb-10 mt-4 md:mt-0">
          <img src={rasim} alt="Imtihon" className="py-5 px-5 pt-10 w-full md:w-[550px] rounded-sm" />
        </div>
      </div>
    </div>
  );
};

export default Jonli;
