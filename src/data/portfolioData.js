import cooja from '../assets/cooja.webp';
import univTlemcenImg from '../assets/tlemcen.webp';
import dauphineImg from '../assets/dauphine.webp';
import c from '../assets/malware-analysis.webp';
import image from '../assets/image.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';
import image5 from '../assets/image5.png';
import image6 from '../assets/image6.png';
import image7 from '../assets/image7.png';
import image8 from '../assets/image8.png';


export const personalInfo = {
  name: "Anes Abdelmounaim Touati",
  title: "Software Engineer & AI/Distributed Systems Master's Student",
  bio: "Specializing in Networks, Distributed Systems, and Web Development. Passionate about building scalable applications and agentic AI systems.",
  email: "anes.abdelmounaim.touati@gmail.com",
  github: "https://github.com/anescodes",
  linkedin:"https://www.linkedin.com/in/anes-abdelmounaim-touati-3048b3412/",
  location: "Tunis / Algeria",
};

export const skills = [
  { name: "React / Frontend", level: "Average", category: "Web" },
  { name: "Node.js / Express", level: "Average", category: "Web" },
  { name: "TypeScript & Tailwind CSS", level: "Proficient", category: "Web" },
  { name: "PostgreSQL & Drizzle ORM", level: "Proficient", category: "Database" },
  { name: "Java & OOP", level: "Solid Foundation", category: "Core" },
  { name: "Distributed Systems & Cloud", level: "Solid Foundation", category: "Core" },
  { name: "Algorithms & Data Structures", level: "Solid Foundation", category: "Core" },
];

export const projects = [
  {
    title: "Cloud & Fog MA ABE System",
    description: "Master 2 research project focusing on Multi-Authority Attribute-Based Encryption for distributed cloud/fog setups.",
    tags: ["Distributed Systems", "Cryptography", "Cloud", "Fog Computing"],
    github: "https://github.com/anescodes/iot_project",
    live: "#",
    images: [
      cooja
    ]
  },
  {
    title: "Chart-It",
    description: "Expense tracking application featuring full-stack architecture with clean UI analytics.",
    tags: ["React", "Node.js", "Express", "PostgreSQL", "Drizzle ORM", "TypeScript"],
    github: "https://github.com/anescodes/chart-it",
    live: "#",
    images: [
      image,
      image2,
      image3,
      image4,
      image5,
      image6,
      image7,
      image8
    ]
  },
    {
    title: "Distributed Networked Key-Value Store & Security Lab",
    description: "A C-based distributed key-value store designed to study data distribution, network communication between nodes, distributed algorithms, and the security of low-level networked software through vulnerability analysis and reverse engineering..",
    tags: ["Distributed Systems", "TCP/IP", "Concurrency", "Secure Coding","Cybersecurity","Reverse Engineering","Vulnerability Analysis"],
    github: "https://github.com/anescodes/distributed-kv-store",
    live: "#",
    images: [
      c
    ]
  },
];

export const academicPath = [
  {
    id: 1,
    degree: "Bachelor's Degree",
    school: "University of Tlemcen",
    location: "Tlemcen, Algeria",
    period: "2021 - 2024",
    fullName: "Mathematics & Computer Science",
    description: "Comprehensive foundation in mathematics and computer science theory. Strong grounding in algorithms, data structures, and programming fundamentals.",
    image: univTlemcenImg, // Change to your imported asset later
    highlights: ["Algorithms", "Mathematics", "Programming", "Data Structures"],
    color: "from-blue-500 to-indigo-500",
    status: "Completed"
  },
  {
    id: 2,
    degree: "Master's Degree (M2)",
    school: "University of Tlemcen",
    location: "Tlemcen, Algeria",
    period: "2024 - 2026",
    fullName: "Networks & Distributed Systems",
    description: "Specialized degree in network architecture and distributed computing. Developed expertise in system design, scalable infrastructure, and network protocols.",
    image: univTlemcenImg, // Change to your imported asset later
    highlights: ["Network Architecture", "Distributed Systems", "System Design", "Infrastructure"],
    color: "from-teal-500 to-cyan-500",
    status: "Completed"
  },
  {
    id: 3,
    degree: "Master (AIDA)",
    school: "Université Paris Dauphine-PSL",
    location: "Tunis Campus, Tunisia",
    period: "2026 - Present",
    fullName: "Artificial Intelligence, Data & Agentic Systems",
    description: "Advanced studies in artificial intelligence, data engineering, and agentic systems. Specialized coursework in distributed learning, deep neural networks, and AI architecture.",
    image: dauphineImg, // Change to your imported asset later
    highlights: ["Distributed AI", "Deep Learning", "Data Engineering", "Agentic Systems"],
    color: "from-cyan-500 to-blue-500",
    status: "Ongoing"
  },
];