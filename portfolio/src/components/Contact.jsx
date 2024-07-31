import { useState } from "react"
import { createPortal } from "react-dom"
import ModalContent from "./ModalContent"

export default function Contact() {
    const [showModal, setShowModal] = useState(false)

  return (
    <div className="flex justify-center p-4">
      <button 
        onClick={() => setShowModal(true)}
        className="mt-2 py-3 px-10 cursor-pointer text-sm rounded bg-[#3a6ed6] text-white hover:bg-blue-700 mb-8">
          Me contacter
          </button>
          {showModal && createPortal(<ModalContent closeModal={() => setShowModal(false)}/>, document.body)}
      </div>
      
  )
}