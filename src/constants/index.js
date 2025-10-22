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
  python,
  aws,
  php,
  azure,
  server,
  vuejs,
  java,
  csharp,
  phone,
  deeplearning,
  apci,
  avondx,
  clbp,
  mobileHealth,
  rtds,
  bci,
  Centennial,
  wimtach,
  healthcare,
  chatbot1,
  chatbot_demo,
  protal_demo,
  chatbot2,
  chatbot3,
  protal1,
  protal2,
  protal3,
  inss1,
  inss2,
  inss3,
  gcit1,
  gcit2,
  gcit3,
  EpicOne,
  insspress,
  conference,
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
    title: "Programming & Frameworks",
    icon: programming,
  },
  // {
  //   title: "Programming & Frameworks",
  //   icon: htmlicon,
  // },
  {
    title: "GenAI",
    icon: coding,
  },
  {
    title: "Cloud & DevOps",
    icon: server,
  },
  {
    title: "Machine Learning & AI",
    icon: deeplearning,
  },
];

const technologies = [
  { name: "Vuejs", icon: vuejs },
  { name: "Python", icon: python },
  { name: "Aws", icon: aws },
  { name: "Azure", icon: azure },
  { name: "Java", icon: java },
  { name: "C#", icon: csharp },
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
  // {
  //   name: "figma",
  //   icon: figma,
  // },
];

const experiences = [
  {
    title: "Freelance Application Engineer",
    company_name: "INSS Press",
    icon: insspress, 
    iconBg: "#1f2937",
    date: "Aug 2025 – Present | Toronto, ON",
    points: [
      "Led Dockerized deployment of Janeway/Django publishing system.",
      "Integrated secure payment, peer-review, and CMS workflows.",
      "Automated editorial processes for multiple academic journals.",
      "Deployed production infrastructure with CI/CD pipelines.",
    ],
  },
  {
    title: "Web Engineer (Conference Project)",
    company_name: "GCITSD 2026",
    icon: conference, 
    iconBg: "#1f2937",
    date: "Sept 2025 – Present | Remote",
    points: [
      "Developed bilingual conference site using React/Next.js and PayPal API.",
      "Implemented registration tiers, email automation, and SendGrid notifications.",
      "Optimized deployment for African networks using CDN distribution.",
    ],
  },
  {
    title: "Freelance Software Developer",
    company_name: "EpicOne",
    icon: EpicOne, 
    iconBg: "#1f2937",
    date: "Mar 2025 – Present | Mississauga, ON",
    points: [
      "Designed AWS serverless architecture with Chalice, Lambda, and DynamoDB.",
      "Built React dashboard for 1500+ clients with CSV export and SES notifications.",
      "Developed OpenAI-powered chatbot for scheduling and client support.",
      "Defined DynamoDB schemas and admin workflows for scalable operations.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "WIMTACH",
    icon: wimtach, 
    iconBg: "#9a919e",
    date: "May 2024 – Oct 2024 | Scarborough, ON",
    points: [
      "Built tree canopy planning mobile app using React Native and AWS backend.",
      "Implemented spatial algorithms (Python) for land-use optimization.",
      "Integrated AWS Amplify authentication and user management.",
      "Led UI/UX testing, improving prototype adoption by 40%.",
    ],
  },
  {
    title: "Software Engineering Research Assistant (Co-op)",
    company_name: "Healthcare Systems R&A Inc.",
    icon: healthcare, // replace with your icon path
    iconBg: "#ffffff",
    date: "May 2023 – Sept 2024 | Mississauga, ON",
    points: [
      "Developed ML pipelines in Python/OpenCV for medical image analysis.",
      "Trained predictive models using SMOTE, PCA, and Bayesian optimization.",
      "Integrated ML outputs into mobile app for real-time inference.",
      "Collaborated with clinicians to define validation and accuracy metrics.",
    ],
  },
  {
    title: "Education",
    company_name: "Centennial College",
    icon: Centennial, 
    iconBg: "#1f2937",
    date: "Sept 2021 – Dec 2024 | Scarborough, ON",
    points: [
      "Advanced Diploma – Software Engineering Technology (AI), High Honours.",
      "Graduated with GPA 4.4 / 4.5, focusing on AI, cloud, and full-stack development.",
    ],
  },
];



const projects = [
  // 1) Chatbot
  {
    name: "EpicOne-SportsRehabTO AI Chatbot",
    description:
      "Clinic chatbot for appointment booking and FAQs. Uses OpenAI + AWS (API Gateway, Lambda, DynamoDB) with secure flows and multi-clinic scaling.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "AWS", color: "green-text-gradient" },
      { name: "OpenAI", color: "pink-text-gradient" },
    ],
    images: [
      chatbot1,
      chatbot2,
      chatbot3,
    ],
    video: chatbot_demo,   // place file in public/demos/
    live: "",                           // add if public
    repo: "",                           // add if public
  },

  // 2) SATURN Scale Report Portal
  {
    name: "EpicOne-SATURN Scale Report Portal",
    description:
      "Serverless portal for 1500+ clients to access calibration reports. React front end, AWS Chalice API, DynamoDB, SES notifications, role-based access.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "AWS-Chalice", color: "green-text-gradient" },
      { name: "DynamoDB", color: "pink-text-gradient" },
    ],
    images: [
      protal1,
      protal2,
      protal3,
    ],
    video: protal_demo,
    live: "",
    repo: "https://github.com/ShiboWang912/saturn-scale-portal",
  },

  // 3) INSS Press (Production)
  {
    name: "INSS Press (Production)",
    description:
      "Django/Janeway-based publisher platform with custom theme, editorial workflows, and secure galleys. Production site actively used by journals.",
    tags: [
      { name: "Django/Janeway", color: "blue-text-gradient" },
      { name: "Docker", color: "green-text-gradient" },
      { name: "DevOps", color: "pink-text-gradient" },
    ],
    images: [
      inss1,
      inss2,
      inss3,
    ],
    video: "",                                    // optional
    live: "https://www.insspress.org",
    repo: "",
  },

  // 4) GCITSD 2026 Conference (Production)
  {
    name: "GCITSD 2026 Conference Site (Production)",
    description:
      "Conference site with PayPal payments, registration tiers, bilingual content, and SendGrid notifications. Optimized for Africa access.",
    tags: [
      { name: "React/Next", color: "blue-text-gradient" },
      { name: "PayPal", color: "green-text-gradient" },
      { name: "SendGrid", color: "pink-text-gradient" },
    ],
    images: [
      gcit1,
      gcit2,
      gcit3,
    ],
    video: "",
    live: "https://www.gcitsd.org",
    repo: "",
  },

  // 5) Tree Canopy Planning Mobile App (MVP)
  {
    name: "Tree Canopy Planning Mobile App (MVP)",
    description:
      "Cross-platform app (React Native + Python backend) with Google Maps polygon tools and tree placement optimization.",
    tags: [
      { name: "React Native", color: "blue-text-gradient" },
      { name: "Python", color: "green-text-gradient" },
      { name: "AWS", color: "pink-text-gradient" },
    ],
    images: [
      apci,
      
    ],
    video: "",
    live: "",
    repo: "",
  },

  // 6) Chronic Lower Back Pain ML Project
  {
    name: "Chronic Lower Back Pain ML Project",
    description:
      "Enhanced keypoint detection with custom augmentation; improved masked heatmap keypoint model accuracy (25-landmark) dramatically.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "Computer Vision", color: "green-text-gradient" },
      { name: "Data Augmentation", color: "pink-text-gradient" },
    ],
    images: [
      clbp
    ],
    video: "",
    live: "",
    repo: "",
  },
  {
    name: "Rapid Diagnostic Test (RDT) Strip Image Analyzer Desktop Software Development",
    description:
      "Implemented image processing workflows and enhanced band detection accuracy using Python and OpenCV.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "OpenCV",
        color: "green-text-gradient",
      },
      {
        name: "Image Processing",
        color: "pink-text-gradient",
      },
    ],
    images: [rtds],  
  },
  { name: "Post-Stroke Rehabilitation System using Brain-Computer Interface Technology", 
    description: "Conducted research and tuned CNN, RNN, and XGBoost models to classify EEG data, improving motor imagery classification accuracy.", 
    tags: [ { name: "Python", color: "blue-text-gradient", }, 
      { name: "Machine Learning", color: "green-text-gradient", },      
    ], 
    images: [bci],},
  {
    name: "Health Prediction Mobile APP Development",
    description:
      "Developed and tested multiple machine learning models, integrating predictive models into a mobile app to aid in early diagnosis.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "green-text-gradient",
      },
      {
        name: "Cross-Validation",
        color: "pink-text-gradient",
      },
    ],
    images: [mobileHealth],  
    
  },
  {
    name: "AI Transcription Technology Development",
    description:
      "Developed real-time speech processing pipelines, significantly reducing the Word Error Rate for speech-to-text transcription.",
    tags: [
      {
        name: "Python",
        color: "blue-text-gradient",
      },
      {
        name: "Silero",
        color: "green-text-gradient",
      },
      {
        name: "Speech Processing",
        color: "pink-text-gradient",
      },
    ],
    images: [avondx],  
    
  },
 ,
];


export { services, technologies, experiences, projects };
