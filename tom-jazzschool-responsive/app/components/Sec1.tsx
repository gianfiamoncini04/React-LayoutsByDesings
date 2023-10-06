"use client"

import Image from "next/image"

export default function Sec1() {
   return (
            <>
              <section className="border-b-2 border-black w-full flex flex-row justify-between items-center h-[90vh]">
                <section className="flex flex-col gap-20 w-[40%]">
                    <p className="font-bold text-64 leading-[115%]">Crie algo <span className="text-pri">impactante</span> <br />com música</p>
                    <p className="text-24 font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button className="text-black bg-pri hover:bg-sec font-bold w-btn h-btn border-2 border-black shadow-[3px_3px_0_1px_#000] hover:scale-110 ease-in-out duration-200">COMECE AGORA</button>
                </section> 
                <section className="w-[60%]">
                    <Image src={"Sec1.svg"} width={842} height={521} alt="sec1" className="w-full" />
                </section>
              </section>
            </>
       )
}