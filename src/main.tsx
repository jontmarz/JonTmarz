import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import TagManager from 'react-gtm-module'
import App from './App.tsx'
// import './assets/sass/main.sass'
import './index.css'
import './i18n'

const tagManagerArgs = {
  gtmId: 'GTM-W4JNLC33',
}

TagManager.initialize(tagManagerArgs)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);