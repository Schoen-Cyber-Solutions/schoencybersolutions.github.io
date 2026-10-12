/**
 * Shared building blocks for the Student App pages. Styled to match the
 * existing site: slate-950 background, accent highlights, Inter type.
 */

export const CONTACT_EMAIL = 'contact@schoencybersolutions.com'

export function PageHeader({ eyebrow, title, intro, meta }) {
  return (
    <header className="relative pt-32 lg:pt-40 pb-12 lg:pb-16 bg-slate-950 hero-grid">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        {eyebrow && (
          <p className="text-sm font-medium text-accent tracking-wide uppercase mb-4">
            {eyebrow}
          </p>
        )}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6">
          {title}
        </h1>
        {intro && <p className="text-lg text-slate-400 leading-relaxed">{intro}</p>}
        {meta && <p className="mt-6 text-sm text-slate-500">{meta}</p>}
      </div>
    </header>
  )
}

export function PageBody({ children }) {
  return (
    <div className="max-w-3xl mx-auto px-6 lg:px-8 pb-24 lg:pb-32">{children}</div>
  )
}

export function Section({ title, children }) {
  return (
    <section className="mt-12 first:mt-0">
      <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight mb-4">
        {title}
      </h2>
      <div className="space-y-4 text-slate-400 leading-relaxed">{children}</div>
    </section>
  )
}

export function BulletList({ items }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2 text-slate-400">
          <span className="w-1 h-1 rounded-full bg-accent mt-2.5 shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  )
}

export function ContactLine({ label = 'Contact' }) {
  return (
    <p>
      {label}:{' '}
      <a
        href={`mailto:${CONTACT_EMAIL}`}
        className="text-accent hover:text-white transition-colors"
      >
        {CONTACT_EMAIL}
      </a>
    </p>
  )
}
