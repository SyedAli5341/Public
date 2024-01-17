import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col gap-10 md:gap-20 md:flex-row"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2022 - 2023</p>
          <h2 className="text-4xl font-bold">Experience</h2>
        </div>
        <div className="mt-6 lg:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Telecom Intern"
            subTitle="Special Communication Organization - (June 2023 - August 2023)"
            result="Rawalpindi, Pakistan"
            des="During the internship, I learned about PSTN, GSM, and CDMA networks. I also learned about the working of the telephone exchange and the working of the mobile network."
          />
          <ResumeCard
            title="Front End Developer Intern"
            subTitle="MCS SS - (2022 - 2023)"
            result="Rawalpindi, Pakistan"
            des="In this internship, I learned about HTML, CSS, and JavaScript. I also learned about how to make websites responsive and more interactive."
          />
          <ResumeCard
            title="Freelacing"
            subTitle="Upwork - (2023 - 2024)"
            result="Pakistan"
            des="I am working as a freelancer on Upwork. I am freelancing as a front-end developer. I am also working on my own projects."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
