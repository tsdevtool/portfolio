import { useState } from "react";
import Heading from "../../components/Heading";
import {
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  MailIcon,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const ContactPage = () => {
  const [openMail, setOpenMail] = useState(false);
  return (
    <section
      id="contact"
      className="w-full min-h-screen h-auto mt-4 px-24 flex flex-col justify-start items-center mb-24 scroll-mt-20"
    >
      <Heading text={"FIND ME ON"} />
      <Heading text={"Feel free to connect with me"} />

      {/* Social media */}
      <div className="flex space-x-6 mt-7">
        <button
          onClick={() => setOpenMail(true)}
          className="p-2 text-cyan-500 bg-white rounded-full border-2 border-cyan-600 hover:ring-2 hover:ring-cyan-500 transition-shadow duration-300"
        >
          <MailIcon className="w-6 h-6" />
        </button>
        <a
          href="https://github.com/tsdevtool"
          className="p-2 text-cyan-500 bg-white rounded-full border-2 border-cyan-600 hover:ring-2 hover:ring-cyan-500 transition-shadow duration-300"
        >
          <GithubIcon className="w-6 h-6" />
        </a>
        <a
          href="https://www.instagram.com/_t.s_thanhsieu_/"
          className="p-2 text-cyan-500 bg-white rounded-full border-2 border-cyan-600 hover:ring-2 hover:ring-cyan-500 transition-shadow duration-300"
        >
          <InstagramIcon className="w-6 h-6" />
        </a>
        <a
          href="https://www.facebook.com/thannsiiu/"
          className="p-2 text-cyan-500 bg-white rounded-full border-2 border-cyan-600 hover:ring-2 hover:ring-cyan-500 transition-shadow duration-300"
        >
          <FacebookIcon className="w-6 h-6" />
        </a>
      </div>
      <AnimatePresence>
        {openMail && (
          <motion.form
            className="flex flex-col gap-4 max-w-md w-full bg-gray-800/80 p-5 mt-7 rounded-2xl scroll-m-20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 bg-gray-800/90 rounded-2xl border border-cyan-400 focus:outline-cyan-300 focus:ring-cyan-500 "
              required
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 bg-gray-800/90 rounded-2xl border border-cyan-400 focus:outline-cyan-300 focus:ring-cyan-500 "
              required
            />

            <textarea
              type="text"
              placeholder="Your Messages"
              className="w-full px-4 py-3 bg-gray-800/90 rounded-2xl border border-cyan-400 focus:outline-cyan-300 focus:ring-cyan-500 "
              rows={4}
              required
            />

            <div className="flex justify-center gap-6">
              <button
                className="px-6 py-4  bg-red-500/60  hover:bg-red-600 text-white rounded-lg transition"
                onClick={() => setOpenMail(false)}
              >
                Cancel
              </button>
              <button className="px-3 py-2 min-w-28 bg-cyan-500/60  hover:bg-cyan-400 text-white rounded-lg transition text-xl">
                Send
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ContactPage;
