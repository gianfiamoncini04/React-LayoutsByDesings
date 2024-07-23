import { Key } from "react";
import { dataSix } from "../ui/data";
import Button from "../ui/button";
import { FiPhone } from "react-icons/fi";
import { GoDotFill } from "react-icons/go";

export function Part8() {
    return (
        <>
            <section className="flex flex-col gap-12 px-80 py-28">
                <div className="flex flex-col gap-2 justify-center items-center text-center break-normal">
                    <h1 className="font-black text-4xl">Planos e taxas</h1>
                    <p className="text-lg w-full max-w-[600px]">Ofereça uma experiência verdadeiramente exclusiva e atraente para os seus membros através das nossas ferramentas de personalização.</p>
                </div>
                <div className="grid grid-cols-2 gap-6  text-lg">
                    <div className="flex flex-row bg-[#171717] text-white rounded-xl p-8 gap-4">
                        <span className="flex flex-col justify-center items-start gap-4">
                            <h1 className="font-black text-2xl">Padrão</h1>
                            <p className="font-normal">Receba pagamentos de
                                forma simples, com uma plataforma sem custos ocultos.</p>
                            <Button class="w-full items-center justify-center !p-4" valor="Garantir taxa" />
                        </span>
                        <span className="flex flex-col max-w-48 w-full h-full justify-center items-center bg-[#272727] text-white text-lg rounded-lg">
                            <strong>4,9% + R$2,00</strong>
                            <p>por venda aprovada</p>
                        </span>
                    </div>
                    <div className="flex flex-col border border-zinc-300 rounded-xl p-8 gap-4">
                        <span className="font-bold flex items-center gap-2">
                            <GoDotFill color="#147df5" />
                            Grandes contas
                        </span>
                        <p>Se você tem uma operação diferenciada com volume de vendas acima de 100k por mês, podemos ajudá-lo com Condições especiais.</p>
                        <Button class="bg-[#e6e7ea] !text-black text-base justify-center inline-flex gap-2 py-4" iconleft={<FiPhone />} valor="Falar com um especialista" />
                    </div>
                </div>
                <div className="grid grid-cols-3">
                    {dataSix.map(([img, addInfo, style, title, topics], index) => (
                        <div key={index}>
                            <div className="flex -space-x-4 ring-1 ring-white">
                                {Array.from(img).map((a: string, index: Key) => (
                                    <img key={index} src={a} alt={a} className={`${style}`} />
                                ))}
                            </div>
                            {addInfo && <><h2>{addInfo}</h2></>}
                            <h1>{title}</h1>
                            <p>{topics}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}