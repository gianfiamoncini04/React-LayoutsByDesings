import logo from "../assets/logo-kirvano-dark.svg"
import googleplay from "../assets/Frame-1000000845.svg"
import appstore from "../assets/Group.svg"
import { dataFour, dataFive } from "../ui/data"

export function Footer() {
    return (
        <>
            <footer className="bg-black text-white px-80 py-28 flex flex-col justify-center items-stretch gap-20">
                <section className="flex flex-row justify-between items-start">
                    <div className="flex flex-col justify-center items-start gap-8">
                        <img src={logo} alt={logo} />
                        <p>Simples, confiável, lucrativa, <br />para pessoas ambiciosas</p>
                        <div className="flex flex-row gap-4 justify-start items-center">
                            {dataFour.map((icon) => (
                                <span className="bg-[#0d6ede] rounded-lg p-[10px] cursor-pointer">
                                    <img src={icon} alt={icon} />
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-8">
                        {dataFive.map((label) => (
                            <p className="font-medium">{label}</p>
                        ))}
                    </div>
                    <div className="flex flex-col justify-center items-start gap-y-4">
                        <p>Você pode baixar nosso app</p>
                        <div className="flex flex-row">
                            <img src={googleplay} alt={googleplay} />
                            <img src={appstore} alt={appstore} />
                        </div>
                    </div>
                </section>
                <section className="flex flex-row justify-between items-center border-t border-zinc-700 text-zinc-700">
                    <p className="pt-16">© 2024 Kirvano Pagamentos LTDA 48.582.146/0001-19 |  Todos os direitos reservados 💙</p>
                    <p className="underline cursor-pointer pt-16">Termos e política</p>
                </section>
            </footer>
        </>
    )
}