import React from 'react';
import rasim from '../../assets/img/Amerka.jpg';
import { FaCircle, FaClock } from 'react-icons/fa';

const Jonli = () => {
  return (
    <div className="container mx-auto max-w-[1210px] px-2">
      <div className="bg-[#c2cbcd] h-[390px] flex justify-between">
        <div className="pl-10 pt-8">
          <h2 className="text-lg font-bold">Imtihonlar</h2>
          <p className="w-[350px] pt-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex laborum
            quia aut ipsum ea. Quia, ut sed laboriosam iste ipsam beatae quasi
            tempora quaerat. Ullam aperiam quia optio saepe maiores. Accusantium,
            rerum libero quae ipsam cum aut repudiandae corporis quas vero nemo
            ipsa
          </p>
          <div className="flex gap-4 mt-[100px]">
            <button className="flex items-center bg-red-600 text-white text-sm font-bold py-2 px-4 rounded-lg shadow-md hover:bg-red-700 transition">
              <div className="flex items-center justify-center mr-2">
                <FaCircle className="animate-ping text-xs" />
                <FaCircle className="absolute text-white text-xs opacity-70" />
              </div>
              JONLI KO'RISH
            </button>
            <button className="flex items-center  bg-blue-600 text-white text-sm font-bold py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition">
              <FaClock className="mr-2 text-lg" />
              IMTIXON VAQTLARI
            </button>
          </div>
        </div>
        <div>
          {/* Video komponenti */}
          <video
            controls
            width="600"
            className="rounded-lg py-5 px-5 pt-10"
            autoPlay
          >
            <source
              src="https://www.youtube.com/live/Ae0cQgmJgeM?si=cugDSaGEV3-sVTVj"
              type="video/mp4"
            />
            Brauzeringiz video formatini qo‘llab-quvvatlamaydi.
          </video>
        </div>
      </div>
    </div>
  );
};

export default Jonli;
