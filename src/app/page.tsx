"use client";

import Image from "next/image";

import profile_picture from "public/profile_luxin1.jpg";

import { faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";

import { Project } from "./Project";
import ProjectCard from "./ProjectCard";
import Arrow from "./Arrow";

import projectData from "./projects.json" assert { type: "json" };

import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

interface ProjectData {
  [key: string]: Project;
}

const projectsDict: ProjectData = projectData;

export default function Home() {
  return (
    <div id="index_wrapper" className="flex flex-col w-screen items-center">
      <div
        id="main_content"
        className="flex flex-col mt-5 md:mt-0 max-w-3xl h-fit md:h-[80vh] items-center justify-center"
      >
        <div
          id="picture_name_links"
          className="flex flex-row flex-wrap justify-center"
        >
          <div id="picture" className="rounded-2xl">
            <Image
              title="Picture"
              src={profile_picture}
              alt="Profile Picture"
              priority={true}
              className="rounded-2xl w-52 md:w-80"
            />
          </div>
          <div id="name_links" className="py-2 px-5 flex flex-col items-center">
            <div
              id="name"
              className="text-center text-5xl md:text-9xl md:text-left w-80"
            >
              Luxin Zhang
            </div>
            <div
              id="links"
              className="w-52 md:w-full m-2 flex flex-row justify-between rounded-xl border-4 border-black p-2 md:p-5"
            >
              <a href="https://www.linkedin.com/in/luxin-zhang-96777b192/">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size="2x"
                  className="transition hover:text-emerald-300"
                />
              </a>
              <a href="https://github.com/LuxinZhang902">
                <FontAwesomeIcon
                  icon={faGithub}
                  size="2x"
                  className="transition hover:text-emerald-300"
                />
              </a>
              <a href="mailto:philomela.zhang@gmail.com">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  size="2x"
                  className="transition hover:text-emerald-300"
                />
              </a>
              <a href="SDE_Luxin_1027.pdf">
                <FontAwesomeIcon
                  icon={faFile}
                  size="2x"
                  className="transition hover:text-emerald-300"
                />
              </a>
            </div>
          </div>
        </div>
        <div id="about_text" className="px-4 text-left w-full md:pt-4">
          <hr className="border-2 border-black w-full my-1" />
          Hi! I’m an MS in Electrical & Computer Engineering (ECE) student and
          recent ECE, CS graduate at Duke University. I enjoy solving difficult
          problems and building creative technical solutions. Please feel free
          to explore some of my past projects!
          <hr className="border-2 border-black w-full my-1" />
        </div>
      </div>
      <div
        id="down_arrow"
        className="flex flex-row justify-center my-3 h-fit md:h-[20vh]"
      >
        <Arrow />
      </div>
      <div id="projects" className="flex flex-col items-center">
        <div id="projects_title" className="text-center w-full mb-5 text-5xl">
          Projects
        </div>
        <div
          id="project_cards"
          className="flex flex-row flex-wrap justify-around max-w-7xl"
        >
          {Object.entries(projectsDict).map(([id, project]) => (
            <div key={id} className="rounded-xl p-5 border-2 border-black m-5">
              <div className="w-72 lg:w-80 text-center text-lg font-bold pb-2">
                {project.name}
              </div>
              <div className="rounded-xl overflow-hidden">
                <ProjectCard id={id} project={project} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
