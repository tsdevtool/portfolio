import Navbar from "./components/Navbar";
import AboutPage from "./pages/abouts/AboutPage";
import Achievements from "./pages/abouts/Achievements";
import ContactPage from "./pages/contact/ContactPage";
import HomePage from "./pages/home/HomePage";
import ProjectsPage from "./pages/projects/ProjectsPage";

function App() {
  return (
    <div className="my-bg text-white min-h-screen flex flex-col items-center bg-black ">
      <Navbar />
      <HomePage />
      {/* <div
        className="absolute top-0 left-0 w-full h-full bg-black/50 -z-50"
        aria-hidden="true"
      /> */}
      <AboutPage />
      <Achievements />
      <ProjectsPage />
      <ContactPage />
    </div>
  );
}

export default App;
