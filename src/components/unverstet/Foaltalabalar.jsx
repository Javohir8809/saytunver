import axios from "axios";
import { useEffect, useState } from "react";
import JaloliddinMahmudov from "../../../public/Iqdidorli talabalar/Jaloliddin Mahmudov.jpg";
import NasrulloyevaRayhona from "../../../public/Iqdidorli talabalar/Nasrulloyeva Rayhona.jpg";
import YusupovaGulnoza from "../../../public/Iqdidorli talabalar/Yusupova Gulnoza.jpg";

const Foaltalabalar = () => {
  const talabalar = [
    {
      image:
        "https://ttysi.uz/storage/uploads/recall/PEjAwt9l1xs7xWFKnZHOWBRHCXMsanQYOnpmyPTb.jpg",
      "ism-fameliya": "Niyozov Azizjon",
      "otasini-ismi": "G'ayrat o'g'li",
      guruhi: "M1-24 guruh",
    },
    {
      image:
        "https://ttysi.uz/storage/uploads/recall/cPk14qVPrA3soXX1vO2vtYdkH6ei6RxbRgNvZ0Jx.jpg",
      "ism-fameliya": "Islomberdieva Sarvinoz",
      "otasini-ismi": "Shavkat qizi",
      guruhi: "16-20 guruh",
    },
    {
      image:
        "https://ttysi.uz/storage/uploads/recall/yvSNabRt14lIPGT6eZaMYKV7c5BLAAywwyVpTF8B.jpg",
      "ism-fameliya": "Otaxanov Obidxon",
      "otasini-ismi": "Davlat o'g'li",
      guruhi: "M1-24 guruh",
    },
    {
      image:
        "https://ttysi.uz/storage/uploads/recall/59Dh53PK0W3HoSuvIpGdjoYoB9kln4JmeLSJDOoY.jpg",
      "ism-fameliya": "Tohirova Husnora",
      "otasini-ismi": "Nurillo qizi",
      guruhi: "8-22 guruh",
    },
    {
      image:
        "https://ttysi.uz/storage/uploads/recall/UWQdpd0qrDXbhKAJ729z2zUkm1DEUlTidKOtKHkX.jpg",
      "ism-fameliya": "Xasanov Zohir",
      "otasini-ismi": "Toxir o'g'li",
      guruhi: "18-23 guruh",
    },
  ];

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:4000/foaltalabalar")
  //     .then((response) => {
  //       setTalaba(response.data);
  //     })
  //     .catch((error) => {
  //       console.log("Talabani ma'lumotini olishda xatolik", error);
  //     });
  // }, []);

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
      <p className="text-sm mt-1 line-clamp-2">Guruhi:M_21_02</p>
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
      <p className="text-sm mt-1 line-clamp-2">Guruhi:M_21_02</p>
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
      <p className="text-sm mt-1 line-clamp-2">Guruhi:FT_22_09</p>
    </div>
  </div>
</div>

    </div>
  );
};

export default Foaltalabalar;
