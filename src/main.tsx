import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TagManager from 'react-gtm-module'
import App from './App.tsx'
// import './assets/sass/main.sass'
import './index.css'
import './i18n'

const tagManagerArgs = {
  gtmId: import.meta.env.VITE_TAG_MANAGER_ID,
}

TagManager.initialize(tagManagerArgs)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);