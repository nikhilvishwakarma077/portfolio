import React from 'react'

const Footer = () => {
  return (
    <footer className="border-t border-zinc-800 py-8 mt-20">
      <div className="max-w-6xl mx-auto px-4 text-sm text-zinc-500 flex flex-col md:flex-row justify-between items-center gap-4">

        <span>© 2026 Nikhil Vishwakarma</span>

        <span className="text-zinc-400">
          Full Stack Developer (MERN)
        </span>

        <div className="flex gap-4">
          <a
            href="https://github.com/nikhilvishwakarma077"
            target="_blank"
            className="hover:text-emerald-400"
          >
            GitHub
          </a>

          {/* <a
            href="https://linkedin.com/in/YOUR-USERNAME"
            target="_blank"
            className="hover:text-emerald-400"
          >
            LinkedIn
          </a> */}

          <a
            href="mailto:nikhilvishwakarma696@gmail.com"
            className="hover:text-emerald-400"
          >
            Email
          </a>
        </div>

      </div>
    </footer>
  )
}

export default Footer
