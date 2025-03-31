import { webinar } from '../../../../config/variables'

interface ContentCTAProps {
    onClick: () => void;
}

const ContentCTAComponent: React.FC<ContentCTAProps> = ({ onClick }) => {
    return (
        <>
        <div className="mb-10">
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto text-left">
                🗓️ Fecha del Webinario: <strong>{ webinar.when.date }</strong><br />
                ⏰ Hora: <strong>{ webinar.when.time }</strong><br />
                📍 <strong>100% Online</strong> - Acceso Gratuito con Registro<br />
            </p>
            <div className="flex gap-4 justify-center max-[584px]:flex-col">
                <button
                onClick={() => {
                    if (typeof (window as any).ml !== 'undefined') {
                      (window as any).ml('show', 'Cffm3p', true)} else {console.log('Error loading')}
                    }}
                className="bg-[#F4CE2C] hover:bg-[#F4CE2C]/70 text-black px-8 py-3 rounded-lg font-semibold transition ml-onclick-form"
                >
                ¡Reserva tu lugar ahora!
                </button>
                <a
                href={webinar.urlWA}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-black px-8 py-3 rounded-lg font-semibold transition flex items-center gap-2"
                >
                Únete al grupo de WhatsApp
                </a>
            </div>
        </div>
        </>
    )
}

export default ContentCTAComponent