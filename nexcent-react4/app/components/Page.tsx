"use client"

import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'

const Pages = styled.main `
    display: flex;
    flex-direction: row;
    justify-content: center;
    place-items: center;
    gap: 200px;
    background-color: #f5f7fa;
    height: 90vh;
`


export default function Page() {
  return (
  <>
    <Pages>
        <section className='flex flex-col gap-8'>
            <p className='font-bold opacity-80 text-7xl'>Lessons and insights <br /><span className='text-green-600'>from 8 years</span></p>
            <p className='opacity-70 text-sm'>Where to grow your business as a photographer: site or social media?</p>
            <button className='text-white font-600 bg-green-600 hover:bg-green-800 rounded-md p-[12px_0px] w-1/5 hover:scale-110 ease-in-out duration-300'>Register</button>
        </section>
        <section>
            <Image src="/assets/Illustration.png" alt='Ilustratios' width="450" height="450"/>
        </section>
    </Pages>
  </>  
  )
}