import { useState } from 'react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '#home', label: 'HOME' },
    { href: '#about', label: 'ABOUT ME' },
    { href: '#skills', label: 'SKILLS' },
    { href: '#projects', label: 'PROJECTS' },
    { href: '#contact', label: 'CONTACT' },
  ]

  return (
    <header className="fixed top-0 w-full z-50 bg-bg/90 backdrop-blur border-b border-white/10">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#home" className="font-bold text-lg text-white">
          RAKESH
        </a>

        <ul className="hidden md:flex gap-8 text-sm font-medium tracking-wide text-white">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-accent transition">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden md:inline-block bg-accent hover:bg-accent-hover transition text-white text-sm font-semibold px-5 py-2 rounded"
        >
          Contact Me
        </a>

        <button
          className="md:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${
              isOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-white transition-opacity duration-300 ${
              isOpen ? 'opacity-0' : ''
            }`}
          ></span>
          <span
            className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${
              isOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          ></span>
        </button>
      </nav>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-80' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col gap-4 px-6 pb-6 text-sm font-medium tracking-wide text-white">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block hover:text-accent transition"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="inline-block bg-accent hover:bg-accent-hover transition text-white text-sm font-semibold px-5 py-2 rounded"
            >
              Contact Me
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Navbar
