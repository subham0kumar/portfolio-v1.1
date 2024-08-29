import React from "react";
import { TbTriangleFilled } from "react-icons/tb";
import ProjectCard from "./Util/ProjectCard";
import Card from "./Util/Card/Card";
const ProjectsSection = React.forwardRef((props, ref) => {
  const projects = [
    {
      id: 1,
      title: "Wheels-4-Rent",
      imgUrl: "/static/projects/Wheels4Rent.jpg",
      videoUrl: "/static/projects/videos/tiago-vid.mp4",
      description: "A car renting site for India",
      techStack: ["ReactJS", "TailwindCSS"],
      liveLink: "https://wheels4rent.netlify.app/",
      githubLink: "https://github.com/subham0kumar/wheels4rent",
    },
    {
      id: 2,
      title: "AniBuy",
      imgUrl: "/static/projects/AniBuy.png",
      videoUrl: "/static/projects/videos/AnibuyMov.mp4",
      description: "Anime merchendise online store",
      techStack: ["ReactJS", "TailwindCSS"],
      liveLink: "https://anibuy-subham0kumar.netlify.app/",
      githubLink: "https://github.com/subham0kumar/aniBuy",
    },
    {
      id: 3,
      title: "Crypto-Tracker",
      imgUrl: "/static/projects/CryptoTracker.png",
      videoUrl: "/static/projects/videos/Hexa-Mov.mp4",
      description: "Track your crypto currencies",
      techStack: ["ReactJS", "Material UI", "CoinGecko API"],
      liveLink: "https://crypto-tracker-subham0kumar.netlify.app/",
      githubLink: "https://github.com/subham0kumar/crypto-tracker",
    },
    {
      id: 4,
      title: "WorkTodo",
      imgUrl: "/static/projects/advTodolist.png",
      videoUrl: "",
      description: "One place for daily tasks' managment",
      techStack: ["ReactJS", "TailwindCSS"],
      liveLink: "https://worktodo-subham0kumar.netlify.app/",
      githubLink: "https://github.com/subham0kumar/advance-TodoList",
    },
  ];

  const handleLink = (link) => {
    window.open(`${link}`, "_blank");
  };

  return (
    <div
      ref={ref}
      className="w-full flex flex-col items-center py-10 lg:px-40 h-fit lg:h-full bg-[#062723b4] "
    >
      <span className="flex items-center gap-10">
        <TbTriangleFilled className="-rotate-90" />{" "}
        <h3 className="text-xl font-kalnia tracking-wider">Projects</h3>
        <TbTriangleFilled className="rotate-90" />
      </span>
      <main className="fadeInAnimation grid lg:grid-cols-2 p-10 gap-10">
        {projects.map((project, index) => (
          <div key={index}>
            <Card
              title={project.title}
              desc={project.description}
              gitLink={project.githubLink}
              imgUrl={project.imgUrl}
              videoUrl={project.videoUrl}
              liveUrl={project.liveLink}
              key={project.id}
              techStack={project.techStack}
            />
          </div>
        ))}
      </main>
    </div>
  );
});

export default ProjectsSection;
