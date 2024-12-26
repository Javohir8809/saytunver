import axios from "axios";
import { useEffect, useState } from "react";

const Elonlar = () => {
const [news, setNews] = useState([]);
useEffect(() => {
    axios
      .get('http://localhost:4000/news2')
      .then((response) => {
        setNews(response.data);
      })
      .catch((error) => {
        console.log('Yangiliklar malumotlarini olishda xatolik', error);
      });
  }, []);

  return (
    <div>

{/* Ikkinchi yangiliklar bo'limi */}
<h1 className="text-center font-lato text-2xl font-semibold py-5 mt-10 mb-5">So'nggi E'lonlar</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {news.map((yangiliklar) => (
          <div
            key={yangiliklar.id}
            className="flex flex-col bg-white text-black rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105"
          >
            {/* Rasmni joylash */}
            <div className="relative w-full h-64">
              <img
                src={yangiliklar.image}
                alt={yangiliklar.title}
                className="w-full h-full object-cover " // Hoverda rasm kattalashishi
              />
            </div>
            {/* Yangilik matni */}
            <div className="px-4 py-3">
              <h2 className="text-xl font-medium text-black">{yangiliklar.title}</h2>
              <p className="text-sm text-gray-600">{yangiliklar.description}</p>
              <p className="text-xs text-gray-500 pt-2"><strong>{yangiliklar.date}</strong></p>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}
export default Elonlar