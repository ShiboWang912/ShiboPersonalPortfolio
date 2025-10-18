import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { Link } from "react-router-dom";
import ShiboPhoto from "./ShiboPhoto";
import resume from "../assets/ShiboWang-Resume.pdf"; 

const Hero = () => {
  return (
    <section className="relative w-full min-h-[600px] lg:min-h-[700px] pt-24 pb-12">

      <div
        className={`${styles.paddingX} max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10`}
      >
        {/* ====== Left Column: Text ====== */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className={`${styles.heroHeadText}`}>
            <span className="text-[#000000]">Hello! I'm Shibo Wang</span>
          </h1>

          <p className={`${styles.heroSubText} mt-4 text-[#000000]`}>
            a Full-Stack Developer & AI Engineer passionate about building
            cloud-native, data-driven systems.
          </p>

          <p className="mt-4 text-[16px] sm:text-[18px] leading-relaxed text-[#000000]">
            I develop scalable web platforms, AI chatbots, and automation tools
            across publishing, healthcare, and manufacturing. From backend APIs
            and databases to responsive React front-ends and AWS deployments, I
            focus on clean, maintainable solutions that deliver real impact.
          </p>

          <div className="mt-6 flex justify-center lg:justify-start gap-6">
            <Link to="https://www.linkedin.com/in/shibo-wang-572298256/">
              <img
                src="linkedin.png"
                alt="LinkedIn"
                className="h-[35px] hover:scale-110 transition-transform"
              />
            </Link>
            <Link to="https://github.com/ShiboWang912">
              <img
                src="github.png"
                alt="GitHub"
                className="h-[35px] hover:scale-110 transition-transform"
              />
            </Link>
          </div>
        </div>

        {/* ====== Right Column: Photo ====== */}
        <div className="flex justify-center lg:justify-end flex-1 mt-6 lg:mt-0">
          <ShiboPhoto />
        </div>
      </div>
    </section>
  );
};

export default Hero;
