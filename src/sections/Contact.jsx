import { Mail, Linkedin, Github } from 'lucide-react'

function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 lg:py-32 bg-slate-950"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <div className="animate-fade-in-up">
          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6"
          >
            Let&apos;s Connect.
          </h2>
          <p className="text-lg sm:text-xl text-slate-400 leading-relaxed max-w-2xl mb-10">
            Interested in working together, discussing a project, or connecting
            professionally? Get in touch.
          </p>

          <a
            href="mailto:contact@schoencybersolutions.com"
            className="inline-flex items-center gap-3 px-8 py-4 bg-accent/10 border border-accent/30 text-accent font-medium rounded-lg hover:bg-accent/20 hover:border-accent/50 transition-all duration-300 group"
          >
            <Mail className="w-5 h-5" aria-hidden="true" />
            contact@schoencybersolutions.com
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
