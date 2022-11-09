import React from "react";

const About = () => {
  return (
    <div className="py-3 dark:text-white">
      <div>
        <h3 className="text-3xl py-1">About Me</h3>
      </div>
      <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
        Software Engineer with over 3 years industry experience currently
        residing in Southern California. Developed for companies in both on-site
        and remote environments and experienced working with both Frontend and
        Backend Technologies. Passionate for building solutions that make a
        difference in people's lives and always looking for ways to better
        myself personally and professionally.
        <span className="text-teal-500 text-medium pl-1 cursor-pointer capitalize">
          <a href="mailto:estevan.rodriguez215@gmail.com">Connect With Me! </a>
        </span>
      </p>
    </div>
  );
};

export default About;
