"use client";

import { useContext } from 'react';
import { MyContext } from '@/context/Context';
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";

const translations = {
  es: {
    thankYou: "¡Gracias por leer!",
    mail: "Correo: camilacastrog98@gmail.com",
    phone: "Teléfono: +549 264 532 6853"
  },
  en: {
    thankYou: "Thank you for reading!",
    mail: "Mail: camilacastrog98@gmail.com",
    phone: "Phone: +549 264 532 6853"
  }
};

const Footer = () => {
  const { language } = useContext(MyContext);

  return (
    <div className="flex items-center justify-around p-5 bg-[#131313]">
      <ul>
        <li className="mb-3 text-xs font-semibold md:text-base">{translations[language].thankYou}</li>
        <li className="mb-1 text-xs font-light md:text-base">{translations[language].mail}</li>
        <li className="text-xs font-light md:text-base">{translations[language].phone}</li>
      </ul>
      <ul className="flex gap-2 md:gap-4">
        <li>
          <a href='https://www.linkedin.com/in/camilacastrogimenez/' target="_blank" className="flex items-center justify-center w-8 h-8 p-1 bg-black rounded-full md:w-10 md:h-10 md:p-2 hover:bg-white hover:text-black">
            <FaLinkedinIn className="w-3 h-auto md:w-5" />
          </a>
        </li>
        <li>
          <a href='https://github.com/CamilaCastro98' target="_blank" className="flex items-center justify-center w-8 h-8 p-1 bg-black rounded-full md:w-10 md:h-10 md:p-2 hover:bg-white hover:text-black">
            <FaGithub className="w-3 h-auto md:w-5" />
          </a>
        </li>
        <li>
          <a href="https://wa.me/5492645326853" target="_blank" className="flex items-center justify-center w-8 h-8 p-1 text-white bg-black rounded-full md:w-10 md:h-10 md:p-2 hover:bg-white hover:text-black">
            <RiWhatsappFill className="w-3 h-auto md:w-5" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
