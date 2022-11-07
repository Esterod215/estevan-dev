import { useState } from "react";
import Head from "next/head";

import Navbar from "../components/Navbar";
import InfoSection from "../components/InfoSection";
import Services from "../components/Services";
import Portfolio from "../components/Portfolio";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Estevan Rodriguez Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen">
          <Navbar dark={darkMode} setDark={setDarkMode} />
          <InfoSection />
        </section>

        <section className="min-h-screen">
          <Services />
        </section>
        <section className="min-h-screen">
          <Portfolio />
        </section>
      </main>
    </div>
  );
}
