import { CalendarDays, BookOpen, MapPin, MessageSquare, Building2 } from 'lucide-react'
import { PageHeader, PageBody, Section, BulletList } from './legal.jsx'

const features = [
  {
    icon: CalendarDays,
    title: 'Calendar',
    description:
      'Keep track of classes and personal events in one place. View your schedule by day, week, or month and organize your semester more easily.',
  },
  {
    icon: BookOpen,
    title: 'Courses',
    description:
      'Search available courses, review class details, and build your academic schedule.',
  },
  {
    icon: MapPin,
    title: 'Campus Events',
    description:
      'Discover student and university events, open event locations in Maps, and add events to your personal calendar.',
  },
  {
    icon: MessageSquare,
    title: 'Student Communities',
    description:
      'Join course and campus discussions, ask questions, share helpful information, and connect with other students.',
  },
  {
    icon: Building2,
    title: 'University Connections',
    description:
      'Student App is designed to work with supported university systems and public academic resources while keeping the experience independent from any single institution.',
  },
]

const links = [
  { href: '/student-app/privacy/', label: 'Privacy Policy' },
  { href: '/student-app/terms/', label: 'Terms of Use' },
  { href: '/student-app/community-guidelines/', label: 'Community Guidelines' },
  { href: '/student-app/support/', label: 'Support' },
]

function Landing() {
  return (
    <>
      <section className="relative pt-32 lg:pt-40 pb-16 lg:pb-24 bg-slate-950 hero-grid">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl animate-fade-in-up">
            <p className="text-sm font-medium text-accent tracking-wide uppercase mb-4">
              Student App
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
              Your university life, in one place.
            </h1>
            <p className="text-lg sm:text-xl text-slate-400 leading-relaxed mb-4">
              Student App brings your class schedule, campus events, academic
              information, and student communities into one simple mobile
              experience.
            </p>
            <p className="text-lg sm:text-xl text-slate-400 leading-relaxed">
              Built for students who want a clearer way to stay organized,
              discover what is happening on campus, and connect with other
              students.
            </p>
          </div>
        </div>
      </section>

      <section className="relative py-16 lg:py-24 bg-slate-950" aria-labelledby="features-heading">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <h2 id="features-heading" className="sr-only">
            Features
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="group relative p-8 rounded-2xl border border-slate-800/60 bg-slate-900/30 hover:bg-slate-900/60 hover:border-slate-700/80 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${(index + 1) * 0.15}s` }}
              >
                <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent group-hover:bg-accent/20 transition-colors duration-300">
                  <feature.icon className="w-6 h-6" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        className="relative py-16 lg:py-20 bg-slate-900/30 border-y border-slate-800/50"
        aria-labelledby="institutions-heading"
      >
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <h2
            id="institutions-heading"
            className="text-2xl sm:text-3xl font-bold text-white tracking-tight mb-6"
          >
            Supported institutions
          </h2>
          <p className="text-slate-400 leading-relaxed mb-4">
            Student App currently supports:
          </p>
          <BulletList items={['Roosevelt University', 'Illinois Institute of Technology']} />
          <p className="text-slate-400 leading-relaxed mt-4">
            Additional institutions and integrations may be added over time.
          </p>
        </div>
      </section>

      <PageBody>
        <Section title="Privacy and safety">
          <p>
            Student App includes account controls, content reporting, moderation
            tools, blocking, and account deletion features.
          </p>
          <p>
            We aim to collect and retain only the information needed to provide
            the application&apos;s features. For more information, review our{' '}
            <a href="/student-app/privacy/" className="text-accent hover:text-white transition-colors">
              Privacy Policy
            </a>
            .
          </p>
        </Section>

        <Section title="An independent service">
          <p>
            Student App is developed and operated independently by Schoen Cyber
            Solutions LLC.
          </p>
          <p>
            Student App is not affiliated with, endorsed by, sponsored by, or
            operated by Roosevelt University, Illinois Institute of Technology,
            or any other educational institution unless explicitly stated
            otherwise.
          </p>
        </Section>

        <Section title="Coming soon">
          <p>
            Student App is currently being prepared for release on the Apple
            App Store.
          </p>
        </Section>

        <Section title="Helpful links">
          <ul className="space-y-3">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="inline-flex items-center text-accent font-medium hover:text-white transition-colors group"
                >
                  {link.label}
                  <span className="ml-1 group-hover:translate-x-0.5 transition-transform">→</span>
                </a>
              </li>
            ))}
          </ul>
        </Section>
      </PageBody>
    </>
  )
}

export default Landing
