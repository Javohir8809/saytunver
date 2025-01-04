import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const YangilikDetails = () => {
  const { id } = useParams(); // URL dan id olish
  const [news, setNews] = useState(null); // Yangilik ma'lumotlari
  const [loading, setLoading] = useState(true); // Yuklanish holati
  const [error, setError] = useState(null); // Xatolik
  const apiUrl = import.meta.env.VITE_REACT_NEWS2_URL; // API URL

  useEffect(() => {
    
    fetch(`${apiUrl}/${id}`)
      .then((response) => {
        console.log("Response:", response);
        if (!response.ok) {
          throw new Error("API dan yangilikni olishda xatolik yuz berdi");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Data:", data);
        setNews(data); 
        setLoading(false);
      })
      .catch((error) => {
        console.error("Xatolik:", error.message);
        setError(error.message);
        setLoading(false);
      });
  }, [apiUrl, id]);

  if (loading) {
    return <div>Yuklanmoqda...</div>;
  }

  if (error) {
    return <div>Xatolik: {error}</div>;
  }

  if (!news) {
    return <div>Yangilik topilmadi</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">{news.title}</h1>
      {news.rasmlar.length > 0 && (
        <img
          src={news.rasmlar[0].rasm}
          alt={news.title}
          className="w-full h-80 object-cover rounded-lg my-4"
        />
      )}
      {news.matnlar.map((text) => (
        <p
          key={text.id}
          className="text-gray-700 mb-4"
          dangerouslySetInnerHTML={{ __html: text.matn }}
        ></p>
      ))}
    </div>
  );
};

export default YangilikDetails;
