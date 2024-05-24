import image from "../assets/mockup.gif"

export function Part6() {
    return (
        <>
            <section className="px-80 py-28 bg-[#171717] text-white flex flex-col justify-center items-center gap-20">
                <div className="text-center flex flex-col justify-center items-center gap-10">
                    <h1 className="max-w-[70%] text-6xl font-black">Monte seu negócio digital sem um produto própio</h1>
                    <p className="max-w-[40%] text-lg">Promova produtos de terceiros através de links de afiliaçãoe receba uma comissão por cada venda realizada.</p>
                </div>
                <img src={image} alt={image} className="rounded-2xl"/>
            </section>
        </>
    )
}