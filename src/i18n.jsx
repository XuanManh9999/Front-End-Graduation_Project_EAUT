import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import vi from "./public/locales/vi/translation";
import en from "./public/locales/en/translation";
i18n
  .use(HttpApi) // Load ngôn ngữ từ file JSON
  .use(LanguageDetector) // Phát hiện ngôn ngữ trình duyệt
  .use(initReactI18next) // Khởi tạo react-i18next
  .init({
    fallbackLng: "vi", // Ngôn ngữ mặc định nếu không tìm thấy ngôn ngữ hiện tại
    debug: true, // Debug log trong console
    interpolation: {
      escapeValue: false, // React đã xử lý XSS
    },
    resources: {
      en: {
        translation: {
          ...en,
        },
      },
      vi: {
        translation: {
          ...vi,
        },
      },
    },
  });

export default i18n;
