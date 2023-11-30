import { useState } from "react"
import { createPortal } from "react-dom"
import ModalContent from "./ModalContent"
import steve from "../assets/steve.jpeg"
import boat from "../assets/boat.jpeg"
import home from "../assets/home.jpeg"


const tabsData = [
  {
    photo: steve,
  },
  {
    photo: boat,
  },
  {
    photo: home,
  },
]

export default function Presentation() {
  const [selectedTab, setSelectedTab] = useState(0)
  const [showModal, setShowModal] = useState(false)

  return (
    <section className="h-full pt-20 flex flex-col sm:flex sm:flex-row">
       <div className="w-full p-8 sm:w-1/2">
        <p className="text-[40px] font-bold pb-4 text-[#252525]">Bienvenue Sur Mon Portfolio !</p>
        <p className="text-xl text-[#666666]">Je recherche une alternance de 12 mois<br /> débutant à partir d’octobre 2023 en tant que développeur rythme 4j entreprise et 1j formation</p>

        <button 
        onClick={() => setShowModal(true)}
        className="mt-2 py-3 px-10 cursor-pointer text-sm rounded bg-[#3a6ed6] text-white hover:bg-blue-700">
          Me contacter
          </button>
          {showModal && createPortal(<ModalContent closeModal={() => setShowModal(false)}/>, document.body)}

       </div>
       <div className="max-w-xl min-h-[250px] mx-auto bg-[#ffffff] sm:w-1/2 rounded-md">
        <div className="flex justify-center">
          {tabsData.map((obj, index) => (
            <button
            className=" m-4 w-[30px] h-[30px] bg-slate-400 hover:bg-slate-300 rounded-[50%] "
            key={index}
            onClick={() => setSelectedTab(index)}>
            </button>
          ))}
        </div>
        <div className="">
          <img 
          className="p-4 sm:h-[600px] w-full sm:object-cover"
          src={tabsData[selectedTab].photo} alt="" />
        </div>
       </div>
    </section>
  )
}