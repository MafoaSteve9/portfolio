import parimis  from "../assets/parimis.png"
import parimis2 from "../assets/parimis2.png"
import parimis3 from "../assets/parimis3.png"

const data = [
    {
        photo: parimis,
    },
    {
        photo: parimis2,
    },
    {
        photo: parimis3,
      
    },
  
]

export default function () {
  return (
    <section>
        <div className="flex justify-center p-6">
        <p className="p-4 text-justify  w-[900px] bg-orange-50 rounded-lg text-[#666666] leading-8 shadow-2xl shadow-slate-400" >
        <h1 className="text-center uppercase font-bold text-lg p-4 text-black">Projet Hotel - Parimis</h1>
        Durant ma formation précédente, j'ai eu l'occasion de concevoir un site web d'hôtel en utilisant les technologies fondamentales du web : HTML, CSS, et un soupçon de JavaScript pour une interactivité accrue. Ce projet visait à créer une expérience utilisateur fluide et responsive.
        Fort de cette expérience, je planifie actuellement une refonte complète du projet en utilisant des technologies plus avancées telles que React.js pour la création d'interfaces utilisateur dynamiques et Tailwind CSS pour des styles flexibles et réutilisables. L'intégration de Node.js permettra d'ajouter des fonctionnalités avancées, telles que des réservations en ligne et un système de gestion de contenu, élevant ainsi le site à un niveau supérieur.
        
        </p>
        </div>
        <div className="flex flex-wrap items-center mt-3 justify-center text-center flex-col sm:flex-row">
            {data.map(infos => (
                <div className=" w-full sm:w-1/2 p-8 flex justify-center">
                    <img className=" bg-slate-500 shadow-2xl shadow-slate-400 rounded-lg" src={infos.photo} alt="Image d'hotel" />
                </div>
            ))}
            
        </div>
    </section>
  )
}