import recorrencia from "../assets/Recorrencia.gif"
import Button from "../ui/button"

export function Part4() {
    return (
        <>
            <section className="bg-black text-white">
                <div className="px-80 py-28 flex flex-row">
                    <div className="flex flex-col justify-center items-start gap-8">
                        <h1 className="text-5xl font-black">Pagamentos recorrentes facilitados</h1>
                        <p className="text-lg max-w-[500px]">Aumente suas vendas personalizando planos com diversas frequências, tudo para atender ás necessidades específicas dos seus clientes.</p>
                        <Button valor="Criar assinatura" class="text-lg py-4 px-8" />
                    </div>
                    <img src={recorrencia} alt={recorrencia} className="rounded-2xl"/>
                </div>
            </section>
        </>
    )
}