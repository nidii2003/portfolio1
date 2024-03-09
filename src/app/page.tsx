import Image from "next/image";
import Hero from "./component/hero";
import Contact from "./component/contact";
import Project from "./project";
import About from "./component/about";
import Skills from "./skills";

export default function Home() {
  return  (
    <div>
  <Hero/>
  <About/>
  <Skills/>
  <Project/>
   <Contact/>

    </div>
  )
}