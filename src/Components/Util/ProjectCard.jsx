import React from "react";

const ProjectCard = ({ title, desc, imgUrl, gitLink, liveUrl }) => {
  const handleGitLink = () => {
    window.open(`${gitLink}`, "_blank");
  };
  const handleSiteLink = () => {
    window.open(`${liveUrl}`, "_blank");
  };

  return (
    <div className="relative flex justify-center font-poppins lg:w-[40vw] rounded-md my-8">
      <div
        className="w-80 h-40 group bg-background border-2 border-primary rounded-lg lg:w-[35vw] lg:h-[14rem] hover:cursor-pointer bg-cover bg-no-repeat bg-blend-normal hover:bg-blend-overlay"
        style={{ backgroundImage: `url(${imgUrl})` }}
      >
        <main className="text-center font-rubik hidden group-hover:block transition-all duration-700 ease-in-out absolute top-[25%] lg:left-10 left-0 p-4">
          {desc}
        </main>
        <div className="lg:block hidden">
          <div className="hidden group-hover:block transition-all duration-700 ease-in-out absolute top-0 left-10 p-4">
            <h1 className="font-rubik mb-2 text-3xl font-bold">{title}</h1>
            {/* <main className="flex justify-between my-4">{desc}</main> */}
          </div>
          <div className="hidden group-hover:flex gap-4 absolute bottom-0 right-10 p-4">
            <button
              className="hover:-translate-y-2 active:scale-95 transition-all duration-300 ease-in-out px-4 py-2 bg-primary text-secondary font-semibold  rounded"
              onClick={handleSiteLink}
            >
              Live Site
            </button>
            <button
              className="hover:-translate-y-2 active:scale-95 transition-all duration-300 ease-in-out px-4 py-2 bg-transparent border-2 border-primary text-primary font-semibold rounded"
              onClick={handleGitLink}
            >
              Code
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
