import React, { useMemo } from "react";
import { AppIcons } from "../components/icons/AppIcons";

const About = () => {
    const highlights = useMemo(
        () => [
            {
                icon: AppIcons.code,
                title: "Frontend",
                value: "React • Tailwind • JavaScript",
            },
            {
                icon: AppIcons.database,
                title: "Backend",
                value: "Node • Express • MongoDB",
            },
            {
                icon: AppIcons.layers,
                title: "Focus",
                value: "Clean Architecture & UI",
            },
            {
                icon: AppIcons.zap,
                title: "Goal",
                value: "Production Ready Apps",
            },
        ],
        []
    );

    const stats = useMemo(
        () => [
            ["Experience", "MERN Stack Development"],
            ["Projects", "7+ Personal Projects"],
            ["Learning", "Backend & System Design"],
            ["Interest", "Full Stack Web Apps"],
        ],
        []
    );

    return (
        <section id="about" className="py-28">
            <div className="section">
                {/* Heading */}
                <div className="max-w-3xl">
                    <span className="text-cyan-400 uppercase tracking-[0.35em] text-sm">
                        About
                    </span>

                    <h2 className="mt-4 text-5xl md:text-6xl font-black uppercase leading-none">
                        Building Software
                        <br />
                        <span className="text-cyan-400">That Solves Problems.</span>
                    </h2>
                </div>

                {/* Content */}
                <div className="mt-20 grid lg:grid-cols-[1.2fr_.8fr] gap-12">
                    {/* Left */}
                    <div className="border border-cyan-400/10 bg-[#071018]/70 backdrop-blur-xl p-8 md:p-10">
                        <div className="space-y-8 text-lg leading-9 text-zinc-400">
                            <p>
                                I'm a <span className="text-white">Full Stack MERN Developer</span>{" "}
                                focused on building applications that solve real-world problems.
                            </p>

                            <p>
                                I build responsive UIs, secure authentication systems, REST APIs,
                                CRUD apps and scalable backend architecture.
                            </p>

                            <p>
                                I focus on clean, maintainable and production-ready systems.
                            </p>
                        </div>

                        <div className="mt-12 grid sm:grid-cols-2 gap-5">
                            {highlights.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <div
                                        key={item.title}
                                        className="border border-cyan-400/10 bg-cyan-400/3 p-5 transition hover:border-cyan-400/30 hover:bg-cyan-400/5"
                                        style={{
                                            clipPath:
                                                "polygon(14px 0,100% 0,100% calc(100% - 14px),calc(100% - 14px) 100%,0 100%,0 14px)",
                                        }}
                                    >
                                        <Icon className="text-cyan-400 text-xl" />

                                        <h4 className="mt-4 text-white font-semibold uppercase tracking-wider">
                                            {item.title}
                                        </h4>

                                        <p className="mt-2 text-sm text-zinc-500 leading-6">
                                            {item.value}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right */}
                    <div className="border border-cyan-400/10 bg-[#071018]/70 backdrop-blur-xl p-8">
                        <div className="border-b border-cyan-400/10 pb-5">
                            <span className="text-cyan-400 uppercase tracking-[0.3em] text-xs">
                                Developer Stats
                            </span>
                        </div>

                        <div className="mt-8 space-y-8">
                            {stats.map(([title, value]) => (
                                <div key={title}>
                                    <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                                        {title}
                                    </p>

                                    <h3 className="mt-2 text-xl font-semibold text-white">
                                        {value}
                                    </h3>

                                    <div className="mt-4 h-px bg-cyan-400/10" />
                                </div>
                            ))}
                        </div>

                        <div className="mt-10 border border-cyan-400/10 bg-cyan-400/3 p-5">
                            <p className="text-xs uppercase tracking-[0.25em] text-cyan-300">
                                Current Goal
                            </p>

                            <h3 className="mt-3 text-2xl font-bold text-white leading-relaxed">
                                Build production-grade scalable applications.
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;