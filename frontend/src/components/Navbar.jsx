const Navbar = () => {
  return (
    <nav className=" bg-gray-800/60 backdrop-blur-md rounded-2xl px-8 py-3 gap-6 flex text-white fixed top-5 left-1/2 transform -translate-x-1/2 z-10">
      <ul className="list-none flex gap-8 text-xl font-semibold">
        <li className="hover:text-cyan-400 transition">
          <a href="#home">Home</a>
        </li>
        <li className="hover:text-cyan-400 transition">
          <a href="#about">About</a>
        </li>
        <li className="hover:text-cyan-400 transition">
          <a href="#projects">Projects</a>
        </li>
        <li className="hover:text-cyan-400 transition">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
