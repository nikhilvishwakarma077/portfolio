import React from 'react'

const ProjectCard = ({ project }) => {


  return (
    <div className="group rounded-xl border border-zinc-800 bg-zinc-900 overflow-hidden hover:border-emerald-400/50 transition hover:scale-102 duration-200">
      <img
        src={project.image}
        alt={project.title}
        className="h-48 w-full object-cover transition"
      />

      <div className="p-5 space-y-3">
        <h3 className="text-lg font-semibold">{project.title}</h3>

        <p className="text-sm text-zinc-400">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-1 rounded bg-zinc-800 text-zinc-300"
            >
              {tech}
            </span>
          ))}
        </div>

        <a
          href={`${project.githublink}`}
          target='_blank'
          className="inline-block text-sm my-5 mr-5 text-emerald-400 hover:underline cursor-pointer"
        >
          View details 
        </a>

        <a

          href={`${project.demo}`}
          target="_blank"
          
          className={`px-4 py-2 rounded-lg bg-emerald-400 text-zinc-950 font-medium hover:bg-emerald-300 transition ${project.demo==="" ? "hidden":""}
            `}
        >
          Live Demo
        </a>

      </div>
    </div>
  )
}

export default ProjectCard
