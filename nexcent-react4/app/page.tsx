"use client"

import Header from './components/Header'
import Footer from './components/Footer'
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import { PageNotFoundError } from 'next/dist/shared/lib/utils'


export default function Home() {
  return (
  <>
      <Header/>
      <Page1/>
      <Page2/>
      <Footer/>
  </>  
  )
}
