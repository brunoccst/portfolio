import i18n from "i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { SupportedLngs } from "./supportedLngs";

i18n
    .use(HttpApi)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: {
            "en": ["en-US"],
            "default": ["en-US"]
        },
        supportedLngs: Object.keys(SupportedLngs),
        debug: true,
        load: 'currentOnly',
        interpolation: {
            escapeValue: false,
        }
    });

export default i18n;