import { Target, Users, FileSearch, Lightbulb, MapPin, Globe, Code2 } from 'lucide-react'

const differentiators = [
  {
    icon: Target,
    text: 'Focus on practical cybersecurity',
  },
  {
    icon: Users,
    text: 'Small-business friendly',
  },
  {
    icon: FileSearch,
    text: 'Focused, clearly scoped engagements',
  },
  {
    icon: Lightbulb,
    text: 'Practical recommendations rather than unnecessary complexity',
  },
  {
    icon: Target,
    text: 'Security-first approach',
  },
  {
    icon: MapPin,
    text: 'Chicago-based',
  },
  {
    icon: Globe,
    text: 'Remote service availability across the U.S. and Europe',
  },
  {
    icon: Code2,
    text: 'Secure software development capability',
  },
]

function WhyUs() {
  return (
    <section
      id="why-us"
      className="relative py-24 lg:py-32 bg-slate-950"
      aria-labelledby="why-us-heading"
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="mb-12 animate-fade-in-up">
          <h2
            id="why-us-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight"
          >
            Why Schoen Cyber Solutions
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 animate-fade-in-up">
          {differentiators.map((item) => (
            <div
              key={item.text}
              className="flex items-start gap-4 p-4 rounded-xl border border-slate-800/40 bg-slate-900/20"
            >
              <div className="shrink-0 mt-0.5">
                <item.icon className="w-5 h-5 text-accent" aria-hidden="true" />
              </div>
              <span className="text-slate-300 leading-relaxed">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyUs
