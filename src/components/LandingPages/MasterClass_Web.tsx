import React, { useState } from 'react';
import { Bot, Code, Rocket, Brain, Zap, X } from 'lucide-react';

function App() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <header className="container mx-auto px-4 py-16 text-center">
        <div className="flex justify-center mb-6">
          <Bot className="w-16 h-16 text-blue-400" />
        </div>
        <h1 className="text-5xl font-bold mb-6">
          Lanza tu sitio web con IA y automatiza tu negocio digital
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Aprende a crear sitios web profesionales utilizando Inteligencia Artificial y automatiza tus procesos para escalar tu negocio digital.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => setShowPopup(true)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition"
          >
            ¡Reserva tu lugar ahora!
          </button>
          <a
            href="https://wa.me/+TUNUMERO?text=Hola,%20me%20interesa%20el%20curso%20de%20IA%20y%20automatización"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition flex items-center gap-2"
          >
            Únete al grupo de WhatsApp
          </a>
        </div>
      </header>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
            <Code className="w-10 h-10 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Desarrollo Web con IA</h3>
            <p className="text-gray-300">
              Aprende a utilizar herramientas de IA para crear sitios web profesionales de manera eficiente.
            </p>
          </div>
          <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
            <Brain className="w-10 h-10 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Automatización Inteligente</h3>
            <p className="text-gray-300">
              Implementa sistemas automatizados para gestionar tu negocio digital sin esfuerzo.
            </p>
          </div>
          <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm">
            <Rocket className="w-10 h-10 text-blue-400 mb-4" />
            <h3 className="text-xl font-semibold mb-3">Escalabilidad</h3>
            <p className="text-gray-300">
              Aprende estrategias para escalar tu negocio digital de manera sostenible.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Lo que aprenderás</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex items-start gap-4">
            <Zap className="w-6 h-6 text-blue-400 flex-shrink-0" />
            <div>
              <h4 className="text-lg font-semibold mb-2">Desarrollo Web Acelerado</h4>
              <p className="text-gray-300">Crea sitios web profesionales en una fracción del tiempo tradicional.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Zap className="w-6 h-6 text-blue-400 flex-shrink-0" />
            <div>
              <h4 className="text-lg font-semibold mb-2">Automatización de Procesos</h4>
              <p className="text-gray-300">Implementa sistemas automáticos para gestión de clientes y ventas.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Zap className="w-6 h-6 text-blue-400 flex-shrink-0" />
            <div>
              <h4 className="text-lg font-semibold mb-2">Integración de IA</h4>
              <p className="text-gray-300">Utiliza herramientas de IA para optimizar tu flujo de trabajo.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Zap className="w-6 h-6 text-blue-400 flex-shrink-0" />
            <div>
              <h4 className="text-lg font-semibold mb-2">Estrategias de Escalabilidad</h4>
              <p className="text-gray-300">Aprende a escalar tu negocio de manera eficiente y sostenible.</p>
            </div>
          </div>
        </div>
      </section>

      {/* MailerLite Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg p-8 max-w-md w-full relative">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="ml-embedded" data-form="TUFORMULARIOID"></div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;