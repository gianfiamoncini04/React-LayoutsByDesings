"use client"

export default function Footer() {
	return (
		<>
			<footer className="flex flex-row justify-between items-start p-[48px_0] border-black border-t-2 font-bold lg:flex-col lg:gap-10 lg:items-center">
				<section className="flex flex-col justify-start items-start gap-10 lg:gap-5">
					<p className="text-logo leading-[70%]">
						TOM´S<br /><span className="text-20">JAZZ SCHOOL</span>
					</p>
					<p className="opacity-70 w-60">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, dolore
						magna aliqua.
					</p>
				</section>
				<section className="flex flex-col justify-start items-start gap-8 lg:flex-row lg:gap-4">
					<a href="#" className="hover:text-pri">
						Início
					</a>
					<a href="#" className="hover:text-pri">
						Cursos
					</a>
					<a href="#" className="hover:text-pri">
						Eventos
					</a>
					<a href="#" className="hover:text-pri">
						Contato
					</a>
				</section>
				<section className="flex flex-col justify-start items-start gap-10 lg:items-center">
					<p>Receba materiais gratuitos no seu email</p>
					<input type="email" className="outline-none w-fit p-[0_15px] text-black font-bold h-btn border-2 border-black shadow-[3px_3px_0_1px_#000]" />
					<button className="w-fit p-[0_15px] text-black bg-pri hover:bg-sec font-bold h-btn border-2 border-black shadow-[3px_3px_0_1px_#000] hover:scale-110 ease-in-out duration-200">QUERO RECEBER</button>
				</section>
				<p className='font-normal lg:text-[14px]'>Made by <span className='font-bold'><a href="https://github.com/gianfiamoncini04" target='_blank' rel='noopener noreferrer' className="underline">GIAN</a></span> 🤙🏼<br />
				Can be access the source code <span className='font-bold'><a href="https://github.com/gianfiamoncini04/LayoutsByDesings/tree/main/tom-jazzschool-responsive" target='_blank' rel='noopener noreferrer' className="underline">here</a></span><br />
				Figma design used: <span className='font-bold'><a target='_blank' rel='noopener noreferrer' href="https://www.figma.com/file/kB0VWBvVO8GvtHqrR0gLhp/Tom's-Jazz-School?type=design&node-id=0-1&mode=design&t=uJP2hApIL6WDInYq-0" className="underline">JazzSchool</a></span></p>
			</footer>
		</>
	);
}