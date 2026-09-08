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
            About Schoen Cyber Solutions
          </h2>
          <div className="space-y-6 text-lg sm:text-xl text-slate-400 leading-relaxed max-w-3xl">
            <p>
              Schoen Cyber Solutions LLC is a Chicago-based cybersecurity company
              focused on practical security services for small businesses. We help
              organizations strengthen Microsoft 365 security, prepare for cyber
              insurance, and respond to security questionnaires — without requiring
              an enterprise security team.
            </p>
            <p>
              Our long-term direction combines cybersecurity expertise with secure
              software development, building resilient technology from the ground up.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
