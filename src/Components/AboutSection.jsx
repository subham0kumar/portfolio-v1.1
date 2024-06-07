import React from "react";
import RotatingText from "./Util/RotatingText/RotatingText";

const AboutSection = React.forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      className="container flex gap-28 items-center justify-between pl-44 pr-60"
    >
      <aside className="relative -translate-x-[50px] w-1/2">
        <img
          src="src/static/Typing-bro.png"
          alt="typing"
          className="mix-blend-lighten"
        />
        <RotatingText />
      </aside>
      <main className="w-1/2 rounded-lg drop-shadow-2xl space-y-4 p-6 bg-[#ffffff11] backdrop-blur-sm neuShadow font-kalnia">
        <h3 className="text-xl">About Me</h3>
        <span>
          <h1 className="text-3xl font-semibold tracking-wider">
            Greetings! I'm Subham Kumar,
          </h1>
          <p className="space-y-3 text-justify mt-2 font-rubik">
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
        </span>
      </main>
    </section>
  );
});

export default AboutSection;
