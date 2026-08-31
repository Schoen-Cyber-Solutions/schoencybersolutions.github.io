function Vision() {
  return (
    <section
      id="vision"
      className="relative py-24 lg:py-32 overflow-hidden"
      aria-labelledby="vision-heading"
    >
      {/* Background with subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-950 to-slate-950" />
      <div className="absolute inset-0 geometric-bg opacity-50" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
        <div className="animate-fade-in-up">
          <h2
            id="vision-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-8"
          >
            Building for a More Secure Digital Future.
          </h2>
          <p className="text-lg sm:text-xl text-slate-400 leading-relaxed max-w-3xl">
            Technology increasingly connects the systems that society depends on.
            Schoen Cyber Solutions aims to contribute to a future where security,
            resilience, and responsible technology development are built into those
            systems from the beginning.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Vision
