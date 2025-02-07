import Heading from "../../components/Heading";

const AboutPage = () => {
  return (
    <section
      id="about"
      className="w-full min-h-screen h-auto flex flex-col  items-center px-24 mt-0 scroll-mt-20 "
    >
      {/* Introduction */}
      <Heading text={"Introduction"} size={32} font="" />
      {/* Overview */}
      <Heading text={"Overview"} size={46} font="bold" />
      <img src="/avatar-0.png" alt="My Image" className="w-56 h-auto" />
      <p className="text-lg text-gray-400 max-w-2xl mt-2 text-center">
        I am currently a senior student at Ho Chi Minh City University of
        Technology and I am passionate about programming. I have worked on
        several small projects in each subject and I am familiar with ReactJS
        and NodeJS. It would be a great honor if I could collaborate with you to
        turn your ideas into reality. My goal is to create user-friendly and
        responsive solutions to solve real-world problems. I also enjoy
        learning, growing as a programmer and continuously improving my skills
        in every technology I come across. Together, we can build great websites
        that are highly practical. I am very lucky to know you.
      </p>
    </section>
  );
};

export default AboutPage;
