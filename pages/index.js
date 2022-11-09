import { useState } from "react";
import Head from "next/head";

import Navbar from "../components/Navbar";
import InfoSection from "../components/InfoSection";
import Projects from "../components/Projects";
import About from "../components/About";
import Skills from "../components/Skills";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Estevan Rodriguez Portfolio</title>
        <meta name="description" content="Estevan Rodriguez Portfolio Site" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-30 dark:bg-gray-900">
        <section className="min-h-screen mb-10">
          <Navbar dark={darkMode} setDark={setDarkMode} />
          <InfoSection />
        </section>

        <section className="py-3">
          <About />
        </section>

        <section className="py-3">
          <Skills />
        </section>

        <section className="py-3">
          <Projects />
        </section>
      </main>
    </div>
  );
}
