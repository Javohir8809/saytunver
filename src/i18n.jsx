// i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const  resources = {
  uz: {
    translation: {
      university: "SAMARQAND DAVLAT UNIVERSITETI KATTAQO'RG'ON FILIALI",
      mail: "Pochta",
      filial: "FILIAL",
      talim: "TA'LIM",
      info: "YANGILIKLAR",
      faoliyat: "FAOLIYAT",
      QABUL2024: "QABUL2024",
      talabalar: "TALABALARGA",
      tuzulma: "TUZULMA",
    },
  },
  ru: {
    translation: {
      university: "САМАРКАНДСКИЙ ГОСУДАРСТВЕННЫЙ УНИВЕРСИТЕТ КАТТАКУРГАНСКИЙ ФИЛИАЛ",
      mail: "Почта",
      filial: "ФИЛИАЛ",
      talim: "ОБРАЗОВАНИЕ",
      info: "ИНФОРМАЦИОННАЯ",
      faoliyat: "ДЕЯТЕЛЬНОСТЬ",
      QABUL2024: "ПРИЕМ2024",
      talabalar: "ДЛЯ СТУДЕНТОВ",
      tuzulma: "СТРУКТУРА",
    },
  },
  en: {
    translation: {
      university: "SAMARKAND STATE UNIVERSITY KATTAQO'RG'ON BRANCH",
      mail: "Mail",
      filial: "BRANCH",
      talim: "EDUCATION",
      info: "INFORMATION ",
      faoliyat: "ACTIVITY",
      QABUL2024: "ACCEPTANCE2024",
      talabalar: "FOR STUDENTS",
      tuzulma: "STRUCTURE",
    },
  },
 
};


i18n.use(initReactI18next).init({
  resources,
  lng: "uz", 
  fallbackLng: "en", 
  interpolation: {
    escapeValue: false, 
  },
});

export default i18n;
