import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const menuItems = [
  {
    title: "O‘quv jarayoni",
    links: [
      { label: "Yakuniy nazorat savollar", to: "/" },
      { label: "Malaka talablari", to: "/" },
      { label: "O‘quv rejalar", to: "/" },
      { label: "O‘quv dasturlari", to: "/" },
    ],
  },
  {
    title: "Ma‘naviy-ma‘rifiy faoliyat",
    links: [
      { label: "Talabalar hayoti", to: "/" },
      { label: "Tyutor faoliyati", to: "/" },
      { label: "Filial psixologi", to: "/" },
      { label: "Yotoqxona", to: "/" },
    ],
  },
  {
    title: "Ilmiy faoliyat",
    links: [
      { label: "Ilmiy to‘plam va maqolalar", to: "/" },
      { label: "Istiqboldagi rejalar", to: "/" },
      { label: "Konferensiyalar", to: "/" },
      { label: "Ilmiy faoliyat yangiliklar", to: "/" },
      { label: "Innovatsion g‘oyalar", to: "/" },
      { label: "Filial loyihalari", to: "/" },
    ],
  },
  {
    title: "Ilmiy jurnallar va kengashlar",
    links: [
      { label: "Aftoreferatlar", to: "/" },
      { label: "Ilmiy jurnallar", to: "/" },
      { label: "Filial kengashi", to: "/" },
      { label: "Ilmiy tadqiqot yo‘nalishlar", to: "/" },
      { label: "Ustoz-shogirt maktabi", to: "/" },
      { label: "Nashr ishlari", to: "/" },
      { label: "Yosh olimlar maktabi", to: "/" },
    ],
  },
  {
    title: "Moliyaviy faoliyat",
    links: [
      { label: "Shartnomalar namunasi", to: "/" },
      { label: "Tuzilgan shartnomalar", to: "/" },
      { label: "Davlat xaridlari ma‘lumotlari", to: "/" },
      { label: "Mansabdor xizmat safarlari", to: "/" },
      { label: "Harajatlar smetasi", to: "/" },
      { label: "Rejalashtirilgan haridlar", to: "/" },
      { label: "Investitsiya loyihalari", to: "/" },
    ],
  },
];

const FaoliyatHeaderMenu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [menuPosition, setMenuPosition] = useState("left-0");
  const menuRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (menuRef.current) {
        const menuRect = menuRef.current.getBoundingClientRect();
        if (menuRect.right > window.innerWidth) {
          setMenuPosition("right-0");
        } else {
          setMenuPosition("left-0");
        }
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const renderMenuSection = ({ title, links }) => (
    <div key={title} className="menu-section">
      <p className="uppercase tracking-wider text-gray-700 dark:text-gray-300 font-semibold text-sm">
        {title}
      </p>
      <ul className="mt-3 space-y-3">
        {links.map(({ label, to }) => (
          <li key={label}>
            <Link
              to={to}
              className="block px-4 py-2 rounded-lg hover:bg-blue-500 hover:text-white dark:hover:bg-blue-600 transition-all duration-200"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <div className="dark:text-gray-300">
      <ul className="flex items-center justify-center font-semibold lg:flex-row">
        <li className="relative group hidden lg:block px-3 py-2">
          <button
            className="hover:opacity-75 cursor-pointer text-gray-800 dark:text-gray-200"
            aria-expanded="false"
          >
            Faoliyat
          </button>
          <div
            ref={menuRef}
            className={`absolute top-full ${menuPosition} mt-3 bg-white dark:bg-gray-800 shadow-lg rounded-xl w-[1280px] p-6 z-50
                       opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out`}
          >
            <div className="grid grid-cols-5 gap-6">
              {menuItems.map(renderMenuSection)}
            </div>
          </div>
        </li>

        <li className="block lg:hidden w-full">
          <button
            onClick={toggleMobileMenu}
            className="w-full text-left px-4 py-2 text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 rounded-md flex items-center justify-between"
            aria-expanded={isMobileMenuOpen}
          >
            Faoliyat
            {isMobileMenuOpen ? (
              <FaChevronUp className="ml-2 text-gray-600 dark:text-gray-400 w-5 h-5" />
            ) : (
              <FaChevronDown className="ml-2 text-gray-600 dark:text-gray-400 w-5 h-5" />
            )}
          </button>

          {isMobileMenuOpen && (
            <div
              className="bg-white dark:bg-gray-800 mt-2 p-4 rounded-lg shadow-lg transition-all duration-300 ease-in-out"
            >
              {menuItems.map(renderMenuSection)}
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};

export default FaoliyatHeaderMenu;
