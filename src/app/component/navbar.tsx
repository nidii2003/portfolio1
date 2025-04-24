import Link from "next/link";
import React from "react";
import Image from "next/image";
import { AiOutlineCloudDownload } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="bg-gradient-to-r from-pink-600 via-white to-pink-600 backdrop-blur-sm z-50 sticky top-0 shadow-lg transition-all duration-300">
      <header className="text-pink-700 body-font font-sans">
        <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center justify-between">
          
          {/* Logo + Name */}
          <Link href="/" className="flex items-center font-bold hover:text-pink-500 transition-all">
            <Image
              src="/images/logo.jpg"
              alt="Syeda Faryal Logo"
              width={50}
              height={50}
              className="w-[45px] h-[45px] object-contain"
            />
            <span className="ml-3 text-2xl tracking-wide font-extrabold text-pink-800 hover:text-pink-600 transition-all duration-300">
              Syeda Faryal
            </span>
          </Link>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 mt-4 md:mt-0 text-base font-semibold text-pink-800">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <Link
                key={item}
                href={item === "Home" ? "/" : `#${item}`}
                className="relative group transition-all duration-300"
              >
                <span className="hover:text-pink-600">{item}</span>
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-pink-600 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* CV Download Button */}
          <a href="/cv/cv.pdf" className="mt-4 md:mt-0">
            <button className="inline-flex items-center bg-gradient-to-r from-pink-700 via-pink-500 to-pink-700 text-white font-bold border-0 py-2 px-4 rounded-full shadow-xl hover:scale-105 hover:shadow-pink-300 transition-all duration-300">
              Download CV
              <AiOutlineCloudDownload className="text-xl ml-2" />
            </button>
          </a>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
