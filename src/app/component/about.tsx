import Link from "next/link";
import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div id="About">
      <section className="text-white body-font bg-gradient-to-r from-pink-600 via-pink-500 to-white">
        <div className="container mx-auto flex px-5 py-32 md:flex-row flex-col items-center">

          {/* Left Image with Animation */}
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded-[2rem] mx-auto w-[300px] h-[400px] transition-all duration-500 transform hover:scale-110 hover:rotate-3 hover:animate-bounce"
              alt="Syeda Faryal"
              height={300}
              width={500}
              src="/images/green.jpg"
            />
          </div>

          {/* Right Content */}
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-5xl text-4xl mb-4 font-bold text-pink-600">
              ABOUT
            </h1>
            <h2 className="title-font sm:text-5xl text-4xl mb-8 font-bold text-white">
              SYEDA FARYAL
            </h2>

            <p className="mb-5 text-lg text-white/90 leading-relaxed">
              I’m Syeda Faryal, a Digital Marketing & Sales Expert passionate about driving growth through innovative digital strategies. With expertise in SEO, PPC, content marketing, and sales optimization, I craft strategies that boost brand visibility and convert leads into loyal customers.
            </p>

            <p className="mb-5 text-lg text-white/90 leading-relaxed">
              I combine creativity with data-driven strategies to help brands thrive in today’s competitive digital world.
            </p>

            <div className="flex w-full md:justify-start justify-center items-end">
              <a href="/cv/cv.pdf" download>
                <button className="inline-flex items-center bg-gradient-to-r from-pink-600 via-pink-500 to-white text-white border-0 py-3 px-8 focus:outline-none hover:bg-gradient-to-r hover:from-pink-700 hover:to-pink-500 rounded-full text-lg font-semibold shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-pink-400">
                  View CV
                </button>
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default About;
