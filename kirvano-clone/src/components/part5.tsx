import image from "../assets/Conversao_de_checkout-3.svg"
import img1 from "../assets/Icons-1.svg"
import img2 from "../assets/Icons-1-2.svg"
import img3 from "../assets/Vector-2.svg"
import check from "../assets/check-icon-kirvano.svg"
import { dataThree } from "../ui/dataThree"

export function Part5() {
    return (
        <>
            <section className="bg-[#fafafa] text-black flex flex-col px-80 py-28">
                <div className="flex flex-row justify-center items-center gap-20">
                    <div className="flex flex-col justify-between items-start">
                        <h1>Recuperador de vendas nativo</h1>
                        <p>Evite que seu cliente esqueça de pagar em dia, nosso recuperador envia mensagens relevantes para os seus clientes, o que aumenta as chances de conversão.</p>
                        <div className="flex flex-row justify-center items-center gap-8">
                            {[["Email", img1], ["SMS", img2], ["WhatsApp", img3]].map(([name, img]) => (
                                <>
                                    <p key={name} className='flex flex-row items-center gap-2 text-lg font-semibold tracking-wider'>
                                        <img src={img} alt={img} />
                                        {name}
                                    </p>
                                </>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-4">
                        {dataThree.map(([name, color, date]) => (
                            <>
                                <div key={name}>
                                    <div className={`rounded-full ${color}`}>
                                        <img src={check} alt={check} />
                                    </div>
                                    <p>
                                        {name}
                                        <strong>{date}</strong>
                                    </p>
                                </div>
                            </>
                        ))}
                    </div>
                </div>
                <div className="flex flex-row justify-between items-center">
                    <img src={image} alt={image} />
                    <div className="flex flex-col items-start">
                        <h1>Alta taxa de conversão</h1>
                        <p>Nosso sistema de checkout rápido e eficiente facilita a compra para todos os clientes, auemntando a taxa de conversão de todos os métodos de pagamento</p>
                    </div>
                </div>
            </section>
        </>
    )
}