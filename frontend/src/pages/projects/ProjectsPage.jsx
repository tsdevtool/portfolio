import Heading from "../../components/Heading";

const ProjectsPage = () => {
  return (
    <section
      id="projects"
      className="w-full min-h-screen h-auto flex flex-col items-start px-24 mt-0 scroll-mt-20"
    >
      <Heading text={"My Work"} size={32} font="" />
      <Heading text={"Projects"} size={40} font="bold" />
      <p className="text-lg text-gray-400 max-w-[75%] mt-2 ml-2">
        Following projects showcase my skills and experience through real-world
        examples of my work. Each project is briefly described. It reflects my
        ability to solve complex problems, work with different technologies, and
        manage projects effectively.
      </p>
      <div className="flex flex-row ">Nguyen Thanh Sieu</div>
    </section>
  );
};

export default ProjectsPage;
