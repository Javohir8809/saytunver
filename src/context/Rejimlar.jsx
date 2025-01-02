import React, { createContext, useState, useContext } from "react";
import i18next from "i18next";

const RejimlarContext = createContext();

export const RejimlarProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [isAccessible, setIsAccessible] = useState(false);
  const [isDaltonicMode, setIsDaltonicMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  const toggleAccessibility = () => {
    setIsAccessible(!isAccessible);
    if (!isAccessible) {
      document.documentElement.classList.add("accessible");
    } else {
      document.documentElement.classList.remove("accessible");
    }
  };

  const toggleDaltonicMode = () => {
    setIsDaltonicMode(!isDaltonicMode);
    if (!isDaltonicMode) {
      document.documentElement.classList.add("daltonic");
    } else {
      document.documentElement.classList.remove("daltonic");
    }
  };

  const changeLanguage = (lang) => {
    i18next.changeLanguage(lang)
      .then(() => {
        console.log(`Til ${lang} ga o'zgartirildi`);
      })
      .catch((error) => {
        console.error("Tilni o'zgartirishda xato:", error);
      });
  };

  return (
    <RejimlarContext.Provider
      value={{
        darkMode,
        toggleDarkMode,
        isAccessible,
        toggleAccessibility,
        isDaltonicMode,
        toggleDaltonicMode,
        changeLanguage,
      }}
    >
      {children}
    </RejimlarContext.Provider>
  );
};

export const useRejimlarContext = () => useContext(RejimlarContext);
