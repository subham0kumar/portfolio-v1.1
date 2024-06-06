import React from "react";

const Navbar = () => {
  const linkStyle =
    "tracking-wide bg-gradient-to-r from-accent to-accent bg-no-repeat bg-left-bottom bg-[length:0%_3px] transition-all duration-200 ease-in hover:bg-[length:100%_3px] p-2";

  return (
    <nav className="navbar  shadow-xl w-full flex justify-between items-center px-20 py-6">
      <header>
        <h1 className="font-rubik font-bold text-xl tracking-widest">Subham</h1>
      </header>
      <section>
        <ul className="font-poppins font-semibold flex items-center gap-6">
          <li>
            <a href="/" className={linkStyle}>
              Home
            </a>
          </li>
          <li>
            <a href="/about" className={linkStyle}>
              About
            </a>
          </li>
          <li>
            <a href="/projects" className={linkStyle}>
              Projects
            </a>
          </li>
          <li>
            <a href="/contact" className={linkStyle}>
              Contact
            </a>
          </li>
        </ul>
      </section>
    </nav>
  );
};

export default Navbar;
