import { Linkedin, Github } from 'lucide-react'

function Footer() {
  return (
    <footer
      className="relative py-12 bg-slate-950 border-t border-slate-800/50"
      role="contentinfo"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/Icon.svg"
              alt="Schoen Cyber Solutions"
              className="h-5 w-auto object-contain"
            />
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.linkedin.com/company/schoencybersolutions"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-white transition-colors"
              aria-label="Schoen Cyber Solutions on LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/Schoen-Cyber-Solutions"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-slate-400 hover:text-white transition-colors"
              aria-label="Schoen Cyber Solutions on GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-slate-500">
            &copy; 2026 Schoen Cyber Solutions LLC. All rights reserved.
          </p>
        </div>

        {/* Student App links */}
        <nav
          className="mt-8 pt-8 border-t border-slate-800/50 flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
          aria-label="Student App"
        >
          {[
            { href: '/student-app/', label: 'Student App' },
            { href: '/student-app/privacy/', label: 'Privacy Policy' },
            { href: '/student-app/terms/', label: 'Terms of Use' },
            { href: '/student-app/community-guidelines/', label: 'Community Guidelines' },
            { href: '/student-app/support/', label: 'Support' },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-500 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}

export default Footer
