"use client"

import { useState } from 'react';
import { IoChevronBackOutline } from "react-icons/io5";
import { RxOpenInNewWindow } from "react-icons/rx";
import { FaGithub, FaYoutube } from "react-icons/fa";

const Card = ({ title, img, description, technology, more,language,links }) => {
    const [isAccordionOpen, setIsAccordionOpen] = useState(false);

    const toggleAccordion = () => {
        setIsAccordionOpen(!isAccordionOpen);
    }

    return (
        <div className="relative max-w-xl rounded-lg p-5 bg-[#23222240] shadow-lg backdrop-blur-md transition-transform duration-300 transform hover:scale-105">
            <img className="rounded-t-lg" src={img} alt="" />
            <div>
                <h5 className="my-2 text-lg font-bold tracking-tight text-white">
                    {title}
                </h5>
                <p className="mb-2 font-normal text-white">
                    {description}
                </p>
                <p className='mb-2 text-sm'>
                    <span className='text-[#FFC0CB]'>
                        {language === 'en' ? 'Technologies' : 'Tecnologías'}: {technology}
                    </span>
                </p>
                <div id="accordion-collapse" data-accordion="collapse">
                    <h2 id="accordion-collapse-heading-1">
                        <button
                            type="button"
                            className="flex items-center justify-start w-full gap-3 font-medium text-gray-500 hover:text-white rtl:text-right rounded-t-xl dark:text-gray-400"
                            onClick={toggleAccordion}
                            aria-expanded={isAccordionOpen}
                            aria-controls="accordion-collapse-body-1"
                        >
                            <span>{language === 'en' ? 'Read More' : 'Leer Más'}</span>
                            <svg
                                data-accordion-icon
                                className={`w-3 h-3 ${isAccordionOpen ? 'rotate-180' : ''} shrink-0`}
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 10 6"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 5 5 1 1 5"
                                />
                            </svg>
                        </button>
                    </h2>
                    <div
                        id="accordion-collapse-body-1"
                        className={`absolute inset-0 p-10 overflow-y-scroll rounded-lg bg-[#020202] transition-opacity duration-300 ${isAccordionOpen ? 'opacity-90' : 'opacity-0 pointer-events-none'}`}
                        aria-labelledby="accordion-collapse-heading-1"
                    >
                        <div>
                            <button onClick={toggleAccordion} className='flex items-center gap-1 font-medium text-gray-500 hover:text-white'>
                                <IoChevronBackOutline className='w-5 h-auto' />{language === 'en' ? 'Go Back' : 'Volver'}
                            </button>
                            <p className="p-2 my-2 text-sm text-white md:text-base md:p-10">
                                {more}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center gap-2 pt-5'>
                {title === 'Hobbify' ? '' :<a href={links.deploy} target="_blank" ><button className='px-2 py-1 text-xs md:text-base text-black border flex items-center gap-1 border-transparent hover:bg-[#f78e9f] bg-[#FFC0CB] rounded-lg shadow-lg'><RxOpenInNewWindow /> {language === 'en' ? 'Deploy' : 'Despliegue'}</button></a> }
                {title === 'Etch a Sketch' ? '' :<a href={links.yt} target="_blank" ><button className='flex items-center gap-1 px-2 py-1 text-xs text-black bg-white border-2 border-white rounded-lg shadow-md md:text-base hover:bg-gray-400 hover:border-gray-400'><FaYoutube /> YouTube</button></a> }
                <a href={links.gh} target="_blank" ><button className='flex items-center gap-1 px-2 py-1 text-xs border-2 border-white rounded-lg shadow-md md:text-base hover:bg-gray-700'><FaGithub /> Github</button></a>
            </div>
        </div>
    );
}

export default Card;


