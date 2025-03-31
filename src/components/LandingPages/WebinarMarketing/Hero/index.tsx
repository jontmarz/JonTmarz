import React from 'react'
import { Bot } from 'lucide-react'
import ContentCTA from "../ContentCTA"
import { webinar } from '../../../../config/variables'

interface BtnProps {
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>
}

function HeroSection({ setShowPopup }: BtnProps) {

  return (
    <>
      {/* Hero Section */}
      <header id="hero" className="container mx-auto px-4 py-8 text-center min-h-screen" >
        <div id="bgHero" className="absolute inset-0 bg-fixed bg-center bg-cover bg-no-repeat z-index before:content-[''] before:absolute before:inset-0 before:bg-[#00000F]/80 before:z-0" style={{ backgroundImage: `url(${webinar.bgHeroImage})` }}></div>
        <div className="relative z-10">
          <div className="flex justify-center mb-6">
            <Bot className="w-16 h-16 text-blue-400" />
          </div>
          <h1 className="text-5xl font-bold mb-6 text-[#CCA70A]">
            Lanza tu Website con IA <br />y Automatiza tu Negocio Digital 🚀
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Webinario Gratuito para Emprendedores, Marketeros y Agencias
          </p>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto text-left">
            Aprende en vivo cómo crear un sitio web optimizado, generar contenido automatizado y convertir visitantes en clientes sin saber programar.
          </p>
          <ContentCTA onClick={() => setShowPopup(true)} />
        </div>
      </header>
    </>
  );
}

export default HeroSection