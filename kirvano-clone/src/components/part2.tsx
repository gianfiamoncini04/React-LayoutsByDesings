import { data } from "../ui/data"
import { useState } from 'react'

export function Part2() {
  const [Info, setInfo] = useState("")

  const handleToggle = (element) => {
    setInfo(Info === element ? element : element);
  };

  return (
    <>
      <section>
        <div>
          <h1 className="text-4xl font-black text-center">Área de Membros Premium</h1>
          <p className="text-2xl text-center">Ofereça uma experiência verdadeiramente exclusiva e atraente através das nossas ferramentas de personalização.</p>
        </div>
        <div>
          {data.map(([title, img, info, num]) => (
            <>
              <div key={num} className="cards" onMouseOver={() => handleToggle(num)} onMouseOut={() => handleToggle(!num)}>
                <h1>{title}</h1>
                <p className={`${Info === num ? "flex" : "hidden"}`}>{info}</p>
                <a href="#" className={`${Info === num ? "flex" : "hidden"} text-blue-700`}>Entre agora</a>
                <img src={img} alt="*" />
              </div>
            </>
          ))}
        </div>
      </section>
    </>
  )
}