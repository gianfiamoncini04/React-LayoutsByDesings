import styled  from 'styled-components';

export default function Header(){
    return (
        <>
        <Headers>
                <a href="" target='_blank'>
            <Section1>
                    <img src="/assets/logo.png" alt="logo" />
                    <p className='font-semibold'>Hoo<span className='text-[#5CE1E6]'>Bank</span></p>
            </Section1>
                </a>
            <Section2>
                <p className='font-light opacity-70 cursor-pointer hover:scale-110 ease-in-out duration-100'>Home</p>
                <p className='font-light opacity-70 cursor-pointer hover:scale-110 ease-in-out duration-100'>About Us</p>
                <p className='font-light opacity-70 cursor-pointer hover:scale-110 ease-in-out duration-100'>Features</p>
                <p className='font-light opacity-70 cursor-pointer hover:scale-110 ease-in-out duration-100'>Solution</p>
            </Section2>
        </Headers>
    </>
  )
}

const Headers = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 30px 0px;
    font-size: 14pt;
    top: 0;
    z-index: 999;
`
const Section1 = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 0.5em;
    filter: drop-shadow(0 0 5px #00f6ff);
`
const Section2 = styled.section`
    display: flex;  
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 56px;
`