"use client";
import React from "react";
import Image from "next/image";
import Typewriter from 'typewriter-effect';
import Link from "next/link";
const Hero =()=>{
    return(
        <section className="text-gray-600 body-font bg-fixed bg-cover bg-center custom-image">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              I am
              <br className="hidden lg:inline-block" />
              <Typewriter
  options={{
    strings: ['Web-Devaloper', 'UI/UX Designer','Gen-Ai-devaloper'],
    autoStart: true,
    loop: true,
  }}
/>

            </h1>
            <div className="w-[100px] h-[2px] bg-purple-700"></div>
            <p className="mb-8 leading-relaxed">
             Hey, I am Nida and I am web devaloper 
             or front end devaloper for 1 year, who creates professional responsive websites which improves the lives of people around me
            </p>
            <div className="flex justify-center">
              <Link href={
                "#Contact"
              }>
              <button className="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">
                Contact
              </button>
          </Link>
            
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mx-auto w-[15rem]">
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              height={300}
              width={500}
              src="/images/green.jpg"
            />
          </div>
        </div>
      </section>
    
    )
}
export default Hero