import { Shield, FileCheck, ClipboardCheck } from 'lucide-react'

const services = [
  {
    icon: Shield,
    title: 'Microsoft 365 Security',
    description:
      'Review and strengthen identity, administrator access, email, sharing, and core Microsoft 365 security settings.',
    scope: [
      'MFA and identity security',
      'Administrator and privileged access',
      'Microsoft 365 security configuration',
      'Email security',
      'Sharing and access controls',
      'Prioritized security recommendations',
    ],
  },
  {
    icon: FileCheck,
    title: 'Cyber Insurance Readiness',
    description:
      'Understand your security posture and identify gaps before completing a cyber insurance application or renewal.',
    scope: [
      'Review technical security requirements',
      'Identify security control gaps',
      'Collect available security evidence',
      'Prioritize remediation',
      'Assist with technical security questions',
    ],
    disclaimer:
      'Schoen Cyber Solutions provides cybersecurity consulting and does not act as an insurance broker, determine coverage, or guarantee insurance eligibility.',
  },
  {
    icon: ClipboardCheck,
    title: 'Security Questionnaire Support',
    description:
      'Get practical help responding to customer and vendor security questionnaires accurately and efficiently.',
    scope: [
      'Questionnaire review',
      'Technical response assistance',
      'Evidence collection',
      'Security gap identification',
      'Remediation recommendations',
    ],
  },
]

function Services() {
  return (
    <section
      id="services"
      className="relative py-24 lg:py-32 bg-slate-950"
      aria-labelledby="services-heading"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="mb-16 animate-fade-in-up">
          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight"
          >
            Services
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative p-8 rounded-2xl border border-slate-800/60 bg-slate-900/30 hover:bg-slate-900/60 hover:border-slate-700/80 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${(index + 1) * 0.15}s` }}
            >
              <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent group-hover:bg-accent/20 transition-colors duration-300">
                <service.icon className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">
                {service.title}
              </h3>
              <p className="text-slate-400 leading-relaxed mb-6">
                {service.description}
              </p>
              <ul className="space-y-2 mb-6">
                {service.scope.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-slate-400">
                    <span className="w-1 h-1 rounded-full bg-accent mt-2 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              {service.disclaimer && (
                <p className="text-xs text-slate-500 leading-relaxed mt-auto">
                  {service.disclaimer}
                </p>
              )}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="inline-flex items-center mt-6 text-sm font-medium text-accent hover:text-white transition-colors"
              >
                Learn More
                <span className="ml-1 group-hover:translate-x-0.5 transition-transform">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
