import i18n, { InitOptions, TFunction } from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./locales/en/translations.json";
import uk from "./locales/uk/translations.json";
import fr from "./locales/fr/translations.json";

const DETECTION_OPTIONS = {
  order: [
    "querystring",
    "cookie",
    "localStorage",
    "sessionStorage",
    "navigator",
    "htmlTag",
    "path",
    "subdomain",
  ],
  caches: ["localStorage"],
  lookupQuerystring: "lng",
};

export const createI18nConfig = (): InitOptions => ({
  resources: {
    en: {
      translation: en,
    },
    uk: {
      translation: uk,
    },
    fr: {
      translation: fr,
    },
  },
  detection: DETECTION_OPTIONS,

  fallbackLng: "en",
  supportedLngs: ["uk", "en", "fr"],
  nsSeparator: "|",
  interpolation: {
    escapeValue: false,
  },
});

export const createi18n = (): Promise<TFunction> =>
  i18n.use(LanguageDetector).use(initReactI18next).init(createI18nConfig());
export { default } from "i18next";
