import Navbar from "../components/Navbar";
import AboutPage from "./abouts/AboutPage";
import HomePage from "./home/HomePage";

const MainHome = () => {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center">
      <Navbar />
      <HomePage />
      <AboutPage />
    </div>
  );
};

export default MainHome;
