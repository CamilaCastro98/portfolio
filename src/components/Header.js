"use client";

import CanvasLavaLamp from "./LavaLamp";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { useContext } from 'react';
import { MyContext } from '@/context/Context';

const translations = {
  es: {
    greeting: "¡Hola! Soy",
    role: "Desarrolladora Frontend",
    cv: "Mi CV",
    doc:"/docs/ES/CAMILA CASTRO GIMENEZ.pdf"
  },
  en: {
    greeting: "Hi! I'm",
    role: "Frontend Developer",
    cv: "My CV",
    doc:"/docs/EN/CAMILA CASTRO GIMENEZ.pdf"
  }
};

const Header = () => {
  const { language } = useContext(MyContext);

  return (
    <div className="relative h-[450px] md:h-[500px] lg:h-[600px] overflow-hidden bg-gradient-to-b from-transparent to-[#020202] flex justify-center">
      <CanvasLavaLamp />
      <div className="absolute gap-3 w-5/6 md:w-fit md:gap-2 md:mx-0 my-20 top-0 backdrop-blur-md bg-gradient-to-br from-[#FFC0CB60] via-[#FFC0CB30] to-[#FFC0CB10] z-10 shadow-lg rounded-lg flex flex-col justify-center items-center md:flex-row p-8 md:p-16 md:justify-around">
        <div className="flex flex-col md:gap-1 lg:gap-2">
          <h1 className="text-lg md:text-2xl lg:text-4xl">
            {translations[language].greeting} <span className="font-bold">Camila Castro</span>
          </h1>
          <p className="mb-2 text-sm md:text-lg lg:text-2xl">{translations[language].role}</p>
          <div className="hidden gap-3 md:flex">
            <a href="ruta-al-documento/documento.pdf" download className="flex items-center justify-center p-1 text-sm bg-black rounded-full lg:p-2 lg:text-base hover:bg-white hover:text-black">
              {translations[language].cv}
            </a>
            <a href='https://www.linkedin.com/in/camilacastrogimenez/' target="_blank" className="flex items-center justify-center w-8 h-8 p-2 bg-black rounded-full lg:w-10 lg:h-10 hover:bg-white hover:text-black">
              <FaLinkedinIn className="w-3 h-auto lg:w-5"/>
            </a>
            <a href='https://github.com/CamilaCastro98' target="_blank" className="flex items-center justify-center w-8 h-8 p-2 bg-black rounded-full lg:w-10 lg:h-10 hover:bg-white hover:text-black">
              <FaGithub className="w-3 h-auto lg:w-5"/>
            </a>
            <a href="https://wa.me/5492645326853" target="_blank" className="flex items-center justify-center w-8 h-8 p-2 text-white bg-black rounded-full lg:w-10 lg:h-10 hover:bg-white hover:text-black">
              <RiWhatsappFill className="w-3 h-auto lg:w-5"/>
            </a>
          </div>
        </div>
        <img src='/img/yo.jpg' className="object-cover w-32 h-32 rounded-full md:w-52 md:h-52 lg:w-64 lg:h-64" />
        <div className="flex gap-3 md:hidden">
          <a href={translations[language].doc} download className="flex items-center justify-center p-1 text-xs bg-black rounded-full lg:p-2 lg:text-base hover:bg-white hover:text-black">
            {translations[language].cv}
          </a>
          <a href='https://www.linkedin.com/in/camilacastrogimenez/' className="flex items-center justify-center w-8 h-8 p-2 bg-black rounded-full lg:w-10 lg:h-10 hover:bg-white hover:text-black">
            <FaLinkedinIn className="w-3 h-auto lg:w-5"/>
          </a>
          <a href='https://github.com/CamilaCastro98' className="flex items-center justify-center w-8 h-8 p-2 bg-black rounded-full lg:w-10 lg:h-10 hover:bg-white hover:text-black">
            <FaGithub className="w-3 h-auto lg:w-5"/>
          </a>
          <a href="https://wa.me/5492645326853" className="flex items-center justify-center w-8 h-8 p-2 text-white bg-black rounded-full lg:w-10 lg:h-10 hover:bg-white hover:text-black">
            <RiWhatsappFill className="w-3 h-auto lg:w-5"/>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;



