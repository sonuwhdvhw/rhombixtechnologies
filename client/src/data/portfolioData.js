/**
 * portfolioData.js
 * ─────────────────────────────────────────────────────────────────
 * Saqlain Zafar — Personal Portfolio Data
 * ─────────────────────────────────────────────────────────────────
 */

export const aboutData = {
  name:      "Saqlain Zafar",
  title:     "Full Stack Developer",
  bio:       "Aspiring Software Engineer and Full Stack Developer passionate about building modern, responsive, and user-friendly web applications. Skilled in both frontend and backend development, with a commitment to continuous learning and creating impactful digital solutions.",
  goals:     "Aiming to grow as a professional full stack developer, contribute to impactful projects, and secure a position in a forward-thinking tech company.",
  location:  "Burewala, Punjab, Pakistan",
  email:     "sonuch2288@gmail.com",
  phone:     "03023568233",
  whatsapp:  "923023568233",
  github:    "https://github.com/sonuwhdvhw",
  linkedin:  "https://www.linkedin.com/in/saqlain-zafar-877371408",
  twitter:   "",   // hidden — not available
  roles: [
    "Full Stack Developer",
    "React Developer",
    "Node.js Engineer",
    "PHP & MySQL Developer",
    "Aspiring Software Engineer",
  ],
};

export const backgroundData = [
  // ── Education ────────────────────────────────────────────────
  {
    type:        "education",
    institution: "COMSATS University Islamabad, Vehari Campus",
    degree:      "BS Computer Science",
    year:        "2023 – 2027",
    description: "Pursuing Bachelor's degree in Computer Science with focus on software engineering, web development, and modern computing technologies.",
    order:       1,
  },
  {
    type:        "education",
    institution: "Government Degree College Burewala",
    degree:      "Intermediate (FSc / ICS)",
    year:        "2021 – 2023",
    description: "Completed intermediate level education with focus on Computer Science and Mathematics.",
    order:       2,
  },
  {
    type:        "education",
    institution: "Dawn Science Secondary School",
    degree:      "Matriculation (SSC)",
    year:        "2019 – 2021",
    description: "Completed secondary school education with Science subjects.",
    order:       3,
  },
];

export const skillsData = [
  // ── Technical Skills ──────────────────────────────────────────
  { name: "HTML5",                  category: "technical", level: 95, icon: "🌐" },
  { name: "CSS3",                   category: "technical", level: 90, icon: "🎨" },
  { name: "JavaScript (ES6+)",      category: "technical", level: 85, icon: "🟨" },
  { name: "Bootstrap",              category: "technical", level: 88, icon: "🅱️" },
  { name: "Tailwind CSS",           category: "technical", level: 80, icon: "💨" },
  { name: "PHP",                    category: "technical", level: 78, icon: "🐘" },
  { name: "MySQL",                  category: "technical", level: 80, icon: "🗄️" },
  { name: "React.js",               category: "technical", level: 82, icon: "⚛️" },
  { name: "Node.js",                category: "technical", level: 75, icon: "🟢" },
  { name: "Express.js",             category: "technical", level: 75, icon: "🚂" },
  { name: "REST APIs",              category: "technical", level: 78, icon: "🔗" },
  { name: "Git & GitHub",           category: "technical", level: 85, icon: "📦" },
  { name: "Responsive Web Design",  category: "technical", level: 92, icon: "📱" },
  { name: "Database Design",        category: "technical", level: 76, icon: "🏗️" },
  { name: "OOP",                    category: "technical", level: 74, icon: "🔷" },
  // ── Soft Skills ───────────────────────────────────────────────
  { name: "Problem Solving",        category: "soft" },
  { name: "Continuous Learning",    category: "soft" },
  { name: "Communication",          category: "soft" },
  { name: "Team Collaboration",     category: "soft" },
  { name: "Attention to Detail",    category: "soft" },
  { name: "Adaptability",           category: "soft" },
];

export const experienceData = [
  {
    company:   "Open to Opportunities",
    title:     "Fresher — Full Stack Developer",
    type:      "full-time",
    startDate: "2024",
    endDate:   "Present",
    location:  "Burewala, Punjab, Pakistan",
    responsibilities: [
      "Currently a fresher actively looking for my first professional role as a Full Stack Developer.",
      "Available for internships, freelance projects, and full-time positions.",
      "Building real-world projects to strengthen practical development skills.",
      "Continuously learning modern technologies including React, Node.js, and cloud deployment.",
    ],
    contributions: "Developed and deployed Neezamiya Testing Platform — a live production web application serving real users at neezamiyatesting.site",
    order: 1,
  },
];

export const projectsData = [
  {
    title:       "Neezamiya Testing Platform",
    description: "A responsive online testing and examination platform allowing users to access tests, practice MCQs, view results, and improve their preparation experience. Designed with modern web development practices ensuring accessibility, performance, and seamless experience across all devices.",
    role:        "Solo Developer",
    year:        "2024",
    techStack:   [
      "HTML5", "CSS3", "JavaScript", "Bootstrap",
      "PHP", "MySQL", "Responsive Web Design", "Git & GitHub",
    ],
    features: [
      "User Authentication & Registration",
      "MCQ-Based Online Tests",
      "Real-time Result Management",
      "Responsive Mobile-Friendly Design",
      "Dynamic Content from Database",
      "Admin Panel for Test Management",
    ],
    outcomes:    "Live production app serving real users. Full authentication system, result tracking, and dynamic test generation from MySQL database.",
    githubUrl:   "https://github.com/sonuwhdvhw",
    liveUrl:     "https://neezamiyatesting.site/",
    imageUrl:    "https://api.microlink.io/?url=https%3A%2F%2Fneezamiyatesting.site&screenshot=true&meta=false&embed=screenshot.url&waitForTimeout=3000",
    featured:    true,
    order:       1,
  },
];

export const testimonialsData = [
  {
    quote:   "Saqlain is a hardworking and dedicated student with strong technical skills and a genuine passion for web development. His projects show real commitment.",
    name:    "Muhammad Ali",
    title:   "Student, BS Computer Science",
    company: "COMSATS University Islamabad, Vehari Campus",
    initials: "MA",
    order:   1,
  },
  {
    quote:   "Working on group projects with Saqlain was a great experience. He always brings clean code, fresh ideas, and is very reliable when deadlines are close.",
    name:    "Usman Tariq",
    title:   "Student, BS Computer Science",
    company: "COMSATS University Islamabad, Vehari Campus",
    initials: "UT",
    order:   2,
  },
  {
    quote:   "Saqlain independently built and deployed a full working web application as a student — that is impressive. He is self-motivated and always learning new things.",
    name:    "Bilal Hassan",
    title:   "Study Partner, COMSATS",
    company: "COMSATS University Islamabad, Vehari Campus",
    initials: "BH",
    order:   3,
  },
];

export const blogData = [
  // No articles yet — Coming Soon placeholder will show automatically
];

export const achievementsData = [
  {
    title:       "Self-taught Full Stack Developer",
    issuingBody: "Self-Directed Learning",
    year:        "2023 – 2024",
    description: "Learned HTML, CSS, JS, PHP, MySQL, React, Node.js, and Express through self-study and hands-on project building.",
    icon:        "🎓",
    order:       1,
  },
  {
    title:       "Built & Deployed Live Web Application",
    issuingBody: "Personal Project",
    year:        "2024",
    description: "Developed and deployed Neezamiya Testing Platform live at neezamiyatesting.site — a fully functional production web application.",
    icon:        "🚀",
    order:       2,
  },
];
