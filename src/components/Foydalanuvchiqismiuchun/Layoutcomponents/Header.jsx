// Import necessary dependencies and components
import FilialHeaderMenu from "./Menu/Filialheadermenu";
import { useRejimlarContext } from "/src/context/Rejimlar";
import Yangiliklarheadermenu from "./Menu/Yangiliklarheadermenu";
import Tuzilmaheader from "./Menu/Tuzilmaheader";
import Faoliyatheadermenu from "./Menu/Faoliyatheadermenu";
import Qabulheadermenu from "./Menu/Qabulheadermenu";
import Talabalargaheadermenu from "./Menu/Talabalargaheadermenu";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaMoon, FaSun, FaUniversalAccess, FaEye, FaBars, FaTimes } from "react-icons/fa";
import AccessibilityPanel from "./AccessibilityPanel";
import { Link } from "react-router";

const Header = () => {
  const {
    toggleDarkMode,
    toggleAccessibility,
    toggleDaltonicMode: contextToggleDaltonicMode,
  } = useRejimlarContext();

  const { t } = useTranslation();
  const [isAccessibilityPanelOpen, setAccessibilityPanelOpen] = useState(false);
  const [isDaltonicMode, setDaltonicMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleDaltonicMode = () => {
    setDaltonicMode(!isDaltonicMode);
    document.body.classList.toggle("daltonic-mode");
  };

  // Управление фиксированным состоянием для мобильного меню
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (!menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-gray-100 dark:bg-gray-800 shadow-md">
      <div className="test-banner">
      <marquee behavior="scroll" direction="left">
        Ushbu veb-sayt hozirda test rejimida ishlamoqda. Ba'zi funksiyalar mavjud bo'lmasligi yoki kutilganidek ishlamasligi mumkin.
      </marquee>
    </div>
      {/* Top Bar */}
      <div className={`py-2 ${isDaltonicMode ? "daltonic" : ""}`}>
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center space-x-4  md:flex">
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
            >
              <FaUniversalAccess />
            </button>
            <button
              className="text-gray-700 dark:text-gray-300 hover:text-orange-500"
              onClick={handleToggleDaltonicMode}
              title={t("daltonic")}
            >
              <FaEye />
            </button>
            <button
              className="text-gray-700 dark:text-gray-300 hover:text-yellow-500"
              onClick={() => document.documentElement.classList.toggle("dark")}
              title={t("dark_mode")}
            >
              <FaSun className="hidden dark:block" />
              <FaMoon className="block dark:hidden" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="py-4 border-t border-gray-300 dark:border-gray-600">
        <header className="container mx-auto px-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-4">
            <img src="/logo.png" alt="Logo" className="w-10" />
            <span className="text-xl font-bold text-black dark:text-white">
              Samarqand davlat universiteti Kattaqo‘rg‘on filiali
            </span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-4">
            <FilialHeaderMenu />
            <Yangiliklarheadermenu />
            <Tuzilmaheader />
            <Faoliyatheadermenu />
            <Qabulheadermenu />
            <Talabalargaheadermenu />
           
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-gray-700 dark:text-white text-2xl"
            onClick={toggleMenu}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </header>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-end">
          <div className="w-80 bg-white dark:bg-gray-800 h-full shadow-lg overflow-y-auto">
            <div className="flex items-center justify-between p-4 border-b dark:border-gray-700">
              <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{t("SamDUKF")}</h2>
              <button onClick={toggleMenu}>
                <FaTimes className="text-gray-800 dark:text-gray-200 text-xl" />
              </button>
            </div>
            <div className="p-4 space-y-4 ">
              <FilialHeaderMenu />
              <Yangiliklarheadermenu />
              <Tuzilmaheader />
              <Faoliyatheadermenu />
              <Qabulheadermenu />
              <Talabalargaheadermenu />
              <a href="/" className="rounded-full px-3 py-2 text-xs font-semibold bg-blue-500 text-white block text-center">
                {t("Kirish")}
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Accessibility Panel */}
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
  );
};

export default Header;
