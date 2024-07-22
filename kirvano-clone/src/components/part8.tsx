import { Key } from "react";
import { dataSix } from "../ui/data";
import Button from "../ui/button";
import { FiPhone } from "react-icons/fi";

export function Part8() {
    return (
        <>
            <section className="px-80 py-28">
                <div className="flex flex-col gap-8 justify-center items-center">
                    <h1 className="font-black text-2xl">Planos e taxas</h1>
                    <p className="text-lg">Ofereça uma experiência verdadeiramente exclusiva e atraente para os seus membros através das nossas ferramentas de personalização.</p>
                </div>
                <div className="grid grid-cols-2">
                    <div className="flex flex-row">
                        <span>
                            <h1>Padrão</h1>
                            <p>Receba pagamentos de
                            forma simples, com uma plataforma sem custos ocultos.</p>
                            <Button valor="Garantir taxa"/>
                        </span>
                        <span>
                            <strong>4,9% + R$2,00</strong>
                            <p>por venda aprovada</p>
                        </span>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-bold">Grandes contas</span>
                        <p>Se você tem uma operação diferenciada com volume de vendas acima de 100k por mês, podemos ajudá-lo com Condições especiais.</p>
                        <Button class="bg-[#e6e7ea] !text-black" iconleft={<FiPhone />} valor="Falar com um especialista"/>
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