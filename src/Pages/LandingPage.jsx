import React, { useEffect, useRef, useState } from "react";
import AboutSection from "../Components/AboutSection";
import ContactUs from "../Components/ContactUs";
import Footer from "../Components/Footer";
import HeroSection from "../Components/HeroSection";
import Navbar from "../Components/Navbar";
import ProjectsSection from "../Components/ProjectsSection";
import LoadingScreen from "../Components/Util/Loader/LoadingScreen";
import { PreloadImages } from "../Components/Util/PreloadImages";
// import CustomCursor from "../Components/Util/CustomCursor";

const imageUrls = [
  "/static/css3.png",
  "/static/figma.png",
  "/static/git.png",
  "/static/html5.png",
  "/static/js.png",
  "/static/mui.jpg",
  "/static/pp.png",
  "/static/react.png",
  "/static/tailwindcss.jpg",
  "/static/Typing-bro.png",
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
    }, 1700);
    return () => {
      clearTimeout(timer1);
    };
  }, []);

  return (
    <>
      {loading ? (
        <LoadingScreen />
      ) : (
        <div className="relative">
          <Navbar
            refs={{
              home: homeRef,
              about: aboutRef,
              project: projectRef,
              contact: contactRef,
            }}
          />
          {/* <CustomCursor /> */}
          <HeroSection ref={homeRef} />
          <ProjectsSection ref={projectRef} />
          <AboutSection ref={aboutRef} />
          <ContactUs ref={contactRef} />
          <Footer />
        </div>
      )}
    </>
  );
};

export default LandingPage;
