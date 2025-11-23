import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full  bg-white dark:bg-black backdrop-blur-md dark:text-white py-12 px-6 relaitive z-10 transition-colors duration-500">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <p className="text-2xl md:text-4xl font-semibold leading-snug text-center md:text-left uppercase">
          Collaborate with me and begin your creative design journey today.
        </p>


        <div className="flex flex-col items-center md:items-end space-y-4">
          <nav className="flex flex-wrap justify-center md:justify-end gap-5 text-lg  font-semibold">
            {["Home", "About", "Projects", "Services", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="group relative inline-flex h-8 items-center justify-center overflow-hidden"
              >
                <div className="translate-y-0 transition duration-500 group-hover:-translate-y-[150%]">
                  {item}
                </div>
                <div className="absolute translate-y-[150%] transition duration-500 group-hover:translate-y-0">
                  {item}
                </div>
              </a>
            ))}
          </nav>


          <div className="flex gap-5 text-2xl">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="hover:text-blue-500 hover:animation-bounce"
            >
              <FaTwitter className="transform transition duration-500 hover:scale-125 hover:rotate-12 hover:drop-shadow-2xl" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-blue-700"
            >
              <FaLinkedin className="transform transition duration-500 hover:scale-125 hover:rotate-12 hover:drop-shadow-2xl" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-gray-400"
            >
              <FaGithub className="transform transition duration-500 hover:scale-125 hover:rotate-12 hover:drop-shadow-2xl" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-pink-500"
            >
              <FaInstagram className="transform transition duration-500 hover:scale-125 hover:rotate-12 hover:drop-shadow-2xl" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-10">
        <hr className="border-gray-400/40" />
        <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-4">
          © {new Date().getFullYear()} Lokesh. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
