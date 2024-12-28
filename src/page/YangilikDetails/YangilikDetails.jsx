import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const apiUrl = import.meta.env.VITE_REACT_NEWS2_URL; // API URL

const YangilikDetails = () => {
  const { id } = useParams(); // URL-dan ID olish
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

  if (loading) return <p>Yuklanmoqda...</p>; // Yuklanish holati
  if (error) return <p className="text-red-500">{error}</p>; // Xatolik holati

  // Yangilikni ko'rsatish
  return (
    <div className="container mx-auto max-w-[1210px] py-6 mt-[210px]">
      <h1 className="text-3xl font-bold mt-10">{newsItem.title}</h1>
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
          <p className="text-lg text-gray-700">
            {newsItem.matnlar[0]?.matn || "Tavsif mavjud emas."}
          </p>
         
        </div>
      </div>
      <p
              className="text-gray-700 text-sm"
              dangerouslySetInnerHTML={{
                __html:
                  news.matnlar
                    .filter((text) => text.language === "uz")
                    .map((text) => text.matn)
                    .join("") || "Content not available in this language.",
              }}
            ></p>
      <p className="text-gray-500 text-sm mt-4">
        Chop etilgan sana: {newsItem.date || "Mavjud emas"}
      </p>
    </div>
  );
};

export default YangilikDetails;
