import React, { memo, useMemo } from "react";
import { AppIcons } from "../components/icons/AppIcons";

const Home = () => {
    const infoCards = useMemo(
        () => [
            ["Experience", "Fresher"],
            ["Projects", "7+"],
            ["Stack", "MERN"],
            ["Location", "India"],
        ],
        []
    );

    return (
        <section
            id="home"
            className="relative overflow-hidden min-h-[calc(100vh-110px)] flex items-center"
        >
            <div className="section py-10">
                <div className="grid lg:grid-cols-[1.2fr_.8fr] gap-16 items-center">
                    {/* LEFT */}
                    <div>
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-cyan-400/20 bg-cyan-400/5 text-cyan-300 text-xs uppercase tracking-[0.25em]"
                            style={{
                                clipPath:
                                    "polygon(12px 0,100% 0,100% calc(100% - 12px),calc(100% - 12px) 100%,0 100%,0 12px)",
                            }}
                        >
                            <AppIcons.react />
                            MERN STACK DEVELOPER
                        </div>

                        <h2 className="text-5xl md:text-7xl font-black uppercase leading-[0.95] tracking-tight">
                            Building
                            <br />
                            <span className="text-cyan-400">Modern</span>
                            <br />
                            Web Experiences
                        </h2>

                        <p className="mt-8 max-w-2xl text-zinc-400 leading-8 text-lg">
                            I build scalable full-stack applications using React, Node.js,
                            Express and MongoDB with a strong focus on clean UI, performance,
                            authentication and real-world business workflows.
                        </p>

                        <div className="mt-12 flex flex-wrap gap-4">
                            <a href="#projects" className="gradient-button">
                                View Projects
                                <AppIcons.external />
                            </a>

                            <a
                                href="https://github.com/nikhilvishwakarma077"
                                target="_blank"
                                rel="noreferrer"
                                className="glass-button"
                            >
                                <AppIcons.github />
                                GitHub
                            </a>

                            <a
                                href="https://drive.google.com/file/d/17fctRhTMOR5Mx6iPf51zQxW8iV8ARw6P/view"
                                target="_blank"
                                rel="noreferrer"
                                className="glass-button"
                            >
                                <AppIcons.external />
                                Resume
                            </a>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="relative flex justify-center lg:justify-end">
                        <div
                            className="relative w-full max-w-md"
                            style={{
                                clipPath:
                                    "polygon(22px 0,100% 0,100% calc(100% - 22px),calc(100% - 22px) 100%,0 100%,0 22px)",
                                willChange: "transform",
                            }}
                        >
                            <div className="absolute inset-0 border border-cyan-400/20 bg-linear-to-b from-cyan-400/5 to-transparent backdrop-blur-xl" />

                            <div className="relative p-8">
                                {/* Window Header */}
                                <div className="flex items-center justify-between border-b border-cyan-400/10 pb-5">
                                    <div className="flex items-center gap-2">
                                        <span className="h-3 w-3 rounded-full bg-red-400/70" />
                                        <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
                                        <span className="h-3 w-3 rounded-full bg-cyan-400" />
                                    </div>

                                    <span className="text-xs uppercase tracking-[0.35em] text-cyan-300">
                                        profile.dev
                                    </span>
                                </div>

                                {/* Profile */}
                                <div className="mt-8">
                                    <p className="text-zinc-500 text-xs uppercase tracking-[0.3em]">
                                        Name
                                    </p>

                                    <h3 className="mt-2 text-4xl font-bold">
                                        Nikhil <span className="text-cyan-400">Vishwakarma</span>
                                    </h3>

                                    <p className="mt-2 text-zinc-400">
                                        Full Stack Developer (MERN)
                                    </p>
                                </div>

                                {/* Info Grid */}
                                <div className="mt-10 grid grid-cols-2 gap-4">
                                    {infoCards.map(([title, value]) => (
                                        <div
                                            key={title}
                                            className="border border-cyan-400/10 bg-cyan-400/3 p-4"
                                            style={{
                                                clipPath:
                                                    "polygon(12px 0,100% 0,100% calc(100% - 12px),calc(100% - 12px) 100%,0 100%,0 12px)",
                                            }}
                                        >
                                            <p className="text-[11px] uppercase tracking-[0.25em] text-zinc-500">
                                                {title}
                                            </p>

                                            <h4 className="mt-2 text-xl font-semibold text-cyan-300">
                                                {value}
                                            </h4>
                                        </div>
                                    ))}
                                </div>

                                {/* Bottom Status */}
                                <div className="mt-8 border border-cyan-400/10 bg-cyan-400/3 p-4 flex items-center justify-between">
                                    <span className="text-zinc-400 uppercase tracking-[0.25em] text-xs">
                                        Status
                                    </span>

                                    <span className="text-cyan-300 text-sm">
                                        Available for Internship
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="absolute -z-10 h-80 w-80 rounded-full bg-cyan-400/10 blur-[120px]" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default memo(Home);