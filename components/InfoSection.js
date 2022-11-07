import React from "react";

import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";

import Image from "next/image";
import deved from "../public/dev-ed-wave.png";

const InfoSection = () => {
  return (
    <div>
      <div className="pt-5 text-center">
        <h2 className="text-5xl py-2 text-teal-600 font-medium">
          Estevan Rodriguez
        </h2>
        <h3 className="text-2xl py-2">Full Stack Web Developer</h3>
        <p className="text-medium py-5 leading-8 text-gray-800">
          Hello my name is Estevan Rodriguez
        </p>
      </div>
      <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
        <a href="#">
          <AiFillTwitterCircle />
        </a>
        <a href="#">
          <AiFillLinkedin />
        </a>
        <a href="#">
          <AiFillYoutube />
        </a>
      </div>
      <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden">
        <Image src={deved} layout="fill" objectFit="cover" />
      </div>
    </div>
  );
};

export default InfoSection;
