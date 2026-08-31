function About() {
  return (
    <section
      id="about"
      className="relative py-24 lg:py-32 bg-slate-950"
      aria-labelledby="about-heading"
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="animate-fade-in-up">
          <h2
            id="about-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-8"
          >
            Security by Design.
          </h2>
          <p className="text-lg sm:text-xl text-slate-400 leading-relaxed max-w-3xl">
            Schoen Cyber Solutions LLC is a cybersecurity and secure software development
            company focused on integrating security throughout the technology lifecycle.
            From architecture and development to testing and monitoring, security should be
            a fundamental part of how digital systems are built.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
