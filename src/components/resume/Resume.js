import React, { useState } from "react";
import Title from "../layouts/Title";
import Education from "./Education";
import Skills from "./Skills";
import Experience from "./Experience";

const Resume = () => {
  const [selectedSection, setSelectedSection] = useState("education");

  const handleSectionClick = (section) => {
    setSelectedSection(section);
  };

  return (
    <section id="resume" className="w-full py-20 px-6 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center">
        <Title title="Resume" des="My Resume" />
      </div>
      <div>
        <ul className="w-full grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
          <li
            onClick={() => handleSectionClick("education")}
            className={`${
              selectedSection === "education"
                ? "border-designColor rounded-lg"
                : "border-transparent rounded-lg"
            } resumeLi`}
          >
            Education
          </li>
          <li
            onClick={() => handleSectionClick("skills")}
            className={`${
              selectedSection === "skills"
                ? "border-designColor rounded-lg"
                : "border-transparent rounded-lg"
            } resumeLi`}
          >
            Professional Skills
          </li>
          <li
            onClick={() => handleSectionClick("experience")}
            className={`${
              selectedSection === "experience"
                ? "border-designColor rounded-lg"
                : "border-transparent rounded-lg"
            } resumeLi`}
          >
            Experience
          </li>
        </ul>
      </div>
      <div className="mt-6">
        {selectedSection === "education" && <Education />}
        {selectedSection === "skills" && <Skills />}
        {selectedSection === "experience" && <Experience />}
      </div>
    </section>
  );
};

export default Resume;
