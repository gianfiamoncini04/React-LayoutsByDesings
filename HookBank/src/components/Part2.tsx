import styled  from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faPaperPlane, faShieldHalved } from '@fortawesome/free-solid-svg-icons'


export default function Part1() {
    return (
        <>
            <Mains>
                <Section1>
                    <span className='shadow-[0_0_1000px_200px_#FFFFFF35] absolute z-[-100] left-0'></span>
                    <p className='text-5xl font-bold'>You do the business, we’ll handle the money.</p>
                    <p className='text-md opacity-70'>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
                    <button className='w-fit p-[15px] font-bold drop-shadow-[0_0_5px_#00f6ff] bg-gradient-to-br from-[#DEF9FA] to-[#33BBCF] text-black rounded-md hover:scale-125 ease-in-out duration-200'>Get Started</button>
                </Section1>
                <Section2>
                    <section className='flex flex-row items-center justify-center gap-5'>
                        <span className='drop-shadow-[0_0_10px_#00f6ff] text-5xl'><FontAwesomeIcon icon={faStar} style={{color: "#00f6ff"}}/></span>
                        <p className='text-md font-bold p-5 w-96 hover:scale-110 ease-in-out duration-300 cursor-pointer'>
                            Rewards<br />
                            <span className='text-sm font-normal opacity-70'>The best credit cards offer some tantalizing combinations of promotions and prizes</span>
                        </p>
                    </section>
                    <section className='flex flex-row items-center justify-center gap-5'>
                        <span className='drop-shadow-[0_0_10px_#00f6ff] text-5xl'><FontAwesomeIcon icon={faShieldHalved} style={{color: "#00f6ff"}}/></span>
                        <p className='text-md font-bold p-5 w-96 rounded-3xl bg-gradient-to-br from-[#272727] to-[#11101D] hover:scale-110 ease-in-out duration-300 cursor-pointer'>
                            100% Secured<br />
                            <span className='text-sm font-normal opacity-70'>We take proactive steps make sure your information and transactions are secure.</span>
                        </p>
                    </section>
                    <section className='flex flex-row items-center justify-center gap-5'>
                        <span className='drop-shadow-[0_0_10px_#00f6ff] text-5xl'><FontAwesomeIcon icon={faPaperPlane} style={{color: "#00f6ff"}}/></span>
                        <p className='text-md font-bold p-5 w-96 hover:scale-110 ease-in-out duration-300 cursor-pointer'>
                            Balance Transfer<br />
                            <span className='text-sm font-normal opacity-70'>A balance transfer credit card can save you a lot of money in interest charges.</span>
                        </p>
                    </section>
                </Section2>
            </Mains>
        </>
    )
}

const Mains = styled.main`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 150px;
`

const Section1 = styled.section`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    width: 40%;
    gap: 30px;
`
const Section2 = styled.section`
    display: flex;
    flex-direction: column;
    gap: 15px;
`