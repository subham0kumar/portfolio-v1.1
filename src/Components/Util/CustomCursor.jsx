import React, { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const [x, setX] = useState(null);
  const [y, setY] = useState(null);
  const innerRef = useRef(null);
  const outerRef = useRef(null);
  const highlights = Array.from(
    document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, button, label")
  );

  useEffect(() => {
    const updateMousePosition = (e) => {
      setX(e.clientX);
      setY(e.clientY);
      innerRef.current.style.left = `${x}px`;
      innerRef.current.style.top = `${y}px`;

      //   outerRef.current.style.left = `${x}px`;
      //   outerRef.current.style.top = `${y}px`;

      outerRef.current.animate(
        {
          left: `${x}px`,
          top: `${y}px`,
        },
        { duration: 500, fill: "forwards" }
      );
    };
    window.addEventListener("mousemove", updateMousePosition);

    highlights.forEach((ele) => {
      ele.addEventListener("mouseover", () => {
        innerRef.current.style.width = "4rem";
        innerRef.current.style.height = "4rem";
        outerRef.current.style.display = "none";
        innerRef.current.style.transition = "width 0.5s, height 0.5s";
      });
      ele.addEventListener("mouseleave", () => {
        innerRef.current.style.width = "0.75rem";
        innerRef.current.style.height = "0.75rem";
        outerRef.current.style.display = "block";
      });
    });

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, [x, y]);

  return (
    <>
      <div
        ref={outerRef}
        className={`lg:opacity-100 opacity-0 z-[999999] outer-cursor fixed left-3 w-8 h-8 -translate-x-1/2 -translate-y-1/2 border border-white mix-blend-difference rounded-full pointer-events-none`}
      ></div>
      <div
        ref={innerRef}
        className="lg:opacity-100 opacity-0 z-[999999] inner-cursor fixed left-3 border border-white p-2 w-3 h-3 -translate-x-1/2 -translate-y-1/2 bg-white mix-blend-difference rounded-full pointer-events-none"
      ></div>
    </>
  );
};

export default CustomCursor;
