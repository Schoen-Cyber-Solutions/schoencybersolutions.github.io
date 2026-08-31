import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import FocusAreas from './sections/FocusAreas'
import Vision from './sections/Vision'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Navbar />
      <main>
        <Hero />
        <About />
        <FocusAreas />
        <Vision />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
