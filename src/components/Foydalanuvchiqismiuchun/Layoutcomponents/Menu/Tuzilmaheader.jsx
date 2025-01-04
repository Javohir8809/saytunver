import React, { useState, useRef, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const menuSections = [
  {
    title: "Rahbariyat",
    links: [
      { label: "Filial direktori", to: "/filiald" },
      { label: "Direktor o‘rinbosarlari", to: "/" },
    ],
  },
  {
    title: "Fakultetlar",
    links: [
      { label: "Pedagogika va tillarni o‘qitish", to: "/" },
      { label: "Aniq va tabiiy fanlar", to: "/" },
    ],
  },
  {
    title: "Kafedralar",
    links: [
      { label: "Maktabgacha va boshlang‘ich ta‘lim, sport kafedrasi", to: "/" },
      { label: "O‘zbek tili gumanitar fanlar kafedrasi", to: "/" },
      { label: "Xorijiy tillar kafedrasi", to: "/" },
      { label: "Raqamli texnologiyalar va iqtisodiyot kafedrasi", to: "/" },
      { label: "Aniq va tabiy fanlar kafedrasi", to: "/" },
    ],
  },
  {
    title: "Markazlar",
    links: [
      { label: "Raqamli texnologiyalari markazi", to: "/" },
      { label: "Axborot-resurs markazi", to: "/" },
    ],
  },
  {
    title: "Bo‘limlar",
    links: [
      { label: "O‘quv-uslubiy boshqarma", to: "/" },
      { label: "Ta‘lim sifatini nazorat qilish bo‘limi", to: "/" },
      { label: "Jismoniy va yuridik shaxslarning murojatlari bilan ishlash", to: "/" },
      { label: "Yoshlar bilan ishlash ma‘naviyat va ma‘rifat bo‘limi", to: "/" },
      { label: "Ilmiy tadqiqotlar, innovatsiyalar sektori", to: "/" },
    ],
  },
  {
    title: "Bo‘limlar",
    links: [
      { label: "Talabalarni turar joy bilan ta‘minlash bo‘limi", to: "/" },
      { label: "Psixolog", to: "/" },
      { label: "Iqtidorli talabalarning ilmiy-tadqiqot faolyatini tashkil etish sektori", to: "/" },
      { label: "Buxgalteriya", to: "/" },
      { label: "Bosh auditor", to: "/" },
    ],
  },
  {
    title: "Bo‘limlar",
    links: [
      { label: "Xodimlar bo‘limi", to: "/" },
      { label: "Xalqaro hamkorlik bo‘limi", to: "" },
      { label: "Marketing va talabalar amaliyoti bo‘lim", to: "/" },
      { label: "Yuristkonsult", to: "/" },
      { label: "Reja-moliya bo‘limi", to: "/" },
    ],
  },
  {
    title: "Bo‘limlar",
    links: [
      { label: "Devonxona va arxiv bo‘limi", to: "/" },
      { label: "Sirtqi bo‘lim", to: "/" },
      { label: "Korrupsiyaga qarshi kurashish 'Komplaens-nazorat' tizimini boshqarish bo‘limi", to: "/kurash" },
    ],
  },
];

const MenuSection = ({ title, links }) => (
  <div>
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

const TuzilmaHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [menuPosition, setMenuPosition] = useState("left-0");
  const menuRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  // Memoize menuSections for optimization
  const optimizedMenuSections = useMemo(() => menuSections, []);

  useEffect(() => {
    const handleResize = () => {
      if (menuRef.current) {
        const menuRect = menuRef.current.getBoundingClientRect();
        setMenuPosition(menuRect.right > window.innerWidth ? "right-0" : "left-0");
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="dark:text-gray-300">
      <ul className="flex items-center justify-center font-semibold lg:flex-row">
        {/* Desktop menu */}
        <li className="relative group hidden lg:block px-3 py-2">
          <button
            className="hover:opacity-75 cursor-pointer text-gray-800 dark:text-gray-200"
            aria-expanded="false"
          >
            Tuzilma
          </button>
          <div
            ref={menuRef}
            className={`absolute top-full ${menuPosition} mt-3 bg-white dark:bg-gray-800 shadow-lg rounded-xl w-[1024px] p-6 z-50
                       opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out`}
          >
            <div className="grid grid-cols-4 gap-6">
              {optimizedMenuSections.map((section) => (
                <MenuSection key={section.title} {...section} />
              ))}
            </div>
          </div>
        </li>

        {/* Mobile menu */}
        <li className="block lg:hidden w-full">
          <button
            onClick={toggleMobileMenu}
            className="w-full text-left px-4 py-2 text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 rounded-md flex items-center justify-between"
            aria-expanded={isMobileMenuOpen}
          >
            Tuzilma
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
                {optimizedMenuSections.map((section) => (
                  <MenuSection key={section.title} {...section} />
                ))}
              </div>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};

export default TuzilmaHeader;
