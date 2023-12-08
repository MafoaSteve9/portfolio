import { Link, Outlet } from "react-router-dom"
import { FaGithub } from "react-icons/fa";

export default function MesProjets() {
  return (
    <div className="bg-slate-400 text-center">
    <div className=" max-w-4xl mx-auto text-center pb-20">
       <p className="text-[16px] pt-10 mb-6 flex items-center justify-center ">Mon github pour plus de projets <a className=" py-2 mx-3 text-2xl sm:py-0 shadow-slate-600 shadow-md rounded-md p-2 w-12 h-10 flex items-center justify-center bg-black hover:bg-slate-400 transition duration-300 ease-in-out text-white font-bold" href="https://github.com/MafoaSteve9" target="_blank"><FaGithub /></a></p>
       <p className="mb-10 text-[16px]">Ici, vous pourrez explorer de manière plus approfondie certains des projets que j'ai conçus</p>
       <nav className="flex flex-wrap justify-center">
           <Link 
           to="/pages/parimis"
           className="mx-2 font-semibold text-lg"
           >Hotel - Parimis</Link>
           <Link 
           to="/pages/boxygenerator"
           className="mx-2 font-semibold text-lg"
           >Boxy Generator</Link>
           <Link 
           to="/pages/porsche"
           className="mx-2 font-semibold text-lg"
           >Site Porsche</Link>
           <Link 
           to="/pages/trello"
           className="mx-2 font-semibold text-lg"
           >Clone Trello</Link>
       </nav>
       <Outlet />
   </div>
  </div>
  )
}