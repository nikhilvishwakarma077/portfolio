import ProjectCard from "../components/project/ProjectCard";


const Projects = ({ projects, title }) => {
    return (
        <div className="max-w-6xl mx-auto px-4 py-10">
            <h2 className="text-3xl font-bold mb-12">{title}</h2>

            <div className="grid md:grid-cols-2 gap-8">
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </div>
    );
};

export default Projects;
