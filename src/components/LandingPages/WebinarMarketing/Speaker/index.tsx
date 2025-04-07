import React from 'react';
import { webinar } from '../../../../config/variables';

const SpeakerSection = () => {
  return (
    <section className=" mx-auto px-4 py-16 relative">
        <div id="bg-speaker" className="absolute inset-0 bg-gradient-to-b from-[#1e3a8a] to-[#00000F]"></div>
        <div className="container relative max-w-5xl mx-auto mt-10 p-8 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row items-center">
                {/* Contenido de texto */}
                <div className="md:w-2/3">
                <h2 className="text-2xl font-bold mb-4 text-[#CCA70A]">
                    👤 Tu Panelista: John E. Torres, Ingeniero de Software & Estratega Digital
                </h2>
                <p className="text-white-700 mb-4">
                    Soy John Torres, ingeniero de software y estratega digital con una visión disruptiva. A lo largo de mi carrera, he transformado la manera en que emprendedores, marketeros y agencias se enfrentan al mundo digital, fusionando innovación, inteligencia artificial y metodologías comprobadas para impulsar negocios.
                </p>
                <p className="text-white-700 mb-4">
                    En este webinario descubrirás un enfoque integral y dinámico que te permitirá lanzar sitios web que operan en piloto automático las 24 horas del día, maximizando tus ventas y optimizando tus procesos. Mi misión es brindarte las herramientas esenciales para destacar en el competitivo entorno digital.
                </p>
                <p className="text-white-700 font-medium">
                    🎓 Además, te invito a conocer nuestro curso completo: <strong>"Lanza tu Website con IA y Automatiza tu Negocio Digital"</strong>, donde profundizaremos en cada estrategia para llevar tu negocio al siguiente nivel.
                </p>
            </div>
                {/* Imagen a la derecha */}
            <div className="md:w-1/3 flex justify-center md:justify-end mt-6 md:mt-0">
                <img
                    src={webinar.imgSpeaker}
                    alt="Jon Tmarz"
                    width="700"
                    className="rounded-full"
                />
            </div>
      </div>
    </div>
    </section>
  );
};

export default SpeakerSection
