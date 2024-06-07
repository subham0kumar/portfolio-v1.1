import React from "react";
import { TbTriangleFilled } from "react-icons/tb";
import ProjectCard from "./Util/ProjectCard";
const ProjectsSection = React.forwardRef((props, ref) => {
  const projects = [
    {
      id: 1,
      title: "Wheels-4-Rent",
      imgUrl: "src/static/projects/Wheels4Rent.jpg",
      description: "",
      liveLink: "",
      githubLink: "https://github.com/subham0kumar/wheels4rent",
    },
    {
      id: 2,
      title: "AniBuy",
      imgUrl: "src/static/projects/AniBuy.png",
      description: "",
      liveLink: "https://anibuy-subham0kumar.netlify.app/",
      githubLink: "https://github.com/subham0kumar/aniBuy",
    },
    {
      id: 3,
      title: "Crypto-Tracker",
      imgUrl: "src/static/projects/CryptoTracker.png",
      description: "",
      liveLink: "https://crypto-tracker-subham0kumar.netlify.app/",
      githubLink: "https://github.com/subham0kumar/crypto-tracker",
    },
    {
      id: 4,
      title: "WorkTodo",
      imgUrl: "src/static/projects/advTodolist.png",
      description: "",
      liveLink: "https://worktodo-subham0kumar.netlify.app/",
      githubLink: "https://github.com/subham0kumar/advance-TodoList",
    },
  ];

  return (
    <div ref={ref} className="flex flex-col items-center py-10 px-40 h-[100vh] bg-[#062723b4] ">
      <span className="flex items-center gap-10">
        <TbTriangleFilled className="-rotate-90" />{" "}
        <h3 className="text-xl font-kalnia tracking-wider">Projects</h3>
        <TbTriangleFilled className="rotate-90" />
      </span>
      <main className="grid grid-cols-2">
        {projects.map((project) => (
          <ProjectCard
            title={project.title}
            desc={project.description}
            gitLink={project.githubLink}
            imgUrl={project.imgUrl}
            liveUrl={project.liveLink}
            key={project.id}
          />
        ))}
      </main>
    </div>
  );
});

export default ProjectsSection;
