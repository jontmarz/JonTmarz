const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL || 'help@jontmarz.com'
const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || '573194356458'
const CALENDLY_URL = import.meta.env.VITE_CALENDLY_URL || 'https://calendly.com/jontmarz/30min?back=1'

export interface MenuOptions{
  id: string
  text: string
  icon?: string
  action?: string[]
  submenus?: MenuOptions[]
}

// Interface to ChatRequest
export interface BotResponse {
  response: string,
  menu: MenuOptions[]
}

export interface Message {
  text: string;
  isUser: boolean;
  timestamp: Date;
  menuOptions?: MenuOptions[]
}

// Main menu options
export const mainMenu: MenuOptions[] = [
  { id: 'services', text: '🛠️ Servicios ofrecidos', icon: 'home', action: ['SHOW_SERVICES'] },
  { id: 'consulting', text: '🤖 Consultoría en IA', icon: 'home', action: ['SHOW_CONSULTING'] },
  { id: 'courses', text: '📚 Cursos con IA', icon: 'home', action: ['SHOW_COURSES'] },
  // { id: 'apps', text: 'Aplicaciones Activas', icon: 'home', action: ['SHOW_APPS'] },
  { id: 'digital-launcher', text: '🚀 Lanzador Digital GPT', icon: 'home', action: ['SHOW_LAUNCHER'] },
  { id: 'contact', text: '📞 Contacto y soporte', icon: 'home', action: ['SHOW_CONTACT'] },
  { id: 'other', text: '❓ Otra pregunta', icon: 'home', action: ['ASK_QUESTION'] },
]

export const servicesMenu: MenuOptions[] = [
  { id: 'architecture', text: '🔧 Arquitectura de software', icon: 'home', action: ['SHOW_ARCHITECTURE'] },
  { id: 'automation', text: '🤖 Automatización de procesos', icon: 'home', action: ['SHOW_AUTOMATION'] },
  { id: 'consulting', text: '🤖 Consultoría en IA', icon: 'home', action: ['SHOW_CONSULTINGIA'] },
  { id: 'development', text: '💻 Desarrollo de software', icon: 'home', action: ['SHOW_DEVELOPMENT'] },
  { id: 'back', text: '↩️ Menú Principal', icon: 'home', action: ['BACK_MAIN'] },
]

export const contactMenu: MenuOptions[] = [
  { id: 'form', text: '📝 Formulario de contacto', icon: 'home', action: ['SHOW_FORM'] },
  { id: 'email', text: '📧 Enviar Email', icon: 'home', action: ['SHOW_EMAIL'] },
  { id: 'whatsapp', text: '📱 WhatsApp', icon: 'home', action: ['SHOW_WHATSAPP'] },
  { id: 'call', text: '📞 Agendar Llamada', icon: 'home', action: ['SHOW_CALL'] },
  { id: 'back', text: '↩️ Menú Principal', icon: 'home', action: ['BACK_MAIN'] },
]

export const detectMenuRequest = (message: string): boolean => {
  const menuKeywords = ['menu', 'opciones', 'ayuda', 'help', 'servicios', 'contacto', 'cursos', 'más información', 'info', 'que puedes hacer', 'qué puedes hacer']
  
  return menuKeywords.some(keyword => 
      message.toLowerCase().includes(keyword)
  )
}

// Service detail responses
export const serviceDetails = {
  webdev: "Ofrecemos servicios de desarrollo web full-stack con tecnologías modernas como React, Angular, Node.js y más.",
  mobiledev: "Desarrollamos aplicaciones móviles nativas y cross-platform para iOS y Android con React Native, Flutter y tecnologías nativas.",
  cloud: "Implementamos y gestionamos infraestructuras cloud en AWS, Azure y Google Cloud, incluyendo soluciones serverless."
}

// Product category responses
export const productCategories = {
  software: "Tenemos diversos productos software como CMS, CRM, herramientas de análisis y más.",
  templates: "Ofrecemos plantillas para diversos frameworks y CMS: WordPress, Shopify, React, Vue, etc."
}

// Department contact info
export const departmentContacts = {
  sales: "Para contactar con ventas, escribe a sales@example.com o llama al +1234567890.",
  support: "Para soporte técnico, escribe a support@example.com o utiliza nuestro portal de soporte.",
  partnership: "Para oportunidades de colaboración, escribe a partners@example.com."
}

// About section content
export const aboutSections = {
  company: "Somos una empresa de tecnología fundada en 2010, especializada en soluciones digitales innovadoras.",
  team: "Nuestro equipo está compuesto por profesionales apasionados por la tecnología y la innovación.",
  history: "Comenzamos como una startup y hemos crecido hasta convertirnos en líderes del sector tecnológico."
}

export const processMenuAction = (action: string, miaCourse: string, DLauncher: string, whatsapp:string, calendly: string, formPath?: string, contactEmail?: string): BotResponse => {
  switch (action) {
      case 'SHOW_SERVICES':
          return { response: '¡Descubre nuestra gama de servicios profesionales diseñados para impulsar tu éxito! 🚀 ¿En qué te puedo ayudar hoy?', menu: servicesMenu }
      case 'SHOW_CONSULTING':
          return { response: '¡Potencia tu negocio con IA! Ofrezco consultoría especializada para implementar soluciones inteligentes que transformarán tus procesos, aumentarán tu productividad y te darán una ventaja competitiva real en el mercado. ¿Listo para llevar tu empresa al siguiente nivel?', menu: [] }
      case 'SHOW_COURSES':
          return { response: `¡Descubre el poder de la IA! Te invito a mi curso transformador donde aprenderás a automatizar tu negocio digital de manera práctica y efectiva. En "Lanza tu negocio digital con IA", te guiaré paso a paso para revolucionar tu presencia online y multiplicar tus resultados. ¡Explora más detalles en ${miaCourse} y da el primer paso hacia el futuro del marketing digital!`, menu: [] }
      case 'SHOW_LAUNCHER':
          return { response: `El Lanzador Digital GPT es una herramienta que te ayuda a crear contenido y estrategias de marketing digital. Puedes aprender a usarlo en ${DLauncher}`, menu: [] }
      case 'SHOW_CONTACT':
          return { response: '¡Estoy aquí para ayudarte! 👋 ¿De qué manera prefieres que nos conectemos? Elige la opción que te resulte más cómoda:', menu: contactMenu }
      case 'SHOW_ARCHITECTURE':
          return { response: '¡Diseñemos el futuro de tu software! Creamos arquitecturas robustas, escalables y eficientes que se adaptan a tu negocio, asegurando que tu sistema crezca de manera sostenible y mantenible mientras optimizamos costos y rendimiento.', menu: [] }
      case 'SHOW_AUTOMATION':
          return { response: '¡Transforma y optimiza tu negocio! Te ayudo a automatizar procesos repetitivos y flujos de trabajo usando IA y tecnologías modernas, permitiéndote ahorrar tiempo, reducir errores y enfocarte en lo que realmente importa.', menu: [] }
      case 'SHOW_CONSULTINGIA':
          return { response: '¡Potencia tu negocio con IA! Ofrezco consultoría especializada para implementar soluciones inteligentes que transformarán tus procesos, aumentarán tu productividad y te darán una ventaja competitiva real en el mercado digital.', menu: [] }
      case 'SHOW_DEVELOPMENT':
          return { response: '¡Transformo tus ideas en soluciones digitales! Ofrecemos desarrollo de software personalizado (Backend, Frontend, Mobile) con las últimas tecnologías para crear experiencias excepcionales que impulsen tu negocio.', menu: [] }
      case 'SHOW_FORM':
          return { response: `Puedes enviar tu requerimiento, llenando el formulario de contacto en ${formPath}`, menu: [] }
      case 'SHOW_EMAIL':
          return { response: `¡Encantado de conectar contigo! 📧 Puedes escribirme directamente a ${contactEmail}. Estaré feliz de responder tus consultas y ayudarte con tu proyecto.`, menu: [] }
      case 'SHOW_WHATSAPP':
          return { response: `¡Hablemos en tiempo real! 📱 Contáctame directamente por WhatsApp en ${whatsapp}. Estoy listo para responder tus consultas y ayudarte a alcanzar tus objetivos. ¡Escríbeme ahora! 💬`, menu: [] }
      case 'SHOW_CALL':
          return { response: `¡Agendemos una conversación personalizada! 📅 Reserva tu espacio en mi calendario en ${calendly} y charlemos sobre cómo puedo ayudarte a alcanzar tus objetivos. ¡Estoy ansioso por conocer más sobre tu proyecto! 🤝`, menu: [] }
      case 'BACK_MAIN':
          return { response: 'Volviendo al menú principal:', menu: mainMenu }
      case 'ASK_QUESTION':
          return { response: '¡Adelante! Estoy aquí para responder cualquier pregunta que tengas. Cuéntame, ¿en qué puedo ayudarte hoy? 🤝', menu: [] }
      default:
          return { response: 'No he podido procesar esa opción. ¿En qué puedo ayudarte?', menu: [] }
  }
}