import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ru from "./locales/ru/ru.json"
import en from "./locales/en/en.json"

const resources = {
    ru: {
        translation: ru
    },
    en: {
        translation: en
    }
}

i18n
    .use(initReactI18next)
    .init({
        fallbackLng: "ru",
        lng: "ru",
        resources,
        debug: true,
        interpolation: {
            escapeValue: false,
        }
    });
export default i18n;