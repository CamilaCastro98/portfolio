import { MyProvider } from '@/context/Context';
import About from "@/components/About";
import Experience from "@/components/Experience";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Proyects from "@/components/Proyects";
import Skills from "@/components/Skills";
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <MyProvider>
      <div className="relative">
        <Navbar />
        <Header />
        {/* Main Content */}
        <div className="flex flex-col items-center px-16 overflow-clip relativa lg:px-72">
          <div className="sticky top-0">
              <div className="w-24 h-24 opacity-50 bg-[#FCB3AD] rounded-full absolute" style={{ left: '18vw', top: '10vh' }}></div>
              <div className="w-36 h-36 md:w-40 md:h-40 opacity-50 bg-[#FCB3AD] rounded-full absolute" style={{ left: '30vw', top: '60vh' }}></div>
              <div className="w-32 h-32 opacity-50 bg-[#FCB3AD] rounded-full absolute" style={{ left: '-30vw', top: '40vh' }}></div>
              <div className="w-24 h-24 opacity-50 bg-[#FCB3AD] rounded-full absolute" style={{ left: '-10vw', top: '90vh' }}></div>
          </div>
          <div id="skills">
            <Skills />
          </div>
          <div id="experience">
            <Experience />
          </div>
          <div id="projects">
            <Proyects />
          </div>
          <div id="about">
            <About />
          </div>
        </div>
        <Footer />
      </div>
    </MyProvider>
  );
}
