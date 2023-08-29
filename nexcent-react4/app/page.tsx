"use client"

import Header from './components/Header'
import Footer from './components/Footer'
import Page from './components/Page'
import Page1 from './components/Page1'
import Page2 from './components/Page2'
import Page3 from './components/Page3'
import Page4 from './components/Page4'
import { PageNotFoundError } from 'next/dist/shared/lib/utils'


export default function Home() {
  return (
  <>
      <Header/>
      <Page/>
      <Page1/>
      <Page2/>
      <Page3/>
      <Page4/>
      <Footer/>
  </>  
  )
}
