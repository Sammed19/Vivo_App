import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import esLang from "./locales/es/es.json";
import frLang from "./locales/fr/fr.json";

const resources = {
  en: {
    translation: esLang,
  },
  fr: {
    translation: frLang,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "es",
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
});

export default i18n;
