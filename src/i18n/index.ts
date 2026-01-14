import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

// OnePage
import OPen from './locales/en'
import OPes from './locales/es'

// Courses
import CMen from './Courses/webMarketing/en'
import CMes from './Courses/webMarketing/es'

// Apps
import DLen from './Apps/DigitalLauncher/en'
import DLes from './Apps/DigitalLauncher/es'
import KAen from './Apps/KodaApp/en'
import KAes from './Apps/KodaApp/es'
import TCen from './Apps/TributosCo/en'
import TCes from './Apps/TributosCo/es'

// Pages
import AMen from './pages/AboutMe/en'
import AMes from './pages/AboutMe/es'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        OnePage: OPen,
        CurseWeb: CMen,
        DLGpt: DLen,
        KodaApp: KAen,
        TributosCo: TCen,
        AboutMe: AMen
      },
      es: {
        OnePage: OPes,
        CurseWeb: CMes,
        DLGpt: DLes,
        KodaApp: KAes,
        TributosCo: TCes,
        AboutMe: AMes
      }
    },
    fallbackLng: 'en',
    debug: false,
    ns: ['OnePage', 'CurseWeb', 'DLGpt', 'KodaApp', 'TributosCo', 'AboutMe'], // agrega todos tus namespaces aquí
    defaultNS: 'OnePage',
    detection: {
      order: ['navigator', 'htmlTag', 'localStorage', 'cookie'],
      caches: ['localStorage', 'cookie'],
    },
    interpolation: { escapeValue: false }
  });

export default i18n;