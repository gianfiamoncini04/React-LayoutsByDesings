"use client"

import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'


const PageOne = styled.main`
  margin: 40px 0px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  text-align: center;
`
const Section1 = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 128px;
`
const Section2 = styled.section`
  display: flex;  
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 128px;
`


export default function Page1() {
  return (
  <>
    <PageOne>
      <section className='flex-col flex gap-4'>
        <p className='text-4xl font-bold opacity-70'>Our Clients</p>
        <p className='text-m opacity-60'>We have been working with some Fortune 500+ clients</p>
      </section>
      <Section1>
        <Image src='/assets/Logo.png' alt='logo' width='40' height='40'/>
        <Image src='/assets/Logo-1.png' alt='logo' width='40' height='40'/>
        <Image src='/assets/Logo-2.png' alt='logo' width='40' height='40'/>
        <Image src='/assets/Logo-3.png' alt='logo' width='40' height='40'/>
        <Image src='/assets/Logo-4.png' alt='logo' width='40' height='40'/>
        <Image src='/assets/Logo-5.png' alt='logo' width='40' height='40'/>
        <Image src='/assets/Logo-6.png' alt='logo' width='40' height='40'/>
      </Section1>
      <section className='flex-col flex gap-4'>
        <p className='text-4xl font-bold opacity-70'>Manage your entire community <br/> in a single system</p>
        <p className='text-m opacity-60'>Who is Nextcent suitable for?</p>
      </section>
      <Section2>
        <section className='flex flex-col items-center justify-center gap-2 w-1/5 shadow-[0_0_5px_0_rgba(0,0,0,0.30)] p-8 rounded-md hover:scale-110 ease-in-out duration-300 cursor-pointer'>
          <Image src='/assets/Icon.png' alt='logo' width='50' height='50'/>
          <p className='font-bold text-2xl opacity-80'>Membership <br />Organisations</p>
          <p>Our membership management software provides full automation of membership renewals and payments</p>
        </section>
        <section className='flex flex-col items-center justify-center gap-2 w-1/5 shadow-[0_0_5px_0_rgba(0,0,0,0.30)] p-8 rounded-md hover:scale-110 ease-in-out duration-300 cursor-pointer'>
          <Image src='/assets/Icon-1.png' alt='logo' width='50' height='50'/>
          <p className='font-bold text-2xl opacity-80'>National <br />Associations</p>
          <p>Our membership management software provides full automation of membership renewals and payments</p>
        </section>
        <section className='flex flex-col items-center justify-center gap-2 w-1/5 shadow-[0_0_5px_0_rgba(0,0,0,0.30)] p-8 rounded-md hover:scale-110 ease-in-out duration-300 cursor-pointer'>
          <Image src='/assets/Icon-2.png' alt='logo' width='50' height='50'/>
          <p className='font-bold text-2xl opacity-80'>Clubs And <br />Groups</p>
          <p>Our membership management software provides full automation of membership renewals and payments</p>
        </section>
      </Section2>
    </PageOne>
  </>  
  )
}
