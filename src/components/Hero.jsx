import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { Link } from "react-router-dom";
import ShiboPhoto from "./ShiboPhoto";
import resume from "../assets/ShiboWang-Resume.pdf"; 

const Hero = () => {
  return (
    <section className="relative w-full h-[600px] mx-auto">
      {/* Brief Summary */}
      <div
        className={`${styles.paddingX} absolute inset-0 top-[180px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#2d2e31]" />
          <div className="w-1 sm:h-80 h-40 bg-gradient-to-tr from-[#d9d2d6] to-[#010510] opacity-50" />
        </div>
        <div className="w-7/12 z-10">
          <h1 className={`${styles.heroHeadText} `}>
            <span className="text-[#000000]">Hello!  I'm Shibo Wang</span>
            <br />
          </h1>
          <p className={`${styles.heroSubText} mt-2 `}>
            a Full-Stack Developer & AI Engineer passionate about building cloud-native, data-driven systems.
          </p>
          <br />
          <p className="text-xl" style={{ color: "black" }}>
            I develop scalable web platforms, AI chatbots, and automation tools across publishing, healthcare, and manufacturing. From backend APIs and databases to responsive React front-ends and AWS deployments, I focus on clean, maintainable solutions that deliver real impact.</p>      
          <br />
          <Link to="https://www.linkedin.com/in/shibo-wang-572298256/">
            <button type="button" className="btn btn-info">
              <img src="linkedin.png" className="h-[35px]" />
            </button>
          </Link>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Link to="https://github.com/ShiboWang912">
            <button type="button" className="btn btn-info">
              <img src="github.png" className="h-[35px]" />
            </button>
          </Link>
          &nbsp;&nbsp;&nbsp;&nbsp;
          {/* <a href={resume} target="_blank" rel="noopener noreferrer" className="underline">
            <button type="button" className="btn btn-info">
              <img src="resume.png" className="h-[35px]" />
            </button>
          </a> */}
        </div>
        <div>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;</p>
        </div>
        <ShiboPhoto />
      </div>
    </section>
  );
};

export default Hero;
