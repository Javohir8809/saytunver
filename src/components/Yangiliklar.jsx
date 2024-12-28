import React, { useState, useEffect } from "react";

const NewsComponent = () => {
  const [newsData, setNewsData] = useState([]); // API-dan kelgan ma'lumotlar
  const [loading, setLoading] = useState(true); // Yuklanish jarayoni
  const [error, setError] = useState(null); // Xatolik holati
  const apiUrl = import.meta.env.VITE_REACT_NEWS2_URL; // API URL

  useEffect(() => {
    // API dan ma'lumot olish
    fetch(`${apiUrl}`)
      .then((response) => {
        console.log("Response:", response); // Response ni konsolga chiqarish
        if (!response.ok) {
          throw new Error("API dan ma'lumotlarni olishda xatolik yuz berdi");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Data:", data); // JSON ma'lumotni konsolga chiqarish
        setNewsData(data); // Ma'lumotlarni state ga yozish
        setLoading(false); // Yuklanish holatini tugatish
      })
      .catch((error) => {
        console.error("Xatolik:", error.message); // Xatolikni konsolga chiqarish
        setError(error.message); // Xatoni state ga yozish
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
    <div className="container max-w-[1210px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {newsData.map((news) => (
        <div
          key={news.id}
          className="card bg-white shadow-lg rounded-lg overflow-hidden"
        >
          {/* Rasm */}
          <div className="card-image">
            {news.rasmlar.length > 0 && (
              <img
                src={news.rasmlar[0].rasm}
                alt={news.title}
                className="w-full h-40 object-cover"
              />
            )}
          </div>

          {/* Kontent */}
          <div className="card-content p-4">
            <h2 className="text-lg font-bold mb-2">{news.title}</h2>
            <p className="text-gray-700 text-sm">
              {news.matnlar
                .filter((text) => text.language === "uz")
                .map((text) => text.matn)
                .join("") || "Til mavjud emas"}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsComponent;
