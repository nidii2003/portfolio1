import React from "react";
import Image from "next/image";
import { FaYoutube } from "react-icons/fa";
import Link from "next/link";
const Footer =()=>{
    return(
        <div className="bg-purple-100"><footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <Image src="/images/logo.jpg" alt="it mate" width={100} height={100}/>
            <span className="ml-3 text-xl">Nida Tariq</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2020 Nida Tariq 
        
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <Link 
            target="_blank" href={"https://youtube.com/@nidatariq1097?si=WjQYdQ_8UNLITFpI"} className="text-gray-500">
              <FaYoutube className=" text-2xl hover:text-[#B31312]" />
            </Link>
          </span>
        </div>
      </footer>
      </div>
    )
}
export default Footer