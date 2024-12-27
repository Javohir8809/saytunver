import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const YangilikDetails = () => {
  const { id } = useParams(); 
  const [newsItem, setNewsItem] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/news/${id}`)
      .then((response) => {
        console.log("API javobi:", response.data); 
        setNewsItem(response.data);
      })
      .catch((error) => {
        console.error("Yangilikni olishda xatolik:", error);
      });
  }, [id]);

  if (!newsItem) return <p>Ma'lumotlar yuklanmoqda yoki mavjud emas...</p>;

  return (
    <div className="container mx-auto py-6 mt-10">
      <h1 className="text-3xl font-bold">{newsItem.title}</h1>
      <p className="text-gray-600 text-sm ">Chop etilgan sana: {newsItem.date}</p>
      <img
        src={newsItem.image}
      alt=""
        className="my-4 rounded-lg shadow-lg  object-cover w-10"
      />
      <p className="text-lg">{newsItem.description}</p>
    </div>
  );
};

export default YangilikDetails;
