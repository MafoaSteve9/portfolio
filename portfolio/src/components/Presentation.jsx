import { useState } from "react"
import { createPortal } from "react-dom"
import ModalContent from "./ModalContent"
import steve from "../assets/steve.jpeg"
import boat from "../assets/boat.jpeg"
import home from "../assets/home.jpeg"
import Contact from "./Contact"


const tabsData = [
  {
    photo: steve,
    infos: "A l'école"
  },
  {
    photo: boat,
    infos: "🐶"
  },
  {
    photo: home,
    infos: "A la recherche d'une alternance 🚣‍♀️"
  },
  
]

export default function Presentation() {
  const [selectedTab, setSelectedTab] = useState(0)
  const [showModal, setShowModal] = useState(false)

  return (
    <section className="h-full pt-20 flex flex-col sm:flex sm:flex-row">
       <div className="w-full sm:p-8 sm:w-1/2">
      <div className="text-center w-full font-bold uppercase text-4xl sm:text-6xl sm:pt-20 pt-4">
      <h1 className="">developpeur fullstack</h1>
      </div>
      <h2 className="p-4 text-center w-full uppercase font-bold text-[20px] sm:text-[30px] mb-12">steve mafoa</h2>
        <p className="text-[20px] sm:text-[30px] text-center pb-4 text-[#252525] font-semibold">Salut 🌎 ! Qui suis-je ?</p>
        <div className="p-4">
        <p className="text-[16px] text-[#666666] pb-2 text-justify leading-8 shadow-2xl shadow-slate-400 rounded-lg p-8">Étudiant en développement web à Ada tech school , une école inclusive adoptant une approche pratique et immersive de l'apprentissage, projets concrets et expérience pratique. En parallèle de ma quête pour maîtriser les langages du web, je trouve un équilibre dans ma passion pour le football. Actif au sein d'un club, je transpose les principes d'équipe du terrain aux projets de développement. Mon engagement dans ces deux univers distincts renforce ma conviction que la collaboration, la communication et l'esprit d'équipe sont essentiels. Que ce soit en codant des solutions innovantes ou en travaillant en équipe sur le terrain, je m'efforce de tirer le meilleur de chaque expérience. Mon parcours d'étudiant en développement web et de joueur de football contribue à forger ma personnalité polyvalente et résolument axée sur le succès collectif.</p>
        </div>

      <div className="flex justify-center p-4">
      <Contact />
      </div>
          {showModal && createPortal(<ModalContent closeModal={() => setShowModal(false)}/>, document.body)}

       </div>
       <div className="max-w-xl min-h-[250px] mx-auto sm:w-1/2 sm:h-[720px] rounded-m  shadow-slate-600 shadow-md rounded-md bg-slate-100 mb-28 sm:mt-14">
        <div className="flex justify-center relative top-4">
          {tabsData.map((obj, index) => (
            <button
            className=" m-4 w-[30px] h-[30px] bg-slate-400 hover:bg-slate-300 rounded-[50%] "
            key={index}
            onClick={() => setSelectedTab(index)}>
            </button>
          ))}
        </div>
        <div className="p-4">
          <img 
          className="p-4 sm:h-[600px] w-full sm:object-cover"
          src={tabsData[selectedTab].photo} alt="Photod de moi" />
          <p className="text-center text-slate-400 font-semibold">{tabsData[selectedTab].infos}</p>
        </div>
       </div>
    </section>
  )
}