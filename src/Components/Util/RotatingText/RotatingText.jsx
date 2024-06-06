import React from "react";
import "./RotatingText.css";

const RotatingText = () => {
  const rotatText = "React Frontend Developer - Subham Kumar";

  return (
    <div className="circle font-rubik">
      <div className="text-8xl px-12 py-16 bg-background rounded-full">💻</div>
      <div className="text">
        {rotatText.split("").map((char, i) => {
          const angle = i * (360 / rotatText.length) * 0.95;
          const style = {
            transform: `rotate(${angle}deg)`,
          };
          return (
            <span
              key={i}
              className="uppercase absolute text-xl left-1/2 origin-[0px_100px]"
              style={style}
            >
              {char}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default RotatingText;
