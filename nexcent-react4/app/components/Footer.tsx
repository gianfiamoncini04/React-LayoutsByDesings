"use client"

import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareInstagram, faLinkedin, faSquareTwitter, faSquareFacebook } from '@fortawesome/free-brands-svg-icons' 
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons' 


const Footers = styled.footer`
  display: flex;
  padding: 64px 128px;
  justify-content: space-around;
  align-content: center;
  position: relative;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #263238;
  color: white;
  font-size: 14px;
}
`
const Div1 = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-content: center;
    justify-content: space-between;
    align-items: flex-start;
    padding-right: 125px;
`
const Div2 = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-content: center;
    justify-content: space-between;
    align-items: flex-start;
`
const Div3 = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-content: center;
    justify-content: space-between;
    align-items: flex-start;
`
const Div4 = styled.div`
    display: flex;
    flex-direction: column;
    gap: 64px;
    align-content: center;
    align-items: flex-start;
`


export default function Footer() {
  return (
  <>
    <Footers>
        <Div1>
            <Link href={'/'}><Image src="/logo-white.png" width='150' height='150' alt="Nexcent" /></Link>
            <p className='opacity-80'>Copyright © 2020 Nexcent ltd. <br /> All rights reserved</p>
            <div className='display-flex space-x-5'>
                <Link href={'https://instagram.com/nexcentlmtd'}><FontAwesomeIcon icon={faSquareInstagram} className='h-8 w-8 hover:scale-125 ease-in-out duration-150'/></Link>
                <Link href={'https://linkedin.com/nexcentlmtd'}><FontAwesomeIcon icon={faLinkedin} className='h-8 w-8 hover:scale-125 ease-in-out duration-150'/></Link>
                <Link href={'https://twitter.com/nexcentlmtd'}><FontAwesomeIcon icon={faSquareTwitter} className='h-8 w-8 hover:scale-125 ease-in-out duration-150'/></Link>
                <Link href={'https://youtube.com/nexcentlmtd'}><FontAwesomeIcon icon={faSquareFacebook} className='h-8 w-8 hover:scale-125 ease-in-out duration-150'/></Link>
            </div>
        </Div1>
        <Div2>
            <h1 className='text-2xl font-bold pb-4'>Company</h1>
            <h2 className='opacity-70 hover:opacity-90 cursor-pointer'>About us</h2>
            <h2 className='opacity-70 hover:opacity-90 cursor-pointer'>Blog</h2>
            <h2 className='opacity-70 hover:opacity-90 cursor-pointer'>Contact us</h2>
            <h2 className='opacity-70 hover:opacity-90 cursor-pointer'>Pricing</h2>
            <h2 className='opacity-70 hover:opacity-90 cursor-pointer'>Testimoniais</h2>
        </Div2>
        <Div3>
            <h1 className='text-2xl font-bold pb-4'>Support</h1>
            <h2 className='opacity-70 hover:opacity-90 cursor-pointer'>Help Center</h2>
            <h2 className='opacity-70 hover:opacity-90 cursor-pointer'>Terms of service</h2>
            <h2 className='opacity-70 hover:opacity-90 cursor-pointer'>Legal</h2>
            <h2 className='opacity-70 hover:opacity-90 cursor-pointer'>Privacy policy</h2>
            <h2 className='opacity-70 hover:opacity-90 cursor-pointer'>Status</h2>
        </Div3>
        <Div4>
            <h1 className='text-2xl font-bold'>Stay up to date</h1>
            <label htmlFor="email" className='relative block'>
                <span className='absolute inset-y-0 right-0 flex items-center pr-3'>
                    <FontAwesomeIcon icon={faPaperPlane} className='cursor-pointer'/>
                </span>
                <input className='w-full bg-[#515b60] rounded py-2 pl-4 pr-10 focus:outline-none placeholder:text-sm' type="email" name="email" id="email" placeholder='Your email address here'/>
            </label>
        </Div4>
    </Footers>
  </>  
  )
}
