import { useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const menuItems = [
  {
    title: "Filial haqida",
    links: [
      { label: "Filial ustavi", to: "/" },
      { label: "Filial nizomi", to: "/" },
      { label: "Filial tuzulmasi", to: "/" },
      { label: "Rekvizitlar", to: "/" },
      { label: "Aloqa", to: "/" },
    ],
  },
  {
    title: "Hujjatlar",
    links: [
      { label: "Qonunlar", to: "/" },
      { label: "Farmonlar", to: "/" },
      { label: "Qarorlar", to: "/" },
      { label: "Nizomlar va qoidalar", to: "/" },
      { label: "Hisobotlar", to: "/" },
    ],
  },
];

const FilialHeaderMenu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const renderMenuSection = ({ title, links }) => (
    <div key={title}>
      <p className="uppercase tracking-wider text-gray-700 dark:text-gray-300 font-medium text-sm">
        {title}
      </p>
      <ul className="mt-2 space-y-2">
        {links.map(({ label, to }) => (
          <li key={label}>
            <Link
              to={to}
              className="block px-3 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-150"
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
        {/* Desktop Menu */}
        <li className="relative group hidden lg:block px-3 py-2">
          <button
            className="hover:opacity-75 cursor-pointer text-gray-800 dark:text-gray-200"
            aria-expanded="false"
          >
            Filial
          </button>
          <div
            className="absolute top-full left-0 mt-2 bg-white dark:bg-gray-800 shadow-lg rounded-xl w-[560px] p-6 z-50
                       opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out"
          >
            <div className="grid grid-cols-2 gap-6">
              {menuItems.map((section) => renderMenuSection(section))}
            </div>
          </div>
        </li>

        {/* Mobile Menu */}
        <li className="block lg:hidden w-full">
          <button
            onClick={toggleMobileMenu}
            className="w-full text-left px-4 py-2 text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 rounded-md flex items-center justify-between"
            aria-expanded={isMobileMenuOpen}
          >
            Filial
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
              {menuItems.map((section) => (
                <div key={section.title} className="mt-4 first:mt-0">
                  {renderMenuSection(section)}
                </div>
              ))}
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};

export default FilialHeaderMenu;
