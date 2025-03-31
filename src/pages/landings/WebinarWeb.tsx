import React, { useState } from 'react'
import Herosection from '../../components/LandingPages/WebinarMarketing/Hero'
import FeaturesSection from '../../components/LandingPages/WebinarMarketing/Features'
import SpeakerSection from '../../components/LandingPages/WebinarMarketing/Speaker'
import ModalFormSection from '../../components/LandingPages/WebinarMarketing/ModalForm'
import ComplementSections from '../../components/LandingPages/WebinarMarketing/Complement'
import Footer from '../../components/Footer'

function WebinarWeb() {
  const [showPopup, setShowPopup] = useState(false)

  return (
    <div>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-blue-900 text-white">
        <Herosection setShowPopup={setShowPopup}/>
        <FeaturesSection setShowPopup={setShowPopup} />
        <SpeakerSection />
        <ComplementSections setShowPopup={setShowPopup} />
        <ModalFormSection showPopup={showPopup} setShowPopup={setShowPopup}/>
        <Footer />
      </div>
    </div>
  )
}

export default WebinarWeb