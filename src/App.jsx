import { useCallback, useState } from "react";
import { AnimatePresence } from "motion/react";

import Navbar from "./assets/components/Navbar";
import Footer from "./assets/components/Footer";
import SplashScreen from "./assets/components/SplashScreen";

import Hero from "./assets/sections/Hero";
import About from "./assets/sections/About";
import Skills from "./assets/sections/Skills";
import Projects from "./assets/sections/Projects";
import Experience from "./assets/sections/Experience";
import Education from "./assets/sections/Education";
import Contact from "./assets/sections/Contact";

// true  = l'intro ne s'affiche qu'une fois par session (onglet)
// false = l'intro s'affiche à chaque chargement de la page
const SHOW_ONCE_PER_SESSION = false;
const SESSION_KEY = "splash-seen";

function shouldShowSplash() {
  if (!SHOW_ONCE_PER_SESSION) return true;

  try {
    return sessionStorage.getItem(SESSION_KEY) !== "1";
  } catch {
    return true;
  }
}

export default function App() {
  const [showSplash, setShowSplash] = useState(shouldShowSplash);
  const [contentReady, setContentReady] = useState(() => !shouldShowSplash());

  const handleSplashFinish = useCallback(() => {
    window.scrollTo(0, 0);
    setContentReady(true); // le portfolio se monte pendant le fondu de l'intro
    setShowSplash(false);

    if (SHOW_ONCE_PER_SESSION) {
      try {
        sessionStorage.setItem(SESSION_KEY, "1");
      } catch {
        /* ignore */
      }
    }
  }, []);

  return (
    <>
      <AnimatePresence>
        {showSplash && (
          <SplashScreen key="splash" onFinish={handleSplashFinish} />
        )}
      </AnimatePresence>

      {contentReady && (
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
      )}
    </>
  );
}