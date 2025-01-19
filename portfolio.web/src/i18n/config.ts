import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { resources } from './locales';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: resources,
    detection: {
      order: ['querystring', 'cookie', 'navigator', 'localStorage', 'htmlTag', 'path', 'subdomain'],
      lookupQuerystring: 'lang',
      lookupCookie: 'i18next',
      caches: ['cookie'],
      cookieMinutes: 60 * 24 * 30, // 30 days
    },
    fallbackLng: 'en',
    supportedLngs: ['en', 'pt'],
    interpolation: {
      escapeValue: false
    }
  });

/**
 * Changes the current language of the application.
 * @param language - The language code to switch to (e.g. 'en', 'pt')
 * @returns A promise that resolves when the language change is complete
 */
export const changeLanguage = async (language: string) =>  await i18n.changeLanguage(language);

export default i18n;