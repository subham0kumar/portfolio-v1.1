import React, { useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { PiHamburgerDuotone } from "react-icons/pi";

const Navbar = ({ refs }) => {
  const [showNav, setShowNav] = useState(false);
  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const linkStyle =
    "tracking-wide bg-gradient-to-r from-accent to-accent bg-no-repeat bg-left-bottom bg-[length:0%_3px] transition-all duration-200 tracking-widest ease-in hover:bg-[length:100%_3px] p-2";

  return (
    <nav className="flex navbar font-kalnia shadow-xl w-full justify-between items-center lg:px-20 px-10 py-6">
      <header>
        <h3>
          <a
            href="/"
            className="hover:underline underline-offset-4 font-rubik font-bold text-2xl lg:text-xl tracking-widest"
          >
            Subham
          </a>
        </h3>
      </header>
      <section>
        <button
          className="lg:hidden border rounded-full p-1"
          onClick={() => setShowNav(true)}
        >
          <PiHamburgerDuotone size={30} />
        </button>
        {/* <======================= Mobile Nvabar ============================>  */}
        <div
          className={`w-screen left-0 top-0 fixed p-6 flex-col items-center justify-start gap-10 h-[200vh] bg-background z-10 transition-all duration-300 ease-in-out ${
            showNav ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {/* <div className={showNav ? "w-full flex flex-row-reverse" : "hidden"}> */}
          <div className="w-full flex flex-row-reverse">
            <button className="pr-4" onClick={() => setShowNav(false)}>
              <IoCloseCircleOutline size={40} />
            </button>
          </div>
          <div>
            <ul className="flex flex-col gap-10 text-3xl text-center pt-28">
              <li>
                <button
                  className="hover:underline underline-offset-4"
                  onClick={() => {
                    scrollToSection(refs.home);
                    setShowNav(false);
                  }}
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  className="hover:underline underline-offset-4"
                  onClick={() => {
                    scrollToSection(refs.about);
                    setShowNav(false);
                  }}
                >
                  About
                </button>
              </li>
              <li>
                <button
                  className="hover:underline underline-offset-4"
                  onClick={() => {
                    scrollToSection(refs.project);
                    setShowNav(false);
                  }}
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  className="hover:underline underline-offset-4"
                  onClick={() => {
                    scrollToSection(refs.contact);
                    setShowNav(false);
                  }}
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* <======================= Default Navbar ========================>  */}
        <ul className="hidden lg:flex items-center gap-6">
          <li>
            <a className={linkStyle}>
              <button
                onClick={() => {
                  scrollToSection(refs.home);
                }}
              >
                Home
              </button>
            </a>
          </li>
          <li>
            <a className={linkStyle}>
              <button
                onClick={() => {
                  scrollToSection(refs.about);
                }}
              >
                About
              </button>
            </a>
          </li>
          <li>
            <a className={linkStyle}>
              <button
                onClick={() => {
                  scrollToSection(refs.project);
                }}
              >
                Projects
              </button>
            </a>
          </li>
          <li>
            <a className={linkStyle}>
              <button
                onClick={() => {
                  scrollToSection(refs.contact);
                }}
              >
                Contact
              </button>
            </a>
          </li>
        </ul>
      </section>
    </nav>
  );
};

export default Navbar;
