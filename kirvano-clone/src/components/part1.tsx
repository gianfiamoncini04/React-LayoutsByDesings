import { useState } from 'react'
import { Crie, Cadastre, Comece } from '../ui/part1'
import check from '../assets/check-icon-active.svg'

export function Part1() {
  const [activeElement, setActiveElement] = useState(1);

  const handleToggle = (element) => {
    setActiveElement(activeElement === element ? element : element);
  };

  return (
    <>
      <section className="flex flex-col justify-center items-center bg-[#FAFAFA] px-80 py-28 gap-12">
        <strong className="font-satbold  text-5xl leading-tight pb-4 text-center">Sua primeira venda no digital <br />mais rápida do que você imagina</strong>
        <div className='flex flex-row justify-between items-start gap-16 w-full'>
          <div className='flex flex-col'>
            <p onClick={() => handleToggle(1)} className={`toggles ${activeElement === 1 ? 'bg-[#171717] text-white' : 'bg-[#F1F1F4] text-[#a8b0b3]'} rounded-t-lg`}>
              <img src={check} alt="Check" />
              Crie sua conta
            </p>
            <p onClick={() => handleToggle(2)} className={`toggles ${activeElement === 2 ? 'bg-[#171717] text-white' : 'bg-[#F1F1F4] text-[#a8b0b3]'} border-y-2 border-zinc-200`}>
              <img src={check} alt="Check" />
              Cadastre seu produto
            </p>
            <p onClick={() => handleToggle(3)} className={`toggles ${activeElement === 3 ? 'bg-[#171717] text-white' : 'bg-[#F1F1F4] text-[#a8b0b3]'} rounded-b-lg`}>
              <img src={check} alt="Check" />
              Comece a vender
            </p>
          </div>
          <div className='flex flex-row'>
            {activeElement === 1 && <Crie />}
            {activeElement === 2 && <Cadastre />}
            {activeElement === 3 && <Comece />}
          </div>
        </div>
      </section>
    </>
  )
}