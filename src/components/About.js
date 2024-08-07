"use client";

import { useContext } from 'react';
import { MyContext } from '@/context/Context';

const translations = {
  es: {
    aboutMe: "Sobre Mí",
    introduction: "¡Hola! Soy Camila, tengo 25 años y vivo en San Juan, Argentina. Mi trayectoria profesional ha sido diversa, desde la edición y producción audiovisual hasta el desarrollo web. Me enamoré de la programación en el minuto en que me enseñaron pseudocódigo, y continué desarrollando conocimientos autodidactas hasta que pude especializarme y profundizar en el desarrollo frontend, que es mi mayor pasión.",
    contactMe: "¡Espero poder conocerte, no dudes en contactarme! :)"
  },
  en: {
    aboutMe: "About Me",
    introduction: "Hi! I’m Camila, I’m 25 years old and I live in San Juan, Argentina. My professional journey has been diverse, from audiovisual editing and production to web development. I fell in love with programming the moment I was taught pseudocode and continued to develop self-taught knowledge until I could specialize and delve into frontend development, which is my greatest passion.",
    contactMe: "I hope to meet you, feel free to contact me! :)"
  }
};

const About = () => {
  const { language } = useContext(MyContext);

  return (
    <div className="flex flex-col items-center gap-5 mb-10">
      <h2 className="mt-16 text-lg md:text-2xl lg:text-4xl">{translations[language].aboutMe}</h2>
      <div className="backdrop-blur-md p-5 md:p-10 bg-gradient-to-br from-[#00000080] via-[#00000010] to-[#00000010] z-10 shadow-lg rounded-lg">
        {translations[language].introduction}
        <p className="mt-3 text-center text-[#FFC0CB]">{translations[language].contactMe}</p>
      </div>
    </div>
  );
}

export default About;

