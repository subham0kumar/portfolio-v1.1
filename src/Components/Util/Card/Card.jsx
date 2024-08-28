import React from "react";
import "./Card.css";

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
      <article className="article-wrapper">
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
          <div className="flex-pr pt-10">
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
          <div className="types font-rubik">
            <button
              onClick={handleGitLink}
              style={{
                backgroundColor: "rgba(165, 96, 247, 0.43)",
                color: "#8eeee3",
              }}
              className="project-type tracking-wider"
            >
              • Github Repo
            </button>
            {techStack.map((tech) => (
              <span className="project-type">• {tech}</span>
            ))}
          </div>
        </div>
      </article>
    </>
  );
};

export default Card;
