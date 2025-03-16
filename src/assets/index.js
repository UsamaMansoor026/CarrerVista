/* Why us section icons */
import {
  FaBriefcase,
  FaMapMarkerAlt,
  FaSearch,
  FaStar,
  FaUsers,
} from "react-icons/fa";
import { MdWorkOutline } from "react-icons/md";

/* Testimonials Images */
import male1 from "../assets/employers/male1.webp";
import male2 from "../assets/employers/male2.webp";
import female1 from "../assets/employers/female1.webp";
import female2 from "../assets/employers/female2.webp";

/* Team Members Avatars */
import maleTeam1 from "../assets/team/male1.jpg";
import maleTeam2 from "../assets/team/male2.jpg";
import maleTeam3 from "../assets/team/male3.jpg";
import femaleTeam1 from "../assets/team/female1.jpg";
import femaleTeam2 from "../assets/team/female2.jpg";

/* Recent Jobs Data */
export const jobs = [
  {
    id: 1,
    role: "Frontend Developer",
    company: "Google",
    location: "Mountain View, CA, USA",
    category: "full time",
    jobDesc:
      "Google is looking for a skilled Frontend Developer to design and develop intuitive, user-friendly web applications. The ideal candidate should be proficient in modern JavaScript frameworks and work collaboratively with designers and backend engineers to create seamless digital experiences.",
    jobReq: [
      "Proficiency in React, Vue, or Angular.",
      "Strong understanding of HTML, CSS, and JavaScript.",
      "Experience with REST APIs and state management libraries.",
    ],
    jobResp: [
      "Develop responsive and scalable web applications.",
      "Collaborate with designers to implement UI/UX designs.",
      "Optimize web applications for performance and accessibility.",
    ],
  },
  {
    id: 2,
    role: "Backend Engineer",
    company: "Amazon Web Services (AWS)",
    location: "Seattle, WA, USA",
    category: "full time",
    jobDesc:
      "AWS is seeking a talented Backend Engineer to build highly scalable and secure backend systems. The candidate should be experienced in designing and implementing APIs, optimizing database queries, and ensuring system performance.",
    jobReq: [
      "Strong knowledge of Node.js, Python, or Java.",
      "Experience with cloud platforms like AWS, Azure, or GCP.",
      "Familiarity with databases such as MySQL, PostgreSQL, or MongoDB.",
    ],
    jobResp: [
      "Design, develop, and maintain backend services and APIs.",
      "Optimize database queries and system performance.",
      "Ensure application security and scalability.",
    ],
  },
  {
    id: 3,
    role: "Data Scientist",
    company: "IBM",
    location: "New York, NY, USA",
    category: "full time",
    jobDesc:
      "IBM is looking for a Data Scientist to analyze complex datasets and develop predictive models. The ideal candidate will work with large datasets, extract insights, and build machine-learning solutions to solve real-world business challenges.",
    jobReq: [
      "Experience in Python, R, or SQL.",
      "Knowledge of machine learning algorithms and frameworks.",
      "Strong analytical and problem-solving skills.",
    ],
    jobResp: [
      "Analyze large datasets to extract meaningful insights.",
      "Develop and deploy machine learning models.",
      "Collaborate with teams to improve data-driven decision-making.",
    ],
  },
  {
    id: 4,
    role: "UI/UX Designer",
    company: "Adobe",
    location: "San Francisco, CA, USA",
    category: "freelance",
    jobDesc:
      "Adobe is seeking a creative UI/UX Designer to craft visually appealing and user-friendly digital experiences. This role involves designing wireframes, prototypes, and high-fidelity UI elements while ensuring seamless user interaction.",
    jobReq: [
      "Proficiency in Figma, Sketch, or Adobe XD.",
      "Understanding of user-centered design principles.",
      "Strong communication and collaboration skills.",
    ],
    jobResp: [
      "Design wireframes, prototypes, and high-fidelity UI elements.",
      "Conduct user research and implement feedback into designs.",
      "Work closely with developers to ensure design feasibility.",
    ],
  },
  {
    id: 5,
    role: "Cybersecurity Analyst",
    company: "Cisco",
    location: "Austin, TX, USA",
    category: "full time",
    jobDesc:
      "Cisco is hiring a Cybersecurity Analyst to monitor, analyze, and protect systems and networks from cyber threats. The candidate should have strong analytical skills and experience with security protocols.",
    jobReq: [
      "Experience with SIEM tools and network security.",
      "Knowledge of security protocols and firewalls.",
      "Strong problem-solving and analytical skills.",
    ],
    jobResp: [
      "Monitor and analyze security threats and vulnerabilities.",
      "Implement security protocols to protect company data.",
      "Respond to security incidents and mitigate risks.",
    ],
  },
  {
    id: 6,
    role: "AI/ML Engineer",
    company: "Tesla",
    location: "Palo Alto, CA, USA",
    category: "internship",
    jobDesc:
      "Tesla is looking for an AI/ML Engineer Intern to develop cutting-edge machine learning models for automation and predictive analytics. The intern will work with real-world datasets to improve AI-driven solutions.",
    jobReq: [
      "Knowledge of Python, TensorFlow, or PyTorch.",
      "Understanding of deep learning and neural networks.",
      "Strong mathematical and analytical skills.",
    ],
    jobResp: [
      "Develop and train AI models for automation.",
      "Analyze large datasets and improve ML algorithms.",
      "Work with cross-functional teams to integrate AI solutions.",
    ],
  },
  {
    id: 7,
    role: "DevOps Engineer",
    company: "Microsoft",
    location: "Redmond, WA, USA",
    category: "full time",
    jobDesc:
      "Microsoft is looking for a DevOps Engineer to streamline software deployment and optimize infrastructure. The candidate will automate CI/CD pipelines, monitor cloud infrastructure, and ensure system reliability.",
    jobReq: [
      "Experience with Docker, Kubernetes, and CI/CD tools.",
      "Knowledge of cloud services like AWS, Azure, or GCP.",
      "Strong scripting skills in Bash, Python, or PowerShell.",
    ],
    jobResp: [
      "Automate and maintain CI/CD pipelines.",
      "Monitor and optimize cloud infrastructure.",
      "Implement security and compliance best practices.",
    ],
  },
  {
    id: 8,
    role: "Game Developer",
    company: "Epic Games",
    location: "Raleigh, NC, USA",
    category: "temporary",
    jobDesc:
      "Epic Games is hiring a Game Developer to create immersive gaming experiences. This role requires developing game mechanics, optimizing performance, and collaborating with artists and designers to bring creative ideas to life.",
    jobReq: [
      "Proficiency in Unity or Unreal Engine.",
      "Experience with C++, C#, or JavaScript.",
      "Passion for gaming and game development.",
    ],
    jobResp: [
      "Develop and optimize game mechanics and features.",
      "Collaborate with designers and artists to implement game assets.",
      "Ensure game performance and stability across platforms.",
    ],
  },
  {
    id: 9,
    role: "Blockchain Developer",
    company: "Binance",
    location: "Remote",
    category: "freelance",
    jobDesc:
      "Binance is looking for a Blockchain Developer to build innovative decentralized applications. The role involves developing smart contracts, enhancing blockchain security, and contributing to DeFi projects.",
    jobReq: [
      "Experience with Solidity, Rust, or Go.",
      "Knowledge of blockchain protocols and cryptographic principles.",
      "Strong problem-solving and development skills.",
    ],
    jobResp: [
      "Develop and deploy smart contracts for decentralized applications.",
      "Enhance blockchain security and scalability.",
      "Collaborate on DeFi and crypto-based projects.",
    ],
  },
  {
    id: 10,
    role: "IT Support Specialist",
    company: "Dell Technologies",
    location: "Houston, TX, USA",
    category: "part time",
    jobDesc:
      "Dell Technologies is looking for an IT Support Specialist to assist customers with technical issues. The candidate will troubleshoot software/hardware problems, install IT systems, and document support tickets.",
    jobReq: [
      "Familiarity with Windows, macOS, and Linux.",
      "Strong problem-solving and communication skills.",
      "Knowledge of networking and system administration.",
    ],
    jobResp: [
      "Provide technical support and resolve IT issues.",
      "Install and configure hardware and software.",
      "Document support tickets and troubleshoot recurring issues.",
    ],
  },
];

/* Why Carrer Vista section data */
export const whyus = [
  {
    id: 1,
    heading: "Search Millions of Jobs",
    desc: "Find the perfect job from millions of listings across various industries and locations.",
    icon: FaSearch,
  },
  {
    id: 2,
    heading: "Top Careers",
    desc: "Explore high-paying, in-demand careers tailored to your skills and experience.",
    icon: FaBriefcase,
  },
  {
    id: 3,
    heading: "Search Expert Candidates",
    desc: "Find highly skilled professionals that match your hiring needs quickly and efficiently.",
    icon: FaUsers,
  },
  {
    id: 4,
    heading: "Location Search",
    desc: "Discover jobs near you with advanced location-based search and filtering.",
    icon: FaMapMarkerAlt,
  },
  {
    id: 5,
    heading: "Online Reviews",
    desc: "Read authentic company reviews to make informed career decisions.",
    icon: FaStar,
  },
  {
    id: 6,
    heading: "Easy To Manage Jobs",
    desc: "Effortlessly post, update, and track job listings with our intuitive dashboard.",
    icon: MdWorkOutline,
  },
];

/* Testimonials Data */
export const testimonials = [
  {
    id: 1,
    name: "John Anderson",
    role: "CEO",
    company: "TechNova Inc.",
    message:
      "Hiring through this platform has been a game-changer for our company. We've found top-tier talent that perfectly fits our culture and needs.",
    image: male1,
  },
  {
    id: 2,
    name: "Sophia Reynolds",
    role: "HR Manager",
    company: "BrightVision Solutions",
    message:
      "Hiring through this platform has been a game-changer for our company. We've found top-tier talent that perfectly fits our culture and needs.",
    image: female1,
  },
  {
    id: 3,
    name: "Michael Carter",
    role: "Web Developer",
    company: "Job Seeker",
    message:
      "This platform helped me land my dream job! The opportunities and guidance provided were invaluable.",
    image: male2,
  },
  {
    id: 4,
    name: "Emma Wilson",
    role: "App Developer",
    company: "Job Seeker",
    message:
      "A fantastic experience! I connected with recruiters effortlessly and found a job that aligns with my skills and passion.",
    image: female2,
  },
];

/* Team Members Data */
export const teamMembers = [
  {
    id: 1,
    name: "Alexander Scott",
    role: "CEO, Co-Founder",
    image: maleTeam1,
    instagramHandle: "https://instagra.com/alexander_scott",
    linkedinHandle: "https://linkedi.com/alexander_scott",
    twitterHandle: "https://twitte.com/alex_scott",
  },
  {
    id: 2,
    name: "Isabella Morgan",
    role: "CTO, Co-Founder",
    image: femaleTeam1,
    instagramHandle: "https://instagra.com/isabella_morgan",
    linkedinHandle: "https://linkedi.com/isabella_morgan",
    twitterHandle: "https://twitte.com/isabella_morgan",
  },
  {
    id: 3,
    name: "Charlotte Adams",
    role: "Project Manager",
    image: femaleTeam2,
    instagramHandle: "https://instagra.com/charlotte_adams",
    linkedinHandle: "https://linkedi.com/charlotte_adams",
    twitterHandle: "https://twitte.com/charlotte_adams",
  },
  {
    id: 4,
    name: "James Walker",
    role: "Project Manager",
    image: maleTeam2,
    instagramHandle: "https://instagra.com/james_walker",
    linkedinHandle: "https://linkedi.com/james_walker",
    twitterHandle: "https://twitte.com/james_walker",
  },
  {
    id: 5,
    name: "John Doe",
    role: "Lead Developer",
    image: maleTeam3,
    instagramHandle: "https://instagram.com/john_doe",
    linkedinHandle: "https://linkedi.com/john_doe",
    twitterHandle: "https://twitte.com/john_doe",
  },
];

/* FAQ's data */
export const faqs = [
  {
    id: 1,
    question: "What is Career Vista?",
    answer:
      "Career Vista is a platform designed to connect job seekers with potential employers. We help professionals find the right job opportunities while enabling companies to hire top talent efficiently.",
  },
  {
    id: 2,
    question: "How can I apply for a job on Career Vista?",
    answer:
      'To apply for a job, create an account, complete your profile, and browse job listings. When you find a suitable position, click "Apply Now" and follow the instructions provided by the employer.',
  },
  {
    id: 3,
    question: "Is Career Vista free to use?",
    answer:
      "Yes! Job seekers can create profiles, search for jobs, and apply for positions completely free. Employers may have different plans based on their hiring needs.",
  },
  {
    id: 4,
    question: "How do employers find candidates on Career Vista?",
    answer:
      "Employers can post job openings and browse through our database of qualified job seekers. They can also use filters to find candidates who match their requirements.",
  },
  {
    id: 5,
    question: "How do I contact Career Vista for support?",
    answer:
      "If you need assistance, visit our Contact Us page or email us at support@careervista.com. Our team is always ready to help!",
  },
];
