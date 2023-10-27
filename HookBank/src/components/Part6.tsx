import styled  from 'styled-components';

export default function Part6() {
    return (
        <>
            <Mains>
                <Section1>
                    <img className='w-[250px]' src="/assets/brand1.png" alt="airbnb" />
                    <img className='w-[250px]' src="/assets/brand2.png" alt="binance" />
                    <img className='w-[250px]' src="/assets/brand3.png" alt="coinbase" />
                    <img className='w-[250px]' src="/assets/brand4.png" alt="dropbox" />
                </Section1>
                <Section2 className='rounded-3xl bg-gradient-to-bl from-[#272727] to-[#11101D]'>
                    <section className='flex flex-col gap-5'>
                        <p className='text-6xl font-bold '>Let’s try our service now!</p>
                        <p className='text-lg font-normal opacity-70'>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
                    </section>
                    <button className='w-fit p-[15px] font-bold drop-shadow-[0_0_5px_#00f6ff] bg-gradient-to-br from-[#DEF9FA] to-[#33BBCF] text-black rounded-md hover:scale-125 ease-in-out duration-200'>Get Started</button>
                </Section2>
            </Mains>
        </>
    )
}

const Mains = styled.main`
    display: flex;
    flex-direction: column;
    gap: 40px;
    margin-top: 150px;
`
    
const Section1 = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    align-content: center;
 `
const Section2 = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    align-content: center;
    padding: 70px 0px;
`