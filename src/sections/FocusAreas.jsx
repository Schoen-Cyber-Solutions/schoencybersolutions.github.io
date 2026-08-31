import { Code2, ShieldCheck, Search } from 'lucide-react'

const areas = [
  {
    icon: Code2,
    title: 'Secure Software Development',
    description:
      'Building applications with security integrated throughout the development lifecycle.',
  },
  {
    icon: ShieldCheck,
    title: 'Cybersecurity Engineering',
    description:
      'Applying secure architecture, access controls, threat modeling, and security-focused engineering practices.',
  },
  {
    icon: Search,
    title: 'Security Assessment',
    description:
      'Identifying vulnerabilities, evaluating security risks, and strengthening the resilience of digital systems.',
  },
]

function FocusAreas() {
  return (
    <section
      id="focus"
      className="relative py-24 lg:py-32 bg-slate-950"
      aria-labelledby="focus-heading"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="mb-16 animate-fade-in-up">
          <h2
            id="focus-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight"
          >
            Focus Areas
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {areas.map((area, index) => (
            <div
              key={area.title}
              className="group relative p-8 rounded-2xl border border-slate-800/60 bg-slate-900/30 hover:bg-slate-900/60 hover:border-slate-700/80 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${(index + 1) * 0.15}s` }}
            >
              <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent group-hover:bg-accent/20 transition-colors duration-300">
                <area.icon className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">
                {area.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FocusAreas
