import { Linkedin, Github, Shield } from 'lucide-react'

function Footer() {
  return (
    <footer
      className="relative py-12 bg-slate-950 border-t border-slate-800/50"
      role="contentinfo"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2 text-slate-300 font-medium">
            <Shield className="w-4 h-4 text-accent" aria-hidden="true" />
            <span>Schoen Cyber Solutions</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="p-2 text-slate-400 hover:text-white transition-colors"
              aria-label="LinkedIn (coming soon)"
              title="LinkedIn - URL to be added"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="p-2 text-slate-400 hover:text-white transition-colors"
              aria-label="GitHub (coming soon)"
              title="GitHub - URL to be added"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-sm text-slate-500">
            &copy; 2026 Schoen Cyber Solutions LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
