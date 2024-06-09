import React, { useEffect, useRef, useState } from "react";
import AboutSection from "../Components/AboutSection";
import ContactUs from "../Components/ContactUs";
import Footer from "../Components/Footer";
import HeroSection from "../Components/HeroSection";
import Navbar from "../Components/Navbar";
import ProjectsSection from "../Components/ProjectsSection";
import LoadingScreen from "../Components/Util/Loader/LoadingScreen";
import { PreloadImages } from "../Components/Util/PreloadImages";

const imageUrls = [
  "src/assests/static/css3.png",
  "src/assests/static/figma.png",
  "src/assests/static/git.png",
  "src/assests/static/html5.png",
  "src/assests/static/js.png",
  "src/assests/static/mui.jpg",
  "src/assests/static/pp.png",
  "src/assests/static/react.png",
  "src/assests/static/tailwindcss.jpg",
  "src/assests/static/Typing-bro.png",
];

const LandingPage = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectRef = useRef(null);
  const contactRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let timer1 = setTimeout(async () => {
      try {
        await PreloadImages(imageUrls);
        setLoading(false);
      } catch (error) {
        console.error("Error loading images:", error);
        setLoading(false);
      }
    }, 1500);
    return () => {
      clearTimeout(timer1);
    };
  }, []);

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <div>
          <Navbar
            refs={{
              home: homeRef,
              about: aboutRef,
              project: projectRef,
              contact: contactRef,
            }}
          />
          <HeroSection ref={homeRef} />
          <AboutSection ref={aboutRef} />
          <ProjectsSection ref={projectRef} />
          <ContactUs ref={contactRef} />
          <Footer />
        </div>
      )}
    </>
  );
};

export default LandingPage;
