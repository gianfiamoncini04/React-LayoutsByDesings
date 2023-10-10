"use client"

import Image from "next/image"

export default function Sec2() {
   return (
            <>
              <section className="flex flex-col justify-center items-center gap-[100px] p-[100px_0] lg:gap-[50px]">

                <section className="flex flex-row justify-center items-start gap-[40px] 2xl:flex-col">

                  <section className="flex flex-col justify-start items-start p-6 gap-2 max-w-div max-h-div lg:items-center lg:p-4 bg-pri shadow-[3px_3px_0_1px_#000] border-2 border-black hover:scale-105 ease-in-out duration-200 cursor-pointer">
                    <Image src={"/icon1.png"} alt="icon" width={48} height={48} />
                    <h1 className="text-24 lg:text-20 font-bold">Piano popular</h1>
                    <p className="text-16 lg:text-[12px] lg:text-center font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit, dolore magna aliqua.</p>
                    <span className="font-bold text-logo">-&gt;</span>
                  </section>

                  <section className="flex flex-col justify-start items-start p-6 gap-2 max-w-div max-h-div lg:items-center lg:p-4 bg-sec shadow-[3px_3px_0_1px_#000] border-2 border-black hover:scale-105 ease-in-out duration-200 cursor-pointer">
                    <Image src={"/icon2.png"} alt="icon" width={48} height={48} />
                    <h1 className="text-24 lg:text-20 font-bold">Teoria Musical</h1>
                    <p className="text-16 lg:text-[12px] lg:text-center font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit, dolore magna aliqua.</p>
                    <span className="font-bold text-logo">-&gt;</span>
                  </section>

                  <section className="flex flex-col justify-start items-start p-6 gap-2 max-w-div max-h-div lg:items-center lg:p-4 bg-pri shadow-[3px_3px_0_1px_#000] border-2 border-black hover:scale-105 ease-in-out duration-200 cursor-pointer">
                    <Image src={"/icon3.png"} alt="icon" width={48} height={48} />
                    <h1 className="text-24 lg:text-20 font-bold">Sax alto</h1>
                    <p className="text-16 lg:text-[12px] lg:text-center font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit, dolore magna aliqua.</p>
                    <span className="font-bold text-logo">-&gt;</span>
                  </section>

                  <section className="flex flex-col justify-start items-start p-6 gap-2 max-w-div max-h-div lg:items-center lg:p-4 bg-sec shadow-[3px_3px_0_1px_#000] border-2 border-black hover:scale-105 ease-in-out duration-200 cursor-pointer">
                    <Image src={"/icon4.png"} alt="icon" width={48} height={48} />
                    <h1 className="text-24 lg:text-20 font-bold">Bateria</h1>
                    <p className="text-16 lg:text-[12px] lg:text-center font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit, dolore magna aliqua.</p>
                    <span className="font-bold text-logo">-&gt;</span>
                  </section>

                </section>
                <p className="font-bold text-64 lg:text-[28px]">E <span className="text-pri">vários</span> outros!</p>
                <button className="w-fit p-[0_15px] text-black bg-pri hover:bg-sec font-bold h-btn border-2 border-black shadow-[3px_3px_0_1px_#000] hover:scale-110 ease-in-out duration-200">CONHECER CURSOS</button>
              </section>
            </>
       )
}