import { button } from "framer-motion/client";

export default {
  navbar: {
    home: "Inicio",
    about: "Sobre Mí",
    services: "Servicios",
    portfolio: "Portafolio",
    skills: "Habilidades",
    contact: "Contacto"
  },
  hero: {
    greeting: "Hola, soy Jon Tmarz",
    title: "Ingeniero de Software y Desarrollador Full Stack",
    description: "con más de 6 años de experiencia. Mi pasión es crear soluciones digitales innovadoras que conecten con las personas."
  },
  about: {
    title: "Sobre Mí",
    work: "Mi trabajo abarca desde la creación de interfaces atractivas y funcionales hasta la construcción de sistemas robustos en el backend. Domino tecnologías como PHP, JavaScript, VueJS, ReactJS, NodeJS, Firebase, MySQL, MongoDB y WordPress, además de manejar API Rest y servicios web modernos.",
    ai: "También tengo conocimientos en Python, lenguaje R y desarrollo en Inteligencia Artificial, explorando constantemente herramientas como GPT para crear soluciones innovadoras.",
    teamwork: {
      title: "Trabajo en equipo y liderazgo",
      description: "Me adapto con facilidad a equipos de trabajo y disfruto liderar proyectos, compartiendo conocimientos y aprendiendo de mis compañeros."
    },
    passion: {
      title: "Amante del Frontend y la tecnología",
      description: "Aunque me encanta diseñar experiencias de usuario en el frontend, también disfruto resolver problemas complejos en el backend. Mi enfoque está en crear productos que no solo sean funcionales, sino que también conecten con las personas."
    },
    learning: {
      title: "Siempre aprendiendo",
      description: "Estoy en constante búsqueda de nuevas oportunidades para mejorar mis habilidades, crecer profesionalmente y marcar la diferencia en cada proyecto."
    }
  },
  services: {
    title: "Servicios",
    items: {
      websites: {
        title: "Desarrollo de Websites",
        description: "Transformo ideas en sitios web modernos, funcionales y optimizados. Desde landing pages hasta plataformas completas, garantizo que tu presencia en línea sea única, atractiva y eficiente."
      },
      seo: {
        title: "Estrategias SEO",
        description: "Impulsa tu negocio con estrategias de optimización para motores de búsqueda. Mejoro el posicionamiento orgánico de tu sitio web para que alcances a más clientes y superes a tu competencia."
      },
      architecture: {
        title: "Arquitectura de Software",
        description: "Diseño estructuras sólidas para proyectos tecnológicos, asegurando escalabilidad, eficiencia y cumplimiento de objetivos técnicos y de negocio."
      },
      webapps: {
        title: "Desarrollo de Aplicaciones Web",
        description: "Construyo aplicaciones web interactivas y de alto rendimiento, adaptadas a tus necesidades y listas para impulsar la productividad y la experiencia del usuario."
      },
      consulting: {
        title: "Consultoría de Desarrollo de Aplicaciones",
        description: "Te ayudo a planificar, diseñar e implementar soluciones tecnológicas efectivas. Desde la conceptualización hasta la ejecución, optimizo tus recursos y garantizo el éxito del proyecto."
      }
    }
  },
  portfolio:{
    title: "Portafolio",
    websites: {
      arrigui: {
        title: "Arrigui & Asociados",
        description: "Desarrollo de sitio web y desarrollo de sitio web con intranet para optimizar la comunicación interna."
      },
      ceniflores: {
        title: "Ceniflores",
        description: "Desarrollo de un website y con software de gestión documental."
      },
      fresar: {
        title: "Fresar Ingenieros",
        description: "Desarrollo de un sitio web dinámico y moderno."
      },
      lecafe: {
        title: "Le café de Michelle",
        description: "Desarrollo de sitio web, integrando una sección de menú en línea."
      },
      mandolina: {
        title: "Mandolina",
        description: "Desarrollo de sitio web con Ecommerce combinado con un website de red social y una aplicación de reserva de vinos de cosecha."
      },
      vinali: {
        title: "Vinali Group",
        description: "Desarrollo de un website corporativo con integración de intranet y calculadora de pago de nómina en diferentes estados de Estados Unidos."
      },
      tco: {
        title: "Treecare Office",
        description: "Desarrollo de un sitio web centrado en servicios empresariales y calculadora de pago de nómina en diferentes estados de Estados Unidos."
      },
      holbie: {
        title: "Holbie",
        description: "Desarrolo de sitio web funcional para servicios de salud y consultoría."
      },
      taxpert: {
        title: "Taxpert Strategies",
        description: "Desarrollo de sitio web con software de gestión documental."
      },
      netvin: {
        title: "Netvin",
        description: "Desarrollo de sitio web corporativo con enfoque en tecnología e innovación."
      },
      rcm: {
        title: "Vinali RCM",
        description: "Desarrollo de un sitio web diseñado para servicios de gestión empresarial."
      },
    },
    apps: {
      researchpro: {
        title: "ResearchPro",
        description: "Desarrollo de aplicación de gestión de proyectos de investigación, diseñada para optimizar el flujo de trabajo y la colaboración académica."
      }
    }
  },
  buttons: {
    hero: 'Conecta conmigo',
    about: 'Agenda una consulta',
    service: 'Comencemos tu proyecto',
    portfolio: 'Contáctame',
    downloadCV: "Descargar CV",
    sendMessage: "Enviar Mensaje",
    viewProject: "Ver Proyecto"
  },
  contact: {
    title: "Contacto",
    text: "¿Listo para comenzar tu próximo proyecto? ¡Contáctame!",
    resume: "Descarga mi CV para obtener más información sobre mi experiencia y habilidades.",
    form: {
      name: "Nombre",
      email: "Correo",
      phone: "Teléfono",
      message: "Mensaje",
      button: 'Enviar',
      ht: {
        name: "El nombre es requerido",
        email: "El correo es requerido",
        emailvalid: "El correo no es válido",
        phone: "El teléfono es requerido",
        message: "El mensaje es requerido"
      },
      success: "¡Mensaje enviado exitosamente!",
      error: "Ocurrió un error al enviar el mensaje. Intenta nuevamente."
    }
  }
};