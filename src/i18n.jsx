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
      info: "AXBOROT XIZMATI  ",
      faoliyat: "FAOLIYAT",
      hujjatlar: "HUJJATLAR",
      talabalar: "TALABALARGA",
      aloqa: "ALOQA",
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
      hujjatlar: "ДОКУМЕНТЫ",
      talabalar: "ДЛЯ СТУДЕНТОВ",
      aloqa: "КОНТАКТЫ",
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
      hujjatlar: "DOCUMENTS",
      talabalar: "FOR STUDENTS",
      aloqa: "CONTACT",
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
