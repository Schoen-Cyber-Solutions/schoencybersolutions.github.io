import { ArrowDown } from 'lucide-react'

function Hero() {
  const handleScrollToContact = (e) => {
    e.preventDefault()
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-slate-950" />
      <div className="absolute inset-0 hero-grid" />

      {/* Animated glow dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-accent/30 glow-dot glow-dot-delay-1" />
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 rounded-full bg-accent/20 glow-dot glow-dot-delay-2" />
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 rounded-full bg-accent/25 glow-dot glow-dot-delay-3" />
        <div className="absolute top-2/3 right-1/4 w-2 h-2 rounded-full bg-accent/15 glow-dot glow-dot-delay-1" />
        <div className="absolute bottom-1/4 right-1/2 w-1.5 h-1.5 rounded-full bg-accent/20 glow-dot glow-dot-delay-2" />
      </div>

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(2,6,23,0.8)_100%)]" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-6">
            Security Built Into
            <br />
            <span className="text-accent">Technology.</span>
          </h1>
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
          <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Cybersecurity and secure software development focused on building
            resilient digital systems from the ground up.
          </p>
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <a
            href="#contact"
            onClick={handleScrollToContact}
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent/10 border border-accent/30 text-accent font-medium rounded-lg hover:bg-accent/20 hover:border-accent/50 transition-all duration-300 group"
          >
            Get in Touch
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />
    </section>
  )
}

export default Hero
