import axios from "axios";
import { useEffect, useState } from "react";

const Elonlar = () => {
  const [news, setNews] = useState([]);
  
  useEffect(() => {
    axios
      .get("http://localhost:4000/news2")
      .then((response) => {
        setNews(response.data);
      })
      .catch((error) => {
        console.log("Yangiliklar malumotlarini olishda xatolik", error);
      });
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Ikkinchi yangiliklar bo'limi */}
      <h1 className="text-center font-lato text-2xl md:text-3xl font-semibold py-5 mt-10 mb-5">
        So'nggi E'lonlar
      </h1>

      {/* Grid tizimi */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {news.map((yangiliklar) => (
          <div
            key={yangiliklar.id}
            className="flex flex-col bg-white text-black rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            {/* Rasm */}
            <div className="relative w-full h-48 sm:h-40 md:h-36 lg:h-48">
              <img
                src={yangiliklar.image}
                alt={yangiliklar.title}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Matn */}
            <div className="px-4 py-3 flex flex-col justify-between">
              <h2 className="text-lg sm:text-xl md:text-xl font-medium text-black mb-2">
                {yangiliklar.title}
              </h2>
              <p className="text-sm text-gray-600 line-clamp-2">
                {yangiliklar.description}
              </p>
              <p className="text-xs text-gray-500 mt-3">
                <strong>{yangiliklar.date}</strong>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Elonlar;
