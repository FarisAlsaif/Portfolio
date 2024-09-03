import { ProjectType } from "../types";
import ProjectCard from "./project-card/project-card";

import nyyf from "../../assets/Nyyf-project.png";
import logo from "../../assets/logo.png";
import taqsema from "../../assets/taqsema-project.png";
function Projects() {
  const projects: ProjectType[] = [
    {
      id: 1,
      name: "Taqsema",
      usedTech: ["Angular", "TypeScript", "AWS S3","AWS CloudFront", "AWS RDS", "AWS ECS", "AWS ALB"],
      img: taqsema,
      description: "This is project 1",
      completed: false,
      backgroundColor: "bg-white",
      // gitHubLink: "https://github.com/FarisAlsaif/Portfolio",
      liveLink: "https://taqsema.com/",
    },
    {
      id: 2,
      name: "Nyyf",
      usedTech: ["Angular", "Nodejs", "Python", "TailwindCSS"],
      img: nyyf,
      description: "This is project 2",
      completed: false,
      backgroundColor: "bg-[#176B87]",
      // gitHubLink: "https://github.com",
      liveLink: "https://www.nyyf.app",
    },
    {
      id: 3,
      name: "Faris Portfolio",
      usedTech: ["React", "TypeScript", "TailwindCSS"],
      img: logo,
      description: "This is project 3",
      completed: false,
      backgroundColor: "bg-white",
      gitHubLink: "https://github.com/FarisAlsaif/Portfolio",
      liveLink: "https://www.nyyf.app",
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
        <a
          href="https://github.com/FarisAlsaif/"
          className="flex flex-row items-center justify-end w-full gap-2 text-base font-medium rounded-3xl "
        >
          View More
          <span className="material-symbols-outlined bg-[#F59e0b] rounded-full text-white p-3">
            arrow_right_alt
          </span>
        </a>
      </div>
    </>
  );
}

export default Projects;
