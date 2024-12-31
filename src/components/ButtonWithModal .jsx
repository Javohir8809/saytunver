import React, { useState } from "react";
import Navbar from "./TreeView";
import TreeView from "./TreeView";

const ButtonWithModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="relative">
      <button
        className="bg-blue-950 text-white py-2 px-4 rounded-md"
        onClick={openModal}
      >
        Sayt xaretasi
      </button>

      {isModalOpen && (
        <div className="mt-[300px] fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className=" px-[20px] container max-w-[1210px] mx-auto">
            <div
              className="bg-white w-full h-[390px] p-6 rounded-lg shadow-lg relative animate-fadeIn overflow-y-auto"
              style={{ maxHeight: "90vh" }} // Ekran balandligiga mos scroll
            >
              <h2 className="text-lg font-bold mb-4">Sayt xaretasi</h2>
              <TreeView/>


              <div className="mt-6 flex justify-end">
                <button
                  className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-700 transition"
                  onClick={closeModal}
                >
                  Yopish
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ButtonWithModal;
