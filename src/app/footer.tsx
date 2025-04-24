import React from "react";
import Image from "next/image";
import { FaYoutube } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-pink-100 via-pink-200 to-purple-200">
      <footer className="text-pink-900 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-pink-900">
            <Image src="/images/logo.jpg" alt="Syeda Faryal" width={100} height={100} />
            <span className="ml-3 text-xl font-bold">Syeda Faryal</span>
          </a>
          <p className="text-sm text-pink-800 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-pink-300 sm:py-2 sm:mt-0 mt-4">
            © 2025 Syeda Faryal
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <Link
              target="_blank"
              href="https://youtube.com/@nidatariq1097?si=WjQYdQ_8UNLITFpI"
              className="text-pink-800 hover:text-red-600 transition-colors duration-300"
            >
              <FaYoutube className="text-2xl" />
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
