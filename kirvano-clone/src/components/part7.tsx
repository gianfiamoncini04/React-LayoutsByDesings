import img1 from "../assets/icones-master-kirvano-2.svg"
import img2 from "../assets/icones-master-kirvano-1.svg"
import robo from "../assets/Group-427318930.svg"
import Button from "../ui/button"
import {ArrowRightSquare} from "lucide-react"

export function Part7() {
    return (
        <>
            <section className="bg-[#fafafa] text-black px-80 py-28 flex flex-col gap-10 justify-center items-center">
                <div className="flex flex-col justify-center items-center gap-6">
                    <h1 className="font-black text-5xl">Na Kirvano você pode mais</h1>
                    <p className="text-xl">Com nossa plataforma você tem total controle do seu negócio.</p>
                </div>
                <div className="grid grid-cols-3 gap-8 max-w-[70%]">
                    {[[img1, "Upsell, downsell, cross sell", "Aproveite ao máximo cada oportunidade de venda e aumente seus lucros.", "col-span-2"], [img2, "Recuperador de vendas", "Envie mensagens relevantes para seus clientes, aumentando a chance de conversão.", "col-span-1"]]
                        .map(([img, title, info, pos]) => (
                            <div key={img} className={`flex flex-col justify-center items-start p-8 border border-zinc-200 bg-white rounded-xl ${pos}`}>
                                <img src={img} alt={img} />
                                <h3>{title}</h3>
                                <p>{info}</p>
                            </div>
                        ))}
                </div>
                <div className="text-white bg-[#171717] grid grid-cols-2 rounded-xl max-w-[70%]">
                    <div className="flex flex-col justify-center items-start">
                        <h2 className="font-black text-3xl">Comece de forma gratuita</h2>
                        <p className="text-lg">Venda seus produtos e serviços digitais e receba através da Kirvano.</p>
                        <Button iconleft={<ArrowRightSquare />} valor="Cadastra-se" class="gap-2 text-lg py-5"/>
                    </div>
                    <img src={robo} alt={robo} />
                </div>
            </section>
        </>
    )
}