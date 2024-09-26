import i18n from "i18next";
import HttpApi from "i18next-http-backend";
import { initReactI18next } from "react-i18next";
import { SupportedLngs } from "./supported-lngs";

i18n
    .use(HttpApi)
    .use(initReactI18next)
    .init({
        lng: "en-US",
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