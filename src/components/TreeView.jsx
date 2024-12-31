import React, { useState } from "react";

const TreeView = () => {
  const [openItems, setOpenItems] = useState({}); // Har bir element uchun ochilish holati

  const toggleItem = (id) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id], // Teskari holatga o‘tkazish
    }));
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">Sayt xaritasi</h1>
      <ul className="pl-4 border-l-2 border-gray-300">
        <li className="mb-2">
          <div
            className="flex items-center cursor-pointer"
            onClick={() => toggleItem(1)}
          >
            <span className="mr-2 text-blue-500">
              {openItems[1] ? "▼" : "▶"}
            </span>
            <span className="text-purple-700 font-medium">Asosiy</span>
          </div>
          {openItems[1] && (
            <ul className="pl-4 border-l-2 border-gray-300">
              <li className="mb-2">
                <div
                  className="flex items-center cursor-pointer"
                  onClick={() => toggleItem(2)}
                >
                  <span className="mr-2 text-blue-500">
                    {openItems[2] ? "▼" : "▶"}
                  </span>
                  <span className="text-purple-700 font-medium">Vazirlik</span>
                </div>
                {openItems[2] && (
                  <ul className="pl-4 border-l-2 border-gray-300">
                    <li className="mb-2 text-purple-700">Vazirlik haqida</li>
                    <li className="mb-2 text-purple-700">Rahbariyat</li>
                    <li className="mb-2 text-purple-700">
                      Vazirlik Markaziy apparati
                    </li>
                    <li className="mb-2 text-purple-700">
                      Hududiy boshqarmalar
                    </li>
                    <li className="mb-2">
                      <div
                        className="flex items-center cursor-pointer"
                        onClick={() => toggleItem(3)}
                      >
                        <span className="mr-2 text-blue-500">
                          {openItems[3] ? "▼" : "▶"}
                        </span>
                        <span className="text-purple-700 font-medium">
                          Muvofiqlashtiruvchi va maslahat organlari
                        </span>
                      </div>
                      {openItems[3] && (
                        <ul className="pl-4 border-l-2 border-gray-300">
                          <li className="text-purple-700">
                            Respublika tashkilotlari
                          </li>
                        </ul>
                      )}
                    </li>
                    <li className="mb-2 text-purple-700">
                      Vazirlik tuzilmasi
                    </li>
                    <li className="mb-2 text-purple-700">Rekvizitlar</li>
                    <li className="mb-2 text-purple-700">
                      Missiya, maqsad va vazifalar
                    </li>
                    <li className="mb-2 text-purple-700">Bog‘lanish</li>
                  </ul>
                )}
              </li>
              <li className="mb-2 text-purple-700">Ta'lim</li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default TreeView;
