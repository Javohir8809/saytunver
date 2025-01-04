// import i18n from "i18next";
// import Backend from "i18next-http-backend";
// import LanguageDetector from "i18next-browser-languagedetector";
// import { initReactI18next } from "react-i18next";

// const translateWithAPI = async (key, targetLanguage) => {
//   try {
//     const response = await fetch(
//       `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
//         key
//       )}&langpair=uz|${targetLanguage}`
//     );
//     const data = await response.json();

//     if (data.responseData.translatedText) {
//       console.log(`Tarjima qilindi: '${key}' -> '${data.responseData.translatedText}'`);
//       return data.responseData.translatedText;
//     }

//     console.warn(`Tarjima topilmadi: ${key}`);
//     return key; // Tarjima topilmasa asl matnni qaytaradi
//   } catch (error) {
//     console.error("API orqali tarjima qilishda xatolik:", error);
//     return key;
//   }
// };

// i18n
//   .use(Backend)
//   .use(LanguageDetector)
//   .use(initReactI18next)
//   .init({
//     backend: {
//       loadPath: "/locales/{{lng}}/translation.json", // Lokalizatsiya fayl yo'li
//     },
//     fallbackLng: "uz", // Asosiy til
//     debug: true, // Konsolda tarjimalarni ko'rish uchun
//     saveMissing: true, // Yo'q kalitlarni qo'shish imkoniyati
//     interpolation: {
//       escapeValue: false, // React uchun talab qilinmaydi
//     },
//     missingKeyHandler: async (lng, ns, key) => {
//       // Tarjima qilinmagan matnni avtomatik tarjima qilish
//       const translatedText = await translateWithAPI(key, lng);
//       return translatedText || key;
//     },
//   });

// export default i18n;
