import heroLogo from "../assets/Group-427318941.svg"
import Button from "../ui/button.tsx"
import { ArrowRightSquare } from "lucide-react"

export function Hero() {
	return (
		<>
			<section className="min-h-[80vh] flex flex-row justify-between items-center px-80">
				<section className="flex flex-col justify-center items-start w-1/2">
					<strong className="font-satbold  text-5xl leading-tight pb-4">Simples, <br />confiável, lucrativa, <br />para pessoas ambiciosas</strong>
					<p className="text-xl pb-10">Crie produtos e serviços digitais como e-books, cursos online, mentorias — e venda com a menor taxa do mercado.</p>
					<Button class="py-4 px-5 text-lg tracking-4" valor="Cadastra-se agora" iconright={<ArrowRightSquare className="ml-2" color="#ffffff" />} />
				</section>
				<img src={heroLogo} alt="logo-hero"/>
			</section>
		</>
	);
}
