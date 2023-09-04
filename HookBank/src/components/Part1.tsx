import styled  from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPercent } from '@fortawesome/free-solid-svg-icons'


export default function Part1() {
    return (
        <>
            <Mains>
                <Section1>
                    <span className='shadow-[0_0_1000px_80px_#FFFFFF] absolute z-[-100] left-0'></span>
                    <p className='text-lg p-[5px_10px] w-fit bg-gradient-to-br from-[#272727] to-[#11101D] rounded-md'><span className='pr-2 drop-shadow-[0_0_10px_#00f6ff]'><FontAwesomeIcon icon={faPercent} style={{color: "#00f6ff"}}/></span>20% <span className='opacity-50'>DISCOUNT FOR </span>1 MONTH <span className='opacity-50'>ACCOUNT</span></p>
                    <p className='text-8xl font-bold'>The Next <br /><span className='text-transparent bg-clip-text bg-gradient-to-tl from-[#DEF9FA] to-[#33BBCF]'>Generation</span><br />Payment Method.</p>
                    <p className='opacity-70 w-[25%]'>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.</p>
                </Section1>
                <Section2>
                    <section className='flex flex-row items-center gap-2 border-r border-gray-500 pr-[160px]'>
                        <p className='text-4xl font-bold'>3800+</p>
                        <p className='text-xl text-transparent bg-clip-text bg-gradient-to-tl from-[#DEF9FA] to-[#33BBCF] font-bold'>USER ACTIVE</p>
                    </section>
                    <section className='flex flex-row items-center gap-2 border-r border-gray-500 pr-[160px]'>
                        <p className='text-4xl font-bold'>230+</p>
                        <p className='text-xl text-transparent bg-clip-text bg-gradient-to-tl from-[#DEF9FA] to-[#33BBCF] font-bold'>TRUSTED BY COMPANY</p>
                    </section>
                    <section className='flex flex-row items-center gap-2'>
                        <p className='text-4xl font-bold'>$230M+</p>
                        <p className='text-xl text-transparent bg-clip-text bg-gradient-to-tl from-[#DEF9FA] to-[#33BBCF] font-bold'>TRANSACTION</p>
                    </section>
                </Section2>
            </Mains>
        </>
    )
}

const Mains = styled.main`
    display: flex;
    flex-direction: column;
    gap: 150px;
    padding-top: 100px;
    height: 90vh;
`

const Section1 = styled.section`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 40px;
`
const Section2 = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    gap: 10px;
`