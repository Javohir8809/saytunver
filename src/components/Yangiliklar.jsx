import React, { useState, useEffect } from "react";

const NewsComponent = () => {
  const [newsData, setNewsData] = useState([]); // API-dan kelgan ma'lumotlar
  const [loading, setLoading] = useState(true); // Yuklanish jarayoni
  const [error, setError] = useState(null); // Xatolik holati

  useEffect(() => {
    // API dan ma'lumot olish
    fetch("https://javodev.uz/yangiliklar/") // API URL
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
  }, []); // Faqat bir marta ishlaydi

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
    <div className="container max-w-[1210px] mx-auto">
      {newsData.map((news) => (
        <div key={news.id} className="news-item mb-6 border-b pb-4">
          {/* Sarlavha */}
          <h2 className="font-bold text-2xl mb-2">{news.title}</h2>

          {/* Rasmlar */}
          <div className="news-images mb-4">
            {news.rasmlar.map((image) => (
              <img
                key={image.id}
                src={image.rasm}
                alt={news.title}
                className="w-64 h-40 object-cover rounded-lg"
              />
            ))}
          </div>

       
          <div className="news-text">
            {news.matnlar.map((text) => (
              <p key={text.id} className="text-gray-800">
                {text.language === "uz" ? text.matn : "Til mavjud emas"}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewsComponent;
