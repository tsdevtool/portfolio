import Topbar from "@/components/Topbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="h-screen w-screen bg-black flex flex-col text-white p-4 pt-2">
      <Topbar />
      <main className="w-full flex p-3 mt-5 mb-2 h-full shadow-[0_0_10px_#67E8F9] items-center justify-center rounded-lg">
        <Outlet />
      </main>
      <footer className="w-full mt-2 h-auto  rounded-lg text-center text-xs text-zinc-500">
        Copyright by CrisSiiu @ 2025
      </footer>
    </div>
  );
};

export default MainLayout;
