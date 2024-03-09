import Link from "next/link";
import React from "react";
import Image from "next/image";
const project=()=>{
return(
    <div id="Project"><section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-20">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          My Projects
        </h1>

      </div>
      <div className="flex flex-wrap -m-5 -mt-[5rem]">
        
        <div className="lg:w-1/3 sm:w-1/2 p-4 curso-pointer">
          <div className="flex relative">
            <Image
              alt="gallery"
              className="absolute inset-0 w-full h-full object-cover object-center"
              src="/images/e.jpg"
              width={300}
              height={300}
            />
            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2 className="tracking-widest text-sm title-font font-medium text-purple-500 mb-1">
                E-COMMERCE PROJECT
              </h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                E-Commerce
              </h1>
              <p className="leading-relaxed">
               This is the project which
                Ihave created for those who owns these buisnes.
              </p>
              <Link   target="_blank"href={"https://hackathon1-rosy.vercel.app/"}>
              <p className="leading-relaxed text-purple-500 hover:underline">
               View Project
              </p>
              </Link>
            </div>
          </div>
        </div>
       
        <div className="lg:w-1/3 sm:w-1/2 p-4 curso-pointer">
          <div className="flex relative">
            <Image
              alt="gallery"
              className="absolute inset-0 w-full h-full object-cover object-center"
              src="/images/E2.jpg"
              width={300}
              height={300}
            />
            <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
              <h2 className="tracking-widest text-sm title-font font-medium text-purple-500 mb-1">
                DINE-MART
              </h2>
              <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                SHOOPING 
              </h1>
              <p className="leading-relaxed">
               This is the project which
                I have created for those who owns SHOPPING buisnes.
              </p>
              <Link target="_blank" href={"https://hackathon1-rosy.vercel.app/"}>
              <p className="leading-relaxed text-purple-500 hover:underline">
               View Project
              </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </div>
)
}
export default project
    
