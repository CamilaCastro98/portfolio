"use client";

import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaFigma, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiVite, SiExpress, SiMongodb, SiTypescript, SiJavascript, SiPostman, SiJest, SiAdobephotoshop, SiAdobeaftereffects, SiAdobepremierepro } from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";
import { RiEnglishInput } from "react-icons/ri";
import { useContext } from 'react';
import { MyContext } from '@/context/Context';

const translations = {
  es: {
    skills: "Habilidades",
    frontend: "Frontend",
    backend: "Backend",
    generalTools: "Herramientas Generales",
    html: "HTML",
    css: "CSS",
    javascript: "JavaScript",
    typescript: "TypeScript",
    react: "React",
    vite: "Vite",
    nextjs: "NextJS",
    bootstrap: "Bootstrap",
    tailwind: "Tailwind",
    figma: "Figma",
    nodejs: "Node.js",
    express: "ExpressJS",
    mongodb: "MongoDB",
    git: "Git",
    vscode: "VSC",
    postman: "Postman",
    jest: "Jest",
    adobeTools: "Herramientas de Adobe",
    englishLevel: "Inglés B2"
  },
  en: {
    skills: "Skills",
    frontend: "Frontend",
    backend: "Backend",
    generalTools: "General Tools",
    html: "HTML",
    css: "CSS",
    javascript: "JavaScript",
    typescript: "TypeScript",
    react: "React",
    vite: "Vite",
    nextjs: "NextJS",
    bootstrap: "Bootstrap",
    tailwind: "Tailwind",
    figma: "Figma",
    nodejs: "Node.js",
    express: "ExpressJS",
    mongodb: "MongoDB",
    git: "Git",
    vscode: "VSC",
    postman: "Postman",
    jest: "Jest",
    adobeTools: "Adobe Tools",
    englishLevel: "English B2"
  }
};

const Skills = () => {
  const { language } = useContext(MyContext);

  return (
    <div className="">
      <div className="flex flex-col items-center">
        <h2 className="mt-16 text-lg md:text-2xl lg:text-4xl">{translations[language].skills}</h2> 
        <div className="py-5 md:p-5">
          <ul className="md:grid md:grid-cols-2 bg-[#23222240] rounded-lg">
            <li className="z-10 shadow-lg backdrop-blur-md hover:bg-[#FFC0CB30] rounded-tr-lg md:rounded-tr-none rounded-tl-lg flex flex-col items-center">
              <p className="w-full text-center text-sm md:text-base lg:text-xl rounded-tl-lg rounded-tr-lg md:rounded-tr-none bg-[#131313] p-2 md:p-5">{translations[language].frontend}</p>
              <ul className="flex flex-wrap justify-center gap-3 p-6 md:p-8 md:gap-5">
                <li className="flex flex-col items-center">
                  <FaHtml5 className="text-xl lg:text-4xl"/>
                  <p className="text-xs md:text-sm lg:text-base">{translations[language].html}</p>
                </li>
                <li className="flex flex-col items-center">
                  <FaCss3Alt className="text-xl lg:text-4xl"/>
                  <p className="text-xs md:text-sm lg:text-base">{translations[language].css}</p>
                </li>
                <li className="flex flex-col items-center">
                  <SiJavascript className="text-xl lg:text-4xl"/>
                  <p className="text-xs md:text-sm lg:text-base">{translations[language].javascript}</p>
                </li>
                <li className="flex flex-col items-center">
                  <SiTypescript className="text-xl lg:text-4xl"/>
                  <p className="text-xs md:text-sm lg:text-base">{translations[language].typescript}</p>
                </li>
                <li className="flex flex-col items-center">
                  <FaReact className="text-xl lg:text-4xl"/>
                  <p className="text-xs md:text-sm lg:text-base">{translations[language].react}</p>
                </li>
                <li className="flex flex-col items-center">
                  <SiVite className="text-xl lg:text-4xl"/>
                  <p className="text-xs md:text-sm lg:text-base">{translations[language].vite}</p>
                </li>
                <li className="flex flex-col items-center">
                  <SiNextdotjs className="text-xl lg:text-4xl"/>
                  <p className="text-xs md:text-sm lg:text-base">{translations[language].nextjs}</p>
                </li>
                <li className="flex flex-col items-center">
                  <FaBootstrap className="text-xl lg:text-4xl"/>
                  <p className="text-xs md:text-sm lg:text-base">{translations[language].bootstrap}</p>
                </li>
                <li className="flex flex-col items-center">
                  <SiTailwindcss className="text-xl lg:text-4xl"/>
                  <p className="text-xs md:text-sm lg:text-base">{translations[language].tailwind}</p>
                </li>
                <li className="flex flex-col items-center">
                  <FaFigma className="text-xl lg:text-4xl"/>
                  <p className="text-xs md:text-sm lg:text-base">{translations[language].figma}</p>
                </li>
              </ul>
            </li>
            <li className="z-10 shadow-lg backdrop-blur-md hover:bg-[#FFC0CB30] md:rounded-tr-lg flex flex-col items-center">
              <p className="w-full text-center text-sm md:text-base lg:text-xl md:rounded-tr-lg bg-[#131313] p-2 md:p-5">{translations[language].backend}</p>
              <ul className="flex flex-wrap justify-center gap-3 p-6 md:p-8 md:gap-5">
                <li className="flex flex-col items-center">
                  <FaNodeJs className="text-xl lg:text-4xl"/>
                  <p className="text-xs md:text-sm lg:text-base">{translations[language].nodejs}</p>
                </li>
                <li className="flex flex-col items-center">
                  <SiExpress className="text-xl lg:text-4xl"/>
                  <p className="text-xs md:text-sm lg:text-base">{translations[language].express}</p>
                </li>
                <li className="flex flex-col items-center">
                  <SiMongodb className="text-xl lg:text-4xl"/>
                  <p className="text-xs md:text-sm lg:text-base">{translations[language].mongodb}</p>
                </li>
              </ul>
            </li>
            <li className="z-10 col-span-2 shadow-lg backdrop-blur-md hover:bg-[#FFC0CB30] rounded-br-lg rounded-bl-lg flex flex-col items-center">
              <p className="w-full text-center text-sm md:text-base lg:text-xl bg-[#131313] p-2 md:p-5">{translations[language].generalTools}</p>
              <ul className="flex flex-wrap justify-center gap-3 p-6 md:p-8 md:gap-5">
                <li className="flex flex-col items-center">
                  <FaGitAlt className="text-xl lg:text-4xl"/>
                  <p className="text-xs md:text-sm lg:text-base">{translations[language].git}</p>
                </li>
                <li className="flex flex-col items-center">
                  <BiLogoVisualStudio className="text-xl lg:text-4xl"/>
                  <p className="text-xs md:text-sm lg:text-base">{translations[language].vscode}</p>
                </li>
                <li className="flex flex-col items-center">
                  <SiPostman className="text-xl lg:text-4xl"/>
                  <p className="text-xs md:text-sm lg:text-base">{translations[language].postman}</p>
                </li>
                <li className="flex flex-col items-center">
                  <SiJest className="text-xl lg:text-4xl"/>
                  <p className="text-xs md:text-sm lg:text-base">{translations[language].jest}</p>
                </li>
                <li className="flex flex-col items-center">
                  <div className="flex gap-2">
                    <SiAdobephotoshop className="text-xl lg:text-4xl"/>
                    <SiAdobeaftereffects className="text-xl lg:text-4xl"/>
                    <SiAdobepremierepro className="text-xl lg:text-4xl"/>
                  </div>
                  <p className="text-xs md:text-sm lg:text-base">{translations[language].adobeTools}</p>
                </li>
                <li className="flex flex-col items-center">
                  <RiEnglishInput className="text-xl lg:text-4xl"/>
                  <p className="text-xs md:text-sm lg:text-base">{translations[language].englishLevel}</p>
                </li>
              </ul>
            </li>
          </ul>         
        </div>
      </div>
    </div>
  );
}

export default Skills;
