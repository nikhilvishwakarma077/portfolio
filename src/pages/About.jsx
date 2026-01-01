import React from 'react'

const About = () => {
    return (
        <div className="max-w-6xl mx-auto  px-4 py-10 space-y-6">
            <h2 className="text-3xl font-bold">About Me</h2>

            <p className="text-zinc-400">
                I’m a MERN stack developer who focuses on building production-ready
                applications rather than demo-only projects. I care more about how a
                feature behaves in real scenarios than how flashy it looks.
            </p>

            <p className="text-zinc-400">
                When I build something, I think in terms of data flow, API contracts,
                error handling, edge cases, and long-term maintainability. Clean structure
                and predictable behavior matter to me more than shortcuts.
            </p>

            <p className="text-zinc-400">
                I enjoy working on problems like authentication flows, role-based access,
                CRUD systems, dashboards, and performance-safe frontend state management.
                I prefer simple, clear solutions over over-engineered ones.
            </p>

            <p className="text-zinc-400">
                My goal is to write code that another developer can pick up, understand,
                and extend without breaking the system — the kind of code you expect in
                real teams, not just tutorials.
            </p>
        </div>

    )
}

export default About
