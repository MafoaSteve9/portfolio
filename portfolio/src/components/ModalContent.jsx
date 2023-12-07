export default function ModalContent({closeModal}) {
    const data = [
        {
            id:1,
            infos: "steve_mafoa@outlook.com",
        },
        {
            id:2,
            infos: "06 58 43 81 62",
        },
    ]
  return (
    <div 
    className="fixed inset-0 bg-slate-800/75 flex items-center justify-center"
    onClick={closeModal}>
        <div
        className="bg-slate-300 text-slate-900 p-10 rounded relative mb-[10vh]" 
        onClick={e => e.stopPropagation()}>
            <button 
            className="absolute top-1 right-1 w-7 h-7 bg-red-600 text-slate-100 rounded flex justify-center items-center"
            onClick={closeModal}>X</button>
            <p className="sm:w-[600px] pb-2">Bonjour, je recherche une alternance de 12 mois débutant à partir d’octobre 2023 en tant que développeur rythme 4j entreprise et 1j formation</p>
            <ul>
                <h1 className="font-semibold">Me joindre :</h1>
                {data.map(info => (
                    <li className="" key={info.id}>{info.infos}</li>
                ))}

            </ul>

        </div>

    </div>
  )
}