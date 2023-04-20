import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEN from "./locales/en/translation.json";
import translationES from "./locales/es/translation.json";
const resources = {
 en: {
   translation: translationEN,
 },
 nl: {
   translation: translationES,
 },
};

const fallbackLng = ['en']
const availableLanguages = ['en', 'es']

i18n.use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng,
        detection: {
            checkWhitelist: true
        },
        debug: false,
        resources,
        interpolation: {
            escapeValue: false 
        }
    })

export default i18n