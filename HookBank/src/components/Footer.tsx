import styled  from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faLinkedin, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons' 

export default function Footer(){
  return (
    <>
        <Footers>
            <Section1>
                <section className='flex flex-col gap-5'>
                    <section className='flex flex-row gap-[0.5em]'>
                        <section>
                            <img src="/assets/logo.png" alt="logo" className='w-[70px]'/>
                        </section>
                        <p className='font-semibold text-[40pt]'>Hoo<span className='text-[#5CE1E6]'>Bank</span></p>
                    </section>
                    <p className='text-sm opacity-70'>A new way to make the payments easy, <br />reliable and secure.</p>
                </section>
                <section className='flex flex-col gap-3'>
                    <p className='text-md pb-[15px] hover:opacity-75 cursor-pointer'>Usefull Links</p>
                    <p className='text-sm opacity-70 hover:opacity-90 cursor-pointer'>Content</p>
                    <p className='text-sm opacity-70 hover:opacity-90 cursor-pointer'>How it Works</p>
                    <p className='text-sm opacity-70 hover:opacity-90 cursor-pointer'>Create</p>
                    <p className='text-sm opacity-70 hover:opacity-90 cursor-pointer'>Explore</p>
                    <p className='text-sm opacity-70 hover:opacity-90 cursor-pointer'>Terms & Services</p>
                </section>
                <section className='flex flex-col gap-3'>
                    <p className='text-md pb-[15px] hover:opacity-75 cursor-pointer'>Community</p>
                    <p className='text-sm opacity-70 hover:opacity-90 cursor-pointer'>Help Center</p>
                    <p className='text-sm opacity-70 hover:opacity-90 cursor-pointer'>Partners</p>
                    <p className='text-sm opacity-70 hover:opacity-90 cursor-pointer'>Suggestions</p>
                    <p className='text-sm opacity-70 hover:opacity-90 cursor-pointer'>Blog</p>
                    <p className='text-sm opacity-70 hover:opacity-90 cursor-pointer'>Newsletters</p>
                </section>
                <section className='flex flex-col gap-3'>
                    <p className='text-md pb-[15px] hover:opacity-75 cursor-pointer'>Partner</p>
                    <p className='text-sm opacity-70 hover:opacity-90 cursor-pointer'>Our Partner</p>
                    <p className='text-sm opacity-70 hover:opacity-90 cursor-pointer'>Become a Partner</p>
                    <p className='font-light'>Made by <span className='font-bold'><a href="https://github.com/gianfiamoncini04" target='_blank' rel='noopener noreferrer'>GIAN</a></span> 🤙🏼<br />
                Can be access the source code <span className='font-bold'><a href="https://github.com/gianfiamoncini04/LayoutsByDesings/tree/main/HookBank" target='_blank' rel='noopener noreferrer'>here</a></span>. <br />
                Figma design used: <span className='font-bold'><a target='_blank' rel='noopener noreferrer' href="https://www.figma.com/file/p2pWtGxKG9HMY4GRBecdnt/HooBank?type=design&node-id=310%3A486&mode=design&t=JhZ5NORF76SC7iW6-1">HooBank</a></span></p>
                </section>
            </Section1>
            <hr/>
            <Section2>
                <p className='text-sm opacity-70'>Copyright &copy; &nbsp; 2021 HooBank. All Rights Reserved.</p>
                <section className='flex flex-row gap-5'>
                    <a href={'https://instagram.com/hoobank'}><FontAwesomeIcon icon={faInstagram} className='h-8 w-8 hover:scale-125 ease-in-out duration-150'/></a>
                    <a href={'https://youtube.com/hoobank'}><FontAwesomeIcon icon={faFacebook} className='h-8 w-8 hover:scale-125 ease-in-out duration-150'/></a>
                    <a href={'https://twitter.com/hoobank'}><FontAwesomeIcon icon={faTwitter} className='h-8 w-8 hover:scale-125 ease-in-out duration-150'/></a>
                    <a href={'https://linkedin.com/hoobank'}><FontAwesomeIcon icon={faLinkedin} className='h-8 w-8 hover:scale-125 ease-in-out duration-150'/></a>
                </section>
            </Section2>
        </Footers>
    </>
  )
}

const Footers = styled.footer`
    display: flex;
    flex-direction: column;
    gap: 40px;
    position: relative;
    width: 100%;
    bottom: 0;
    left: 0;
    margin-top: 150px;
    margin-bottom: 15px;
`

const Section1 = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    gap: 0.5em;
`
const Section2 = styled.section`
    display: flex;  
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`