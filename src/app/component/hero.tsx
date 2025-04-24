"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useAnimationFrame } from "framer-motion";
import Typewriter from 'typewriter-effect';
import Link from "next/link";

const Hero = () => {
  const ref = useRef(null);

  // 3D floating effect for image
  useAnimationFrame((time) => {
    if (ref.current) {
      const rotateY = Math.sin(time / 1000) * 15;
      const rotateX = Math.cos(time / 1500) * 10;
      ref.current.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
    }
  });

  return (
    <section className="relative text-white body-font bg-gradient-to-r from-pink-600 via-pink-500 to-white bg-[length:400%_400%] animate-gradient-x overflow-hidden">

      {/* 🔮 Magical Blobs Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob animation-delay-2000"></div>
        <div className="absolute w-72 h-72 bg-white rounded-full mix-blend-multiply filter blur-2xl opacity-40 top-40 left-40 animate-blob animation-delay-4000"></div>
        <div className="absolute w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl opacity-60 top-20 left-80 animate-blob"></div>
        
        {/* Magical glowing effect */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-300 to-pink-500 rounded-full opacity-50 animate-glow"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-r from-purple-400 to-pink-300 rounded-full opacity-40 animate-glow animation-delay-1000"></div>
      </div>

      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center relative z-10">
        {/* Text Section */}
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-5xl text-3xl font-extrabold mb-6 font-medium text-white leading-tight">
            I am
            <br className="hidden lg:inline-block" />
            <Typewriter
              options={{
                strings: ['Sales Manager', 'Digital Brand Ambassador', 'Creative Portfolio Builder'],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className="w-[100px] h-[3px] bg-white mb-4"></div>
          <p className="mb-8 max-w-xl text-white/90 text-lg leading-relaxed">
            As a digital marketer and sales executive, I drive growth by blending strategic thinking with creative execution. From crafting compelling campaigns to optimizing sales funnels, I turn data into direction and engagement into conversions. Whether it’s amplifying brand presence or closing high-value deals, I bring energy, insight, and innovation to every step of the journey.
          </p>
          <div className="flex justify-center">
            <Link href={"#Contact"}>
              <button className="inline-flex items-center bg-gradient-to-r from-pink-600 via-pink-400 to-pink-600 text-white border-0 py-2 px-6 focus:outline-none rounded-full text-lg font-semibold shadow-xl hover:scale-105 hover:shadow-pink-300 transition-all duration-300">
                Let’s Connect
              </button>
            </Link>
          </div>
        </div>

        {/* Image Section with 3D & Zoom and Up/Down Movement */}
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mx-auto flex justify-center perspective-1000">
          <motion.div
            initial={{ opacity: 0, scale: 1, y: 50 }} // Less zoom (scale: 1)
            whileInView={{ opacity: 1, scale: 1.02, y: [50, -30, 50] }} // Less zoom and add up/down movement
            transition={{
              duration: 2, 
              repeat: Infinity, // Repeat animation (up and down movement)
              repeatType: "reverse", // Reverse direction of movement (up and down)
              ease: "easeInOut",
            }}
            className="overflow-hidden transform-gpu hover:scale-105 transition-all duration-500"
            ref={ref}
          >
            {/* Attractive Corners */}
            <Image
              className="object-cover object-center rounded-xl border-4 border-pink-500 shadow-2xl hover:shadow-lg transition-all duration-500" // Stylish rounded corners with border and shadow
              alt="hero"
              height={300}
              width={300}
              src="/images/green.jpg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
