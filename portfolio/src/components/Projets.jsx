import { useEffect, useRef } from "react"
import parimis from "../assets/parimis.PNG"
import boxy from "../assets/boxyGenerator.PNG"
import porsche from "../assets/porsche.PNG"
import trello from "../assets/trelloBg.png"
import "../App.css"

export default function Projets() {
    const data = [
        {
            photo: boxy,
            projet: "Boxy Generator"
        },
        {
            photo: trello ,
            projet: "Clone de Trello"
        },
        {
            photo: porsche,
            projet: "Site de voiture Porsche"
        },
        {
            photo: parimis,
            projet: "Hotel Parimis"
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
        <h1 className="text-center uppercase font-bold text-lg">mes projets</h1>
        <div className="flex flex-wrap items-center mt-3 justify-center text-center flex-col sm:flex-row">
            {data.map(infos => (
                <div className=" w-full sm:w-1/2 p-8">
                    <button className="sm:relative sm:top-60 relative top-44 py-3 px-10 cursor-pointer text-sm rounded bg-[#65749280] text-white hover:bg-blue-700 opacity-75 font-semibold">{infos.projet}</button>
                    <img className=" bg-slate-500 shadow-2xl shadow-slate-400 rounded-lg" src={infos.photo} alt="" />
                </div>
            ))}
            
        </div>
    </section>
    
  )
}