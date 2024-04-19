import Logo from "../assets/Logo-kirvano-ligth.svg";
import { UserPlus } from 'lucide-react'
import Button from '../ui/button.tsx';

export function Header() {
	return (
		<>
			<div className="flex flex-row justify-between items-center justify-items-center font-extrabold text-sm py-4 px-80 sticky top-0 w-full bg-white">
                <img src={Logo} alt="Kirvano" title="Kirvano"/>
                <div className="flex flex-row justify-center items-center gap-8">
				{["Início", "Funcionalidades", "Planos e taxas", "Ajuda"].map((name) => {
					return (
							<a href="/" key={name}>{name}</a>
                            );
                        })}
                </div>
                <div className="flex flexe-row justify-center items-center gap-8">
                    <a href="/" className="text-blue-700">Login</a>
                    <Button valor="Cadastre-se agora" iconleft={<UserPlus className="mr-2"/>}/>
                </div>
			</div>
		</>
	);
}
