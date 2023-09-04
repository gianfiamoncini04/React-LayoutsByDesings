import styled  from 'styled-components';

export default function Part3() {
    return (
        <>
            <Mains>
                <Section1>
                    <img src="/public/assets/part3.png" alt="part3" width="800px" className='drop-shadow-[0_0_30px_#FFFFFF40]'/>
                </Section1>
                    <span className='shadow-[0_0_1000px_200px_#FFFFFF35] absolute z-[-100] left-0'></span>
                <Section2>
                    <p className='text-6xl font-bold leading-[6rem]'>Easily control your billing & invoicing.</p>
                    <p className='text-lg opacity-70 leading-[2rem]'>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
                    <section className='flex flex-row gap-10'>
                        <img src="/public/assets/appstore.png" alt="appstore" />
                        <img src="/public/assets/googleplay.png" alt="googleplay" />
                    </section>
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
    width: 50%;
`
const Section2 = styled.section`
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 40%;
`