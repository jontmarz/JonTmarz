import { useState } from 'react'
import Herosection from '../../components/LandingPages/WebinarMarketing/Hero'
import FeaturesSection from '../../components/LandingPages/WebinarMarketing/Features'
import SpeakerSection from '../../components/LandingPages/WebinarMarketing/Speaker'
import ModalFormSection from '../../components/LandingPages/WebinarMarketing/ModalForm'
import ComplementSections from '../../components/LandingPages/WebinarMarketing/Complement'
import Form from '../../components/LandingPages/WebinarMarketing/Form'
import Footer from '../../components/Layouts/Footer'

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
        <Form />
        <Footer />
      </div>
    </div>
  )
}

export default WebinarWeb