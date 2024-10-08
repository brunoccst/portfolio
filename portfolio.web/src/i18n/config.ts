import i18n from "i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { Language, SupportedLngs } from "./supportedLngs";

const supportedLngs = SupportedLngs.map(({ isoCode }: Language) => isoCode);

i18n
    .use(HttpApi)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: {
            "en": ["en-US"],
            "default": ["en-US"]
        },
        supportedLngs: supportedLngs,
        load: 'currentOnly',
        interpolation: {
            escapeValue: false,
        }
    });

export default i18n;