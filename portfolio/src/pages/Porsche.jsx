import porsche from "../assets/porsche.png"

export default function Porsche() {
  return (
    <section>
        <div className="flex justify-center p-10">
        <p className="p-10 text-justify  w-[900px] bg-orange-50 rounded-lg text-[#666666] leading-8 shadow-2xl shadow-slate-400" >
        <h1 className="text-center uppercase font-bold text-lg p-4 text-black">Porsche</h1>
        Explorez l'élégance intemporelle de Porsche à travers notre site de photos minimaliste. Réalisé en HTML, CSS et JS, découvrez une collection captivante de clichés mettant en valeur la beauté des voitures Porsche. Cliquez sur le lien pour une expérience immersive et pour découvrir davantage de clichés exclusifs.

        </p>
        </div>
        <div className="flex flex-wrap items-center mt-3 justify-center text-center flex-col sm:flex-row">
        <div className=" w-full sm:w-1/2 p-8">
                    <a href="https://porsche-ms.vercel.app/" target="_blank" className="sm:relative sm:top-60 relative top-44 py-3 px-10 cursor-pointer text-sm rounded bg-[#65749280] text-white hover:bg-blue-700 opacity-75 font-semibold">Découvrir</a>
                    <img className=" bg-slate-500 shadow-2xl shadow-slate-400 rounded-lg" src={porsche} alt="Photos de voiture de porsche" />
                </div>
        </div>
    </section>
  )
}