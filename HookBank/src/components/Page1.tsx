import styled  from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPercent } from '@fortawesome/free-solid-svg-icons'


export default function Page1() {
    return (
        <>
            <Mains>
                <Section1>
                    <p className='text-lg p-[5px_10px] w-fit bg-gradient-to-br from-[#272727] to-[#11101D] rounded-md'><span className='pr-2'><FontAwesomeIcon icon={faPercent} style={{color: "#00f6ff"}}/></span>20% <span className='opacity-50'>DISCOUNT FOR </span>1 MONTH <span className='opacity-50'>ACCOUNT</span></p>
                    <p className='text-8xl font-bold'>The Next <br /><span className='text-transparent bg-clip-text bg-gradient-to-tl from-[#DEF9FA] to-[#33BBCF]'>Generation</span><br />Payment Method.</p>
                    <p className='opacity-70 w-[25%]'>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.</p>
                </Section1>
                <Section2>

                </Section2>
            </Mains>
        </>
    )
}

const Mains = styled.main`
    display: flex;
    flex-direction: column;
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
`