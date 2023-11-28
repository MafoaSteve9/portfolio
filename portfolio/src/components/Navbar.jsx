import { useState } from "react";
import hamburger from "../assets/hamburger.svg"
import close from "../assets/close.svg"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { RiContactsBook2Fill } from "react-icons/ri";

export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false)

  return (
    <nav className="fixed top-0 w-full flex justify-center p-4 bg-black text-slate-200">
        <ul className={`${showMenu ? "flex" : "hidden"} flex-col items-center w-full absolute top-full pb-5 sm:flex sm:relative sm:flex-row sm:pb-0 gap-10 sm:justify-between`}>
       <div>
       <h1 className="italic font-semibold text-lg">Steve Mafoa</h1>
       </div>
            <div className="flex  sm:flex-row ">
            <li className="font-semibold text-slate-50">
                <a className="inline-block py-2 mx-3 text-lg sm:py-0" href="">Projets</a>
            </li>
            <li className="font-semibold text-slate-50">
                <a className="inline-block py-2 mx-3 text-lg sm:py-0" href="">Moi</a>
            </li>
            <li className="font-semibold text-slate-50">
                <a className="inline-block py-2 mx-3 text-lg sm:py-0" href="">Parcours</a>
            </li>
            <li className="font-semibold text-slate-50">
                <a className="inline-block py-2 mx-3 text-lg sm:py-0" href="">Contact</a>
            </li>
            </div>
            <div className="flex  sm:flex-row">
            <li className="font-semibold text-slate-50">
                <a className="inline-block py-2 mx-3 text-lg sm:py-0 text-blue-500" href=""><FaLinkedin /></a>
            </li>
            <li className="font-semibold text-slate-50">
                <a className="inline-block py-2 mx-3 text-lg sm:py-0" href=""><FaGithub /></a>
            </li>
            <li className="font-semibold text-slate-50">
                <a className="inline-block py-2 mx-3 text-lg sm:py-0" href=""><RiContactsBook2Fill /></a>
            </li>
            </div>
        </ul>
        <button
        onClick={() => setShowMenu(!showMenu)}
        className="ml-auto sm:hidden">
            <img 
            className="w-4"
            src={showMenu ? close : hamburger} alt={showMenu ?  "Cacher le menu": "Montrer le menu"} />
        </button>
    </nav>
    
  )
}