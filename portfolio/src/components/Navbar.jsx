import { useState } from "react";
import hamburger from "../assets/hamburger.svg"
import close from "../assets/close.svg"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiCodewars } from "react-icons/si";

export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false)

  return (
    <nav className="w-full flex justify-center p-4 text-slate-200 bg-black">
        <ul className={`${showMenu ? "flex" : "hidden"}  bg-black flex-col items-center w-full absolute sm:top-full top-8 pb-5 sm:flex sm:relative sm:flex-row sm:pb-0 gap-10 sm:justify-between`}>
       <div>
       <h1 className="italic font-semibold text-lg">Steve Mafoa</h1>
       </div>
            <div className="flex  sm:flex-row ">
            <li className=" text-slate-50">
                <a className="inline-block py-2 mx-3  sm:py-0" href="">Projets</a>
            </li>
            <li className=" text-slate-50">
                <a className="inline-block py-2 mx-3 sm:py-0" href="">Moi</a>
            </li>
            <li className=" text-slate-50">
                <a className="inline-block py-2 mx-3 sm:py-0" href="">Parcours</a>
            </li>
            <li className=" text-slate-50">
                <a className="inline-block py-2 mx-3 sm:py-0" href="">Contact</a>
            </li>
            </div>
            <div className="flex sm:flex-row">
            <li className=" text-slate-50">
                <a className="inline-block py-2 mx-3 text-lg sm:py-0 text-blue-500" href="https://www.linkedin.com/in/steve-mafoa-07a513179/"><FaLinkedin /></a>
            </li>
            <li className="font-semibold text-slate-50">
                <a className="inline-block py-2 mx-3 text-lg sm:py-0" href="https://github.com/MafoaSteve9"><FaGithub /></a>
            </li>
            <li className="font-semibold text-slate-50">
                <a className="inline-block py-2 mx-3 text-lg sm:py-0" href=""><SiCodewars /></a>
            </li>
            </div>
        </ul>
        <button
        onClick={() => setShowMenu(!showMenu)}
        className="ml-auto sm:hidden bg-slate-300">
            <img 
            className="w-4"
            src={showMenu ? close : hamburger} alt={showMenu ?  "Cacher le menu": "Montrer le menu"} />
        </button>
    </nav>
    
  )
}