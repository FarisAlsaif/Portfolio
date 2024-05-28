import { ProjectType } from "../../types";

function ProjectCard({ project }: { project: ProjectType }) {
  return (
    <div className="flex flex-col items-start w-full gap-3">
      <h3 className="text-3xl font-medium">{project.name}</h3>
      <div className="flex flex-row flex-wrap w-full">
        {project.usedTech.map((tech) => (
          <span
            key={tech}
            className="px-4 py-2 mr-2 text-base text-white bg-[#38bdf8] rounded-3xl"
          >
            {tech}
          </span>
        ))}
      </div>
      <div
        className={`px-4 pt-12 pb-8 ${project.backgroundColor} w-full rounded-3xl `}
      >
        <img
          className="object-cover w-full rounded-3xl h-52"
          src={project.img}
          alt={project.name}
        />
      </div>
      <div className="flex flex-row gap-4 text-base font-medium ">
        {project.gitHubLink && (
          <a
            href={project.gitHubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1"
          >
            <p className="">GitHub</p>
            <svg
              height="20"
              width="20"
              viewBox="0 0 16 16"
              version="1.1"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.19 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
              ></path>
            </svg>
          </a>
        )}
        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1"
          >
            Visit
            <span className="flex items-center justify-center pt-1 material-symbols-outlined">
              link
            </span>
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
