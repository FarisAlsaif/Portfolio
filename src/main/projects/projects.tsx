import { ProjectType } from "../types";
import ProjectCard from "./project-card/project-card";

function Projects() {
  const projects: ProjectType[] = [
    {
      id: 1,
      name: "Project 1",
      usedTech: ["React", "TypeScript", "TailwindCSS"],
      img: "https://via.placeholder.com/150",
      description: "This is project 1",
      completed: false,
      backgroundColor: "bg-[#ED7854]",
      gitHubLink: "https://github.com",
      liveLink: "https://google.com",
    },
    {
      id: 2,
      name: "Project 2",
      usedTech: ["React", "TypeScript", "TailwindCSS"],
      img: "https://via.placeholder.com/150",
      description: "This is project 2",
      completed: false,
      backgroundColor: "bg-blue-500",
    },
  ];

  return (
    <>
      <div className="text-5xl font-medium">Latest Projects</div>
      <div className="flex flex-col gap-10">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <div>
        <button className="flex flex-row items-center justify-end w-full gap-2 text-base font-medium rounded-3xl ">
          View More
          <span className="material-symbols-outlined bg-[#F59e0b] rounded-full text-white p-3">
            arrow_right_alt
          </span>
        </button>
      </div>
    </>
  );
}

export default Projects;
