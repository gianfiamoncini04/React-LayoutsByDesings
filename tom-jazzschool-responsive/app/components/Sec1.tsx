"use client"

import Image from "next/image"

export default function Sec1() {
   return (
            <>
              <section className="border-b-2 border-black max-w-full flex flex-row justify-between items-center min-h-screen lg:min-h-full lg:pb-8 lg:flex-col-reverse lg:justify-end lg:items-center lg:gap-4">
                <section className="flex flex-col gap-20 max-w-[40%] xl:max-w-full lg:gap-10">
                    <p className="font-bold text-64 leading-[115%] lg:text-logo">Crie algo <span className="text-pri">impactante</span> <br />com música</p>
                    <p className="text-24 font-bold lg:text-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <button className="text-black bg-pri hover:bg-sec font-bold w-btn h-btn border-2 border-black shadow-[3px_3px_0_1px_#000] hover:scale-110 ease-in-out duration-200">COMECE AGORA</button>
                </section> 
                <section className="min-w-[60%] xl:max-w-full">
                    <Image src={"/sec1.svg"} width={842} height={521} alt="sec1" className="w-full" />
                </section>
              </section>
            </>
       )
}