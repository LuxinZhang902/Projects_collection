"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

import profile_picture from "public/profile_luxin1.jpg";

import { faEnvelope, faFile, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
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

interface CategorizedProjectData {
  [category: string]: ProjectData;
}

const categorizedProjects: CategorizedProjectData = projectData;

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem('theme', newMode ? 'dark' : 'light');
  };

  if (!mounted) return null;
  return (
    <div id="index_wrapper" className={`flex flex-col w-screen items-center transition-colors duration-500 ${
      isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'
    }`}>
      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className={`fixed top-6 right-6 z-50 p-3 rounded-xl border-2 border-black shadow-lg transition-all duration-300 hover:scale-110 ${
          isDarkMode 
            ? 'bg-white text-black hover:bg-gray-100' 
            : 'bg-black text-white hover:bg-gray-800'
        }`}
      >
        <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} size="lg" />
      </button>

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
              className={`w-52 md:w-full m-2 flex flex-row justify-between rounded-xl border-4 p-2 md:p-5 ${
                isDarkMode ? 'border-white' : 'border-black'
              }`}
            >
              <a href="https://www.linkedin.com/in/luxin-zhang-96777b192/">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  size="2x"
                  className={`transition ${
                    isDarkMode ? 'text-white hover:text-emerald-300' : 'text-black hover:text-emerald-300'
                  }`}
                />
              </a>
              <a href="https://github.com/luxinlabs">
                <FontAwesomeIcon
                  icon={faGithub}
                  size="2x"
                  className={`transition ${
                    isDarkMode ? 'text-white hover:text-emerald-300' : 'text-black hover:text-emerald-300'
                  }`}
                />
              </a>
              <a href="mailto:philomela.zhang@gmail.com">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  size="2x"
                  className={`transition ${
                    isDarkMode ? 'text-white hover:text-emerald-300' : 'text-black hover:text-emerald-300'
                  }`}
                />
              </a>
              <a href="SDE_Luxin_1027.pdf">
                <FontAwesomeIcon
                  icon={faFile}
                  size="2x"
                  className={`transition ${
                    isDarkMode ? 'text-white hover:text-emerald-300' : 'text-black hover:text-emerald-300'
                  }`}
                />
              </a>
            </div>
          </div>
        </div>
        <div id="about_text" className="px-4 text-left w-full md:pt-4">
          <hr className={`border-2 w-full my-1 ${
            isDarkMode ? 'border-white' : 'border-black'
          }`} />
          Hi! I&apos;m an MEng in Electrical & Computer Engineering (ECE) student at Duke. 
          I am focused on full-stack development, web application development, and I also have experience
          in image algorithms(clarity, sharpness, noise), and AI algorithms. I enjoy exploring cutting-edge technologies!
          Please feel free to explore some of my past projects!
          <hr className={`border-2 w-full my-1 ${
            isDarkMode ? 'border-white' : 'border-black'
          }`} />
        </div>
      </div>
      <div
        id="down_arrow"
        className="flex flex-row justify-center my-3 h-fit md:h-[20vh]"
      >
        <Arrow />
      </div>
      <div 
        id="projects" 
        className="flex flex-col items-center w-full px-4 pb-20"
      >
        <div className={`w-full py-12 mb-8 ${
          isDarkMode ? 'bg-gray-800' : 'bg-gray-50'
        }`}>
          <h2 className="text-center w-full mb-8 text-5xl font-bold">
            My Projects
          </h2>
          
          {/* Category Tabs - Horizontal Scroll */}
          <div className="w-full overflow-x-auto pb-4">
            <div className="flex justify-center gap-3 min-w-max px-4 mx-auto" style={{ width: 'fit-content' }}>
              {Object.keys(categorizedProjects).map((category) => (
                <a
                  key={category}
                  href={`#${category.toLowerCase().replace(/\s+/g, '-')}`}
                  className={`px-6 py-3 rounded-xl border-2 font-semibold transition-all duration-300 hover:scale-105 whitespace-nowrap ${
                    isDarkMode 
                      ? 'border-white bg-transparent text-white hover:bg-white hover:text-black' 
                      : 'border-black bg-transparent text-black hover:bg-black hover:text-white'
                  }`}
                >
                  {category}
                </a>
              ))}
            </div>
          </div>
        </div>
        {Object.entries(categorizedProjects).map(([category, projects], categoryIndex) => (
          <div 
            key={category}
            id={category.toLowerCase().replace(/\s+/g, '-')}
            className="w-full max-w-7xl mb-12 scroll-mt-24"
          >
            <div className={`flex flex-col md:flex-row gap-8 p-8 rounded-3xl shadow-2xl ${
              isDarkMode 
                ? 'bg-gray-800 border-2 border-gray-700' 
                : 'bg-white border-2 border-gray-200'
            }`}>
              {/* Category Name on the Left */}
              <div className="md:w-64 flex-shrink-0">
                <div className={`sticky top-24 p-8 rounded-2xl border-4 shadow-2xl transition-all duration-300 ${
                  isDarkMode 
                    ? 'border-white bg-black text-white' 
                    : 'border-black bg-white text-black'
                }`}>
                  <h3 className="text-2xl md:text-3xl font-bold text-center break-words">
                    {category}
                  </h3>
                  <div className={`mt-6 pt-4 border-t-2 ${
                    isDarkMode ? 'border-white' : 'border-black'
                  }`}>
                    <p className="text-sm text-center font-semibold">
                      {Object.keys(projects).length} {Object.keys(projects).length === 1 ? 'Project' : 'Projects'}
                    </p>
                  </div>
                </div>
              </div>

              {/* Projects Grid on the Right */}
              <div className="flex-1">
                <div className="flex flex-row flex-wrap justify-center md:justify-start gap-6">
                  {Object.entries(projects).map(([id, project], projectIndex) => (
                    <div 
                      key={id}
                      className={`rounded-2xl p-6 border-3 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                        isDarkMode 
                          ? 'border-2 border-gray-600 bg-gray-700 hover:border-white' 
                          : 'border-2 border-gray-300 bg-white hover:border-black'
                      }`}
                    >
                      <div className={`w-72 lg:w-80 text-center text-lg font-bold pb-3 ${
                        isDarkMode ? 'text-white' : 'text-black'
                      }`}>
                        {project.name}
                      </div>
                      <div className="rounded-xl overflow-hidden shadow-lg border-2 border-gray-200">
                        <ProjectCard id={id} project={project} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
