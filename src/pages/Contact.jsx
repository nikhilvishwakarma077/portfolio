import React from 'react'

const Contact = () => {
  return (
    <div className="max-w-6xl mx-auto my-10 px-4 py-10 space-y-6">
      <h2 className="text-3xl font-bold">Contact</h2>

      <p className="text-zinc-400">
        I’m currently open to internships and full-stack opportunities. If you have a role or project in mind, feel free to reach out.
      </p>

      <div className="space-y-2 text-zinc-300">
        <p>
          Email:
          <a href="mailto:nikhilvishwakarma696@gmail.com" className="text-emerald-400 hover:underline">
            nikhilvishwakarma696@gmail.com
          </a>
        </p>

        <p>
          GitHub:
          <a href="https://github.com/nikhilvishwakarma077" target="_blank" className="text-emerald-400 hover:underline">
            github.com/nikhilvishwakarma077
          </a>
        </p>

        {/* <p>
          LinkedIn:
          <a href="https://linkedin.com/in/YOUR-USERNAME" target="_blank" className="text-emerald-400 hover:underline">
            linkedin.com/in/YOUR-USERNAME
          </a>
        </p> */}
      </div>
    </div>
  )
}

export default Contact
