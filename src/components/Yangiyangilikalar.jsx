import { useEffect, useState } from "react";
import axios from "axios";

const apiUrli = import.meta.env.VITE_REACT_yangiliklar_URL;

const Yangiyangilikalar = () => {
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState([]);

  useEffect(() => {
    axios
      .get(apiUrli)
      .then((response) => {
        setNews(response.data); // Yangiliklar ma'lumotini o'zgaruvchiga saqlash
      })
      .catch((error) => {
        console.log("Yangiliklar ma'lumotlarini olishda xatolik", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className="container max-w-[1210px] mx-auto px-4 py-8 ">
      <h1 className="font-lato text-2xl md:text-3xl font-semibold py-5 mt-10 mb-5">
        So'nggi yangiliklar
      </h1>
      {loading ? (
        <div className="text-center">Yuklanmoqda...</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((announcement) => (
            <div
              key={announcement.id}
              className="bg-white shadow-md border border-gray-200 rounded-lg overflow-hidden p-4 hover:shadow-lg transition-shadow duration-300"
            >
                <div className="mb-3">
                <img
                  src={announcement.image}
                  alt="Samdukf"
                  className="w-full h-60 object-cover rounded-lg mb-2"
                />
              </div>
              <h2 className="text-xl font-bold mb-2 text-gray-800">
                {announcement.title}
              </h2>
              {/* <p className="text-sm text-gray-600 mb-2">
                <strong className="font-medium">Kategoriya:</strong>{" "}
                {announcement.category.category_name || "Noma'lum kategoriya"}
              </p> */}
              

              

              {announcement.texts && announcement.texts.length > 0 && (
                <div className="text-sm text-gray-600">
                {announcement.texts
                  .filter((text) => text.language === "uz") // Faqat O'zbek tilidagi matnlarni filtrlaydi
                  .map((text) => (
                    <p key={text.id}>
                      <strong></strong> {text.body}
                    </p>
                  ))}
                <p className="text-sm text-gray-600 mb-2">
                  <strong className="font-medium"></strong>{" "}
                  {announcement.created_at
                    ? new Date(announcement.created_at).toLocaleDateString()
                    : "N/A"}
                </p>
              </div>
              
              )}
                            <button>batafsil</button>

            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Yangiyangilikalar;
