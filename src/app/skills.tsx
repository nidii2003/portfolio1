import React from "react";
import { CiSquareCheck } from "react-icons/ci";

const Skills = () => {
  const skills = [
    { title: "MS Office", percent: "100%" },
    { title: "Graphic Designer", percent: "95%" },
    { title: "Digital Marketing", percent: "85%" },
    { title: "Sales Executive", percent: "85%" },
    { title: "HTML,CSS", percent: "80%" },
    { title: "TEAM LEAD", percent: "80%" },
  ];

  return (
    <div id="Skills" className="relative overflow-hidden">
      {/* Animated Circle Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-white via-pink-200 to-pink-500 animate-gradient-x">
        <div className="absolute top-10 left-10 w-32 h-32 bg-pink-300 opacity-30 rounded-full animate-ping-slow"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-white opacity-20 rounded-full animate-ping-slow"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-pink-100 opacity-40 rounded-full animate-ping-slow"></div>
      </div>

      {/* Skills Content */}
      <section className="text-white body-font relative z-10">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs tracking-widest font-bold title-font mb-1 text-pink-500">
              SKILLS
            </h2>
            <h1 className="sm:text-4xl text-3xl font-bold title-font text-pink-900">
              My Core Skills
            </h1>
          </div>

          <div className="flex flex-wrap -m-4 mt-[4rem]">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`p-4 w-full md:w-1/3 transform transition-all duration-700 ease-in-out delay-${index * 100} hover:scale-105`}
              >
                <div className="group flex rounded-lg h-full p-8 flex-col bg-white bg-opacity-20 shadow-lg backdrop-blur-lg hover:bg-gradient-to-r hover:from-pink-400 hover:to-white hover:text-pink-900 transition-all duration-300">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-pink-500 text-white group-hover:bg-white group-hover:text-pink-600 transition-colors duration-300">
                      <CiSquareCheck className="text-xl font-bold" />
                    </div>
                    <h2 className="text-lg title-font font-semibold text-pink-900 group-hover:text-white transition-colors duration-300">
                      {skill.title}
                    </h2>
                  </div>
                  <div className="flex-grow">
                    <div className="relative h-1 w-full bg-pink-200 rounded-xl">
                      <div
                        className="h-1 absolute rounded-xl bg-pink-500 group-hover:bg-white transition-all duration-300"
                        style={{ width: skill.percent }}
                      ></div>
                    </div>
                  </div>
                  <p className="font-semibold text-pink-700 text-right mt-1 group-hover:text-white transition-colors duration-300">
                    {skill.percent}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
