import {
  programming,
  htmlicon,
  creator,
  coding,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  timhortons,
  OPS,
  xty,
  mealDiary,
  incident,
  hr,
  threejs,
  aws,
  php,
  azure,
  server,
  vuejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "JavaScript & Vue.js & React & Angular",
    icon: programming,
  },
  {
    title: "HTML & CSS",
    icon: htmlicon,
  },
  {
    title: "PHP & Java & C#",
    icon: coding,
  },
  {
    title: "Aws & Azure",
    icon: server,
  },
];

const technologies = [
  { name: "Vue.js", icon: vuejs },
  { name: "PHP", icon: php },
  { name: "Aws", icon: aws },
  { name: "Azure", icon: azure },

  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },

  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "I&IT Digital Assistant",
    company_name: "Government of Ontario, Cyber Security Division",
    icon: OPS,
    iconBg: "#FFFFFF",
    date: "September 2023 - Current",
    points: [
      "Develop, test, and implement codingsites using JavaScript, HTML, CSS, Vue.js, and PHP, ensuring adherence to AODA accessibility standards. Maintained codingsites, addressed bugs, implemented new features.",
      " Assist in graphic design tasks, utilizing Photoshop and Illustrator to create mock-ups and illustrations for codingsite designs.",
    ],
  },
  {
    title: "Customer Service (Part-time)",
    company_name: "Tim Hortons",
    icon: timhortons,
    iconBg: "#9a919e",
    date: "November 2021 - Current",
    points: [
      "Provide customer service, take orders, and process transactions in a fast-paced environment. ",
    ],
  },
  {
    title: "Acountant",
    company_name: "Xtayang Mechanical & Electrical Installation CO",
    icon: xty,
    iconBg: "#E6DEDD",
    date: "July 2014 - February 2021",
    points: [
      "Responsible for recording all monthly bank transactions and financial expenditures of various departments into the financial system. Responsible for making financial statements.",
      "Responsible for part of the company's administrative work. Responsible for part of the company's human resources.",
    ],
  },
];
const projects = [
  {
    name: "MealDiary",
    description:
      "coding-based platform that manages users’ dietary needs and restrictions by helping them plan meals.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Mongodb",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: mealDiary,
    source_code_link: "https://github.com/Mia-Guoo/MealDiary.git",
  },
  {
    name: "Incident Management",
    description:
      "coding application that provides a way to interact with users through user reports to determine when something goes wrong.",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "Javascript",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: incident,
    source_code_link:
      "https://github.com/Mia-Guoo/COMP229-codingGroupProject-Group16",
  },
  {
    name: "HR management",
    description:
      "An HR application to manage employees, jobs, and departments using Java and SQL database.                   ",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Spring boot",
        color: "green-text-gradient",
      },
      {
        name: "SQL",
        color: "pink-text-gradient",
      },
    ],
    image: hr,
    source_code_link: "https://github.com/Mia-Guoo/",
  },
];

export { services, technologies, experiences, projects };
