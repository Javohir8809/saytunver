import FilialHeaderMenu from "./Menu/Filialheadermenu";
import { PiSignIn } from "react-icons/pi";
import { useRejimlarContext } from "/src/context/Rejimlar";
import Yangiliklarheadermenu from "./Menu/Yangiliklarheadermenu";
import Tuzilmaheader from "./Menu/Tuzilmaheader";
import Faoliyatheadermenu from "./Menu/Faoliyatheadermenu";
import Qabulheadermenu from "./Menu/Qabulheadermenu";
import Talabalargaheadermenu from "./Menu/Talabalargaheadermenu";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaMoon, FaSun, FaUniversalAccess, FaEye } from "react-icons/fa";
import { IoLanguage } from "react-icons/io5";
import { BsChevronDown } from "react-icons/bs";
import AccessibilityPanel from "./AccessibilityPanel";
import { Link } from "react-router";
import { IoMdMusicalNotes } from "react-icons/io";

const Header = () => {
  const {
    toggleDarkMode,
    toggleAccessibility,
    toggleDaltonicMode: contextToggleDaltonicMode,
    changeLanguage: contextChangeLanguage,
  } = useRejimlarContext();

  const { i18n, t } = useTranslation();
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [isAccessibilityPanelOpen, setAccessibilityPanelOpen] = useState(false);
  const [isDaltonicMode, setDaltonicMode] = useState(false);

  const handleChangeLanguage = (language) => {
    i18n.changeLanguage(language)
      .then(() => {
        console.log(`Language changed to ${language}`);
      })
      .catch((error) => {
        console.error("Error changing language:", error);
      });
  };

  const handleToggleDaltonicMode = () => {
    setDaltonicMode(!isDaltonicMode);
    document.body.classList.toggle("daltonic-mode");
  };

  return (
    <div>
      <div className={`bg-gray-100 dark:bg-gray-800 shadow-md py-2 ${isDaltonicMode ? "daltonic" : ""}`}>
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link to="/bayroq">
              <img
                src="/public/images/ramzlar/bayroq.png"
                alt="Bayroq"
                className="h-auto w-10 mr-2 cursor-pointer hover:scale-105 hover:bg-gray-200 p-1 rounded"
              />
            </Link>
            <Link to="/gerb">
              <img
                src="/public/images/ramzlar/gerb_uzbekistana.png"
                alt="Gerb"
                className="h-10 w-10 mr-2 cursor-pointer hover:scale-105 hover:bg-gray-200 p-1 rounded"
              />
            </Link>
            <Link to="/madhiya">
              <IoMdMusicalNotes aria-label="Madhiya" />
            </Link>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              <a href="mailto:info@samdukf.uz" className="hover:underline">
                {t("mail")}
              </a>
            </span>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              <a href="tel:+998557041174">Ishonch telefoni: +998557041174</a>
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <button
              className="text-gray-700 dark:text-gray-300 hover:text-blue-500"
              onClick={() => setAccessibilityPanelOpen(!isAccessibilityPanelOpen)}
              title={t("accessibility")}
              aria-label="Open Accessibility Panel"
            >
              <FaUniversalAccess />
            </button>

            <button
              className="text-gray-700 dark:text-gray-300 hover:text-orange-500"
              onClick={handleToggleDaltonicMode}
              title={t("daltonic")}
              aria-label="Toggle Daltonic Mode"
            >
              <FaEye />
            </button>

            <button
              className="text-gray-700 dark:text-gray-300 hover:text-yellow-500"
              onClick={() => document.documentElement.classList.toggle("dark")}
              title={t("dark_mode")}
              aria-label="Toggle Dark Mode"
            >
              <FaSun className="hidden dark:block" />
              <FaMoon className="block dark:hidden" />
            </button>

            <div className="relative">
              <button
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-500"
                title={t("language")}
                aria-label="Language Menu"
              >
                <IoLanguage className="text-lg" />
                <BsChevronDown
                  className={`ml-1 transition-transform ${langMenuOpen ? "rotate-180" : ""}`}
                />
              </button>
              {langMenuOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-800 shadow-md rounded-lg py-2 z-50">
                  <button
                    onClick={() => handleChangeLanguage("uz")}
                    className="flex items-center px-4 py-2 w-full text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    🇺🇿 O‘zbekcha
                  </button>
                  <button
                    onClick={() => handleChangeLanguage("ru")}
                    className="flex items-center px-4 py-2 w-full text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    🇷🇺 Русский
                  </button>
                  <button
                    onClick={() => handleChangeLanguage("en")}
                    className="flex items-center px-4 py-2 w-full text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    🇬🇧 English
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {isAccessibilityPanelOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-96">
              <button
                onClick={() => setAccessibilityPanelOpen(false)}
                className="absolute top-2 right-2 text-gray-700 dark:text-gray-300"
                aria-label="Close Accessibility Panel"
              >
                ✖
              </button>
              <AccessibilityPanel />
            </div>
          </div>
        )}
      </div>
      <div className="bg-gray-100 dark:bg-gray-800">
        <header className="container mx-auto px-4 py-6 flex items-center justify-between">
          <img src="/logo.png" alt="Logo" className="w-12 h-12" />
          <a
            href="/"
            className="text-xl font-bold text-black dark:text-white"
            aria-label="Samarqand davlat universiteti Kattaqo‘rg‘on filiali"
          >
            Samarqand davlat universiteti Kattaqo‘rg‘on filiali
          </a>

          <nav className="flex items-center justify-center font-semibold">
            <FilialHeaderMenu />
            <Yangiliklarheadermenu />
            <Tuzilmaheader />
            <Faoliyatheadermenu />
            <Qabulheadermenu />
            <Talabalargaheadermenu />
          </nav>

          <nav>
            <ul className="flex items-center space-x-4">
              <li>
                <a
                  href="/"
                  className="rounded-full px-3 py-2 text-xs font-semibold bg-black text-gray-800 bg-opacity-10 flex items-center group"
                  aria-label="Kirish"
                >
                  <span className="mr-2 dark:text-white">Kirish</span>
                  <PiSignIn className="text-base dark:text-white" />
                </a>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default Header;
