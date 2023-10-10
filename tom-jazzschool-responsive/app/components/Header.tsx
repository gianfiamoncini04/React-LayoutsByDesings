"use client"

export default function Header() {
   return (
        <>
            <header className="flex flex-row justify-between items-center p-[28px_0] border-black border-b-2 lg:flex-col lg:gap-4">
                <p className="font-extrabold text-logo md:text-24">TOM´S</p>
                <section className="font-bold text-20 flex flex-row gap-[96px] 2xl:gap-[15px] lg:grid lg:grid-cols-2 lg:grid-rows-2 sm:text-16">
                    <a href="#" className="hover:text-pri">Início</a>
                    <a href="#" className="hover:text-pri">Cursos</a>
                    <a href="#" className="hover:text-pri">Eventos</a>
                    <a href="#" className="hover:text-pri">Contato</a>
                </section>
                <button className="text-black bg-pri hover:bg-sec font-bold w-btn h-btn border-2 border-black shadow-[3px_3px_0_1px_#000] hover:scale-110 ease-in-out duration-200 md:text-[12px] md:w-[120px] md:h-[30px]">SE INCREVA</button>
            </header>
        </>
    )
}