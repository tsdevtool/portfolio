import { motion } from "framer-motion";
const textVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};
const HomePage = () => {
  const name = "Nguyễn Thanh Siêu".split("");
  return (
    <section
      id="home"
      className="w-full h-auto min-h-screen flex flex-col md:flex-row justify-center md:justify-between items-center text-center px-24 "
    >
      <div className="sm:mt-20">
        {" "}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl md:text-7xl font-bold mb-4 line whitespace-nowrap "
        >
          Hello, <br /> I&apos;m{" "}
          {name.map((char, index) => (
            <motion.span
              key={index}
              custom={index}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="text-cyan-400"
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-xl md:text-2xl text-gray-400"
        >
          Senior Student & Orientation to become a programmer
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-10"
        >
          <a
            href="#contact"
            className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-lg transition"
          >
            Contact me
          </a>
        </motion.div>
      </div>
      <div>
        <img src="/avatar-1-nobg.png" alt="" />
      </div>
    </section>
  );
};

export default HomePage;
