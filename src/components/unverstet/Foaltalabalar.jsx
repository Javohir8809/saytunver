import axios from "axios";
import { useEffect, useState } from "react";

const Foaltalabalar = () => {
  const [talaba, setTalaba] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/foaltalabalar")
      .then((response) => {
        setTalaba(response.data);
      })
      .catch((error) => {
        console.log("Talabani ma'lumotini olishda xatolik", error);
      });
  }, []);

  return (
    <div className="flex flex-wrap gap-6 justify-between mt-5 ">
      {talaba.map((malumot) => (
        <div
          key={malumot.id}
          className="relative w-68 h-72 overflow-hidden rounded-lg shadow-md"
        >
          {/* Rasm */}
          <img
            className="w-full h-full object-cover transition-transform duration-700 ease-in-out hover:scale-110"
            src={malumot.image}
            alt={`${malumot["ism-fameliya"]}`}
          />

          {/* Yozuv */}
          <div className="absolute bottom-0 w-full bg-black bg-opacity-60 text-white p-3 text-center">
            <h3 className="text-lg m-0 line-clamp-2">
              {malumot["ism-fameliya"]} {malumot["otasini-ismi"]}
            </h3>
            <p className="text-sm mt-1 line-clamp-2">
              {malumot.guruhi || "Guruh ma'lum emas"}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Foaltalabalar;
