import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col w-screen h-screen items-center justify-center">
      <h1 className="text-6xl font-semibold text-red-500 mt-5">
        404 Not Found
      </h1>
      <img
        src="/error.gif"
        alt="Not Found Page 404"
        className="w-[90vh] h-auto "
      />
      <div className="flex flex-col flex-1 items-center">
        <h2 className="text-xl font-bold text-[30px]">Look like you're lost</h2>
        <p className="text-zinc-900/60 text-[16px] mt-1">
          the page you are looking for not available
        </p>
        <Link to={"/"}>
          <Button className="mt-4 bg-cyan-500/90 hover:bg-black">
            Go To Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
