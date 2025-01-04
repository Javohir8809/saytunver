import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const apiUrl = import.meta.env.VITE_REACT_elon_URL;

const Details = () => {
  const { id } = useParams();
  const [announcement, setAnnouncement] = useState(null);

  useEffect(() => {
    const fullUrl = apiUrl.endsWith("/") ? `${apiUrl}${id}` : `${apiUrl}/${id}`;
    axios
      .get(fullUrl)
      .then((response) => {
        console.log("E'lon ma'lumotlari:", response.data);
        setAnnouncement(response.data);
      })
      .catch((error) => {
        console.log("Ma'lumot olishda xatolik", error);
      });
  }, [id]);

  if (!announcement) {
    return <div>Yuklanmoqda...</div>;
  }

  return (
    <div className="container max-w-[800px] mx-auto px-4 py-8 mt-[200px]">
      <h1 className="text-2xl font-bold mb-4">{announcement.title}</h1>
      <p className="text-gray-600 mb-4">
        <strong>Category:</strong> {announcement.category.category_name}
      </p>
      <img
        src={announcement.image}
        alt={announcement.title}
        className="w-full h-100 object-cover rounded-lg mb-4"
      />
      <div>
        <h2 className="text-xl font-semibold mb-2">Additional Details:</h2>
        <p className="text-gray-700">{announcement.texts[0].body}</p>
      </div>
    </div>
  );
};

export default Details;
