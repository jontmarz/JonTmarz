import Navbar from '../../components/Apps/TributosCo/Navbar'
import HeroSection from '../../components/Apps/TributosCo/Hero'
import WhatIsSection from '../../components/Apps/TributosCo/WhatIs'
import WhyUseSection from '../../components/Apps/TributosCo/WhyUse'
import HowToUseSection from '../../components/Apps/TributosCo/HowToUse'
import NextPackagesSection from '../../components/Apps/TributosCo/NextPackages'
import AboutSection from '../../components/Apps/TributosCo/About'

function TributosCo() {
    return (
        <div id="tributesCo">
            <Navbar />
            <HeroSection />
            <WhatIsSection />
            <WhyUseSection />
            <HowToUseSection />
            <NextPackagesSection />
            <AboutSection />
        </div>
    )
}

export default TributosCo
