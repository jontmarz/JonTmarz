import HeroSection from '../../components/GPTs/DigitalLaunch/Hero'
import WhatIsSection from '../../components/GPTs/DigitalLaunch/WhatIs'
import AudienceSection from '../../components/GPTs/DigitalLaunch/Audience'
import BenefitsSection from '../../components/GPTs/DigitalLaunch/Benefits'
import SolutionSection from '../../components/GPTs/DigitalLaunch/Solution'
import HowItWorksSection from '../../components/GPTs/DigitalLaunch/HowItWorks'
import DemoSection from '../../components/GPTs/DigitalLaunch/Demostration'
import FAQSection from '../../components/GPTs/DigitalLaunch/FAQ'

function DigitalLaunchGPT() {
    return (
        <div id="digitalLaunchGPT">
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