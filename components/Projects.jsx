import React from "react";
import Image from "next/image";

import design from "../public/design.png";
import code from "../public/code.png";
import consulting from "../public/consulting.png";

const Projects = () => {
  return (
    <div>
      <div>
        <h3 className="text-3xl py-1 dark:text-white ">Check Out My Work</h3>
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

export default Projects;
