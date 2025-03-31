import React from 'react'
import ContentCTA from "../ContentCTA"

interface HeroProps {
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>
}

const ComplementSections = ({ setShowPopup }: HeroProps) => {
  return (
    <div className="max-w-5xl mx-auto p-8 space-y-12">
      {/* Sección 1: ¿Este Webinario es para ti? */}
      <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
        <h2 className="text-3xl font-bold mb-4">🧰 ¿Este Webinario es para ti?</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>✅ Si eres emprendedor y quieres vender productos o servicios online.</li>
          <li>✅ Si trabajas en marketing y quieres sistematizar tus procesos.</li>
          <li>✅ Si formas parte de una agencia que necesita ofrecer sitios automatizados a clientes.</li>
          <li>✅ O simplemente si quieres lanzar tu primer sitio sin depender de un programador.</li>
        </ul>
        <p className="mt-4 font-semibold">
          Este webinario es para ti si quieres empezar <span className="text-yellow-300">YA</span> a tener resultados digitales medibles.
        </p>
      </section>

      {/* Sección 2: Bono Exclusivo por Asistir */}
      <section className="max-w-5xl bg-[#C0C0C0] p-8 rounded-lg shadow-lg border border-gray-200 transform transition duration-300 hover:scale-105">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">🎁 Bono Exclusivo por Asistir</h2>
        <p className="text-gray-700 mb-4">
          🎉 Todos los asistentes recibirán acceso gratuito al eBook:{" "}
          <span className="font-bold">"Revoluciona tu Negocio con IA y Automatización"</span> y una plantilla de calendario de contenido para redes sociales que podrás usar de inmediato.
        </p>
      </section>

      {/* Sección 3: Llamado a la Acción */}
      <section className="max-w-5xl bg-[#00000F] p-8 rounded-lg shadow-lg transform transition duration-300 hover:scale-105">
        <h2 className="text-3xl font-bold text-white mb-4">✅ ¡Inscríbete Hoy y Separa tu Lugar!</h2>
        <p className="text-white mb-6">
          El cupo es limitado. No te pierdas esta oportunidad de transformar tu presencia digital y automatizar tus ventas de forma práctica y sin complicaciones.
        </p>
        <ContentCTA onClick={() => setShowPopup(true)} />
      </section>
    </div>
  );
};

export default ComplementSections
