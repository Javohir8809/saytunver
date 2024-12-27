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
    <div>
      <h1 className="text-center font-lato text-2xl font-semibold py-5">
        Eng So'ngi Yangiliklar
      </h1>

      {/* Birinchi yangiliklar bo'limi */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((newsItem) => (
          <Link
            to={`/news/${newsItem.id}`}
            key={newsItem.id} 
            className="flex flex-col bg-white text-black rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105"
          >
            {/* Rasmni joylash */}
            <div className="relative w-full h-auto">
              <img
                src={newsItem.image}
                alt={newsItem.title}
                className="w-full h-auto object-cover" 
              />
            </div>
            {/* Yangilik matni */}
            <div className="px-4 pb-3">
              <h2 className="text-xl font-medium text-black">{newsItem.title}</h2>
              <p className="text-sm text-gray-600">{newsItem.description}</p>
              <p className="text-xs text-gray-500 pt-2">
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
