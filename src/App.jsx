import Navbar from "./assets/components/Navbar";
import Footer from "./assets/components/Footer";

import Hero from "./assets/sections/Hero";
import About from "./assets/sections/About";
import Skills from "./assets/sections/Skills";
import Projects from "./assets/sections/Projects";
import Experience from "./assets/sections/Experience";
import Education from "./assets/sections/Education";
import Contact from "./assets/sections/Contact";

export default function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>

      <Footer />
    </>
  );
}