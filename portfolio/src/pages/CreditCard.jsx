import pokedex from "../assets/pokedex.jpeg"
import cardCredit from "../assets/credit-card.jpeg"


const data = [
  {
      photo: pokedex,
      name: 'Pokedex',
      url:'https://angular-pokedex-app-f7fcb.firebaseapp.com/'
  },
  {
      photo: cardCredit,
      name: 'Projet Angular CC',
      url: 'https://project-angular-cc.vercel.app/'
  }
]

export default function Trello() {
  return (
    <section>
    <div className="flex justify-center p-6">
    <p className="p-10 text-justify  w-[900px] bg-orange-50 rounded-lg text-[#666666] leading-8 shadow-2xl shadow-slate-400" >
    <h1 className="text-center uppercase font-bold text-lg p-4 text-black">Learn Angular 🌍</h1>
    <div className="text-center font-bold">
        {data.map(infos => (
            <p><a href={infos.url} target="_blank">{infos.name}</a></p>
        ) )}
    </div>
    
    </p>
    </div>
    <div className="flex flex-wrap items-center mt-3 justify-center text-center flex-col sm:flex-row">
        {data.map(infos => (
            <div className=" w-full sm:w-1/2 p-8 flex justify-center">
                <img className=" bg-slate-500 shadow-2xl shadow-slate-400 rounded-lg" src={infos.photo} alt="Mes projets Angular finis ou en cours de confection !" />
            </div>
        ))}
        
    </div>
</section>
  )
}