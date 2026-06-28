import React, { useState, memo } from "react";
import { AppIcons } from "../../components/icons/AppIcons";

const ProjectCard = ({ project }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => setShowDetails((prev) => !prev);

  const githubUrl = project.githublink;
  const demoUrl = project.demo;

  const stack = project.stack || [];

  return (
    <div className="relative h-110 w-full" style={{ perspective: "1400px" }}>
      <div
        className="relative h-full w-full duration-700"
        style={{
          transformStyle: "preserve-3d",
          transform: showDetails ? "rotateY(180deg)" : "rotateY(0deg)",
          willChange: "transform",
        }}
      >
        {/* ================= FRONT ================= */}
        <div
          className="absolute inset-0 overflow-hidden border border-cyan-400/10 bg-[#071018]/80 backdrop-blur-xl"
          style={{
            backfaceVisibility: "hidden",
            clipPath:
              "polygon(22px 0,100% 0,100% calc(100% - 22px),calc(100% - 22px) 100%,0 100%,0 22px)",
          }}
        >
          {/* Info Button */}
          <button
            onClick={toggleDetails}
            className="absolute top-4 right-4 z-20 flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/20 bg-black/60 text-cyan-300 transition hover:border-cyan-400 hover:bg-cyan-400/10"
          >
            <AppIcons.info />
          </button>

          {/* Image */}
          <div className="relative h-70 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="h-full w-full object-cover transition duration-500 hover:scale-105"
            />

            <div className="absolute inset-0 bg-linear-to-t from-[#071018] via-[#07101830] to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-2xl font-bold text-white">
                {project.title}
              </h3>
            </div>
          </div>

          {/* Buttons */}
          <div className="p-6 flex flex-wrap gap-3">
            <a
              href={githubUrl}
              target="_blank"
              rel="noreferrer"
              className="glass-button flex-1 justify-center"
            >
              <AppIcons.github />
              Source Code
            </a>

            {demoUrl && demoUrl !== "" && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noreferrer"
                className="gradient-button flex-1 justify-center"
              >
                <AppIcons.external />
                Live Demo
              </a>
            )}
          </div>
        </div>

        {/* ================= BACK ================= */}
        <div
          className="absolute inset-0 overflow-hidden border border-cyan-400/20 bg-[#071018] backdrop-blur-xl"
          style={{
            transform: "rotateY(180deg)",
            backfaceVisibility: "hidden",
            clipPath:
              "polygon(22px 0,100% 0,100% calc(100% - 22px),calc(100% - 22px) 100%,0 100%,0 22px)",
          }}
        >
          {/* Close */}
          <button
            onClick={toggleDetails}
            className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full border border-cyan-400/20 bg-black/60 text-cyan-300 transition hover:border-cyan-400 hover:bg-cyan-400/10"
          >
            <AppIcons.close />
          </button>

          <div className="flex h-full flex-col p-7">
            <h3 className="text-2xl font-bold text-white">{project.title}</h3>

            <p className="mt-5 flex-1 overflow-y-auto pr-2 text-[15px] leading-7 text-zinc-400">
              {project.description}
            </p>

            <div className="mt-6">
              <p className="mb-3 text-xs uppercase tracking-[0.3em] text-cyan-400">
                Tech Stack
              </p>

              <div className="flex flex-wrap gap-2">
                {stack.map((tech) => (
                  <span
                    key={tech}
                    className="border border-cyan-400/10 bg-cyan-400/5 px-3 py-2 text-xs uppercase tracking-wider text-cyan-200"
                    style={{
                      clipPath:
                        "polygon(10px 0,100% 0,100% calc(100% - 10px),calc(100% - 10px) 100%,0 100%,0 10px)",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="glass-button flex-1 justify-center"
              >
                <AppIcons.github />
                Source Code
              </a>

              {demoUrl && demoUrl !== "" && (
                <a
                  href={demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="gradient-button flex-1 justify-center"
                >
                  <AppIcons.external />
                  Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default memo(ProjectCard);