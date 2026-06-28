import React, { useMemo } from "react";
import ProjectCard from "../components/project/ProjectCard";

const Projects = ({ projects = [], title }) => {
    const projectList = useMemo(() => {
        return projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
        ));
    }, [projects]);

    return (
        <section id="projects" className="py-10">
            <div className="section">
                {/* Heading */}
                <div className="flex flex-col items-center lg:flex-row lg:items-end lg:justify-between gap-8">
                    <div>
                        <h2 className="mt-4 text-5xl md:text-6xl font-black uppercase leading-none">
                            {title} <span className="text-cyan-400">Projects</span>
                        </h2>
                    </div>
                </div>

                {/* Divider */}
                <div className="mt-12 h-px bg-linear-to-r from-cyan-400/30 via-cyan-400/10 to-transparent" />

                {/* Projects */}
                <div className="mt-15 grid gap-8 lg:grid-cols-2">
                    {projectList}
                </div>
            </div>
        </section>
    );
};

export default Projects;