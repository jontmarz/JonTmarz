import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

// OnePage
import OPen from './locales/en'
import OPes from './locales/es'

// Courses
import CMen from './Courses/webMarketing/en'
import CMes from './Courses/webMarketing/es'

// GPT
import DLen from './GPTs/DigitalLauncher/en'
import DLes from './GPTs/DigitalLauncher/es'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        OnePage: OPen,
        CurseWeb: CMen,
        DLGpt: DLen
      },
      es: {
        OnePage: OPes,
        CurseWeb: CMes,
        DLGpt: DLes
      }
    },
    fallbackLng: 'en',
    debug: false,
    ns: ['OnePage', 'CurseWeb', 'DLGpt'], // agrega todos tus namespaces aquí
    defaultNS: 'OnePage',
    detection: {
      order: ['navigator', 'htmlTag', 'localStorage', 'cookie'],
      caches: ['localStorage', 'cookie'],
    },
    interpolation: { escapeValue: false }
  });

export default i18n;