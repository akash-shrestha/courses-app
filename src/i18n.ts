import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import detector from "i18next-browser-languagedetector";

import translationEN from "./locales/en/translationEN.json";
import translationFR from "./locales/fr/translationFR.json";

const resources = {
  en: {
    translation: translationEN,
  },
  fr: {
    translation: translationFR,
  },
};

i18n
  .use(detector)
  .use(initReactI18next) //passes i18n down to react-i18next
  .init({
    resources,
    supportedLngs: ["en", "fr"],
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
