import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router";

const apiUrl = import.meta.env.VITE_REACT_elon_URL;

const Elonlar = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get(`${apiUrl}`)
      .then((response) => {
        console.log("API javobi:", response.data);
        setNews(response.data);
      })
      .catch((error) => {
        console.log("Yangiliklar ma'lumotlarini olishda xatolik", error);
      });
  }, []);

  return (
    <div className="container max-w-[1210px] mx-auto px-4 py-8 ">
      <h1 className=" font-lato text-2xl md:text-3xl font-semibold py-5 mt-10 mb-5">
        So'nggi E'lonlar
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.map((announcement) => (
          <div
            key={announcement.id}
            className="bg-white shadow-md border border-gray-200 rounded-lg overflow-hidden p-4 hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={announcement.image}
              alt={announcement.title}
              className="w-full h-70 object-cover rounded-lg mb-3"
            />
            {/* Title */}
            <h2 className="text-xl font-bold mb-2 text-gray-800">
              {announcement.title}
            </h2>

            {/* Created At */}
            

            {/* Category */}
            <p className="text-sm text-gray-600 mb-2">
              <strong className="font-medium"></strong>{" "}
              {announcement.category.category_name}
            </p>
            <Link
              to={`/details/${announcement.id}`}
              className="hover:underline"
            >
              <button className="bg-blue-600 text-white py-1 px-1 rounded-xl">
              Batafsil ko'rish
              </button>
            </Link>
            <p className="text-sm text-gray-600 mb-2">
              <strong className="font-medium"></strong>{" "}
              {new Date(announcement.created_at).toLocaleDateString()}
            </p>
            {/* Main Image */}
            

            {/* Tags
            <p className="text-sm text-gray-600 mb-2">
              <strong className="font-medium"></strong> {announcement.tags}
            </p> */}

            {/* Images */}
            {/* <div>
              <strong className="font-medium text-gray-800 block mb-1">
                Additional Images:
              </strong>
              <div className="flex gap-2">
                {announcement.images.map((img) => (
                  <img
                    key={img.id}
                    src={img.image}
                    alt={`Image ${img.id}`}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                ))}
              </div>
            </div> */}

            {/* Texts */}
            <div className="mt-4">
              {/* <strong className="font-medium text-gray-800 block mb-2">
                Texts:
              </strong> */}
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Elonlar;
