import React from "react";
import RotatingText from "./Util/RotatingText/RotatingText";

const AboutSection = React.forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      className="container lg:h-screen h-fit lg:flex-row flex flex-col lg:gap-24 items-start lg:items-center justify-center lg:justify-between lg:pl-44 lg:pr-60 px-10 py-10"
    >
      <aside className="relative lg:-translate-x-[50px] lg:w-1/2 w-full">
        <img
          src="/static/Typing-bro.png"
          alt="typing"
          className="mix-blend-lighten"
        />
        <RotatingText />
      </aside>
      <main className="lg:w-1/2 w-full rounded-lg drop-shadow-2xl space-y-4 p-6 bg-[#ffffff11] backdrop-blur-sm neuShadow font-kalnia">
        <h3 className="text-xl text-center pb-2 underline underline-offset-4">About Me</h3>
        <span>
          <h1 className="lg:text-3xl text-2xl lg:text-left text-center font-semibold tracking-wider">
            Greetings! I'm Subham Kumar,
          </h1>
          <p className="space-y-3 lg:block hidden text-justify pt-2 font-rubik">
            Crafting captivating digital experiences through web development and
            front-end technologies. With a keen eye for detail and a passion for
            innovation.
            <br />
            <br />
            Through hands-on experience and self-directed learning, I've
            cultivated a robust skill set in HTML, CSS, JavaScript, and ReactJS
            foundation.
            <br />
            <br />
            I'm open to Job opportunities where I can contribute, learn and
            grow. If you have a good opportunity that matches my skills and
            experience then don't hesitate to contact me.
          </p>
          <p className="text-sm lg:hidden text-center tracking-wider pt-2">
            Passionate web developer skilled in HTML, CSS, JavaScript, and
            ReactJS, seeking job opportunities to contribute, learn, and grow in
            creating innovative digital experiences.
          </p>
        </span>
      </main>
    </section>
  );
});

export default AboutSection;
