import React from 'react'

const ProjectCard = ({ project }) => {


  return (
    <div className="group rounded-xl border border-zinc-800 bg-zinc-900 overflow-hidden hover:border-emerald-400/50 transition">
      <img
        src={project.image}
        alt={project.title}
        className="h-48 w-full object-cover grayscale group-hover:grayscale-0 transition"
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
          className="inline-block text-sm text-emerald-400 hover:underline cursor-pointer"
        >
          View details →
        </a>
       
      </div>
    </div>
  )
}

export default ProjectCard
