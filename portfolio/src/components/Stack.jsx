import reactJs from "../assets/react-logo.png"
import nodeJs from "../assets/nodejs.png"
import php from "../assets/php.png"
import git from "../assets/git.png"
import angular from "../assets/angular-logo.png"
import expressJs from "../assets/Expressjs.png"
import mysql from "../assets/mysql.png"
import mongodb from "../assets/mongodb.png"

const img = [
    {
      id: 1,
      technos: reactJs,
    },
    {
      id: 2,
      technos: nodeJs,
    },
    { 
      id: 3,
      technos: php,
    },
    { 
      id: 4,
      technos: git,
    },
    {
      id: 5,
      technos: angular,
    },
    {
      id: 6,
      technos: expressJs,
    },
    {
      id: 7,
      technos: mysql,
    },
    {
      id: 8,
      technos: mongodb,
    },
  ]


export default function Stack() {
  return (
    <section className="text-center">
        <p className="font-semibold">Les stacks que j'apprends : </p>
        <div className="text-center p-4 flex justify-center">    
          <div className="flex flex-wrap items-center mt-3  justify-around shadow-slate-600 shadow-md rounded-md p-4 sm:w-1/2 mb-12">
                {img.map(techno => (
                    <img className="p-1 w-16 " src={techno.technos} alt="Photo de stack que j'apprends" />
                ))}

            </div>
        </div>

    </section>
  )
}