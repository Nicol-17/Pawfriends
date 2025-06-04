import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// translation home
import translationEN from "../src/locales/en/home.json";
import translationES from "../src/locales/es/home.json";
import translationDE from "../src/locales/de/home.json";
import translationFR from "../src/locales/fr/home.json";

// translation login
import translationLoginEN from "../src/locales/en/login.json";
import translationLoginES from "../src/locales/es/login.json";
import translationLoginDE from "../src/locales/de/login.json";
import translationLoginFR from "../src/locales/fr/login.json";

// translation signup
import translationSignupEN from "../src/locales/en/signup.json";
import translationSignupES from "../src/locales/es/signup.json";
import translationSignupDE from "../src/locales/de/signup.json";
import translationSignupFR from "../src/locales/fr/signup.json";

// translation dashboard
import translationDashboardEN from "../src/locales/en/dashboard.json";
import translationDashboardES from "../src/locales/es/dashboard.json";
import translationDashboardDE from "../src/locales/de/dashboard.json";
import translationDashboardFR from "../src/locales/fr/dashboard.json";

//translation chat
import translationChatEN from "../src/locales/en/chat.json";
import translationChatES from "../src/locales/es/chat.json";
import translationChatDE from "../src/locales/de/chat.json";
import translationChatFR from "../src/locales/fr/chat.json";



i18n
   .use(LanguageDetector) // Detecta el idioma del navegador
   .use(initReactI18next) // Conecta con React
   .init({
      resources: {
         en: {
            home: translationEN,
            login: translationLoginEN,
            signup: translationSignupEN,
            dashboard: translationDashboardEN,
            chat: translationChatEN,

         },
         es: {
            home: translationES,
            login: translationLoginES,
            signup: translationSignupES,
            dashboard: translationDashboardES,
            chat: translationChatES

         },
         de: {
            home: translationDE,
            login: translationLoginDE,
            signup: translationSignupDE,
            dashboard: translationDashboardDE,
            chat: translationChatDE


         },
         fr: {
            home: translationFR,
            login: translationLoginFR,
            signup: translationSignupFR,
            dashboard: translationDashboardFR,
            chat: translationChatFR

         },



      },
      fallbackLng: "en", // Si no encuentra el idioma, usa inglés
      interpolation: {
         escapeValue: false,
         format: (value, format, lng, options) => {
            if (format === "currency") {
               const currency =
                  options?.currency ||
                  (lng === "es" ? "EUR" :
                     lng === "fr" ? "EUR" :
                        lng === "de" ? "EUR" :
                           "USD");

               return new Intl.NumberFormat(lng, {
                  style: "currency",
                  currency,
               }).format(value);
            }

            return value;
         }

      },
   });

export default i18n;
