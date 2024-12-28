import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const apiUrl = import.meta.env.VITE_REACT_NEWS2_URL; // API URL

const YangilikDetails = () => {
  const { id } = useParams(); // URL dan ID olish
  const [newsItem, setNewsItem] = useState(null); // Yangilik ma'lumotlari
  const [loading, setLoading] = useState(true); // Yuklanish holati
  const [error, setError] = useState(null); // Xatolik holati

  useEffect(() => {
    axios
      .get(`${apiUrl}/${id}/`) // API so'rovi
      .then((response) => {
        console.log("API javobi:", response.data); // API javobini konsolga chiqarish
        setNewsItem(response.data); // Ma'lumotlarni state ga yozish
        setLoading(false); // Yuklanish jarayonini tugatish
      })
      .catch((error) => {
        console.error("Yangilikni olishda xatolik:", error); // Xatolikni konsolga chiqarish
        setError("Yangilikni yuklashda xatolik yuz berdi.");
        setLoading(false); // Yuklanish jarayonini tugatish
      });
  }, [id]);

  // Yuklanish jarayoni davom etayotgan bo'lsa
  if (loading) {
    return <p>Yuklanmoqda...</p>;
  }

  // Xatolik yuz bergan bo'lsa
  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  // Ma'lumotlarni ko'rsatish
  return (
    <div className="container mx-auto max-w-[1210px] py-6 mt-[110px]">
      {/* Sarlavha */}
      <h1 className="text-3xl font-bold mb-4">{newsItem.title}</h1>

      {/* Kontent */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Rasm */}
        <div className="flex-shrink-0">
          {newsItem.rasmlar && newsItem.rasmlar.length > 0 ? (
            <img
              src={newsItem.rasmlar[0].rasm}
              alt={newsItem.title}
              className="w-full md:w-[600px] h-auto rounded-lg shadow-md object-cover"
            />
          ) : (
            <p>Rasm mavjud emas</p>
          )}
        </div>

        {/* Tavsif */}
        <div>
          <p className="text-lg text-gray-700">{newsItem.matnlar[0]?.matn || "Tavsif mavjud emas."}</p>
        </div>
      </div>

      {/* Sana */}
      <p className="text-gray-500 text-sm mt-4">
        Chop etilgan sana: {newsItem.date || "Mavjud emas"}
      </p>
    </div>
  );
};

export default YangilikDetails;
