import Navbar from '../../components/Apps/KodaApp/Navbar'
import HeroSection from '../../components/Apps/KodaApp/Hero'
import WhatIsSection from '../../components/Apps/KodaApp/WhatIs'
import AudienceSection from '../../components/Apps/KodaApp/Audience'
import WhyMattersSection from '../../components/Apps/KodaApp/WhyMatters'
import ServicesSection from '../../components/Apps/KodaApp/Services'
import HowItWorksSection from '../../components/Apps/KodaApp/HowItWorks'
import FAQSection from '../../components/Apps/KodaApp/FAQ'
import CTASection from '../../components/Apps/KodaApp/CTA'
import Footer from '../../components/Layouts/Footer'

function KodaApp() {
    return (
        <div id="kodaApp">
            <Navbar />
            <HeroSection />
            <WhatIsSection />
            <AudienceSection />
            <WhyMattersSection />
            <ServicesSection />
            <HowItWorksSection />
            <FAQSection />
            <CTASection />
            <Footer />
        </div>
    )
}

export default KodaApp
