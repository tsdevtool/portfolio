import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";
import { Link } from "react-router-dom";

const Topbar = () => {
  return (
    <div className="w-full p-3 flex flex-row h-auto shadow-[0_0_10px_#67E8F9] items-center justify-between rounded-lg">
      {/* Logo */}
      <div className="h-8 cursor-pointer lg:w-32 ml-6 mb-0 text-2xl text-center font-semibold text-white/90 hover:text-white ">
        Criss Siiu
      </div>

      {/* Button */}
      <div className="flex justify-between items-center w-full lg:w-1/2">
        {/* Home */}
        <div>
          <Link
            to="/"
            className="text-white/90 hover:text-cyan-300 text-lg font-bold"
          >
            Home
          </Link>
        </div>

        {/* About */}
        <div>
          <Link
            to="/about"
            className="text-white/90 hover:text-cyan-300 text-lg font-bold"
          >
            About
          </Link>
        </div>

        <div>
          <Link
            to="/experience"
            className="text-white/90 hover:text-cyan-300 text-lg font-bold"
          >
            Experience
          </Link>
        </div>

        <div>
          <Link
            to="/education"
            className="text-white/90 hover:text-cyan-300 text-lg font-bold"
          >
            Education
          </Link>
        </div>

        <div>
          <Link
            to="/"
            className="text-white/90 hover:text-cyan-300 text-lg font-bold"
          >
            Contact
          </Link>
        </div>

        <Link to={"https://github.com/tsdevtool/portfolio.git"}>
          <Avatar className="shadow-[0_0_10px_#67E8F9] hover:shadow-[0_0_16px_#67E8F9]">
            <AvatarImage src="https://avatars.githubusercontent.com/u/122494878?v=4&size=64" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </Link>
      </div>
    </div>
  );
};

export default Topbar;
