import Hero from './components/hero'
import Part1 from './components/part1'
import Part2 from './components/part2'
import Part3 from './components/part3'
import Footer from './components/footer'

export default function Home() {
  return (
    <>
    <main className="min-h-screen">
      <Hero />
      <Part1 />
      <Part2 />
      <Part3 />
      <Footer />
    </main>
    </>
  )
}
