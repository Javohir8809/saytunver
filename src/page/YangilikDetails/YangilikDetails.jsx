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
    <div className="container mx-auto  max-w-[1210px] py-6 mt-[110px]">
      <h1 className="text-3xl font-bold">{newsItem.title}</h1>
     <div className="flex gap-5">
     <img
        src={newsItem.image}
      alt=""
        className="my-4  shadow-lg  object-cover w-[600px]"
      />
      <p className="text-lg mt-2">{newsItem.description}</p>
     </div>
     <p className="text-gray-600 text-sm ">Chop etilgan sana: {newsItem.date}</p>
    </div>
  );
};

export default YangilikDetails;
