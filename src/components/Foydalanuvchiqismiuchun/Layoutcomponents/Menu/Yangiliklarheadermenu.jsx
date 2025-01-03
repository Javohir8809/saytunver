import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const menuSections = [
  {
    title: "Yangiliklar",
    links: [
      { label: "Yig‘ilishlar", to: "/" },
      { label: "Uchrashuvlar", to: "/" },
      { label: "Seminarlar", to: "/" },
      { label: "Davra suhbatlari", to: "/" },
      { label: "Tashriflar", to: "/" },
      { label: "Brifinglar", to: "/" },
    ],
  },
  {
    title: "E‘lonlar",
    links: [
      { label: "Yig‘ilishlar", to: "/" },
      { label: "Uchrashuvlar", to: "/" },
      { label: "Davra suhbatlari", to: "/" },
      { label: "Tashriflar", to: "/" },
      { label: "Brifinglar", to: "/" },
    ],
  },
  {
    title: "Fotogaleriya",
    links: [
      { label: "Universitet fotogaleriyasi", to: "/" },
      { label: "Tadbir fotogaleriyasi", to: "/" },
    ],
  },
  {
    title: "Videogaleriya",
    links: [
      { label: "Universitet videolari", to: "/" },
      { label: "Tadbir videolari", to: "/" },
    ],
  },
];

const YangiliklarHeaderMenu = () => {
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
    <div key={title}>
      <p className="uppercase tracking-wider text-gray-700 dark:text-gray-300 font-medium text-[13px]">
        {title}
      </p>
      <ul className="mt-3 text-[15px]">
        {links.map(({ label, to }) => (
          <li key={label}>
            <Link
              to={to}
              className="block p-2 -mx-2 rounded-lg hover:bg-gradient-to-br dark:text-white
                hover:from-indigo-50 dark:hover:from-gray-700 hover:to-fuchsia-50 dark:hover:to-gray-600
                hover:text-blue-600 dark:hover:text-blue-400 transition ease-out duration-100"
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
        {/* Настольное меню */}
        <li className="relative group hidden lg:block px-3 py-2">
          <button
            className="hover:opacity-75 cursor-pointer text-gray-800 dark:text-gray-200"
            aria-expanded="false"
          >
            Yangiliklar
          </button>
          <div
            ref={menuRef}
            className={`absolute top-full ${menuPosition} mt-3 bg-white dark:bg-gray-800 shadow-lg rounded-xl w-[1280px] p-6 z-50
                       opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out`}
          >
            <div className="grid grid-cols-3 gap-6">
              {menuSections.map(renderMenuSection)}
            </div>
          </div>
        </li>

        {/* Мобильное меню */}
        <li className="block lg:hidden w-full">
          <button
            onClick={toggleMobileMenu}
            className="w-full text-left px-4 py-2 text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 rounded-md flex items-center justify-between"
            aria-expanded={isMobileMenuOpen}
          >
            Yangiliklar
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
              <div className="grid grid-cols-1 gap-4">
                {menuSections.map(renderMenuSection)}
              </div>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};

export default YangiliklarHeaderMenu;
