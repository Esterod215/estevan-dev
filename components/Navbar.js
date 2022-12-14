import React from "react";

import { BsFillMoonStarsFill } from "react-icons/bs";

const Navbar = ({ dark, setDark }) => {
  return (
    <nav className="py-10 flex justify-between dark:text-white">
      <h1 className="text-xl font-burtons">Estevan.Dev</h1>
      <ul className="flex items-center">
        <li>
          <BsFillMoonStarsFill
            className="cursor-pointer text-xl"
            onClick={() => setDark(!dark)}
          />
        </li>
        <li>
          <a
            href="/resume.pdf"
            target="_blank"
            className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
