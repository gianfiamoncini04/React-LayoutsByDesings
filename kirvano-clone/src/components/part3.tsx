import { dataTwo } from '../ui/data'
import image from '../assets/Ilustra.svg'

export function Part3() {
    return (
        <>
            <section className="bg-[#fafafa] text-white justify-center items-center px-80 py-28">
                <div className='bg-black rounded-3xl flex flex-row justify-between items-center py-20 px-20'>
                    <div className='flex flex-col gap-10'>
                        <h1 className='font-black text-5xl'>Criou algo fantástico?<br />Te ajudando a vender.</h1>
                        <div className='grid grid-cols-3 gap-x-2 gap-y-4'>
                            {dataTwo.map(([name, img]) => (
                                <>
                                    <p key={name} className='flex flex-row items-center gap-2 text-lg font-semibold tracking-wider'>
                                        <img src={img} alt={img} />
                                        {name}
                                    </p>
                                </>
                            ))}
                        </div>
                    </div>
                    <img src={image} alt={image} />
                </div>
            </section>
        </>
    )
}