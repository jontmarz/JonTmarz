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
      <header id="hero" className="container relative mx-auto px-4 py-8 text-center min-h-screen" >
        <div id="bgHero" className="absolute w-[1340px] left-[50%] transform -translate-x-1/2 h-full bg-fixed bg-center bg-cover bg-no-repeat z-index before:content-[''] before:absolute before:inset-0 before:bg-[#00000F]/80 before:z-0" style={{ backgroundImage: `url(${webinar.bgHeroImage})` }}></div>
        <div className="relative z-10">
          <div className="flex justify-center mb-6">
            <Bot className="w-16 h-16 text-blue-400" />
          </div>
          <h1 className="text-5xl font-bold mb-6 text-[#CCA70A]">
            Lanza tu Negocio con IA <br />y Automatiza tus Crecimiento Digital 🚀
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Webinario Gratuito para Emprendedores, Marketeros y Agencias de Marketing y Agencias de Comunicación
          </p>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto text-left">
            Aprende en vivo cómo crear contenidos digitales desde un sitio web optimizado, generar contenido automatizado y convertir visitantes en clientes sin saber programar.
          </p>
          <ContentCTA onClick={() => setShowPopup(true)} />
        </div>
      </header>
    </>
  );
}

export default HeroSection