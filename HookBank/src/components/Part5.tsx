import styled  from 'styled-components';

export default function Part5() {
    return (
        <>
            <Mains>
                <span className='shadow-[0_0_1000px_200px_#3e77b650] absolute z-[-100] right-0'></span>
                <Section1>
                    <p className='font-bold text-4xl w-[400px]'>What people are saying about us</p>
                    <p className='font-normal text-md opacity-70 w-[400px]'>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
                </Section1>
                <Section2>
                    <section className='text-md font-bold p-8 w-[20%] flex flex-col items-start justify-center gap-10 rounded-3xl bg-gradient-to-br from-[#272727] to-[#11101D] hover:scale-110 ease-in-out duration-300 cursor-pointer'>
                        <img src="/public/assets/aspas.png" alt="aspas" />
                        <p className='font-normal'>Money is only a tool. It will take you wherever you wish, but it will not replace you as the driver.</p>
                        <section className='flex flex-row items-center justify-start gap-4'>
                            <img src="/public/assets/Image.png" alt="" />
                            <p className='font-normal'>Herman Jensen <br /><span className='text-sm opacity-70'>Founder & Leader</span></p>
                        </section>
                    </section>
                    <section className='text-md font-bold p-8 w-[20%] flex flex-col items-start justify-center gap-10 rounded-3xl bg-gradient-to-br from-[#272727] to-[#11101D] hover:scale-110 ease-in-out duration-300 cursor-pointer'>
                        <img src="/public/assets/aspas.png" alt="aspas" />
                        <p className='font-normal'>Money makes your life easier. If you're lucky to have it, you're lucky.</p>
                        <section className='flex flex-row items-center justify-start gap-4'>
                            <img src="/public/assets/Image-1.png" alt="" />
                            <p className='font-normal'>Steve Mark <br /><span className='text-sm opacity-70'>Founder & Leader</span></p>
                        </section>
                    </section>
                    <section className='text-md font-bold p-8 w-[20%] flex flex-col items-start justify-center gap-10 rounded-3xl bg-gradient-to-br from-[#272727] to-[#11101D] hover:scale-110 ease-in-out duration-300 cursor-pointer'>
                        <img src="/public/assets/aspas.png" alt="aspas" />
                        <p className='font-normal'>It is usually people in the money business, finance, and international trade that are really rich.</p>
                        <section className='flex flex-row items-center justify-start gap-4'>
                            <img src="/public/assets/Image-2.png" alt="" />
                            <p className='font-normal'>Kenn Gallagher <br /><span className='text-sm opacity-70'>Founder & Leader</span></p>
                        </section>
                    </section>
                </Section2>
            </Mains>
        </>
    )
}

const Mains = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 50px;
    margin-top: 150px;
`
    
const Section1 = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 400px;
`
const Section2 = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    gap: 100px;
`