import React from 'react'

const Home = () => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-20">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                MERN Stack <br />
                <span className="text-emerald-400">Developer</span>
            </h1>

            <p className="mt-6 max-w-xl text-zinc-400">
                I build scalable, production-ready full-stack applications with clean
                architecture and real-world features.
            </p>

            <div className="mt-8 flex gap-4">
                <a
                    href="#projects"
                    className="px-6 py-3 rounded-lg bg-emerald-400 text-zinc-950 font-medium hover:bg-emerald-300 transition"
                >
                    View Projects
                </a>

                <a
                    href="https://github.com/nikhilvishwakarma077"
                    target="_blank"
                    className="px-6 py-3 rounded-lg border border-zinc-700 text-zinc-300 hover:border-zinc-500 transition"
                >
                    GitHub
                </a>
            </div>
        </div>
    )
}

export default Home
