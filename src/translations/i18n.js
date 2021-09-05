import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import TRANSLATIONS_EN from './en/translations';

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  resources: {
    en: {
      translation: TRANSLATIONS_EN,
    },
  },
});

export default i18n;
