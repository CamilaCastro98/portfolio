"use client";

import { PiDownloadSimpleLight } from "react-icons/pi";
import { useContext } from 'react';
import { MyContext } from '@/context/Context';

const translations = {
  es: {
    experience: "Experiencia",
    downloadCV: "Descargar CV",
    education: "Tercer año de la Licenciatura en Astronomía (no completada) - universidad UNSJ",
    educationDescription: "Desarrollé conocimientos sólidos en Matemática, Cálculo, Álgebra y Física. Aprendí pseudocódigo y Fortran, programación aplicada a las ciencias duras.",
    audiovisualWork: "Trabajos como Editora y Productora Audiovisual",
    audiovisualWorkDescription: "Con una tecnicatura integral del audiovisual, me desempeñé en numerosos trabajos audiovisuales trabajando en equipo, gestionando proyectos y editando cortometrajes y animaciones para clientes particulares, especializándome en la utilización del paquete de Adobe.",
    bootcamp: "Realización del Henry Bootcamp",
    bootcampDescription: "Perfeccioné y orienté mis conocimientos de programación hacia el desarrollo web integral, especializándome en el frontend y realizando numerosos trabajos individuales y en equipo.",
    clientWork: "Trabajos en Desarrollo Frontend Para Cliente Particular",
    clientWorkDescription: "Desarrollo en equipo de la página web de la academia de Artes Marciales Long Hun (Buenos Aires, Argentina), desarrollada con Next y Tailwind.",
    period1: "2017 - 2020",
    period2: "2020 - 2023",
    period3: "Abril 2024 - Julio 2024",
    period4: "Julio 2024",
    doc:"/docs/ES/CAMILA CASTRO GIMENEZ.pdf"
  },
  en: {
    experience: "Experience",
    downloadCV: "Download CV",
    education: "Third Year Bachelor’s Degree in Astronomy (not completed) - UNSJ university",
    educationDescription: "Gained solid knowledge in Mathematics, Calculus, Algebra, and Physics. Learned pseudocode and Fortran, programming applied to hard sciences.",
    audiovisualWork: "Work as a Video Editor and Producer",
    audiovisualWorkDescription: "With a comprehensive audiovisual technical degree, I worked on numerous audiovisual projects, managing projects and editing short films and animations for private clients, specializing in Adobe suite usage.",
    bootcamp: "Henry Bootcamp Completion",
    bootcampDescription: "Refined and directed my programming knowledge towards full-stack web development, specializing in frontend and completing numerous individual and team projects.",
    clientWork: "Frontend Development Work for Private Client",
    clientWorkDescription: "Team development of the Long Hun Martial Arts Academy website (Buenos Aires, Argentina), developed with Next and Tailwind.",
    period1: "2017 - 2020",
    period2: "2020 - 2023",
    period3: "April 2024 - July 2024",
    period4: "July 2024",
    doc:"/docs/EN/CAMILA CASTRO GIMENEZ.pdf"
  }
};

const Experience = () => {
  const { language } = useContext(MyContext);

  return (
    <div className="flex flex-col items-center gap-5">
      <h2 className="mt-16 text-lg md:text-2xl lg:text-4xl">{translations[language].experience}</h2>
      <a href={translations[language].doc} download>
        <button className='px-2 py-1 text-black border flex items-center gap-1 border-transparent hover:bg-[#f78e9f] bg-[#FFC0CB] rounded-lg shadow-lg font-medium'>
          <PiDownloadSimpleLight className="w-5 h-auto"/> 
          {translations[language].downloadCV}
        </button>
      </a>
      <div>
        <ol className="relative border-s-2 border-[#FCB3AD]"> 
          <li className="mb-10 ms-4 shadow-lg backdrop-blur-md bg-[#23222240] rounded-lg">
            <div className="absolute w-3 h-3 bg-[#FCB3AD] rounded-full mt-1.5 -start-5.5"></div>
            <p className="mb-1 p-3 text-xs md:text-sm font-normal rounded-tl-lg rounded-tr-lg bg-[#131313] w-full leading-none text-gray-400 dark:text-gray-500">{translations[language].period1}</p>
            <h3 className="p-3 text-base font-semibold text-white md:text-lg">{translations[language].education}</h3>
            <p className="p-3 mb-4 text-sm font-normal text-gray-400 md:text-base dark:text-gray-400">{translations[language].educationDescription}</p>
          </li>                
          <li className="mb-10 ms-4 shadow-lg backdrop-blur-md bg-[#23222240] rounded-lg">
            <div className="absolute w-3 h-3 bg-[#FCB3AD] rounded-full mt-1.5 -start-5.5"></div>
            <p className="mb-1 p-3 text-xs md:text-sm font-normal rounded-tl-lg rounded-tr-lg bg-[#131313] w-full leading-none text-gray-400 dark:text-gray-500">{translations[language].period2}</p>
            <h3 className="p-3 text-base font-semibold text-white md:text-lg">{translations[language].audiovisualWork}</h3>
            <p className="p-3 mb-4 text-sm font-normal text-gray-400 md:text-base dark:text-gray-400">{translations[language].audiovisualWorkDescription}</p>
          </li>
          <li className="mb-10 ms-4 shadow-lg backdrop-blur-md bg-[#23222240] rounded-lg">
            <div className="absolute w-3 h-3 bg-[#FCB3AD] rounded-full mt-1.5 -start-5.5"></div>
            <p className="mb-1 p-3 text-xs md:text-sm font-normal rounded-tl-lg rounded-tr-lg bg-[#131313] w-full leading-none text-gray-400 dark:text-gray-500">{translations[language].period3}</p>
            <h3 className="p-3 text-base font-semibold text-white md:text-lg">{translations[language].bootcamp}</h3>
            <p className="p-3 mb-4 text-sm font-normal text-gray-400 md:text-base dark:text-gray-400">{translations[language].bootcampDescription}</p>
          </li>
          <li className="mb-10 ms-4 shadow-lg backdrop-blur-md bg-[#23222240] rounded-lg">
            <div className="absolute w-3 h-3 bg-[#FCB3AD] rounded-full mt-1.5 -start-5.5"></div>
            <p className="mb-1 p-3 text-xs md:text-sm font-normal rounded-tl-lg rounded-tr-lg bg-[#131313] w-full leading-none text-gray-400 dark:text-gray-500">{translations[language].period4}</p>
            <h3 className="p-3 text-base font-semibold text-white md:text-lg">{translations[language].clientWork}</h3>
            <p className="p-3 mb-4 text-sm font-normal text-gray-400 md:text-base dark:text-gray-400">{translations[language].clientWorkDescription}</p>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Experience;
