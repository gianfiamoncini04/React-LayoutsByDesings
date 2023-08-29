"use client"

import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'

const PageFour = styled.main `
    display: flex;
    flex-direction: column;
    margin: 100px 0 0 0;
    gap: 80px;
    bottom: 0;
`
const Section1 = styled.section `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 25px
`
const Section2 = styled.section `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    text-align: center;
    background-color: #f5f7fa;
    padding: 50px 0px;
`


export default function Page4() {
  return (
  <>
    <PageFour>
        <Section1>
            <p className='text-4xl font-bold opacity-80'>Caring is the new marketing</p>
            <p className='text-sm font-semibold opacity-70 w-1/3 text-center'>The Nexcent blog is the best place to read about the latest membership insights, trends and more. See whos joining the community, read about how our community are increasing their membership income and lots more.​</p>
            <section className='flex flex-row justify-center items-center gap-20'>
                <section className='flex flex-col justify-center items-center hover:scale-110 ease-in-out duration-200 cursor-pointer'>
                    <Image src="/assets/photos/photo1.png" alt='sla' width="300" height="300"/>
                    <section className='bg-[#f5f7fa] shadow-[0_0_7px_3px_rgba(0,0,0,0.30)] rounded-md flex flex-col justify-center items-center gap-5 p-[0_10px] text-center w-[260px] h-[150px] bottom-[60px] relative'>
                        <p className='font-semibold'>Creating Streamlined Safeguarding Processes with OneRen</p>
                        <p className='text-green-600 font-semibold'>Read more &rarr;</p>
                    </section>
                </section>
                <section className='flex flex-col justify-center items-center hover:scale-110 ease-in-out duration-200 cursor-pointer'>
                    <Image src="/assets/photos/photo2.png" alt='sla' width="300" height="300"/>
                    <section className='bg-[#f5f7fa] shadow-[0_0_7px_3px_rgba(0,0,0,0.30)] rounded-md flex flex-col justify-center items-center gap-5 p-[0_10px] text-center w-[260px] h-[150px] bottom-[60px] relative'>
                        <p className='font-semibold'>What are your safeguarding responsibilities and how can you manage them?</p>
                        <p className='text-green-600 font-semibold'>Read more &rarr;</p>
                    </section>
                </section>
                <section className='flex flex-col justify-center items-center hover:scale-110 ease-in-out duration-200 cursor-pointer'>
                    <Image src="/assets/photos/photo3.png" alt='sla' width="300" height="300"/>
                    <section className='bg-[#f5f7fa] shadow-[0_0_7px_3px_rgba(0,0,0,0.30)] rounded-md flex flex-col justify-center items-center gap-5 p-[0_10px] text-center w-[260px] h-[150px] bottom-[60px] relative'>
                        <p className='font-semibold'>Revamping the Membership Model with Triathlon Australia</p>
                        <p className='text-green-600 font-semibold'>Read more &rarr;</p>
                    </section>
                </section>
            </section>
        </Section1>
        <Section2>
            <p className='text-4xl font-bold opacity-80'>Pellentesque suscipit <br />fringilla libero eu.</p>
            <button className='text-white font-600 bg-green-600 hover:bg-green-800 rounded-md p-[10px_20px] hover:scale-110 ease-in-out duration-300'>Get a Demo &rarr;</button>
        </Section2>
    </PageFour>    
  </>  
  )
}
