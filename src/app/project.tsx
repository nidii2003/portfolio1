import Link from "next/link";
import React from "react";
import Image from "next/image";

const Project = () => {
  const projects = [
    {
      title: "E-COMMERCE PROJECT",
      name: "E-Commerce",
      desc: "An intuitive platform for business owners to manage their online stores efficiently.",
      img: "/images/e.jpg",
      url: "https://hackathon1-rosy.vercel.app/",
      tech: "React, Node.js, MongoDB, Express",
    },
    {
      title: "DINE-MART",
      name: "Shopping",
      desc: "A seamless shopping experience for both customers and business owners in the retail industry.",
      img: "/images/E2.jpg",
      url: "https://hackathon1-rosy.vercel.app/",
      tech: "HTML, CSS, JavaScript, PHP",
    },
    // Add more projects as needed
  ];

  return (
    <div id="Project" className="relative overflow-hidden">
      {/* Animated Circle Gradient Background matching Skills section */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-white via-pink-200 to-pink-500 animate-gradient-x">
        <div className="absolute top-10 left-10 w-32 h-32 bg-pink-300 opacity-30 rounded-full animate-ping-slow"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-white opacity-20 rounded-full animate-ping-slow"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-pink-100 opacity-40 rounded-full animate-ping-slow"></div>
      </div>

      <section className="text-white body-font relative z-10">
        <div className="container px-6 py-36 mx-auto text-center">
          <h1 className="sm:text-6xl text-5xl font-bold title-font mb-6 text-pink-900">
            My Projects
          </h1>
          <p className="text-xl text-pink-800 font-medium mb-16">
            A showcase of my latest works in elegant pink & white.
          </p>

          <div className="flex flex-col space-y-14 px-6 mx-auto max-w-3xl">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group relative rounded-[1.5rem] overflow-hidden shadow-xl border-2 border-white/30 transform transition-all duration-500 ease-out hover:scale-105 hover:shadow-white/40 hover:-translate-y-2"
              >
                {/* Only image shown initially */}
                <Image
                  alt={project.name}
                  src={project.img}
                  width={1000}
                  height={600}
                  className="w-full h-[25rem] object-cover rounded-[1.5rem] transition-transform duration-500 group-hover:scale-110"
                />
                {/* Details overlay on hover */}
                <div className="absolute inset-0 bg-black bg-opacity-75 backdrop-blur-lg opacity-0 group-hover:opacity-100 transform translate-y-6 group-hover:translate-y-0 transition-all duration-500 rounded-[1.5rem] p-10 flex flex-col justify-center">
                  <h2 className="tracking-widest text-sm font-medium text-pink-200 mb-2">
                    {project.title}
                  </h2>
                  <h1 className="text-3xl font-bold text-white mb-4">
                    {project.name}
                  </h1>
                  <p className="text-white text-base mb-6">
                    {project.desc}
                  </p>
                  <p className="text-pink-100 text-base mb-8">
                    <strong>Tech:</strong> {project.tech}
                  </p>
                  <Link href={project.url} target="_blank">
                    <button className="mt-auto py-3 px-6 bg-pink-600 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:bg-pink-800 hover:scale-105">
                      View Project
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Project;