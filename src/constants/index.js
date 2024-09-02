import {
  sablier,
  panier,
  postgresqlname,
  docker,
  python,
  java,
  c,
  cpp,
  php,
  jira,
  springboot,
  angular,
} from "../assets/images";
import {
  cleed,
  upwork,
  sonelgaz,
  contact,
  css,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  nodejs,
  pricewise,
  react,
  snapgram,
  summiz,
  threads,
  typescript,
  music,
  mapreduce,
  graph,
  ocr,
  miraxyz,
  xlfg,
  cpu, 
  hospital,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: java,
    name: "Java",
    type: "Backend",
  },
  {
    imageUrl: c,
    name: "C",
    type: "Backend",
  },
  {
    imageUrl: cpp,
    name: "C++",
    type: "Backend",
  },
  {
    imageUrl: python,
    name: "Python",
    type: "Backend",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: php,
    name: "Php",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  // {
  //   imageUrl: typescript,
  //   name: "TypeScript",
  //   type: "Frontend",
  // },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  // {
  //   imageUrl: postgresqlname,
  //   name: "PostgreSQL",
  //   type: "Database",
  // },
  // {
  //   imageUrl: nodejs,
  //   name: "Node.js",
  //   type: "Backend",
  // },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: springboot,
    name: "Springboot",
    type: "Backend",
  },
  // {
  //   imageUrl: angular,
  //   name: "Angular",
  //   type: "Backend",
  // },
  {
    imageUrl: docker,
    name: "Docker",
    type: "Devops",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: jira,
    name: "Git",
    type: "Agile",
  },
];

export const experiences = [

  {
    title: "Camera Tracking Master's Internship",
    company_name: "OARO/Miraxyz",
    icon: miraxyz,
    iconBg: "#7bdaff",    
    date: "March 2024 - August 2024",
    points: [
      "Developed a proof of concept for a computer vision based camera tracking tool (SLAM Method).",
      "Resumed ORB-SLAM 3 and updated the code and compiler version in an automated script.",
      "Set up a portable version using Docker.",
      "Added a data transmission thread for tracking with the FREED protocol at 60Hz.",
      "Conducted tests in a virtual environment using Unreal Engine 5 and Blender with Intel tracking cameras.",
    ],
  },
  {
    title: "Database Migration Baschelor's Internship",
    company_name: "University of Bordeaux",
    icon: xlfg,
    iconBg: "#000000",
    date: "June 2021 - July 2021",
    points: [
      "Migration of the database to a new version of XLFG.org",
      "Designed a database migration script for XLFG.org",
      "Set up a new database using PHP and PhpMyAdmin.",
      "Adapted the table formats for data migration.",
    ],
  },
  // {
  //   title: "Music Recommendation Fullstack Web Application",
  //   company_name: "University of Bordeaux",
  //   icon: music,
  //   iconBg: "#e81cff",
  //   date: "October 2023 - Jauary 2024",
  //   points: [
  //     "Utilization of the Spotify API.",
  //     "Authentication with email and Google",
  //     "User data stored in a NoSQL database.",
  //     "Dockerized application using a redis cache.",
  //   ],
  // },
  // {
  //   title: "Large Scale ClashRoyale statistics",
  //   company_name: "University of Bordeaux",
  //   icon: mapreduce,
  //   iconBg: "#f7971e",
  //   date: "October 2023 - Jauary 2024",
  //   points: [
  //     "Utilization of HDFS (Hadoop Distributed File System) and MapReduce framework.",
  //     "Development of a minimal web interface to display deck and card subset statistics.",
  //     "Data storage in HBase in JSON format.",
  //     "Implementation of PySpark for processing large datasets.",
  //   ],
  // },
  // {
  //   title: "France Charging Stations Optimization",
  //   company_name: "University of Bordeaux",
  //   icon: graph,
  //   iconBg: "#0061ff",
  //   date: "October 2023 - Jauary 2024",
  //   points: [
  //     "Electric vehicle charger placement optimization at gas stations on French highways.",
  //     "Utilize the OpenStreetMap API and Python for data retrieval and cleaning.",
  //     "Employ graph theory and optimizations for computational efficiency.",
  //     "Provide multiple feasible solutions.",
  //   ],
  // },
  // {
  //   title: "Auto-multiple-question Automatic OCR Integration",
  //   company_name: "University of Bordeaux",
  //   icon: ocr,
  //   iconBg: "#ff0f7b",
  //   date: "October 2023 - Jauary 2024",
  //   points: [
  //     "Enhance Auto-Multiple-Choice software with automatic OCR for student exam matching.",
  //     "Use Google Vision AI API for optical character recognition.",
  //     "Implement Python scripting and image editing for automation.",
  //     "Integrate the feature into the existing exam grading software.",
      
  //   ],
  // },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/YourGitHubUsername",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/YourLinkedInUsername",
  },
];

export const projects = [
  {
    iconUrl: music,
    theme: "btn-back-orange",
    name: "Fullstack Music Recommendation",
    description:
      "This project is a fullstack web application utilizing the Spotify API for music recommendations. The backend is built with Express.js and uses MongoDB to store user data, including Google, Spotify, and email signups. The frontend is developed with React.js and Vite. The application also incorporates a Redis cache and is containerized using Docker for portability.",
    link: "https://github.com/sofianemenadjlia/SpotifyWeb",
  },
  {
    iconUrl: hospital,
    theme: "btn-back-yellow",
    name: "Fullstack Compression Matress Reservation Optimisation",
    description:
      "This project involved developing a web app with Vue.js in collaboration with Bordeaux Pellegrin Teaching Hospital to optimize the compression mattress reservation system, previously managed with spreadsheets. The new system, built with Vue.js, Bootstrap, Node.js, and MongoDB, aimed to maximize mattress reservation time and enhance cancer patient treatment efficiency.",
    link: "https://github.com/sofianemenadjlia/chu-compression-mattress",
  },
  {
    iconUrl: mapreduce,
    theme: "btn-back-green",
    name: "Large Scale ClashRoyale statistics",
    description:
      "This project is a large-scale Clash Royale game statistics platform, similar to https://royaleapi.com/. The platform utilizes the cluster's HDFS (Hadoop Distributed File System) and the MapReduce framework, along with PySpark for processing larger datasets. Data is stored in HBase in JSON format, and a minimal web interface was developed to showcase the results.",
    link: "https://github.com/sofianemenadjlia/ClashRoyale",
  },
  {
    iconUrl: graph,
    theme: "btn-back-blue",
    name: "France Charging Stations Optimization",
    description:
      "This project aims to optimize the placement of electric vehicle chargers at gas stations on French highways using graph theory. By leveraging the OpenStreetMap API and Python for data retrieval and cleaning, the solution minimizes the number of stations required while adhering to distance constraints. Graph theory and various optimizations ensure computational efficiency, providing multiple feasible solutions.",
    link: "https://github.com/Janus124/Applied-Algorithm-Project",
  },
  {
    iconUrl: ocr,
    theme: "btn-back-pink",
    name: "Auto-multiple-question Automatic OCR Integration",
    description:
      "This project enhances the Auto-Multiple-Choice software by adding an automatic OCR feature to match student exam copies with their names in the student list. It uses the Google Vision AI API and Python scripting, along with image editing, to automate the process and integrate it seamlessly into the existing exam grading software.",
    link: "https://github.com/sofianemenadjlia/qcmocr",
  },
  {
    iconUrl: cpu,
    theme: "btn-back-black",
    name: "SandPile Kernel Parallelization",
    description:
      "This project focused on parallelizing the sandpile kernel computation to boost efficiency and reduce computing time combining C, OpenMP, OpenCL, and MPI for various CPU, GPU, and hybrid parallelization techniques. The EasyPap Tool was utilized to monitor resource usage, and the methods were tested and validated on powerful machines with profiling and statistical analysis.",
    link: "https://github.com/sofianemenadjlia/parallel-sandpile",
  },
];
