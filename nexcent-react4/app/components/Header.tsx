"use client"

import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components'

const Headers = styled.header`
  display: flex;
  padding: 32px;
  justify-content: space-around;
  align-content: center;
  align-items: center;
`
const DivList = styled.div`
  display: flex;
  gap: 64px;
  font-size: 16px;
`
const DivButton = styled.div`
  display: flex;
  gap: 8px;
`
const Button = styled.button`
  border-radius: 8px;
  padding: 8px 16px;
  cursor: pointer;
`


export default function Header() {
  return (
  <>
    <Headers>
      <div>
        <Link href={'/'}><Image src="/logo.png" width='150' height='150' alt="Nexcent" /></Link>
      </div>
      <DivList>
        <div className='font-bold hover:text-green-600 hover:scale-125 ease-in-out duration-100 cursor-pointer'>Home</div>
        <div className='font-bold hover:text-green-600 hover:scale-125 ease-in-out duration-100 cursor-pointer'>Service</div>
        <div className='font-bold hover:text-green-600 hover:scale-125 ease-in-out duration-100 cursor-pointer'>Feature</div>
        <div className='font-bold hover:text-green-600 hover:scale-125 ease-in-out duration-100 cursor-pointer'>Product</div>
        <div className='font-bold hover:text-green-600 hover:scale-125 ease-in-out duration-100 cursor-pointer'>Testimonial</div>
        <div className='font-bold hover:text-green-600 hover:scale-125 ease-in-out duration-100 cursor-pointer'>FAQ</div>
      </DivList>
      <DivButton>
        <Button className='text-green-600 font-600 hover:bg-green-600 hover:text-white hover:scale-110 ease-in-out duration-100'>Login</Button>
        <Button className='text-white font-600 bg-green-600 hover:bg-green-800 hover:scale-110 ease-in-out duration-100'>Sign Up</Button>
      </DivButton>
    </Headers>
  </>  
  )
}
