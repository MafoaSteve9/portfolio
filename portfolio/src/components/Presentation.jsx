import { useState } from "react"
import { createPortal } from "react-dom"
import ModalContent from "./ModalContent"
import steve from "../assets/steve.jpeg"
import boat from "../assets/boat.jpeg"
import home from "../assets/home.jpeg"
import reactJs from "../assets/react-logo.png"
import nodeJs from "../assets/nodejs.png"
import php from "../assets/php.png"
import git from "../assets/git.png"
import tailwind from "../assets/tailwind.png"
import expressJs from "../assets/Expressjs.png"
import mysql from "../assets/mysql.png"
import mongodb from "../assets/mongodb.png"


const tabsData = [
  {
    photo: steve,
    infos: "A l'école"
  },
  {
    photo: boat,
    infos: "???"
  },
  {
    photo: home,
    infos: "A la recherche d'une alternance 🚣‍♀️"
  },
  
]
const img = [
  {
    id: 1,
    technos: reactJs,
  },
  {
    id: 2,
    technos: nodeJs,
  },
  { 
    id: 3,
    technos: php,
  },
  { 
    id: 4,
    technos: git,
  },
  {
    id: 5,
    technos: tailwind,
  },
  {
    id: 6,
    technos: expressJs,
  },
  {
    id: 7,
    technos: mysql,
  },
  {
    id: 8,
    technos: mongodb,
  },
]

export default function Presentation() {
  const [selectedTab, setSelectedTab] = useState(0)
  const [showModal, setShowModal] = useState(false)

  return (
    <section className="h-full pt-20 flex flex-col sm:flex sm:flex-row">
       <div className="w-full p-8 sm:w-1/2">
      <h1 className="p-1 text-center w-full font-bold uppercase text-6xl">developpeur fullstack</h1>
      <h2 className="p-4 text-center w-full uppercase font-bold text-[30px] mb-12">steve mafoa</h2>
        <p className="text-[30px] pb-4 text-[#252525] font-semibold">Salut 🌎 ! Qui suis-je ?</p>
        <p className="text-xl text-[#666666] pb-2 text-justify leading-8 shadow-2xl shadow-slate-400 rounded-lg p-8">Étudiant en développement web à Ada tech school , une école inclusive adoptant une approche pratique et immersive de l'apprentissage, projets concrets et expérience pratique. En parallèle de ma quête pour maîtriser les langages du web, je trouve un équilibre dans ma passion pour le football. Actif au sein d'un club, je transpose les principes d'équipe du terrain aux projets de développement. Mon engagement dans ces deux univers distincts renforce ma conviction que la collaboration, la communication et l'esprit d'équipe sont essentiels. Que ce soit en codant des solutions innovantes ou en travaillant en équipe sur le terrain, je m'efforce de tirer le meilleur de chaque expérience. Mon parcours d'étudiant en développement web et de joueur de football contribue à forger une personnalité polyvalente et résolument axée sur le succès collectif.</p>

      <div className="flex justify-center p-4">
      <button 
        onClick={() => setShowModal(true)}
        className="mt-2 py-3 px-10 cursor-pointer text-sm rounded bg-[#3a6ed6] text-white hover:bg-blue-700 mb-8">
          Me contacter
          </button>
      </div>
          {showModal && createPortal(<ModalContent closeModal={() => setShowModal(false)}/>, document.body)}

          <div className="text-center">
            <p className="font-semibold">Les stacks que j'apprends : </p>
          <div className="flex flex-wrap items-center mt-3  justify-around shadow-slate-600 shadow-md rounded-md p-4">
                {img.map(techno => (
                    <img className="p-1 w-16 " src={techno.technos} alt="" />
                ))}

            </div>
        </div>

       </div>
       <div className="max-w-xl min-h-[250px] mx-auto sm:w-1/2 sm:h-[720px] rounded-m  shadow-slate-600 shadow-md rounded-md bg-slate-100 mb-28">
        <div className="flex justify-center">
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
          src={tabsData[selectedTab].photo} alt="" />
          <p className="text-center text-slate-400 font-semibold">{tabsData[selectedTab].infos}</p>
        </div>
       </div>
    </section>
  )
}