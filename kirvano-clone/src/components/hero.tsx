import Hero from "../assets/Group-427318941.svg"
import { Button } from "../ui/button.tsx"
import { LogIn } from "lucide-react"

export function Hero() {
	return (
		<>
			<section className="min-h-[90vh]">
				<section>
					<h1>dasda</h1>
					<p></p>
					<Button valor="Adasd" iconleft={<LogIn color="#ffffff" />} />
				</section>
				<img src={Hero} alt="logo-hero"/>
			</section>
		</>
	);
}
