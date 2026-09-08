import { Mail, Search, Wrench, FileText, Code2 } from 'lucide-react'

const capabilities = [
  {
    icon: Mail,
    title: 'Email & Domain Security',
    description: 'Review email authentication, domain settings, and related configurations.',
  },
  {
    icon: Search,
    title: 'Security Assessments',
    description: 'Evaluate security controls, configurations, and identify areas for improvement.',
  },
  {
    icon: Wrench,
    title: 'Security Remediation',
    description: 'Implement practical security improvements based on identified gaps and priorities.',
  },
  {
    icon: FileText,
    title: 'Security Policies & Documentation',
    description: 'Develop clear, practical security policies and documentation suited to your organization.',
  },
  {
    icon: Code2,
    title: 'Secure Software Development',
    description: 'Building applications with security integrated throughout the development lifecycle. Part of our long-term direction.',
  },
]

function AdditionalCapabilities() {
  return (
    <section
      id="additional"
      className="relative py-20 lg:py-28 bg-slate-950"
      aria-labelledby="additional-heading"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="mb-12 animate-fade-in-up">
          <h2
            id="additional-heading"
            className="text-2xl sm:text-3xl font-bold text-white tracking-tight"
          >
            Additional Capabilities
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {capabilities.map((cap, index) => (
            <div
              key={cap.title}
              className="group p-6 rounded-xl border border-slate-800/40 bg-slate-900/20 hover:bg-slate-900/40 hover:border-slate-700/60 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${(index + 1) * 0.1}s` }}
            >
              <div className="mb-4 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-accent/10 text-accent group-hover:bg-accent/20 transition-colors">
                <cap.icon className="w-5 h-5" aria-hidden="true" />
              </div>
              <h3 className="text-base font-semibold text-white mb-2 tracking-tight">
                {cap.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {cap.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AdditionalCapabilities
