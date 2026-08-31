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
              src="/Full Logo.svg"
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
      </div>
    </footer>
  )
}

export default Footer
