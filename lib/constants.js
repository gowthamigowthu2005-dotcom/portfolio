// lib/constants.js
const basePath = process.env.NODE_ENV === "production" ? "/Portfolio" : "";

export const getAssetPath = (path) => {
  if (!path) return "";
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${basePath}${cleanPath}`;
};

export const PERSONAL = {
  name: "Gowthami N",
  firstName: "Gowthami",
  role: "Full Stack Developer",
  intro:
    "I build beautiful, scalable and responsive web applications with clean code and intuitive user experiences.",
  about:
    "I am a Computer Science and Engineering student with a strong interest in Full Stack Development, web technologies, and software engineering. I enjoy creating responsive and user-friendly web applications, solving programming challenges, and exploring emerging technologies.\n\nThrough my Full Stack Development internship, I gained hands-on experience in both front-end and back-end development, working on real-world projects and enhancing my problem-solving and debugging skills.\n\nI am committed to writing clean, efficient, and scalable code while building innovative solutions that deliver seamless user experiences. I am always eager to learn, adapt, and contribute to impactful technology-driven projects.",
  email: "gowthamigowthu2005@gmail.com",
  phone: "6361722066",
  location: "Bangalore, Karnataka, India",
  linkedin: "https://linkedin.com/in/gowthamin08",
  github: "https://github.com/gowthamigowthu2005-dotcom",
  cgpa: "9.08",
  resume: "/resume.pdf",
  // Set your profile photo URL or local file path here (e.g. "/profile.jpg" or "https://...")
  avatarUrl: "/profile.jpeg", 
};

export const TYPING_TEXTS = [
  "Full Stack Developer",
  "Frontend Developer",
  "Problem Solver",
  "UI/UX Enthusiast",
  "C++ & Java Programmer",
];

export const STATS = [
  { label: "CGPA", value: 9.08, suffix: "", decimals: 2 },
  { label: "Projects Completed", value: 2, suffix: "+", decimals: 0 },
  { label: "Internship Completed", value: 1, suffix: "", decimals: 0 },
  { label: "Certificates", value: 5, suffix: "+", decimals: 0 },
];

export const EDUCATION = [
  {
    id: 1,
    institution: "Nagarjuna College of Engineering and Technology",
    degree: "Bachelor of Engineering",
    field: "Computer Science Engineering",
    duration: "2023 – Present",
    score: "CGPA: 9.08",
    location: "Bengaluru, Karnataka",
    icon: "🎓",
    color: "from-violet-600 to-indigo-600",
  },
  {
    id: 2,
    institution: "Vidhayadri Pre-University College",
    degree: "Pre-University (12th)",
    field: "Science (PCMB)",
    duration: "2021 – 2023",
    score: "Percentage: 92.67%",
    location: "Chikkaballapura",
    icon: "📚",
    color: "from-cyan-500 to-blue-600",
  },
  {
    id: 3,
    institution: "Maruthi Vidya Mandira English Medium High School",
    degree: "SSLC (10th Standard)",
    field: "State Board of Karnataka",
    duration: "2020 – 2021",
    score: "Percentage: 97.44%",
    location: "Karnataka, India",
    icon: "🏫",
    color: "from-emerald-500 to-teal-600",
  },
];

export const EXPERIENCE = [
  {
    id: 1,
    company: "Torii Minds LLP",
    role: "Full Stack Development Intern",
    duration: "Nov 2025 – May 2026",
    location: "Bengaluru",
    type: "Internship",
    color: "from-violet-600 to-pink-600",
    responsibilities: [
      "Completed a six-month Full Stack Development internship.",
      "Developed responsive websites using HTML, CSS, JavaScript, and MySQL.",
      "Built interactive user interfaces.",
      "Implemented dynamic web functionality.",
      "Collaborated with mentors on real-world projects.",
      "Improved debugging and problem-solving skills.",
    ],
  },
];

export const SKILLS = [
  {
    category: "Frontend",
    icon: "🎨",
    color: "from-violet-500 to-purple-600",
    skills: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "JavaScript", level: 80 },
      { name: "Responsive Design", level: 88 },
      { name: "Tailwind CSS", level: 75 },
    ],
  },
  {
    category: "Backend",
    icon: "⚙️",
    color: "from-cyan-500 to-blue-600",
    skills: [
      { name: "MySQL", level: 78 },
      { name: "SQL", level: 80 },
    ],
  },
  {
    category: "Programming",
    icon: "💻",
    color: "from-emerald-500 to-teal-600",
    skills: [
      { name: "C", level: 80 },
      { name: "C++", level: 82 },
      { name: "Java", level: 80 },
    ],
  },
  {
    category: "Tools & Concepts",
    icon: "🛠️",
    color: "from-rose-500 to-pink-600",
    skills: [
      { name: "Figma", level: 70 },
      { name: "Prompt Engineering", level: 85 },
    ],
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: "Adventure Awaits: Plan Your Dream Trip Today",
    description:
      "Designed and developed a responsive travel planning website using HTML and CSS with user-friendly layouts and modern responsive design.",
    tech: ["HTML", "CSS", "Responsive Design"],
    github: "https://github.com/gowthamigowthu2005-dotcom",
    live: "#",
    gradient: "from-violet-600 to-cyan-600",
    category: "Frontend",
  },
  {
    id: 2,
    title: "Medicine QR Code Tracker",
    description:
      "Developed a QR code-based medicine verification and inventory management system to ensure medicine authenticity and efficient stock tracking. Enabled users to scan QR codes and instantly access product details, batch information, and expiry dates. Integrated a centralized database for real-time inventory updates and record management. Improved traceability, reduced manual errors, and streamlined medicine tracking processes.",
    tech: ["HTML", "CSS", "JavaScript", "MySQL", "QR Code Integration"],
    github: "https://github.com/gowthamigowthu2005-dotcom",
    live: "#",
    gradient: "from-cyan-600 to-violet-600",
    category: "Web App",
  },
];

export const CERTIFICATIONS = [
  {
    id: 1,
    title: "HTML Essentials",
    issuer: "Cisco",
    color: "from-orange-500 to-red-600",
    icon: "🌐",
    image: "/html.png",
  },
  {
    id: 2,
    title: "CSS Essentials",
    issuer: "Cisco",
    color: "from-blue-500 to-indigo-600",
    icon: "🎨",
    image: "/css.png",
  },
  {
    id: 3,
    title: "JavaScript Essentials 1",
    issuer: "Cisco",
    color: "from-yellow-400 to-orange-500",
    icon: "⚡",
    image: "/java_script.png",
  },
  {
    id: 4,
    title: "JavaScript Essentials 2",
    issuer: "Cisco",
    color: "from-yellow-400 to-orange-500",
    icon: "⚡",
    image: "/java_script.png",
  },
  {
    id: 5,
    title: "Foundation of Prompt Engineering",
    issuer: "AWS",
    color: "from-amber-400 to-yellow-600",
    icon: "🤖",
    image: "/PE.png",
  },
];

export const LANGUAGES = [
  { name: "English", level: "Fluent", flag: "🇬🇧" },
  { name: "Kannada", level: "Native", flag: "🇮🇳" },

];

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];
