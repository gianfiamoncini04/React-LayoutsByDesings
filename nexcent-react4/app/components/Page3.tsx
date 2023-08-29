"use client"

import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'

const PageThree = styled.main `
    display: flex;
    flex-direction: column;
    margin: 100px 0;
    gap: 80px;
`
const Section1 = styled.section `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 100px
`
const Section2 = styled.section `
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 100px;
    background-color: #f5f7fa;
    padding: 25px 0px;
`


export default function Page3() {
  return (
  <>
    <PageThree>
        <Section1>
            <Image src="/assets/mobile-login/pana.png" alt='Ilustratios' width="400" height="400"/>
            <section className='flex flex-col gap-8 w-1/3'>
                <p className='font-bold opacity-80 text-4xl'>How to design your site footer like <br />we did</p>
                <p className='opacity-70 text-sm'>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
                <button className='text-white font-600 bg-green-600 hover:bg-green-800 rounded-md p-[12px_0px] w-[150px] hover:scale-110 ease-in-out duration-300'>Learn More</button>
            </section>
        </Section1>
        <Section2>
            <Image src="/assets/tesla.png" alt='Tesla' width="350" height="350"/>
            <section className='flex flex-col gap-3 w-1/3'>
                <p className='opacity-70 text-sm'>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                <p className='text-green-600 font-semibold'>Tim Smith</p>
                <p className='opacity-70 text-sm'>British Dragon Boat Racing Association</p>
                <section className='flex flex-row gap-8 justify-start items-center'>
                    <Image src="/assets/Logo-1.png" alt='Tesla' width="40" height="40"/>
                    <Image src="/assets/Logo-2.png" alt='Tesla' width="40" height="40"/>
                    <Image src="/assets/Logo-3.png" alt='Tesla' width="40" height="40"/>
                    <Image src="/assets/Logo-4.png" alt='Tesla' width="40" height="40"/>
                    <Image src="/assets/Logo-5.png" alt='Tesla' width="40" height="40"/>
                    <Image src="/assets/Logo-6.png" alt='Tesla' width="40" height="40"/>
                    <p className='text-green-600 font-semibold hover:scale-110 ease-in-out duration-300 cursor-pointer'>Meet all customers &rarr;</p>
                </section>
            </section>
        </Section2>
    </PageThree>    
  </>  
  )
}
