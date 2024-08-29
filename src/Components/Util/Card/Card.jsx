import React from "react";
import "./Card.css";
import { FaGithub } from "react-icons/fa";

const Card = ({
  title,
  desc,
  imgUrl,
  gitLink,
  liveUrl,
  videoUrl,
  techStack,
}) => {
  const handleGitLink = () => {
    window.open(`${gitLink}`, "_blank");
  };
  const handleSiteLink = () => {
    window.open(`${liveUrl}`, "_blank");
  };
  return (
    <>
      <article className="article-wrapper lg:w-[32vw]">
        <div className="rounded-lg container-project">
          <video
            loop
            muted
            className="rounded-lg"
            poster={imgUrl}
            onMouseOver={(event) => event.target.play()}
            onMouseOut={(event) => event.target.pause()}
            src={videoUrl}
          ></video>
        </div>
        <div className="project-info">
          <div className="flex-pr">
            <p className="project-title text-nowrap font-kalnia">{title}</p>
            <button onClick={handleSiteLink} className="project-hover">
              <svg
                style={{ color: "#3f37e0" }}
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                color="black"
                strokeLinejoin="round"
                strokeLinecap="round"
                viewBox="0 0 24 24"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
              >
                <line y2="12" x2="19" y1="12" x1="5"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
          <article className="font-rubik">{desc}</article>
          <div className="types font-rubik grid grid-cols-3 lg:grid-cols-4">
            <button
              onClick={handleGitLink}
              style={{
                backgroundColor: "rgba(165, 96, 247, 0.43)",
                color: "#8eeee3",
              }}
              className="flex items-center gap-2 project-type tracking-wider active:translate-y-[2px] hover:-translate-y-1 transition-transform ease-in-out border-2"
            >
              <FaGithub /> Repo
            </button>
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="project-type border-2 border-transparent"
              >
                • {tech}
              </span>
            ))}
          </div>
        </div>
      </article>
    </>
  );
};

export default Card;
