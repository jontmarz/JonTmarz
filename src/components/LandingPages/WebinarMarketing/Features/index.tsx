
import { Code, Rocket, Brain, Zap } from 'lucide-react'
import ContentCTA from '../ContentCTA'
import { webinar } from '../../../../config/variables'

interface BtnProps {
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>
}

function FeaturesSection({ setShowPopup }: BtnProps) {
    
    return (
        <>
        {/* Features Section */}
        <section className="container mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold text-[#CCA70A] text-center mb-4">
            🔥 ¿Qué vas a descubrir en este webinario?
            </h2>
            <p className="text-white-700 text-lg mb-6 text-center">
            Este evento en vivo es una oportunidad única para conocer las estrategias que están revolucionando la forma en que los emprendedores y agencias lanzan, escalan y automatizan sus negocios en internet.
            </p>
            <h3 className="text-2xl font-semibold text-[C0C0C0] mb-4 text-center mb-10">
            🎯 Temas que abordaremos:
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm hover:scale-105 transition duration-300">
                <Code className="w-10 h-10 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Desarrollo Web con IA</h3>
                <p className="text-gray-300">
                Aprende a utilizar herramientas de IA para crear sitios web profesionales de manera eficiente.
                </p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm hover:scale-105 transition duration-300">
                <Brain className="w-10 h-10 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold mb-3">Automatización Inteligente</h3>
                <p className="text-gray-300">
                Implementa sistemas automatizados para gestionar tu negocio digital sin esfuerzo.
                </p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg backdrop-blur-sm hover:scale-105 transition duration-300">
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
            <h2 className="text-3xl font-bold text-center mb-12 text-[#CCA70A]">💡 Lo que aprenderás</h2>
            <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
                <Zap className="w-6 h-6 text-blue-400 flex-shrink-0" />
                <div>
                <h4 className="text-lg font-semibold mb-2">Desarrollo Web Acelerado</h4>
                <p className="text-gray-300">Crea sitios web profesionales en una fracción del tiempo tradicional <strong>sin código</strong>.</p>
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
        <ContentCTA onClick={() => setShowPopup(true)} />
        </>
    )
}

export default FeaturesSection