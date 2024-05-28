import arrowSvg from "../../assets/arrow.svg";
import myImage from "../../assets/my-image.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faReact,
  faAngular,
  faNodeJs,
  faJava,
  faPython,
  faAws,
  faDocker,
} from "@fortawesome/free-brands-svg-icons";
import { SkillType } from "../types";

const skills: SkillType[] = [
  {
    name: "React",
    icon: faReact,
    backgroundColor: "bg-blue-500",
  },
  {
    name: "Angular",
    icon: faAngular,
    backgroundColor: "bg-red-500",
  },
  {
    name: "NodeJS",
    icon: faNodeJs,
    backgroundColor: "bg-green-500",
  },
  {
    name: "Java",
    icon: faJava,
    backgroundColor: "bg-[#007396]",
  },
  {
    name: "Python",
    icon: faPython,
    backgroundColor: "bg-[#3776AB]",
  },
  {
    name: "AWS",
    icon: faAws,
    backgroundColor: "bg-[#FF9900]",
  },
  {
    name: "Docker",
    icon: faDocker,
    backgroundColor: "bg-[#2496ED]",
  },
];

function AboutMe() {
  return (
    <div className="flex flex-col gap-4">
      <div className="relative">
        <h1 className="relative z-10 text-6xl font-medium text-left">
          About
          <br />
          me
        </h1>
        <img
          src={arrowSvg}
          alt="My SVG"
          className="absolute top-0 z-0 w-40 right-52"
        />
      </div>
      <div>
        <img src={myImage} alt="" />
      </div>
      <div className="flex flex-row gap-4">
        <div className="w-6 bg-black rounded-xl"></div>
        <div>
          <p className="text-lg leading-relaxed text-left text-gray-800">
            I am an{" "}
            <span className="font-semibold text-[#F59e0b]">
              Honors Software Engineering
            </span>{" "}
            fresh graduate from{" "}
            <span className="font-bold text-[#F59e0b]">KFUPM</span> specializing
            in cloud computing. I am passionate about programming and skilled in
            cloud architecture and software development.
          </p>
        </div>
      </div>
      <div className="p-6">
        <h1 className="mb-6 text-5xl font-medium text-left">Skills</h1>
        <div className="flex flex-wrap justify-between gap-4">
          {skills.map((skill) => (
            <div className="flex flex-col gap-2">
              <div
                key={skill.name}
                className={`flex flex-col items-center   shadow-lg  justify-center gap-2 p-4 rounded-3xl ${skill.backgroundColor} text-white w-20 h-20 `}
              >
                <FontAwesomeIcon icon={skill.icon} size="4x" />
              </div>
              <p className="text-base font-medium">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
