"use client"

import Header from "./components/Header"
import Sec1 from "./components/Sec1"
import Sec2 from "./components/Sec2"
import Footer from "./components/Footer"

export default function Home() {
  return (
      <>
      <main className="m-[0_100px] lg:m-[0_20px] text-black">
        <Header />
        <Sec1 />
        <Sec2 />
        <Footer />
      </main>
      </>
  )
}
