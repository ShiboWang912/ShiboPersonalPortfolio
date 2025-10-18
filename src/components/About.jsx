import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import transcript from "../assets/ShiboWang_Transcript.pdf"; 
import diploma from "../assets/parchment.pdf"; 

const ServiceCard = ({ index, title, icon }) => (
  // fixed width at all times; do NOT use w-full here
  <Tilt className="flex-none w-[180px] sm:w-[200px] lg:w-[220px] h-auto">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="p-[1px] rounded-[20px]" // no w-full needed
    >
      <div
        style={{ border: '2px solid #75bce3' }}
        className="bg-[#5f6063] rounded-[20px] py-5 px-5
                   h-[220px] sm:h-[240px]
                   flex flex-col justify-evenly items-center"
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <br />
        <br />
        <p className={styles.sectionSubText}>Introduction</p>
        <h3 style={{ color: "black", fontWeight: "500", fontSize: "36px" }}>
          Key Skills.
        </h3>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-[#000000] text-[16px] sm:text-[18px] leading-relaxed"
      >
        <ul className="list-disc pl-5 space-y-3 max-w-3xl">
          <li>Programming & Frameworks: JavaScript (React, Node.js, Next.js), Python (Flask, Chalice, OpenCV), Java, C#, React Native, HTML, CSS, .NET, Spring Boot</li>
          <li>Cloud & DevOps: AWS (Lambda, API Gateway, DynamoDB, S3, SES, Chalice), Docker, CI/CD, Vercel, Azure DevOps</li>
          <li>Databases: DynamoDB, MongoDB Atlas, MySQL, Firebase, PostgreSQL</li>
          <li>Machine Learning & AI: OpenAI API, PyTorch, TensorFlow, Scikit-learn, Computer Vision, Data Augmentation</li>
          <li>Tools & Platforms: Git/GitHub, Jira, Confluence, Power BI, Figma</li>
          <li>Soft Skills: Detail-oriented, adaptable, strong analytical thinker and collaborator.</li>
        </ul>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-10">

        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      <br />
   
      <motion.div variants={textVariant()}>
        <br />
        <br />
        <p className={styles.sectionSubText}>MY EDUCATION</p>
        <h3 style={{ color: "black", fontWeight: "500", fontSize: "36px" }}>
          Centennial College
        </h3>
      </motion.div>

      <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-6 text-[#000000] text-[16px] sm:text-[18px] leading-relaxed"
      >
        <ul className="list-disc pl-5 space-y-2 max-w-3xl">
          <li>Software Engineering Technology – Artificial Intelligence (Advanced Diploma)</li>
          <li>Sept 2021 – Dec 2024 · Scarborough, ON · GPA 4.4/4.5 (High Honours)</li>
          <li><a href={transcript} target="_blank" rel="noopener noreferrer" className="underline">Transcript</a></li>
          <li><a href={diploma} target="_blank" rel="noopener noreferrer" className="underline">Diploma Parchment</a></li>
        </ul>
      </motion.div>

    </>
  );
};

export default SectionWrapper(About, "about");
