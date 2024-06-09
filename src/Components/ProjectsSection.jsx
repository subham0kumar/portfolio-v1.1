import React from "react";
import { TbTriangleFilled } from "react-icons/tb";
import ProjectCard from "./Util/ProjectCard";
const ProjectsSection = React.forwardRef((props, ref) => {
  const projects = [
    {
      id: 1,
      title: "Wheels-4-Rent",
      imgUrl: "src/assets/static/projects/Wheels4Rent.jpg",
      description: "A car renting site for India",
      liveLink: "",
      githubLink: "https://github.com/subham0kumar/wheels4rent",
    },
    {
      id: 2,
      title: "AniBuy",
      imgUrl: "src/assets/static/projects/AniBuy.png",
      description: "Anime merchendise online store",
      liveLink: "https://anibuy-subham0kumar.netlify.app/",
      githubLink: "https://github.com/subham0kumar/aniBuy",
    },
    {
      id: 3,
      title: "Crypto-Tracker",
      imgUrl: "src/assets/static/projects/CryptoTracker.png",
      description: "Track your crypto currencies",
      liveLink: "https://crypto-tracker-subham0kumar.netlify.app/",
      githubLink: "https://github.com/subham0kumar/crypto-tracker",
    },
    {
      id: 4,
      title: "WorkTodo",
      imgUrl: "src/assets/static/projects/advTodolist.png",
      description: "One place for daily tasks' managment",
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
      className="w-full flex flex-col items-center py-10 lg:px-40 h-fit lg:h-screen bg-[#062723b4] "
    >
      <span className="flex items-center gap-10">
        <TbTriangleFilled className="-rotate-90" />{" "}
        <h3 className="text-xl font-kalnia tracking-wider">Projects</h3>
        <TbTriangleFilled className="rotate-90" />
      </span>
      <main className="grid lg:grid-cols-2">
        {projects.map((project, index) => (
          <div key={index}>
            <h1 className="lg:hidden text-center underline tracking-widest underline-offset-4 font-kalnia pt-6 text-2xl">
              {project.title}
            </h1>
            <ProjectCard
              title={project.title}
              desc={project.description}
              gitLink={project.githubLink}
              imgUrl={project.imgUrl}
              liveUrl={project.liveLink}
              key={project.id}
            />
            <div className="lg:hidden items-start justify-between font-rubik flex gap-4 p-4">
              <button
                className="active:scale-95 transition-all duration-300 ease-in-out px-4 py-2 bg-primary border-2 border-primary text-secondary font-semibold rounded"
                onClick={() => handleLink(project.liveLink)}
              >
                Live Site
              </button>
              <button
                className="active:scale-95 transition-all duration-300 ease-in-out px-4 py-2 bg-transparent border-2 border-primary text-primary font-semibold rounded"
                onClick={() => handleLink(project.githubLink)}
              >
                Code
              </button>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
});

export default ProjectsSection;
