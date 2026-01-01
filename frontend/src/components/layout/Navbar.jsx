import React from 'react'

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-zinc-950/80 backdrop-blur border-b border-zinc-800">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <a href="#home" className="font-bold text-2xl tracking-wide">
          Nikhil<span className="text-emerald-400"> Vishwakarma</span>
        </a>

        <div className="flex items-center gap-6 text-sm">
          <a href="#projects" className="text-zinc-400 hover:text-zinc-100">
            Projects
          </a>
          <a href="#about" className="text-zinc-400 hover:text-zinc-100">
            About
          </a>
          <a href="#contact" className="text-zinc-400 hover:text-zinc-100">
            Contact
          </a>

          <a
            href="/resume.pdf"
            // target="_blank"
            className="px-4 py-2 rounded-lg bg-emerald-400 text-zinc-950 font-medium hover:bg-emerald-300 transition"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
