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
  <Tilt className="xs:w-[180px] h-[180px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full p-[1px] rounded-[20px]"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        style={{ border: '2px solid #75bce3' }}
        className="bg-[#5f6063] rounded-[20px] py-5 px-5 min-h-[240px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-[#ffffff] text-[20px] font-bold text-center">
          {title}
        </h3>
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

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-[#000000] text-[20px] max-w-3xl leading-[30px]"
      >
        <ul>
          <li className="list-disc">
            Programming & Frameworks: C#, Java, JavaScript, Python, HTML, CSS, Angular, React, React-Native, Node.js, Vue.js, .NET, Spring Boot, UI/UX
          </li>
          <li className="list-disc">
            Big Data Technologies: Apache Spark, Hadoop
          </li>
          <li className="list-disc">
            Databases: Oracle, MY-SQL, MongoDB Atlas, DynamoDB, Firebase
          </li>
          <li className="list-disc">Tools: Jira, Atlassian, Confluence, Git/GitHub, MS Project, Visio, PowerBI</li>
          <li className="list-disc">Cloud Platforms: AWS, Azure</li>
          <li className="list-disc">
            Soft Skills: Proficient in software development with strong problem-solving skills and the ability to learn quickly. Detail-oriented team player adept at following instructions and collaborating effectively.
          </li>
        </ul>
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-2">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <motion.div variants={textVariant()}>
        <br />
        <br />
        <p className={styles.sectionSubText}>MY EDUCATION</p>
        <h3 style={{ color: "black", fontWeight: "500", fontSize: "36px" }}>
          Centennial College
        </h3>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-[#000000] text-[20px] max-w-3xl leading-[30px]"
      >
        <ul>
          <li className="list-disc">
            Software Engineering Technology - Artificial Intelligence Advanced Diploma
          </li>
          <li className="list-disc">
            Sept 2021 - Dec 2024
          </li>
          <li className="list-disc">
            Scarborough, ON
          </li>
          <li className="list-disc">GPA 4.4/4.5 High Honours</li>
          <li className="list-disc">
            <a href={transcript} target="_blank" rel="noopener noreferrer" className="underline">
              Transcript
            </a>
          </li>
          <li className="list-disc">
            <a href={diploma} target="_blank" rel="noopener noreferrer" className="underline">
            Diploma Parchment
            </a>
          </li>
        </ul>
      </motion.p>

    </>
  );
};

export default SectionWrapper(About, "about");
