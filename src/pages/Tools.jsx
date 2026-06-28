import React, { useMemo } from "react";
import { AppIcons } from "../components/icons/AppIcons";

const Row = React.memo(({ items, direction }) => {
    return (
        <div className="overflow-hidden whitespace-nowrap relative py-4">
            <div className={`flex gap-6 w-max animate-marquee-${direction}`}>
                {items.map((item) => {
                    const Icon = item.icon;

                    return (
                        <div
                            key={item.name}
                            className="flex items-center gap-3 px-5 py-3 border border-cyan-400/10 bg-[#071018]/70 text-cyan-200 text-sm uppercase tracking-[0.2em]"
                            style={{
                                clipPath:
                                    "polygon(12px 0,100% 0,100% calc(100% - 12px),calc(100% - 12px) 100%,0 100%,0 12px)",
                            }}
                        >
                            <Icon className="text-cyan-400 text-lg" />
                            <span>{item.name}</span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
});

const Tools = () => {
    const tech = useMemo(
        () => [
            { name: "HTML5", icon: AppIcons.html },
            { name: "CSS3", icon: AppIcons.css },
            { name: "JavaScript", icon: AppIcons.js },
            { name: "React.js", icon: AppIcons.react },
            { name: "Tailwind CSS", icon: AppIcons.tailwind },
            { name: "Node.js", icon: AppIcons.node },
            { name: "Express.js", icon: AppIcons.express },
            { name: "MongoDB", icon: AppIcons.mongodb },
            { name: "MySQL", icon: AppIcons.mysql },
            { name: "REST APIs", icon: AppIcons.api },
            { name: "Git", icon: AppIcons.git },
            { name: "GitHub", icon: AppIcons.github },
            { name: "Vercel", icon: AppIcons.vercel },
            { name: "AI Integration", icon: AppIcons.ai },
        ],
        []
    );

    return (
        <section className="py-5">
            <div className="section">
                {/* Heading */}
                <div className="text-center mb-14">
                    <h2 className="text-5xl md:text-6xl font-black uppercase">
                        Tech <span className="text-cyan-400">Ecosystem</span>
                    </h2>

                    <p className="mt-6 text-zinc-400 max-w-2xl mx-auto leading-8">
                        Technologies I use to build scalable, modern and production-ready web applications.
                    </p>
                </div>

                {/* Rows */}
                <div className="space-y-6">
                    <Row items={tech} direction="right" />
                </div>
            </div>

            {/* Animation (LIGHTER VERSION) */}
            <style>{`
        @keyframes marquee-left {
          0% { transform: translate3d(0,0,0); }
          100% { transform: translate3d(-50%,0,0); }
        }

        @keyframes marquee-right {
          0% { transform: translate3d(-50%,0,0); }
          100% { transform: translate3d(0,0,0); }
        }

        .animate-marquee-left {
          animation: marquee-left 22s linear infinite;
          will-change: transform;
        }

        .animate-marquee-right {
          animation: marquee-right 15s linear infinite;
          will-change: transform;
        }

        .animate-marquee-left:hover,
        .animate-marquee-right:hover {
          animation-play-state: paused;
        }
      `}</style>
        </section>
    );
};

export default Tools;