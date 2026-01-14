export default {
    navbar: {
        home: 'Inicio',
        whatIs: '¿Qué es?',
        audience: '¿Para quién?',
        whyMatters: '¿Por qué importa?',
        howItWorks: '¿Cómo funciona?',
        faq: 'Preguntas',
        tryIt: 'Pruébalo',
    },
    hero: {
        title: 'Cotizaciones inteligentes, sin fricción.',
        subtitle: 'Automatiza la generación de propuestas técnicas y presupuestos con IA, flujos conversacionales y Koda App como núcleo de decisión.',
        btn1: 'Solicita una cotización automatizada',
        btn2: 'Ver cómo funciona',
        disclaimer: 'Respuestas rápidas, personalizadas y profesionales en minutos'
    },
    whatIs: {
        title: "¿Qué es <span class=\"text-[#00AAFF]\">este sistema</span>?",
        intro: "Koda App no es solo una aplicación.",
        description: "Es el corazón de un sistema de automatización que transforma cómo se generan propuestas de servicios tecnológicos.",
        sectionTitle: "¿Cómo funciona?",
        steps: [
            {
                id: "conversation",
                title: "Conversación inicial",
                description: "Un chatbot en Telegram o WhatsApp o navegador recibe el problema o necesidad del cliente."
            },
            {
                id: "processing",
                title: "Procesamiento inteligente",
                description: "Un flujo en n8n, potenciado con IA, interpreta el requerimiento y consulta a Koda App para identificar qué soluciones puedo ofrecer."
            },
            {
                id: "proposal",
                title: "Propuesta automática",
                description: "En minutos, el cliente recibe un PDF personalizado con:",
                items: [
                    "Objetivos del proyecto",
                    "Alcance técnico",
                    "Presupuesto estimado",
                    "Tiempo de entrega"
                ]
            }
        ]
    },
    whyMatters: {
        title: "¿Por qué importa?",
        benefits: [
            {
                id: "time",
                icon: "⏱️",
                title: "Ahorra tiempo",
                description: "Sin correos eternos ni reuniones innecesarias."
            },
            {
                id: "ai",
                icon: "🧠",
                title: "IA aplicada con criterio humano",
                description: "Las respuestas no son genéricas, están basadas en mi experiencia real como desarrollador."
            },
            {
                id: "proposals",
                icon: "📄",
                title: "Propuestas claras y accionables",
                description: "Cada documento es una hoja de ruta, no solo una cotización."
            },
            {
                id: "experience",
                icon: "🤝",
                title: "Mejora la experiencia del cliente",
                description: "Respuestas rápidas, personalizadas y profesionales."
            }
        ]
    },
    services: {
        title: "¿Qué tipo de <span class=\"text-[#00AAFF]\">servicios</span> puedo automatizar?",
        list: [
            "Desarrollo de aplicaciones web y móviles",
            "Automatización de procesos con n8n, Make, Power Automate",
            "Integración de APIs y sistemas",
            "Implementación de chatbots y asistentes con IA",
            "Optimización de flujos operativos y comerciales",
            "Consultoría técnica en arquitectura y escalabilidad"
        ]
    },
    audience: {
        title: "¿Para quién es?",
        description: "Koda App está diseñado para impulsar la eficiencia de distintos perfiles profesionales.",
        audiences: [
            {
                id: "entrepreneurs",
                title: "Emprendedores Tech",
                description: "Que quieren automatizar el proceso de cotización y enfocarse en desarrollar proyectos."
            },
            {
                id: "agencies",
                title: "Agencias de Desarrollo",
                description: "Que buscan escalar su proceso comercial sin invertir más tiempo en propuestas manuales."
            },
            {
                id: "freelancers",
                title: "Freelancers",
                description: "Que necesitan responder rápido a clientes potenciales con propuestas profesionales."
            },
            {
                id: "consultants",
                title: "Consultores Técnicos",
                description: "Que requieren generar presupuestos detallados basados en su experiencia."
            }
        ]
    },
    howItWork: {
        title: "¿Cómo Funciona?",
        description: "Con Koda App, obtener una cotización automatizada es más sencillo que nunca.",
        steps: [
            {
                label: "El cliente inicia conversación",
                description: "A través de WhatsApp, Telegram o formulario web, el cliente describe su necesidad."
            },
            {
                label: "IA procesa y consulta Koda App",
                description: "Un flujo automatizado interpreta el requerimiento y consulta la base de conocimiento de Koda App."
            },
            {
                label: "Genera propuesta personalizada",
                description: "En minutos, se genera un PDF con objetivos, alcance, presupuesto y tiempo de entrega."
            }
        ],
        btnText: "Solicitar Cotización"
    },
    faq: {
        title: "Preguntas Frecuentes",
        description: "Todo lo que necesitas saber sobre Koda App",
        questions: [
            {
                question: "¿Necesito conocimientos técnicos para usar Koda App?",
                answer: "No, el sistema está diseñado para ser usado de forma intuitiva. Solo necesitas describir tu proyecto y el sistema hace el resto."
            },
            {
                question: "¿Qué tan precisas son las cotizaciones?",
                answer: "Las cotizaciones se basan en mi experiencia real como desarrollador y en una base de conocimiento actualizada constantemente."
            },
            {
                question: "¿Puedo personalizar las propuestas?",
                answer: "Sí, cada propuesta se genera considerando las especificaciones únicas de tu proyecto."
            },
            {
                question: "¿En qué idiomas está disponible?",
                answer: "Actualmente, Koda App genera propuestas en español, pero próximamente estará disponible en inglés."
            },
            {
                question: "¿Cuánto tiempo tarda en generarse una propuesta?",
                answer: "El proceso completo toma entre 2 y 5 minutos, dependiendo de la complejidad del proyecto."
            },
            {
                question: "¿Cómo se garantiza la seguridad de mi información?",
                answer: "Toda la información se procesa de forma segura y confidencial. No compartimos datos con terceros."
            }
        ],
        feature: "Características principales",
        features: [
            "Respuestas en minutos",
            "Propuestas profesionales",
            "Basado en experiencia real",
            "Proceso automatizado",
            "Sin compromiso"
        ],
        moreQTitle: "¿Tienes más preguntas?",
        moreQText: "Contáctanos y te ayudaremos a resolverlas."
    },
    cta: {
        title: "¿Quieres probarlo?",
        subtitle: "¿Tienes una idea o problema técnico?",
        description: "Escríbeme por WhatsApp o Telegram. En minutos recibirás una propuesta clara, sin compromiso.",
        btn1: "Probar ahora",
        btn2: "Ver ejemplo de propuesta",
        contactText: "Contáctame directamente",
        comingSoon:"Próximamente"
    }
}
