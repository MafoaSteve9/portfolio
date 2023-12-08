import boxy1 from "../assets/boxP.png"
import boxy2 from "../assets/shadowCustomize.png"
import boxy3 from "../assets/boxyGenerator.png"

const data = [
  {
      photo: boxy1,
  },
  {
      photo: boxy2,
  },
  {
      photo: boxy3,
    
  },

]

export default function BoxyGenerator() {
  return (
    <section>
    <div className="flex justify-center p-10">
    <p className="p-10 text-justify  w-[900px] bg-orange-50 rounded-lg text-[#666666] leading-8 shadow-2xl shadow-slate-400" >
    <h1 className="text-center uppercase font-bold text-lg p-4 text-black">Boxy Generator</h1>
    BoxyGenerator est un petit projet passionnant que j'ai développé en utilisant les technologies modernes telles que React.js, Tailwind CSS, et Redux. Ce générateur de boîtes offre une expérience interactive permettant aux utilisateurs de créer des boîtes personnalisées avec des couleurs vives et des ombres captivantes.
L'application tire parti de la puissance de React.js pour créer une interface utilisateur réactive et dynamique. Grâce à Tailwind CSS, le design est élégant et la mise en page est fluide, offrant une expérience utilisateur optimale.
L'utilisation de Redux ajoute une couche de gestion d'état robuste, permettant une gestion facile des états complexes de l'application, notamment la gestion des différentes boîtes générées.
    </p>
    </div>
    <div className="flex flex-wrap items-center mt-3 justify-center text-center flex-col sm:flex-row">
        {data.map(infos => (
            <div className=" w-full sm:w-1/2 p-8 flex justify-center">
                <img className=" bg-slate-500 shadow-2xl shadow-slate-400 rounded-lg" src={infos.photo} alt="" />
            </div>
        ))}
        
    </div>
</section>
  )
}