import axios from "axios";
import { useEffect, useState } from "react";
import JaloliddinMahmudov from "../../images/Iqtidorlitalabalar/JaloliddinMahmudov.jpg";
import NasrulloyevaRayhona from "../../images/Iqtidorlitalabalar/NasrulloyevaRayhona.jpg";
import YusupovaGulnoza from "../../images/Iqtidorlitalabalar/YusupovaGulnoza.jpg";

const Foaltalabalar = () => {
  return (
    <div className="container  max-w-[1210px] mx-auto">
      <h1 className="mt-5 font-lato text-4xl ">IQTIDORLI TALABALAR</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 place-items-center mt-5">
  <div className="relative w-full max-w-[200px] h-72 overflow-hidden rounded-lg shadow-md">
    <img
      className="w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-110"
      src={JaloliddinMahmudov}
      alt="Jaloliddin Mahmudov"
    />
    <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white p-3 text-center">
      <h3 className="text-lg m-0 line-clamp-2">Jaloliddin Mahmudov Dilshod O‘g'li</h3>
      {/* <p className="text-sm mt-1 line-clamp-2">Guruhi:M_21_02</p> */}
    </div>
  </div>

  <div className="relative w-full max-w-[200px] h-72 overflow-hidden rounded-lg shadow-md">
    <img
      className="w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-110"
      src={NasrulloyevaRayhona}
      alt="Nasrulloyeva Rayhona"
    />
    <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white p-3 text-center">
      <h3 className="text-lg m-0 line-clamp-2">Nasrulloyeva Rayhona Noibjon qizi</h3>
      {/* <p className="text-sm mt-1 line-clamp-2">Guruhi:M_21_02</p> */}
    </div>
  </div>

  <div className="relative w-full max-w-[200px] h-72 overflow-hidden rounded-lg shadow-md">
    <img
      className="w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-110"
      src={YusupovaGulnoza}
      alt="Yusupova Gulnoza"
    />
    <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white p-3 text-center">
      <h3 className="text-lg m-0 line-clamp-2">Yusupova Gulnoza Ma'rufjon qizi</h3>
      {/* <p className="text-sm mt-1 line-clamp-2">Guruhi:FT_22_09</p> */}
    </div>
  </div>
</div>

    </div>
  );
};

export default Foaltalabalar;
