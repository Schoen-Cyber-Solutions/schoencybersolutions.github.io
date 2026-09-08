import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import Problem from './sections/Problem'
import Services from './sections/Services'
import AdditionalCapabilities from './sections/AdditionalCapabilities'
import Process from './sections/Process'
import WhyUs from './sections/WhyUs'
import About from './sections/About'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Services />
        <AdditionalCapabilities />
        <Process />
        <WhyUs />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
