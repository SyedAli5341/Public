import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col gap-10 md:gap-20 md:flex-row"
      style={{ display: "flex" }}
    >
      {/* Education Quality */}
      <div className="flex-1 mb-10 md:mb-0 flex flex-col">
        <div className="py-6 lg:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2016 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lg:mt-14 w-full md:w-auto md:max-w-[400px] lg:max-w-[600px] xl:max-w-[800px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10 flex-grow">
          <ResumeCard
            title="BS in Electrical Engineering"
            subTitle="NUST (2020 - 2024)"
            result="3.6/4"
            des="Pursuing BS in Electrical Engineering, expected to complete in 2024, enhancing skills in electrical systems and electronics for a successful career."
          />
          <ResumeCard
            title="FSC (Pre-Engineering)"
            subTitle="APS&C (2018 - 2020)"
            result="92%"
            des="Completed FSC (Pre-Engineering) from APS&C, building a foundation for future studies in engineering."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="FG Public School (2016 - 2018)"
            result="95%"
            des="Successfully concluded my secondary education with a focus on science at FG Public School from 2016 to 2018."
          />
        </div>
      </div>

      {/* Courses */}
      <div className="flex-1 mb-10 md:mb-0 flex flex-col">
        <div className="py-6 lg:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Advanced Studies</h2>
        </div>
        <div className="mt-6 lg:mt-14 w-full md:w-auto md:max-w-[400px] lg:max-w-[600px] xl:max-w-[800px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10 flex-grow">
          <ResumeCard
            title="Python 3 Programming Specialization"
            subTitle="University of Michigan - Coursera (2023)"
            result="Proficiency"
            des="Completed the Python 3 Programming Specialization at the University of Michigan on Coursera in 2023, demonstrating proficiency in Python programming with a focus on practical applications and problem-solving."
          />
          <ResumeCard
            title="Meta Front-End Developer"
            subTitle="Meta - Coursera (2023)"
            result="Certified"
            des="Earned certification as a Meta Front-End Developer through a Coursera program in 2023, acquiring practical skills and knowledge in front-end development for web applications."
          />
          <ResumeCard
            title="Machine Learning"
            subTitle="DeepLearning.AI - Coursera (2023)"
            result="Certified"
            des="Successfully completed the Machine Learning course offered by DeepLearning.AI on Coursera in 2023, earning certification and gaining practical knowledge in the field of machine learning."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
