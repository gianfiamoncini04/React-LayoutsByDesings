"use client"

import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'

const PageTwo = styled.main `
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
    padding: 50px 0px;
`
const Section3 = styled.section `
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    gap: 30px 100px;
`
const Figure = styled.figure `
    display: flex;
    flex-direction: row;
    gap: 10px;
`


export default function Page2() {
  return (
  <>
    <PageTwo>
        <Section1>
            <Image src='/assets/rafiki.png' alt='Rafiki' width='400' height='400'/>
            <section className='flex flex-col gap-8'>
                <p className='font-bold opacity-80 text-4xl'>The unseen of spending three <br />years at Pixelgrade</p>
                <p className='opacity-70 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt perspiciatis <br />doloremque voluptates asperiores, quam eveniet voluptate laborum quasi placeat <br />possimus saepe perferendis.</p>
                <button className='text-white font-600 bg-green-600 hover:bg-green-800 rounded-md p-[8px_16px] w-1/4 hover:scale-110 ease-in-out duration-300'>Learn More</button>
            </section>
        </Section1>
        <Section2>
            <section className='flex flex-col gap-4'>
                <p className='font-bold opacity-80 text-4xl'>Helping a local<br/><span className='text-green-600'>business reinvent itself</span></p>
                <p className='opacity-70 text-sm'>We reached here with our hard work and dedication</p>   
            </section>
            <Section3 className="overflow-auto will-change-scroll">
                <Figure>
                    <Image src='/assets/page2/Icon.png' alt='' width='60' height='60' />
                    <section>
                        <p className='font-bold opacity-80 text-2xl'>2,245,341</p>
                        <p className='opacity-70 text-sm'>Members</p>
                    </section>
                </Figure>
                <Figure>
                    <Image src='/assets/page2/Icon-1.png' alt='' width='60' height='60' />
                    <section>
                        <p className='font-bold opacity-80 text-2xl'>46,328</p>
                        <p className='opacity-70 text-sm'>Clubs</p>
                    </section>
                </Figure>
                <Figure>
                    <Image src='/assets/page2/Icon-2.png' alt='' width='60' height='60' />
                    <section>
                        <p className='font-bold opacity-80 text-2xl'>828,867</p>
                        <p className='opacity-70 text-sm'>Event Bookings</p>
                    </section>
                </Figure>
                <Figure className='animate__tada'>
                    <Image src='/assets/page2/Icon-3.png' alt='' width='60' height='60' />
                    <section>
                        <p className='font-bold opacity-80 text-2xl'>1,926,436</p>
                        <p className='opacity-70 text-sm'>Payments</p>
                    </section>
                </Figure>
            </Section3>
        </Section2>
    </PageTwo>
  </>  
  )
}
