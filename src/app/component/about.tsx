import Link from "next/link";
import React from "react";
import Image from "next/image";
const About=()=>{
    return(
    <div id="About"><section className="text-gray-600 body-font">
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <Image
          className="object-cover object-center rounded mx-auto w-[300px] h-[400px]"
          alt="hero"
          height={300}
          width={500}
          src="/images/green.jpg"
        />
      </div>
      <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          ABOUT ME
        </h1>
    
        <p className="mb-5 leading-relaxed">
          I am  doing BS in computer science  and I am web devaloper 
             or front end devaloper for 1 year, who creates professional responsive websites which improves the lives of people around me.
        </p>
        <p className="mb-5 leading-relaxed">
         As I am really passionate about my work and in the field of IT i found fund as well
         as it has great demand in market.
        </p>
        <div className="flex w-full md:justify-start justify-center items-end">
          <a href={"/cv/cv.pdf"}>
          <button className="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">
            View CV
          </button>
          </a>
        </div>
       
       
      </div>
    </div>
  </section>
  </div>
    )
}
export default About
