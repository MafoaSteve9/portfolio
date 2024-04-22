import { useState } from "react";
import hamburger from "../assets/hamburger.svg"
import close from "../assets/close.svg"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiCodewars } from "react-icons/si";

export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false)

  return (
    <nav className="fixed z-50 w-full flex justify-center p-4 text-slate-300 bg-[#1f2225]">
        <ul className={`${showMenu ? "flex" : "hidden"}  bg-[#1f2225] flex-col items-center w-full absolute sm:top-full top-8 pb-5 sm:flex sm:relative sm:flex-row sm:pb-0 gap-10 sm:justify-between`}>
       <div>
       <h1 className="italic font-semibold text-lg">Steve Mafoa</h1>
       </div>
            <div className="flex  sm:flex-row ">
            <li className=" ">
                <a className="inline-block py-2 mx-3  sm:py-0" href="#">Acceuil</a>
            </li>
            <li className=" ">
                <a className="inline-block py-2 mx-3  sm:py-0" href="#mesProjets" id="Projets">Projets</a>
            </li>
            <li className=" ">
                <a className="inline-block py-2 mx-3 sm:py-0" href="/CV-steve-alternance2024.pdf" download>Mon CV</a>
            </li>
            </div>
            <div className="flex sm:flex-row">
            <li className=" ">
                <a className="inline-block py-2 mx-3 text-lg sm:py-0 text-blue-500" href="https://www.linkedin.com/in/steve-mafoa-07a513179/"target="_blank"><FaLinkedin /></a>
            </li>
            <li className="font-semibold ">
                <a className="inline-block py-2 mx-3 text-lg sm:py-0" href="https://github.com/MafoaSteve9"target="_blank"><FaGithub /></a>
            </li>
            <li className="font-semibold ">
                <a className="inline-block py-2 mx-3 text-lg sm:py-0" href="https://www.codewars.com/users/SteveM94"target="_blank"><SiCodewars /></a>
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