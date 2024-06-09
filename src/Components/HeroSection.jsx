import React from "react";
import AnimeBorder from "./Util/AnimeBorder";
import { VscGithub } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";

const iconsStyle =
  "rounded-full border-2 border-primary bg-transparent group-hover:-translate-y-2 transition-all duration-700 ease-in-out  hover:cursor-pointer";
const HeroSection = React.forwardRef((props, ref) => {
  return (
    <section ref={ref} className="w-full lg:px-60 lg:py-16 px-10 bg-[#062723b4]">
      <div className="lg:flex-row flex-col-reverse flex items-center justify-between">
        <aside className="flex flex-col lg:items-start items-center justify-center lg:pr-14">
          <div className="lg:text-left text-center flex flex-col font-bold font-kalnia">
            <h1 className="text-4xl lg:text-6xl mb-6 font-semibold">
              React Frontend Developer
            </h1>
            <h2 className="text-xl lg:text-3xl font-medium font-rubik mb-2">
              Hi, I am Subham
            </h2>
            <h3 className="text-sm lg:text-lg font-normal mb-2 font-rubik tracking-widest">
              I'm passionate about crafting experiences that are engaging,
              accessible, and user-centric.
            </h3>
          </div>
          <button
            className="my-2 active:scale-95 transition-all duration-300 ease-in-out px-8 py-2 bg-primary text-secondary font-semibold rounded"
            onClick={() => {
              window.scroll({
                top: document.body.offsetHeight,
                left: 0,
                behavior: "smooth",
              });
            }}
          >
            Get in touch!
          </button>
          <span className="flex items-center gap-8 mt-3">
            <button
              className="hover:text-accent cursor-pointer"
              onClick={() =>
                window.open("https://linkedin.com/in/subham0kumar", "_blank")
              }
            >
              <AiOutlineLinkedin size={30} />
            </button>
            <button
              className="hover:text-accent cursor-pointer"
              onClick={() =>
                window.open("https://github.com/subham0kumar", "_blank")
              }
            >
              <VscGithub size={26} />
            </button>
          </span>
        </aside>
        <aside>
          <AnimeBorder loading="lazy" imgSrc={"src/static/pp.png"} />
        </aside>
      </div>
      <div className="mt-3">
        <div className="px-8 py-4 lg:flex grid grid-cols-4 gap-4 items-end justify-between font-poppins">
          <div className="group flex flex-col items-center justify-center ">
            <img
              src="src\static\css3.png"
              alt="css3"
              width={70}
              className={iconsStyle}
              id="css"
            />
            <label htmlFor="css" className="hidden lg:block">CSS</label>
          </div>
          <div className="group flex flex-col items-center justify-center ">
            <img
              src="src\static\html5.png"
              alt="html5"
              width={70}
              className={iconsStyle}
              id="html"
            />
            <label htmlFor="html" className="hidden lg:block">HTML</label>
          </div>
          <div className="group flex flex-col items-center justify-center">
            <img
              src="src\static\js.png"
              alt="js"
              width={65}
              className={iconsStyle}
              id="js"
            />
            <label htmlFor="js" className="hidden lg:block">JavaScript</label>
          </div>
          <div className="group flex flex-col items-center justify-center  ">
            <img
              src="src\static\react.png"
              alt="react"
              width={60}
              className={iconsStyle}
              id="react"
            />
            <label htmlFor="react" className="hidden lg:block">React JS</label>
          </div>
          <div className="group flex flex-col items-center justify-center ">
            <img
              src="src\static\tailwindcss.jpg"
              alt="twcss"
              width={60}
              className={iconsStyle}
              id="tailwindcss"
            />
            <label htmlFor="tailwindcss" className="hidden lg:block">Tailwind CSS</label>
          </div>
          <div className="group flex flex-col items-center justify-center ">
            <img
              src="src\static\git.png"
              alt="git"
              width={70}
              className={iconsStyle}
              id="git"
            />
            <label htmlFor="git" className="hidden lg:block">GIT</label>
          </div>
          <div className="group flex flex-col items-center justify-center ">
            <img
              src="src\static\figma.png"
              alt="figma"
              width={70}
              className={iconsStyle}
              id="figma"
            />
            <label htmlFor="figma" className="hidden lg:block">Figma</label>
          </div>
          <div className="group flex flex-col items-center justify-center ">
            <img
              src="src\static\mui.jpg"
              alt="mui"
              width={70}
              className={iconsStyle}
              id="mui"
            />
            <label htmlFor="mui" className="hidden lg:block">Material UI</label>
          </div>
        </div>
      </div>
    </section>
  );
});

export default HeroSection;
