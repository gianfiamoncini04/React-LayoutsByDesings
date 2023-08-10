"use client"

import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons' 
import { faLinkedin } from '@fortawesome/free-brands-svg-icons' 
import { faSquareTwitter } from '@fortawesome/free-brands-svg-icons' 
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons' 


const Footers = styled.footer`
  display: flex;
  padding: 32px;
  justify-content: space-around;
  align-content: center;
  align-items: center;
`
const Div1 = styled.div`
  display: flex;
`
const Div2 = styled.div`
  display: flex;
`
const Div3 = styled.div`
  display: flex;
`
const Div4 = styled.div`
  display: flex;
`


export default function Footer() {
  return (
  <>
    <Footers>
        <Div1>
            <Link href={'/'}><Image src="/logo.png" width='150' height='150' alt="Nexcent" /></Link>
            <p>Copyright © 2020 Nexcent ltd. <br /> All rights reserved</p>
            <div className=''>
                <Link href={'https://instagram.com/nexcentlmtd'}><FontAwesomeIcon icon={faSquareInstagram} /></Link>
                <Link href={'https://linkedin.com/nexcentlmtd'}><FontAwesomeIcon icon={faLinkedin} /></Link>
                <Link href={'https://twitter.com/nexcentlmtd'}><FontAwesomeIcon icon={faSquareTwitter} /></Link>
                <Link href={'https://youtube.com/nexcentlmtd'}><FontAwesomeIcon icon={faSquareFacebook} /></Link>
            </div>
        </Div1>
        <Div2></Div2>
        <Div3></Div3>
        <Div4></Div4>
    </Footers>
  </>  
  )
}
