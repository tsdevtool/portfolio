import Heading from "../../components/Heading";
import Card from "../../components/Card";

const ProjectsPage = () => {
  const repoData = [
    {
      id: 1,
      name: "Project 1",
      description: "This is a description of project 1",
      link: "https://github.com",
      image: "https://picsum.photos/600/200",
      languages: ["JavaScript", "HTML", "CSS"],
    },
    {
      id: 2,
      name: "Project 2",
      description: "This is a description of project 2",
      link: "https://github.com",
      image: "https://picsum.photos/600/200",
      languages: ["JavaScript", "HTML", "CSS"],
    },
    {
      id: 3,
      name: "Project 2",
      description: "This is a description of project 2",
      link: "https://github.com",
      image: "https://picsum.photos/600/200",
      languages: ["JavaScript", "HTML", "CSS"],
    },

    {
      id: 4,
      name: "Project 2",
      description: "This is a description of project 2",
      link: "https://github.com",
      image: "https://picsum.photos/600/200",
      languages: ["JavaScript", "HTML", "CSS"],
    },
  ];

  return (
    <section
      id="projects"
      className="max-w-6xl min-h-screen h-auto flex flex-col items-start mt-0 scroll-mt-20"
    >
      <Heading text={"My Work"} size={32} font="" />
      <Heading text={"Projects"} size={40} font="bold" />
      <p className="text-lg text-gray-400 max-w-[75%] mt-2 ml-2">
        Following projects showcase my skills and experience through real-world
        examples of my work. Each project is briefly described. It reflects my
        ability to solve complex problems, work with different technologies, and
        manage projects effectively.
      </p>
      <div className="flex flex-wrap max-md:justify-center transform-none opacity-100 my-7 gap-7">
        {repoData.map((repo, index) => (
          <Card repo={repo} key={index} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;
