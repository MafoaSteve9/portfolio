import trello1 from "../assets/trello-swap-container.png"
import trello2 from "../assets/trello-item.png"
import trello3 from "../assets/trello-swap-item.png"
import trello4 from "../assets/trello.png"

const data = [
  {
      photo: trello1,
  },
  {
      photo: trello2,
  },
  {
      photo: trello3,
    
  },
  {
      photo: trello4,
    
  },

]

export default function Trello() {
  return (
    <section>
    <div className="flex justify-center p-6">
    <p className="p-10 text-justify  w-[900px] bg-orange-50 rounded-lg text-[#666666] leading-8 shadow-2xl shadow-slate-400" >
    <h1 className="text-center uppercase font-bold text-lg p-4 text-black">Clone Trello</h1>
    Découvrez mon projet : une réplique simplifiée de l'application Trello, entièrement conçue avec HTML, CSS et TypeScript. Ce clone offre une interface conviviale pour la gestion visuelle des tâches, inspirée de la simplicité de Trello. Organisez, suivez et priorisez vos tâches avec des tableaux intuitifs. Bien que ce projet ne soit pas accessible via un lien externe, vous pouvez le cloner depuis le dépôt GitHub associé pour explorer son code source et l'exécuter localement sur votre machine.
    
    </p>
    </div>
    <div className="flex flex-wrap items-center mt-3 justify-center text-center flex-col sm:flex-row">
        {data.map(infos => (
            <div className=" w-full sm:w-1/2 p-8 flex justify-center">
                <img className=" bg-slate-500 shadow-2xl shadow-slate-400 rounded-lg" src={infos.photo} alt="Photo de mon projet clone trello" />
            </div>
        ))}
        
    </div>
</section>
  )
}