import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";

const Banner = () => {
  const [text] = useTypewriter({
    words: [
      "Front End Developer",
      "Machine Learning Engineer",
      "Electrical Engineer",
      "Telecom Engineer",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <section
      id="home"
      className="w-full relative min-h-screen flex flex-col justify-center items-center font-titleFont text-center pt-10 pb-20 border-b-[1px] border-b-black"
    >
      <div className="max-w-screen-md mx-auto px-4">
        <h4 className="text-base md:text-lg font-normal mb-3 md:mb-5">
          WELCOME TO MY WORLD
        </h4>
        <h1 className="text-2xl my-2 md:text-4xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">Ali Haider</span>
        </h1>
        <h2 className="text-xl my-2 md:text-3xl font-bold text-white">
          <span>{text}</span>
          <Cursor
            cursorBlinking={false}
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-sm my-2 md:text-base font-bodyFont leading-6 tracking-wide">
          Versatile professional with expertise in crafting engaging Front End
          interfaces (HTML, CSS, JS, ReactJS), aspiring Machine Learning
          Engineer specializing in predictive analytics and computer vision, and
          adept Electrical Engineer integrating traditional principles with
          modern technology for diverse electrical systems.
        </p>
        <Media />
      </div>
    </section>
  );
};

export default Banner;
