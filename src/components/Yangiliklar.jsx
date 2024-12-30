import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const NewsComponent = () => {
  const [newsData, setNewsData] = useState([]); // API-dan kelgan ma'lumotlar
  const [loading, setLoading] = useState(true); // Yuklanish jarayoni
  const [error, setError] = useState(null); // Xatolik holati
  const apiUrl = import.meta.env.VITE_REACT_NEWS2_URL; // API URL

  useEffect(() => {
    // API dan ma'lumot olish
    fetch(`${apiUrl}`)
      .then((response) => {
        console.log("Response:", response);
        if (!response.ok) {
          throw new Error("API dan ma'lumotlarni olishda xatolik yuz berdi");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Data:", data);
        setNewsData(data); // Ma'lumotlarni state ga yozish
        setLoading(false); // Yuklanish holatini tugatish
      })
      .catch((error) => {
        console.error("Xatolik:", error.message);
        setError(error.message);
        setLoading(false); // Yuklanish holatini tugatish
      });
  }, []);

  // Yuklanish jarayoni davom etayotganini ko'rsatish
  if (loading) {
    return <div>Yuklanmoqda...</div>;
  }

  // Xatolik yuz bergan holatda xabar chiqarish
  if (error) {
    return <div>Xatolik: {error}</div>;
  }

  // Ma'lumotlarni ko'rsatish
  return (
    <div className="container max-w-[1210px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 mb-10">
      {newsData.map((news) => (
        <div
          key={news.id}
          className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300 w-full"
        >
          {/* Rasm */}
          <div className="relative">
            {news.rasmlar.length > 0 && (
              <img
                src={news.rasmlar[0].rasm}
                alt={news.title}
                className="w-full h-40 sm:h-48 md:h-56 lg:h-60 object-cover"
              />
            )}
          </div>

          {/* Kontent */}
          <div className="p-4">
            <h2 className="text-lg font-bold text-gray-800 mb-2">
              {news.title}
            </h2>
            <p className="text-sm text-gray-600 mb-3 line-clamp-2">
              {news.matnlar
                .filter((text) => text.language === "uz")
                .map((text) => text.matn)
                .join("") || "Til mavjud emas"}
            </p>
            <p className="text-xs text-gray-400 mb-3">
              {new Date().toLocaleDateString("uz-UZ")}
            </p>
            {/* Details tugmasi */}
            <Link
              to={`/news/${news.id}`}
              className="inline-block bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-600 transition"
            >
              Batafsil
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsComponent;
