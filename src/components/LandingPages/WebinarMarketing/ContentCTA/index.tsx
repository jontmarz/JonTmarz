import { webinar } from '../../../../config/variables'

interface ContentCTAProps {
    onClick: () => void
}

const ContentCTAComponent: React.FC<ContentCTAProps> = ({ onClick }) => {
    const formattedDate = new Date(Array.isArray(webinar.when.date) ? webinar.when.date.join('-') : webinar.when.date).toLocaleDateString('es-ES', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
    return (
        <>
        <div className="mb-10">
            <div>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto text-left leading-loose">
                <span className="text-[#CCA70A]">🗓️ Fecha del Webinario:</span> <strong>{ formattedDate }</strong><br />
                </p><p className="text-xl text-gray-300 max-w-2xl mx-auto text-left leading-loose">
                <span className="text-[#CCA70A]">⏰ Hora:</span> <span><strong>COL/PER/MIA </strong><span className="text-[#CCA70A]">{Number(webinar.when.time)}hr</span> | <strong>ARG/CHI </strong><span className="text-[#CCA70A]">{Number(webinar.when.time) + 1}hr</span> | <strong>MEX </strong><span className="text-[#CCA70A]">{Number(webinar.when.time) - 1}hr</span> | <strong>ESP </strong><span className="text-[#CCA70A]">{Number(webinar.when.time) + 7}hr</span> </span><br />
                </p>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto text-left leading-loose">
                    <span className="text-[#CCA70A]">📍 <strong>100% Online</strong> - Acceso Gratuito con Registro<br /></span>
                </p>
            </div>
            <div className="flex gap-4 justify-center max-[584px]:flex-col">
                {/* <button
                    onClick={() => {
                        if (typeof (window as any).ml !== 'undefined') {
                        (window as any).ml('show', 'Cffm3p', true)} else {console.log('Error loading')}
                    }}
                    className="bg-[#F4CE2C] hover:bg-[#F4CE2C]/70 text-black px-8 py-3 rounded-lg font-semibold transition ml-onclick-form"
                >
                ¡Reserva tu lugar ahora!
                </button> */}
                <button
                    onClick={() => {
                        const formElement = document.getElementById('webinarForm')
                        if (formElement) {
                        formElement.scrollIntoView({ behavior: 'smooth' });
                        }
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