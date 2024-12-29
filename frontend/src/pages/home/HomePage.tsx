import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="w-full h-full flex flex-wrap items-center"
    >
      {/* Avatar */}
      <ResizablePanel
        accessKey="40"
        className="mr-8 flex h-full items-center justify-center p-6"
      >
        <Avatar className="w-[85%] h-auto shadow-[0_0_10px_#67E8F9] hover:shadow-[0_0_100px_#67E8F9] border-cyan-300 border-4">
          <AvatarImage src="/avatar.jpg" className="rounded-full" />
          <AvatarFallback>Sieu Nguyen Thanh</AvatarFallback>
        </Avatar>
      </ResizablePanel>

      <ResizableHandle className="border-zinc-900/95 border-r-2 ml-2 mr-2 h-full" />
      {/* Hello */}
      <ResizablePanel
        defaultSize={60}
        className="flex flex-col h-full items-center justify-center p-6"
      >
        <p className="text-3xl lg:text-4xl mb-1">Hello, It's me</p>
        <h1 className="font-bold text-4xl lg:text-6xl p-3 pt-0 text-cyan-400 hover:shadow-[0_0_10px_#67E8F9]">
          Sieu Nguyen Thanh
        </h1>
        <p className="text-sm lg:font-bold lg:text-base text-zinc-500">
          tsdevtool - CrisSiiu
        </p>
        <p className="text-2xl font-bold lg:text-3xl mb-2">software engineer</p>
        <span className="mb-2">
          I am a student majoring in software engineering
        </span>
        {/* Social media */}
        <div className="flex gap-4">
          <Link to={"https://www.facebook.com/thannsiiu/"}>
            <FaFacebook className="size-6 lg:size-8 rounded-full hover:text-[#67E8F9] " />
          </Link>

          <Link to={"https://www.instagram.com/_t.s_thanhsieu_/"}>
            <FaInstagram className="size-6 lg:size-8 hover:text-[#67E8F9]" />
          </Link>

          <Link to={"https://github.com/tsdevtool"}>
            <FaGithub className="size-6 lg:size-8 hover:text-[#67E8F9]" />
          </Link>

          <Link to={"https://www.threads.net/@_t.s_thanhsieu_"}>
            <FaThreads className="size-6 lg:size-8 hover:text-[#67E8F9]" />
          </Link>
        </div>
        <Link className="mt-4" to={"/about"}>
          <Button className=" hover:bg-[#67E8F9] hover:text-zinc-800 hover:shadow-[0_0_10px_4px_#F637CF]">
            More About Me
          </Button>
        </Link>
      </ResizablePanel>
    </ResizablePanelGroup>
  );
};

export default HomePage;
