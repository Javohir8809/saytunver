import i18n from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

async function translateWithAPI(key, lng) {
  try {
    if (!lng || lng === "cimode") {
      return key;
    }

    const response = await fetch(
      `https://api.mymemory.translated.net/get?q=${encodeURIComponent(key)}&langpair=${lng}|uz`
    );
    const data = await response.json();

    if (data.responseData.translatedText) {
      return data.responseData.translatedText;
    }

    return key;
  } catch (error) {
    console.error("Ошибка API перевода:", error);
    return key;
  }
}


i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    fallbackLng: "uz",
    saveMissing: true,
    debug: true,
    interpolation: {
      escapeValue: false,
    },
    missingKeyHandler: async (lng, ns, key) => {
      const translatedText = await translateWithAPI(key, lng);
      console.log(`Перевод ключа '${key}': ${translatedText}`);
      return translatedText || key;
    },
  });

export default i18n;
