"use client"

import { useContext } from 'react';
import Card from "./secondary/Card";
import projects from "@/helpers/proyects";
import { MyContext } from '@/context/Context';

const Proyects = () => {
  const { language } = useContext(MyContext);

  return (
    <div>
      <div>
        <h2 className="mt-16 mb-5 text-lg text-center md:text-2xl lg:text-4xl">
          {language === 'es' ? 'Proyectos' : 'Projects'}
        </h2>
        <div className="flex flex-wrap justify-center gap-5">
          {projects.map((p, i) => (
            <Card
              key={i}
              title={p.title[language]}
              description={p.description[language]}
              img={p.img}
              technology={p.technology[language]}
              more={p.more[language]}
              language= {language}
              links={p.links}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Proyects;

