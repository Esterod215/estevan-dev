import React from "react";

import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";

import Image from "next/image";
import deved from "../public/dev-ed-wave.png";

const InfoSection = () => {
  return (
    <div>
      <div className="pt-5 text-center">
        <h2 className="text-5xl py-2 text-teal-600 font-medium">
          Estevan Rodriguez
        </h2>
        <h3 className="text-3xl py-2 dark:text-white">Software Engineer</h3>
        <p className="text-xl py-5 leading-8 text-gray-800 font-dancingScript dark:text-gray-50">
          "The two most important days in your life are the day you're born, and
          the day you find out why" <br /> -Mark Twain
        </p>
      </div>
      <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-white">
        <a href="https://github.com/Esterod215">
          <AiFillGithub />
        </a>
        <a href="https://www.linkedin.com/in/estevanr215/">
          <AiFillLinkedin />
        </a>
      </div>
      <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden">
        <Image src={deved} layout="fill" objectFit="cover" />
      </div>
    </div>
  );
};

export default InfoSection;
