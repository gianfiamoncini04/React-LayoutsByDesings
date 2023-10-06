"use client"

export default function Header() {
   return (
        <>
            <header className="flex flex-row justify-between items-center p-[28px_0] border-black border-b-2">
                <p className="font-extrabold text-logo">TOM´S</p>
                <section className="font-bold text-20 flex flex-row gap-[96px]">
                    <a href="#" className="hover:text-pri">Início</a>
                    <a href="#" className="hover:text-pri">Cursos</a>
                    <a href="#" className="hover:text-pri">Eventos</a>
                    <a href="#" className="hover:text-pri">Contato</a>
                </section>
                <button className="text-black bg-pri hover:bg-sec font-bold w-btn h-btn border-2 border-black shadow-[3px_3px_0_1px_#000] hover:scale-110 ease-in-out duration-200">SE INCREVA</button>
            </header>
        </>
    )
}