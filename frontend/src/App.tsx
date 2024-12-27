import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import AboutMePage from "./pages/about/AboutMePage";
import ExperiencePage from "./pages/experience/ExperiencePage";
import EducationPage from "./pages/education/EducationPage";
import ContactPage from "./pages/contact/ContactPage";
import NotFoundPage from "./pages/error/NotFoundPage";
import LoginPage from "./pages/auth/LoginPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutMePage />} />
      <Route path="/experience" element={<ExperiencePage />} />
      <Route path="/education" element={<EducationPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
