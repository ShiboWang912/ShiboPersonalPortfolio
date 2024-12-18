import React from "react";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
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
        className="bg-[#5f6063] rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
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
          Overview.
        </h3>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-[#000000] text-[20px] max-w-3xl leading-[30px]"
      >
        <ul>
          <li className="list-disc">
            Programming & Frameworks: HTML, CSS, JavaScript, Angular, React,
            Vue, Python, C#, Java, React-Native, Node.js, .NET, Spring Boot
          </li>
          <li className="list-disc">
            Databases: Oracle, MY-SQL, MongoDB Atlas, DynamoDB, Firebase
          </li>
          <li className="list-disc">
            Tools: Jira, Git/GitHub, MS Project, Visio, PowerBI
          </li>
          <li className="list-disc">Cloud Platforms: AWS, Azure</li>
          <li className="list-disc">
            Soft Skills: Proficient in software development with strong
            problem-solving skills and the ability to learn quickly.
            Detail-oriented team player adept at following instructions and
            collaborating effectively.
          </li>
        </ul>
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
