import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Yangiliklar = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/news")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Yangiliklarni olishda xatolik:", error);
      });
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-center font-lato text-2xl md:text-3xl font-semibold py-5">
        Eng So'ngi Yangiliklar
      </h1>

      {/* Grid tuzilmasi */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((newsItem) => (
          <Link
            to={`/news/${newsItem.id}`}
            key={newsItem.id}
            className="flex flex-col bg-white text-black rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            {/* Tasvir */}
            <div className="relative w-full h-56 sm:h-48 md:h-40 lg:h-56">
              <img
                src={newsItem.image}
                alt={newsItem.title}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Yangilik matni */}
            <div className="px-4 py-3 flex flex-col justify-between">
              <h2 className="text-base sm:text-lg md:text-xl font-medium text-black mb-2">
                {newsItem.title}
              </h2>
              <p className="text-sm text-gray-600 line-clamp-2">
                {newsItem.description}
              </p>
              <p className="text-xs text-gray-500 mt-3">
                <strong>Published on:</strong> {newsItem.date}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Yangiliklar;
