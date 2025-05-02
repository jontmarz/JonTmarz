import React from 'react'
import Hero from '../../components/Courses/MarketingIA/Hero'
import CModules from '../../components/Courses/MarketingIA/CModules'
import Benefits from '../../components/Courses/MarketingIA/Benefits'
import Trainer from '../../components/Courses/MarketingIA/Trainer'
import Complements from '../../components/Courses/MarketingIA/Complements'
import Faq from '../../components/Courses/MarketingIA/FQuestion'

const MarketingIA: React.FC = () => {
  return (
    <>
      <div id="courseWebM" >
        <Hero />
        <CModules />
        <Benefits />
        <Trainer />
        <Complements />
        <Faq />
      </div>
    </>
  );
};

export default MarketingIA;