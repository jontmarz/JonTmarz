import React, { useState } from 'react'
import { X } from 'lucide-react'

interface ModalProps {
    showPopup: boolean;
    setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

function ModalFormComponent({ showPopup, setShowPopup }: ModalProps) {

    return (
        <>
        {/* MailerLite Popup */}
        {showPopup && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg p-8 max-w-md w-full relative">
                <button
                onClick={() => setShowPopup(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                >
                <X className="w-6 h-6" />
                </button>
                <div className="ml-embedded" data-form="TUFORMULARIOID"></div>
            </div>
            </div>
        )}
        </>
    )
}

export default ModalFormComponent