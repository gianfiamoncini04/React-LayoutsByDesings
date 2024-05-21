import { data } from "../ui/data"
import { useState } from 'react'

export function Part2() {
  const [Info, setInfo] = useState("")

  const handleToggle = (element) => {
    setInfo(Info === element ? element : element);
  };

  return (
    <>
      <section className="flex flex-col justify-center items-center gap-20 px-80 py-28">
        <div>
          <h1 className="text-5xl font-black text-center">Área de Membros Premium</h1>
          <p className="text-2xl text-center">Ofereça uma experiência verdadeiramente exclusiva e atraente através das<br/> nossas ferramentas de personalização.</p>
        </div>
        <div className="grid grid-cols-2 gap-4 w-full">
          {data.map(([title, img, info, num]) => (
            <>
              <div key={num} className="cards group" onMouseOver={() => handleToggle(num)} onMouseOut={() => handleToggle(!num)}>
                <div className="max-w-60 flex flex-col gap-4">
                  <h1 className="text-2xl font-bold border-l-2 pl-4 border-white group-hover:border-black">{title}</h1>
                  <p className={`${Info === num ? "flex" : "hidden"} text-md`}>{info}</p>
                  <a href="#" className={`${Info === num ? "flex" : "hidden"} text-blue-700 font-semibold text-lg`}>Entre agora</a>
                </div>
                <img src={img} alt="*" />
              </div>
            </>
          ))}
        </div>
      </section>
    </>
  )
}