import { MessageSquare, Search, ListChecks, ArrowUpRight } from 'lucide-react'

const steps = [
  {
    icon: MessageSquare,
    number: '01',
    title: 'Understand',
    description:
      'We learn about your business, technology environment, and the security problem or requirement you\'re facing.',
  },
  {
    icon: Search,
    number: '02',
    title: 'Review',
    description:
      'We review the relevant configurations, controls, systems, or documentation.',
  },
  {
    icon: ListChecks,
    number: '03',
    title: 'Prioritize',
    description:
      'You receive clear findings and practical recommendations based on risk and business impact.',
  },
  {
    icon: ArrowUpRight,
    number: '04',
    title: 'Improve',
    description:
      'Where appropriate, we can help implement agreed security improvements.',
  },
]

function Process() {
  return (
    <section
      id="process"
      className="relative py-24 lg:py-32 bg-slate-950"
      aria-labelledby="process-heading"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="mb-16 animate-fade-in-up">
          <h2
            id="process-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight"
          >
            How It Works
          </h2>
          <p className="mt-4 text-lg text-slate-400 max-w-2xl">
            The exact process depends on the engagement, but typically follows these steps.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative animate-fade-in-up"
              style={{ animationDelay: `${(index + 1) * 0.15}s` }}
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10 text-accent">
                  <step.icon className="w-5 h-5" aria-hidden="true" />
                </div>
                <span className="text-sm font-mono text-slate-600">{step.number}</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 tracking-tight">
                {step.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Process
