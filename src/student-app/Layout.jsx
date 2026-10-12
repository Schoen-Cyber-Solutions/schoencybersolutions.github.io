import Navbar from '../sections/Navbar.jsx'
import Footer from '../sections/Footer.jsx'

function Layout({ children }) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
