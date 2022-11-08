import React from "react";
import Image from "next/image";

import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";

const Services = () => {
  return (
    <div>
      <div>
        <h3 className="text-3xl py-1 dark:text-white ">Services I offer</h3>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
          Since the beginning of my journey as a freelance designer and
          developer, I've done remote work for
          <span className="text-teal-500"> agencies </span>
          consulted for <span className="text-teal-500">startups </span>
          and collaborated with talanted people to create digital products for
          both business and consumer use.
        </p>
        <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
          I offer from a wide range of services, including brand design,
          programming and teaching.
        </p>
      </div>
      <div className="lg:flex justify-center gap-10">
        <div className="text-center flex flex-col items-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
          <Image src={design} width={100} height={100} />
          <h3 className="text-large pt-8 pb-2 font-medium">
            Beautiful Designs
          </h3>
          <p className="py-2">Creating Elegant Designs</p>
          <h4 className="py-4 text-teal-600">Tools I use</h4>
          <p className="text-gray-800 py-1">Photoshop</p>
          <p className="text-gray-800 py-1">Photoshop</p>
          <p className="text-gray-800 py-1">Photoshop</p>
        </div>
        <div className="text-center flex flex-col items-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
          <Image src={code} width={100} height={100} />
          <h3 className="text-large pt-8 pb-2 font-medium">
            Beautiful Designs
          </h3>
          <p className="py-2">Creating Elegant Designs</p>
          <h4 className="py-4 text-teal-600">Tools I use</h4>
          <p className="text-gray-800 py-1">Photoshop</p>
          <p className="text-gray-800 py-1">Photoshop</p>
          <p className="text-gray-800 py-1">Photoshop</p>
        </div>
        <div className="text-center flex flex-col items-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
          <Image src={consulting} width={100} height={100} />
          <h3 className="text-large pt-8 pb-2 font-medium">
            Beautiful Designs
          </h3>
          <p className="py-2">Creating Elegant Designs</p>
          <h4 className="py-4 text-teal-600">Tools I use</h4>
          <p className="text-gray-800 py-1">Photoshop</p>
          <p className="text-gray-800 py-1">Photoshop</p>
          <p className="text-gray-800 py-1">Photoshop</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
