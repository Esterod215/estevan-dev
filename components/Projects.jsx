import React from "react";
import Image from "next/image";

import comfy from "../public/comfy-sloth.png";
import cocktails from "../public/cocktails.png";
import todo from "../public/todo.png";

const Projects = () => {
  return (
    <div>
      <div>
        <h3 className="text-3xl py-1 dark:text-white ">Check Out My Work</h3>
      </div>
      <div className="lg:flex justify-center gap-5">
        <a
          href="https://comfy-estevan.netlify.app/"
          className="transform cursor-pointer transition ease-in-out delay-50  hover:-translate-y-3 text-center lg:w-1/3 flex flex-col items-center shadow-lg rounded-xl my-10 dark:bg-white"
        >
          <div>
            <div className="w-full">
              <Image className="rounded-t-xl" src={comfy} />
            </div>
            <div className="px-5 py-3">
              <h3 className="text-large pt-8 pb-2 font-medium">Comfy Sloth</h3>
              <p className="py-2">
                Explore this e-commerce site where you can browse and "purchase"
                a variety of different furnitures!
              </p>
              <h4 className="py-4 text-teal-600">Technologies</h4>
              <p className="text-gray-800 py-1">React/hooks</p>
              <p className="text-gray-800 py-1">Stripe</p>
              <p className="text-gray-800 py-1">Auth0</p>
            </div>
          </div>
        </a>
        <a
          href="https://estevans-todo.netlify.app/"
          className="transform cursor-pointer transition ease-in-out delay-50  hover:-translate-y-3 text-center lg:w-1/3 flex flex-col items-center shadow-lg rounded-xl my-10 dark:bg-white"
        >
          <div>
            <div className="w-full">
              <Image className="rounded-t-xl" src={todo} />
            </div>
            <div className="px-5 py-3">
              <h3 className="text-large pt-8 pb-2 font-medium">
                Estevan's Todo List
              </h3>
              <p className="py-2">
                Organize your tasks with this helpful and colorful todo List!
                Your progress is saved with local storage persistance.
              </p>
              <h4 className="py-4 text-teal-600">Technologies</h4>
              <p className="text-gray-800 py-1">HTML</p>
              <p className="text-gray-800 py-1">CSS</p>
              <p className="text-gray-800 py-1">JavaScript</p>
            </div>
          </div>
        </a>
        <a
          href="https://cocktails-on-me.netlify.app/"
          className="transform cursor-pointer transition ease-in-out delay-50  hover:-translate-y-3 text-center lg:w-1/3 flex flex-col items-center shadow-lg rounded-xl my-10 dark:bg-white"
        >
          <div>
            <div className="w-full">
              <Image className="rounded-t-xl" src={cocktails} />
            </div>
            <div className="px-5 py-3">
              <h3 className="text-large pt-8 pb-2 font-medium">
                Cocktails On Me
              </h3>
              <p className="py-2">
                Thirsty? Check out this cockails site for information and
                instructions on diferent types of beverages.
              </p>
              <h4 className="py-4 text-teal-600">Technologies</h4>
              <p className="text-gray-800 py-1">React/hooks</p>
              <p className="text-gray-800 py-1">React Router</p>
              <p className="text-gray-800 py-1">CSS</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Projects;
