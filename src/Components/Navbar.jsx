import React from "react";

const Navbar = ({ refs }) => {
  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const linkStyle =
    "tracking-wide bg-gradient-to-r from-accent to-accent bg-no-repeat bg-left-bottom bg-[length:0%_3px] transition-all duration-200 tracking-widest ease-in hover:bg-[length:100%_3px] p-2";

  return (
    <nav className="navbar font-kalnia shadow-xl w-full flex justify-between items-center px-20 py-6">
      <header>
        <h1 className="font-rubik font-bold text-xl tracking-widest">Subham</h1>
      </header>
      <section>
        <ul className="flex items-center gap-6">
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
