import React from "react";
import AnimeBorder from "./Util/AnimeBorder";
import { VscGithub } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";

const iconsStyle =
  "rounded-full border-2 border-accent bg-accent group-hover:-translate-y-2 transition-all duration-700 ease-in-out  hover:cursor-pointer";
const HeroSection = () => {
  return (
    <section className="px-60 py-16 bg-[#062723b4]">
      <div className="flex items-center justify-between">
        <aside className="pr-14">
          <div className="flex flex-col font-bold font-rubik">
            <h1 className="text-6xl mb-6">React Front-End Developer</h1>
            <h2 className="text-3xl font-medium mb-2">Hi, I am Subham</h2>
            <h3 className="text-lg font-normal mb-2">
              I'm passionate about crafting experiences that are engaging,
              accessible, and user-centric.
            </h3>
          </div>
          <span className="flex items-center gap-8">
            <span className="hover:text-Fray-100 hover:cursor-pointer">
              <AiOutlineLinkedin size={28} />
            </span>
            <span className="hover:text-Fray-100 hover:cursor-pointer">
              <VscGithub size={25} />
            </span>
          </span>
        </aside>
        <aside>
          <AnimeBorder loading="lazy" imgSrc={"src/static/pp.png"} />
        </aside>
      </div>
      <div className="mt-3">
        <div className="flex gap-4 items-end justify-between font-poppins">
          <div className="group flex flex-col items-center justify-center ">
            <img
              src="src\static\css3.png"
              alt="css3"
              width={70}
              className={iconsStyle}
              id="css"
            />
            <label htmlFor="css">CSS</label>
          </div>
          <div className="group flex flex-col items-center justify-center ">
            <img
              src="src\static\html5.png"
              alt="html5"
              width={70}
              className={iconsStyle}
              id="html"
            />
            <label htmlFor="html">HTML</label>
          </div>
          <div className="group flex flex-col items-center justify-center ">
            <img
              src="src\static\js.png"
              alt="js"
              width={65}
              className={iconsStyle}
              id="js"
            />
            <label htmlFor="js">JavaScript</label>
          </div>
          <div className="group flex flex-col items-center justify-center  ">
            <img
              src="src\static\react.png"
              alt="react"
              width={60}
              className={iconsStyle}
              id="react"
            />
            <label htmlFor="react">React JS</label>
          </div>
          <div className="group flex flex-col items-center justify-center ">
            <img
              src="src\static\tailwindcss.jpg"
              alt="twcss"
              width={60}
              className={iconsStyle}
              id="tailwindcss"
            />
            <label htmlFor="tailwindcss">Tailwind CSS</label>
          </div>
          <div className="group flex flex-col items-center justify-center ">
            <img
              src="src\static\git.png"
              alt="git"
              width={70}
              className={iconsStyle}
              id="git"
            />
            <label htmlFor="git">GIT</label>
          </div>
          <div className="group flex flex-col items-center justify-center ">
            <img
              src="src\static\figma.png"
              alt="figma"
              width={70}
              className={iconsStyle}
              id="figma"
            />
            <label htmlFor="figma">Figma</label>
          </div>
          <div className="group flex flex-col items-center justify-center ">
            <img
              src="src\static\mui.jpg"
              alt="mui"
              width={70}
              className={iconsStyle}
              id="mui"
            />
            <label htmlFor="mui">Material UI</label>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
