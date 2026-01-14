import Navbar from '../../components/Apps/DigitalLaunch/Navbar'
import HeroSection from '../../components/Apps/DigitalLaunch/Hero'
import WhatIsSection from '../../components/Apps/DigitalLaunch/WhatIs'
import AudienceSection from '../../components/Apps/DigitalLaunch/Audience'
import BenefitsSection from '../../components/Apps/DigitalLaunch/Benefits'
import HowItWorksSection from '../../components/Apps/DigitalLaunch/HowItWorks'
import DemoSection from '../../components/Apps/DigitalLaunch/Demostration'
import FAQSection from '../../components/Apps/DigitalLaunch/FAQ'

function DigitalLaunchGPT() {
    return (
        <div id="digitalLaunchGPT">
            <Navbar />
            <HeroSection />
            <WhatIsSection />
            <AudienceSection />
            <BenefitsSection />
            {/* <SolutionSection /> */}
            <HowItWorksSection />
            <DemoSection />
            <FAQSection />
        </div>
    )
}

export default DigitalLaunchGPT