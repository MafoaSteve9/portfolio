import { useEffect, useRef } from "react"
import appDivertissement from "../assets/app-divetissement.jpg"
import boxy from "../assets/boxyGenerator.png"
import porsche from "../assets/porsche.png"
import creditCard from "../assets/credit-card.jpeg"
import "../App.css"

export default function Projets() {
    const data = [
        {
            photo: boxy,
            projet: "Boxy Generator",
            url: "https://github.com/MafoaSteve9/BoxyGenerator/tree/main/Boxy-project"
        },
        {
            photo: creditCard ,
            projet: "Project-Angular-CC",
            url: "https://project-angular-cc.vercel.app/"
        },
        {
            photo: porsche,
            projet: "Site de voiture Porsche",
            url: "https://porsche-ms.vercel.app/"
        },
        {
            photo: appDivertissement,
            projet: "App de divertissement",
            url: "https://app-de-divertissement-sm.vercel.app/"

        }
    ]

    const effectRef = useRef()

    useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        console.log(entries);
        if (entries[0].isIntersecting) {
            effectRef.current.classList.add("active")
            observer.unobserve(effectRef.current)
        }
      })
  
      observer.observe(effectRef.current)
  
      return () => {
        observer.unobserve(effectRef.current)
      }
    }, [])


  return (
    <section  ref={effectRef} className="newsletter">
        <h1 className="text-center uppercase font-bold text-lg text-[20px] sm:text-[30px]" id="mesProjets"><a href="#Projets">mes projets</a></h1>
        <div className="flex flex-wrap items-center mt-3 justify-center text-center flex-col sm:flex-row">
            {data.length > 0 &&
            data.map(infos => (
                <div className=" w-full sm:w-1/2 p-8">
                    <a href={infos.url} target="_blank" className="sm:relative sm:top-60 relative top-24 text-[12px] py-3 px-10 cursor-pointer text-sm rounded bg-[#65749280] text-white hover:bg-blue-700 opacity-75 font-semibold">{infos.projet}</a>
                    <img className=" bg-slate-500 shadow-2xl shadow-slate-400 rounded-lg" src={infos.photo} alt="Photos de mes différents projets" />
                </div>
            ))}
            
        </div>
    </section>
    
  )
}