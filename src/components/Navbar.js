"use client";

import { useState, useContext, useEffect } from 'react';
import { MyContext } from '@/context/Context';

const translations = {
  es: {
    skills: "Habilidades",
    experience: "Experiencia",
    projects: "Proyectos",
    about: "Sobre Mí",
    talk: "¡Hablemos!"
  },
  en: {
    skills: "Skills",
    experience: "Experience",
    projects: "Projects",
    about: "About Me",
    talk: "Let's Talk!"
  }
};

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [nestedDropdownOpen, setNestedDropdownOpen] = useState(false);
  const { language, setLanguage } = useContext(MyContext);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleNestedDropdown = () => {
    setNestedDropdownOpen(!nestedDropdownOpen);
  };

  const handleChange = () => {
    setLanguage(language === 'es' ? 'en' : 'es');
  };

  useEffect(() => {}, [language]);

  return (
    <nav className="fixed flex z-40 w-full bg-opacity-95 bg-[#020202]">
      <div className="flex flex-wrap items-center justify-center max-w-screen-xl p-4 mx-auto">
        <button
          type="button"
          className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-expanded="false"
          onClick={toggleDropdown}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className={`w-full flex justify-center md:block md:w-auto ${dropdownOpen ? 'block' : 'hidden'}`}>
          <ul className="flex flex-col p-4 mt-4 font-medium rounded-lg md:p-0 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
              <a href="#skills" className="block w-full px-3 py-2 rounded md:hover:bg-transparent md:border-0 hover:text-[#f78e9f] md:p-0 text-white" aria-current="page">
                {translations[language].skills}
              </a>
            </li>
            <li>
              <a href="#experience" className="block px-3 py-2 rounded md:hover:bg-transparent md:border-0 hover:text-[#f78e9f] md:p-0 text-white">
                {translations[language].experience}
              </a>
            </li>
            <li>
              <a href="#projects" className="block px-3 py-2 rounded md:hover:bg-transparent md:border-0 hover:text-[#f78e9f] md:p-0 text-white">
                {translations[language].projects}
              </a>
            </li>
            <li>
              <a href="#about" className="block px-3 py-2 rounded md:hover:bg-transparent md:border-0 hover:text-[#f78e9f] md:p-0 text-white">
                {translations[language].about}
              </a>
            </li>
            <li className="relative">
              <button
                className="flex items-center justify-between w-full px-3 py-2 rounded md:hover:bg-transparent md:border-0 hover:text-[#f78e9f] md:p-0 md:w-auto text-white"
                onClick={toggleNestedDropdown}
              >
                {translations[language].talk}
                <svg className="w-2.5 h-2.5 ml-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>
              <div className={`absolute left-0 mt-2 w-44 bg-[#131313] divide-y divide-gray-100 rounded-lg shadow dark:divide-gray-600 ${nestedDropdownOpen ? 'block' : 'hidden'}`}>
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                  <li>
                    <a href="https://www.linkedin.com/in/camilacastrogimenez/" target="_blank" className="block px-4 py-2 dark:hover:bg-gray-600 dark:hover:text-white">LinkedIn</a>
                    <a href="https://wa.me/5492645326853" target="_blank" className="block px-4 py-2 dark:hover:bg-gray-600 dark:hover:text-white">Whatsapp</a>
                  </li>
                </ul>
              </div>
            </li>
            <label className="inline-flex items-center mt-3 ml-3 cursor-pointer md:mt-0 md:ml-0">
              <input type="checkbox" value="" onChange={handleChange} className="sr-only peer"/>
              <div className={`relative w-11 h-6 bg-yellow-500 text-black flex items-center peer-focus:outline-none px-0.5 text-sm rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 ${language === 'es' ? 'switch-circle-es' : 'switch-circle-en'}`}
              ></div>
            </label>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

