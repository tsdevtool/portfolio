import Topbar from "@/components/Topbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="h-screen w-screen bg-black flex flex-col text-white p-1">
      <Topbar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
