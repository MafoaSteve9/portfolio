import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoMdDownload } from "react-icons/io";

export default function Footer() {
  return (
    <footer className=" text-slate-300 bg-[#1f2225]">
    <nav className=" max-w-4xl mx-auto text-center pb-4">
       <p className="text-xl pt-10 mb-6  p-4">Ce portfolio a été méticuleusement conçu avec ReactJS 18 et stylisé avec Tailwind CSS. Un grand merci de l'avoir consulté ! À bientôt, peut-être, pour de nouvelles opportunités passionnantes.</p>
       <ul className="flex items-center justify-center pt-8">
           <li className=" shadow-slate-600 shadow-md rounded-md sm:p-2 bg-[#dedede]"><a className="inline-block py-2 mx-3 text-2xl sm:py-0 text-blue-500" href="https://www.linkedin.com/in/steve-mafoa-07a513179/" target="_blank"><FaLinkedin /></a></li>
           <li className=" shadow-slate-600 shadow-md rounded-md sm:p-2 bg-[#dedede] mx-12"><a className="inline-block py-2 mx-3 text-2xl sm:py-0 text-black" href="https://github.com/MafoaSteve9" target="_blank"><FaGithub /></a></li>
           <li className=" shadow-slate-600 shadow-md rounded-md sm:p-2 bg-[#dedede]"><a className="inline-block py-2 mx-3 text-2xl sm:py-0 text-black" href="/CV-Steve-full-stack.pdf" download><IoMdDownload /></a></li>
           
       </ul>
   </nav>
  </footer>
  )
}