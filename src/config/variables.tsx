// Home
export const dataContact = {
    email: "help@jontmarz.com",
    wa: "+57 319 435 6458",
    msjwa: "&text=Hola%20%F0%9F%91%8B.%20Tengo%20preguntas%20sobre%20la%20Politica%20de%20Privacidad.%20",
    address: "Cra 124 # 131 - 19 Bogotá - Colombia",
    formURL: "https://jontmarz.com/#contact",
}

import { Instagram, LinkedIn, GitHub, YouTube, X, WhatsApp, EditCalendar, Facebook } from '@mui/icons-material'

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

import scrumBadge from '/src/assets/scrum-foundation-certification-candidate.webp'

export const certifications = [
    { name: 'Scrum Profesional', link: 'https://www.credly.com/badges/d77dc8d9-18d9-426f-b038-cb18eac840a4/public_url', badge: scrumBadge },
]

// Marketing Automation Course
import imgHeroCWebM from '/src/assets/courses/bg-course-webM-brain-tech-blue.webp'
import imgBenefitCWebM from '/src/assets/courses/bg-chip-blue.webp'
import imgComple from '/src/assets/courses/bg-robots-blue.webp'
import bgCTA from '/src/assets/courses/bg-cta-course-web.webp'
import illustr1 from '/src/assets/courses/automation-professional-illustration.webp'
import illustr2 from '/src/assets/courses/marketing-automation-illustration.webp'
import illustr3 from '/src/assets/courses/robot-automation-illustration.webp'
import imgWho1 from '/src/assets/courses/bg-automation-professional-illustration.webp'
import imgWho2 from '/src/assets/courses/bg-marketing-automation-illustration.webp'
import imgWho3 from '/src/assets/courses/bg-robot-automation-illustration.webp'
import bgWho1 from '/src/assets/courses/img-people-wonder-about-the-course-is-for-yours.webp'
import imgTestim from '/src/assets/courses/img-woman-giving-testimonial.webp'

export const courseWebM = {
    imgHero: imgHeroCWebM,
    imgTrainer: imgSpeaker,
    imgComplements: imgComple,
    urlHotmartCP: "https://pay.hotmart.com/O99235905B",
    imgBenefits: imgBenefitCWebM,
    bgCTA: bgCTA,
    imgCTA: [ illustr1, illustr2, illustr3 ],
    imgWho: [ imgWho1, imgWho2, imgWho3 ],
    bgWho: bgWho1,
    imgTestimonials: imgTestim,
}

import bgHeroImage from '/src/assets/landingpages/bg-hero-landingpage-webinar.webp';
import imgSpeaker from '/src/assets/img-jon-tmarz.webp'

// Webinar Course
export const webinar = {
    bgHeroImage: bgHeroImage,
    urlWA: "https://chat.whatsapp.com/EJYPlgBKuzHItOBUUR21Ct",
    when: {
        date: [2025, 4, 30],
        time: 11,
    },
    imgSpeaker: imgSpeaker,
    meetLink: "https://meet.google.com/oer-ewch-uvj",
    speakers: [
        {
            name: "John E. Torres M.",
            role: "Ingeniero de Software, Desarrollador Web y Especialista en IA",
            bio: "Soy un apasionado del desarrollo web y la inteligencia artificial. Me dedico a ayudar a emprendedores a lanzar sus negocios digitales.",
            img: imgSpeaker,
        },
    ],
}


// Digital Launcher GPT
import bgheroDLGPT from '/src/assets/GPTs/bg-hero-gpt-digital-launcher.webp'
import faviconDLGPT from '/src/assets/GPTs/favicon-digital-launcher.webp'
import bgBenefit from '/src/assets/GPTs/bg-right-benefits.webp'
import bgHowItWorks from '/src/assets/GPTs/bg-human-face-tech-blue_org.webp'

export const DLauncerGPT = {
    bgHero: bgheroDLGPT,
    favicon: faviconDLGPT,
    urlDLG: 'https://chatgpt.com/g/g-67d2d0115cfc8191a96dbbab684712db-lanzador-digital',
    bgBenefits: bgBenefit,
    bgHowItWorks: bgHowItWorks,
    videoUrl: "https://www.youtube.com/embed/YOUR_VIDEO_ID", 
    videoThumbnail: "https://via.placeholder.com/800x450",
    contact: 'help@jontmarz.com'
}