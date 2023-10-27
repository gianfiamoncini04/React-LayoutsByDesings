import styled  from 'styled-components';

export default function Part4() {
    return (
        <>
            <Mains>
                <Section1>
                    <p className='text-6xl font-bold leading-[6rem]'>Find a better card deal in few easy steps.</p>
                    <p className='text-lg opacity-70 leading-[2rem]'>Arcu tortor, purus in mattis at sed integer faucibus. Aliquet quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.</p>
                    <button className='w-fit p-[15px] font-bold drop-shadow-[0_0_5px_#00f6ff] bg-gradient-to-br from-[#DEF9FA] to-[#33BBCF] text-black rounded-md hover:scale-125 ease-in-out duration-200'>Get Started</button>
                </Section1>
                <Section2>
                    <img src="/assets/part4.png" alt="part4" width="750px" className='drop-shadow-[0_0_30px_#FFFFFF40]'/>
                </Section2>
            </Mains>
        </>
    )
}

const Mains = styled.main`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 150px;
`
    
const Section1 = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
    width: 45%;
`
const Section2 = styled.section`
    display: flex;
    width: 50%;
`