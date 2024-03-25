import app1  from "../assets/app-divetissement.jpg"
import app2 from "../assets/app-divertissement2.jpg"
import app3 from "../assets/app-divertissement3.jpg"

const data = [
    {
        photo: app1,
    },
    {
        photo: app2,
    },
    {
        photo: app3,
      
    },
  
]

export default function () {
  return (
    <section>
        <div className="flex justify-center p-6">
        <p className="p-4 text-center  w-[900px] bg-orange-50 rounded-lg text-[#666666] leading-8 shadow-2xl shadow-slate-400" >
        <h1 className="text-center uppercase font-bold text-lg p-4 text-black">App de divertissement</h1>
        Stack: Tailwind, React Js
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