import Navbar     from './components/Navbar'
import Hero       from './components/Hero'
import About      from './components/About'
import Experience from './components/Experience'
import Schedule   from './components/Schedule'
import Venue      from './components/Venue'
import Gallery    from './components/Gallery'
import Tickets    from './components/Tickets'
import Creator    from './components/Creator'
import Journey    from './components/Journey'
import Sponsors   from './components/Sponsors'
import Footer     from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Schedule />
        <Venue />
        <Gallery />
        <Tickets />
        <Creator />
        <Journey />
        <Sponsors />
      </main>
      <Footer />
    </>
  )
}
