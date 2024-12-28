import React, { useState } from "react";

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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-[90%] md:w-[50%] p-6 rounded-lg shadow-lg relative">
            <h2 className="text-lg font-bold mb-4">Sayt xaretasi</h2>
            <p>Bu yerda saytning xaritasi bo'ladi.</p>
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
      )}
    </div>
  );
};

export default ButtonWithModal;
