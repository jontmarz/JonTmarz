import bgHeroImage from '/src/assets/landingpages/bg-hero-landingpage-webinar.webp';
import imgSpeaker from '/src/assets/img-jon-tmarz.webp'
import { Instagram, LinkedIn, GitHub, YouTube, X, WhatsApp, EditCalendar, Facebook } from '@mui/icons-material'
import scrumBadge from '/src/assets/scrum-foundation-certification-candidate.webp'

export const webinar = {
    bgHeroImage: bgHeroImage,
    urlWA: "https://chat.whatsapp.com/EJYPlgBKuzHItOBUUR21Ct",
    when: {
        date: "18 de abril de 2025",
        time: 11,
    },
    imgSpeaker: imgSpeaker,
}

export const dataContact = {
    email: "help@jontmarz.com",
    wa: "+57 319 435 6458",
    msjwa: "&text=Hola%20%F0%9F%91%8B.%20Tengo%20preguntas%20sobre%20la%20Politica%20de%20Privacidad.%20",
    address: "Cra 124 # 131 - 19 Bogotá - Colombia",
    formURL: "https://jontmarz.com/#contact",
}

export const socialMedia = [
    { name: 'LinkedIn', icon: LinkedIn, link: 'https://www.linkedin.com/in/john-tmarz/' },
    { name: 'Whatsapp', icon: WhatsApp, link: 'https://api.whatsapp.com/send?phone=573194356458&text=Hola%20%F0%9F%91%8B.%20Quiero%20iniciar%20un%20nuevo%20proyecto%20de%20desarrollo.%20' },
    { name: 'GitHub', icon: GitHub, link: 'https://github.com/jontmarz' },
    { name: 'Instagram', icon: Instagram, link: 'https://www.instagram.com/jon_tmarz/' },
    { name: 'Facebook', icon: Facebook, link: 'https://www.facebook.com/jon.martz.co/' },
    // { name: 'YouTube', icon: YouTube, link: 'https://www.youtube.com/user/hardjonedi' },
    { name: 'X', icon: X, link: 'https://twitter.com/JonTMarz' },
    { name: 'Calendly', icon: EditCalendar, link: 'https://calendly.com/jontmarz' },
]

export const certifications = [
    { name: 'Scrum Profesional', link: 'https://www.credly.com/badges/d77dc8d9-18d9-426f-b038-cb18eac840a4/public_url', badge: scrumBadge },
]