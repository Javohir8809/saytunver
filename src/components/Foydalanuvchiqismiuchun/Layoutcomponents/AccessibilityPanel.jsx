import { useState } from "react";
import { useRejimlarContext } from "../../../context/Rejimlar";

const AccessibilityPanel = () => {
  const { toggleAccessibility, toggleDaltonicMode } = useRejimlarContext();
  const [fontSize, setFontSize] = useState(100); // Standart shrift o'lchami (100%)

  const handleFontSizeChange = (event) => {
    const newSize = event.target.value;
    setFontSize(newSize);
    document.documentElement.style.fontSize = `${newSize}%`;
  };

  const handleResetFontSize = () => {
    setFontSize(100);
    document.documentElement.style.fontSize = "100%";
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded shadow-md">
      {/* Ko'rinish boshqaruvi */}
      <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
        Ko‘rinish
      </h3>
      <div className="flex items-center space-x-2 mb-4">
        <button
          className="bg-blue-600 text-white w-10 h-10 flex items-center justify-center rounded"
          onClick={toggleAccessibility}
          title="Standart rejim"
        >
          A
        </button>
        <button
          className="bg-gray-500 text-white w-10 h-10 flex items-center justify-center rounded"
          onClick={toggleAccessibility}
          title="Ko'zi ojizlar rejimi"
        >
          A
        </button>
        <button
          className="bg-black text-white w-10 h-10 flex items-center justify-center rounded"
          onClick={toggleDaltonicMode}
          title="Daltonik rejim"
        >
          A
        </button>
      </div>

      {/* Shrift o'lchami boshqaruvi */}
      <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
        Shrift o‘lchami
      </h3>
      <div className="mb-4">
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-1">
          Kattalashtirish: {fontSize - 100}%
        </p>
        <input
          type="range"
          min="50"
          max="200"
          value={fontSize}
          onChange={handleFontSizeChange}
          className="w-full"
        />
      </div>
      <button
        onClick={handleResetFontSize}
        className="text-sm text-blue-600 hover:underline"
      >
        Asliga qaytarish
      </button>
    </div>
  );
};

export default AccessibilityPanel;
