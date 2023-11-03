import Image from "next/image";

import projectData from "../../projects.json" assert { type: "json" };
import Link from "next/link";
import TechChip from "./TechChip";

import { Project } from "../../Project";
import LinkChip from "./LinkChip";

import { Metadata, ResolvingMetadata } from "next";

interface ProjectPageProps {
  params: {
    projectName: string;
  };
}

interface ProjectData {
  [key: string]: Project;
}

const projects: ProjectData = projectData;

interface ProjectName {
  projectName: string;
}

export async function generateStaticParams() {
  const namesDict: ProjectName[] = Object.keys(projects).map((p, i) => ({
    projectName: p,
  }));
  return namesDict;
}

export async function generateMetadata(
  { params }: ProjectPageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.projectName;

  return {
    title: projects[id].name,
    description: projects[id].description,
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const id = params.projectName;
  const path = projects[id].imagePath;

  return (
    <div className="p-1">
      <title>{projects[id].name}</title>
      <div id="title" className="flex flex-row justify-center p-10">
        <h1 className="text-5xl">{projects[id].name}</h1>
      </div>
      <div id="content-wrapper" className="flex flex-row justify-center">
        <div
          id="content"
          className="flex flex-row w-screen justify-center flex-wrap max-w-[1200px]"
        >
          <div
            id="picture"
            className="rounded-2xl overflow-hidden flex flex-row justify-center relative xl:w-[500px] xl:h-[500px] w-[400px] max-w-[500px] h-[400px] mx-5"
          >
            <Image
              src={path}
              alt="Picture"
              fill={true}
              priority={true}
              sizes="(min-width: 1280 px) 500px, 400px"
              style={{ objectFit: "cover" }}
            ></Image>
          </div>
          <div
            id="information"
            className="max-w-[500px] flex flex-col justify-between mx-5"
          >
            <h2 className="text-center text-3xl pb-4">Description</h2>
            <p className="px-2">{projects[id].description}</p>
            <h2 className="text-center text-3xl py-2">Tools Used</h2>
            <div id="tools" className="flex flex-row flex-wrap">
              {projects[id].tools.map((tool: string) => (
                <TechChip key={tool} name={tool} />
              ))}
            </div>
            <h2 className="text-center text-3xl py-2">Links</h2>
            <div id="tools" className="flex flex-row flex-wrap justify-around">
              {Object.entries(projects[id].links).map(([linkName, link]) => (
                <a key={linkName} href={link} target="_blank">
                  <LinkChip name={linkName} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div id="back" className="flex flex-row justify-center">
        <Link href="/#projects">
          <span className="text-8xl transition hover:opacity-50 hover:cursor-pointer">
            &larr;
          </span>
        </Link>
      </div>
    </div>
  );
}
