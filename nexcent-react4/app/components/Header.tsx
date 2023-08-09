"use client"

import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components'

const Header = styled.header`
  padding: 32px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: space-around;
  align-items: center;
`
const DivList = styled.div`
  display: flex;
  gap: 64px;
`
const DivButton = styled.div`
  display: flex;
  gap: 8px;
`
const Button = styled.button`
  width: 100;
  border-radius: 8px;
  padding: 8px 16px;
  cursor: pointer;
`


export default function Home() {
  return (
  <>
    <Header>
      <div>
        <Image src="/logo.png" width='150' height='150' alt="Nexcent" />
      </div>
      <DivList>
        <div className='hover:font-bold hover:text-green-600 cursor-pointer'>Home</div>
        <div className='hover:font-bold hover:text-green-600 cursor-pointer'>Service</div>
        <div className='hover:font-bold hover:text-green-600 cursor-pointer'>Feature</div>
        <div className='hover:font-bold hover:text-green-600 cursor-pointer'>Product</div>
        <div className='hover:font-bold hover:text-green-600 cursor-pointer'>Testimonial</div>
        <div className='hover:font-bold hover:text-green-600 cursor-pointer'>FAQ</div>
      </DivList>
      <DivButton>
        <Button className='text-green-600 font-semibold hover:bg-green-600 hover:text-white'>Login</Button>
        <Button className='text-white font-semibold bg-green-600 hover:bg-green-800'>Sign Up</Button>
      </DivButton>
    </Header>
  </>  
  )
}
