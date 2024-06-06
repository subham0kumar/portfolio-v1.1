import React, { useEffect, useState } from "react";
import AboutSection from "../Components/AboutSection";
import ContactUs from "../Components/ContactUs";
import Footer from "../Components/Footer";
import HeroSection from "../Components/HeroSection";
import Navbar from "../Components/Navbar";
import ProjectsSection from "../Components/ProjectsSection";
import LoadingScreen from "../Components/Util/Loader/LoadingScreen";
import { PreloadImages } from "../Components/Util/PreloadImages";

const imageUrls = [
  "src/static/css3.png",
  "src/static/figma.png",
  "src/static/git.png",
  "src/static/html5.png",
  "src/static/js.png",
  "src/static/mui.jpg",
  "src/static/pp.png",
  "src/static/react.png",
  "src/static/tailwindcss.jpg",
  "src/static/Typing-bro.png",
];

const LandingPage = () => {
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
    }, 2000);
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
          <Navbar />
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <ContactUs />
          <Footer />
        </div>
      )}
    </>
  );
};

export default LandingPage;
