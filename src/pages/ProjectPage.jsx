// import { useParams } from "react-router-dom";
// import { projects } from "../data/project";

// const ProjectPage = () => {
//     const { id } = useParams();
//     const project = projects.find((p) => p.id === id);

//     if (!project)
//         return (
//             <p className="text-center py-40 text-zinc-400">
//                 Project not found
//             </p>
//         );

//     return (
//         <section className="max-w-4xl mx-auto px-4 py-24 space-y-8">
//             <h1 className="text-4xl font-bold">
//                 {project.title}
//             </h1>

//             <img
//                 src={project.image}
//                 alt={project.title}
//                 className="rounded-xl border border-zinc-800"
//             />

//             <p className="text-zinc-400">
//                 {project.description}
//             </p>

//             <ul className="list-disc pl-6 space-y-2 text-zinc-300">
//                 {project.features.map((f) => (
//                     <li key={f}>{f}</li>
//                 ))}
//             </ul>

//             <div className="flex gap-4">
//                 <a
//                     href={project.github}
//                     className="px-5 py-2 rounded-lg border border-zinc-700 hover:border-zinc-500 transition"
//                 >
//                     GitHub
//                 </a>
//                 <a
//                     href={project.demo}
//                     className="px-5 py-2 rounded-lg bg-emerald-400 text-zinc-950 font-medium hover:bg-emerald-300 transition"
//                 >
//                     Live Demo
//                 </a>
//             </div>
//         </section>
//     );
// };

// export default ProjectPage;
