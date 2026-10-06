// All of the site's story content lives here, so text can change without touching layout code.
// Icons are component references; the section components render them.
import {
  FaBriefcase,
  FaEnvelope,
  FaFlask,
  FaGamepad,
  FaGithub,
  FaGraduationCap,
  FaLaptopCode,
  FaLinkedinIn,
  FaMicrochip,
  FaMusic,
  FaProjectDiagram,
  FaStore,
  FaTemperatureHigh,
} from "react-icons/fa";
import { PiFileCppBold } from "react-icons/pi";

export const profile = {
  name: "KyungTae (KT) Kim",
  email: "kimkyungtae12386@gmail.com",
  phone: "(+1) (917) 487 8930",
  location: "Los Angeles, CA",
  github: "https://github.com/KyungTae0820",
  linkedin: "https://www.linkedin.com/in/kktkim",
  resume: "/KT - Resume.pdf",
  roles: ["Golfer", "Student", "Learner", "Software Developer", "Discharged Soldier"],
};

export const about = {
  bio: [
    "I'm a Computer Science student at USC Viterbi (B.S., expected May 2027) who enjoys working across the whole stack: AVR firmware and C++ game engines on one end, full-stack SaaS and LLM tooling on the other.",
    "Most recently I built an MCP server at Samsung Semiconductor that brings SSD test analytics into an internal LLM platform, and co-founded VIOLA, an AI music workspace for sync teams. I grew up between South Korea, Brazil, and the US, speak English, Korean, and Spanish, and away from the keyboard you'll find me golfing, digging for new music, or traveling.",
  ],
  skills: [
    {
      group: "Languages",
      items: ["C/C++", "Python", "Java", "TypeScript", "JavaScript", "Swift", "Objective-C", "Ruby", "SQL", "HTML/CSS"],
    },
    {
      group: "Frameworks",
      items: ["React", "Next.js", "Node.js", "Expo", "FastAPI", "Django REST", "Tailwind CSS", "Framer Motion"],
    },
    { group: "Data & Cloud", items: ["PostgreSQL", "Supabase", "Firebase", "Docker", "Vercel", "Clerk", "Grafana"] },
    { group: "AI & ML", items: ["MCP", "LLM workflows", "Hugging Face", "scikit-learn", "Pandas", "Jupyter"] },
    { group: "Embedded & Graphics", items: ["AVR", "PWM / ISRs", "EEPROM", "OneWire", "SDL3", "OpenGL"] },
    { group: "Tools", items: ["Git", "JIRA", "Confluence", "Xcode", "Figma", "Emscripten"] },
  ],
};

export const timelineKinds = {
  work: { label: "Work", icon: FaBriefcase },
  education: { label: "Education", icon: FaGraduationCap },
  program: { label: "Program", icon: FaFlask },
};

// Newest first. `details` are extra bullets shown behind a "More" toggle.
export const experience = [
  {
    kind: "work",
    org: "Samsung Semiconductor",
    title: "R&D TED Intern, AI Automation",
    dates: "May 2026 – Aug 2026",
    location: "San Jose, CA",
    href: "https://semiconductor.samsung.com/us/",
    bullets: [
      "Architected an MCP (Model Context Protocol) server for Samsung's internal SSD test analytics platform, delivering 77 tools to an internal LLM platform used by 100+ engineers across 3 teams.",
      "Built LLM-driven workflows across SSD test data and JIRA (result, runtime, and failure comparison, ticket-to-test tracing, blocker analysis), cutting data retrieval from 3–10 minutes to under 1 minute.",
      "Reduced average server CPU usage 8–10× (4–5 cores to 0.5) by profiling with Grafana, slimming API payloads, and adding cursor-based pagination.",
    ],
    details: [
      "Implemented in-chat authentication and multi-database routing, automatically directing each engineer's queries to the databases they are authorized to access.",
      "Root-caused a rare production crash where uncontrolled API fan-out spiked CPU past 30 cores; introduced concurrency limits and a producer-consumer queue, eliminating crashes under high load.",
      "Set up a reproducible deployment with per-request and per-tool debug logging, Docker, and Confluence documentation for a seamless handoff.",
    ],
    tech: ["Python", "FastAPI", "Django REST", "Docker", "MCP", "Grafana", "JIRA"],
  },
  {
    kind: "work",
    org: "VIOLA",
    title: "Co-Founder & CTO · Technical Advisor",
    roles: [
      { title: "Technical Advisor", dates: "May 2026 – Jul 2026" },
      { title: "Co-Founder & CTO", dates: "Sep 2025 – May 2026" },
    ],
    dates: "Sep 2025 – Jul 2026",
    location: "Los Angeles, CA",
    href: "https://www.theviola.co",
    bullets: [
      "Led engineering for an AI music workspace that helps sync teams and music supervisors find, shortlist, and clear the right track.",
      "Designed and built a full-stack CRM SaaS for the music industry with Clerk authentication and webhooks, and PostgreSQL row-level security on Supabase.",
      "Built a Hugging Face–based LLM recommendation pipeline for personalized track suggestions, reaching Precision@k ≈ 0.8.",
    ],
    tech: ["TypeScript", "Node.js", "PostgreSQL", "Supabase", "Clerk", "Hugging Face"],
  },
  {
    kind: "work",
    org: "Iris AI",
    title: "Software Engineer Intern",
    dates: "Jun 2025 – Aug 2025",
    location: "Dallas, TX",
    href: "https://apps.apple.com/ng/app/iris-ai-assistant/id6473088049",
    bullets: [
      "Built a real-time chat platform in TypeScript and Expo with Firebase Auth, Firestore, and WebSockets, and contributed to the Ruby backend APIs.",
      "Cut message latency 30% and improved media uploads with Firebase phone OTP + reCAPTCHA and a Redux state layer on iOS and Android.",
    ],
    tech: ["TypeScript", "Expo", "Firebase", "Redux", "Ruby"],
  },
  {
    kind: "work",
    org: "HairDAO",
    title: "Software Engineer Intern",
    dates: "Sep 2022 – Dec 2022",
    location: "Los Angeles, CA",
    href: "https://www.hairdao.xyz/",
    bullets: [
      "Rebuilt HairDAO's open-source web platform in React for an Ethereum-based research DAO.",
      "Integrated a knowledge graph (nodes and entries) with the backend team, reaching 96% data-sync reliability.",
    ],
    tech: ["React", "JavaScript", "Ethereum"],
  },
  {
    kind: "education",
    org: "University of Southern California",
    title: "B.S. Computer Science, Viterbi School of Engineering",
    dates: "Aug 2022 – May 2027 (expected)",
    location: "Los Angeles, CA",
    bullets: [
      "USC Merit Scholarship Finalist · Viterbi Dean's List.",
      "Leadership: Engineer at TroyLabs · E-Board at KSEA · E-Board at DataSC · Member of Blockchain@USC.",
    ],
    tags: [
      "Data Structures & OOD",
      "Software Development",
      "Algorithms & Theory of Computing",
      "Embedded Systems",
      "Linear Algebra",
      "Statistics",
    ],
  },
  {
    kind: "program",
    org: "MIT Beaver Works Summer Institute",
    title: "Machine Learning Research Trainee",
    dates: "May 2021 – Jul 2021",
    location: "Cambridge, MA",
    bullets: [
      "Built ANN, k-NN, SVM, and Naive Bayes models in a team that reached 93%+ accuracy, using scikit-learn and Pandas (Medlytics).",
      "Completed the Python Core and Version Control (Git & GitHub) courses.",
    ],
    tech: ["Python", "scikit-learn", "Pandas", "Git"],
  },
  {
    kind: "education",
    org: "Graded – The American School of São Paulo",
    title: "High School Diploma & IB Diploma",
    dates: "2019 – 2022",
    location: "São Paulo, Brazil",
    bullets: ["Finished high school and the International Baccalaureate in Brazil."],
  },
];

// An `href` starting with "/" stays on this site; anything else opens in a new tab.
export const projects = [
  {
    title: "Games",
    icon: FaGamepad,
    href: "/projects/games",
    description:
      "Nine C++ games built with SDL3 and OpenGL, from Pong to a 3D Portal campaign, compiled to WebAssembly so you can play them right here.",
    tech: ["C++", "SDL3", "OpenGL", "WebAssembly"],
  },
  {
    title: "VIOLA",
    icon: FaMusic,
    href: "https://www.theviola.co",
    description:
      "AI music workspace for sync teams and tastemakers: find, shortlist, and clear tracks. Full-stack SaaS with an LLM recommendation pipeline.",
    tech: ["TypeScript", "PostgreSQL", "Clerk", "Hugging Face"],
  },
  {
    title: "Embedded Thermostat Alarm",
    icon: FaTemperatureHigh,
    description:
      "Real-time temperature monitor on an AVR microcontroller with 0.1°F precision, adjustable 50–90°F thresholds, breach alarms, and fault-tolerant EEPROM storage.",
    tech: ["C++", "AVR", "PWM", "EEPROM", "OneWire"],
  },
  {
    title: "Full-Stack Embedded Systems",
    icon: FaMicrochip,
    href: "https://www.instagram.com/we._.tech/",
    description:
      "Hardware-to-software builds, from designing the circuit to writing the control software, documented build by build.",
    tech: ["C++", "Arduino / AVR", "Sensors"],
  },
  {
    title: "Retail System Simulation",
    icon: FaStore,
    description:
      "A simplified Amazon-style store in C++ with keyword search, carts, and purchases over product and user data parsed with efficient file I/O.",
    tech: ["C++", "STL", "File I/O"],
  },
  {
    title: "Algorithm Implementations",
    icon: FaProjectDiagram,
    href: "https://github.com/KyungTae0820/projects/tree/main/01",
    description:
      "Implementations of the algorithms behind leading platforms and apps, adapted for real-world data processing and web services.",
    tech: ["C++", "Python", "Java"],
  },
  {
    title: "Fundamental C++",
    icon: PiFileCppBold,
    href: "https://github.com/KyungTae0820/projects/tree/main/04",
    description:
      "Deep dives into C++ fundamentals: object-oriented design, memory management, and data structures applied to practical problems.",
    tech: ["C++"],
  },
  {
    title: "This Portfolio",
    icon: FaLaptopCode,
    href: "https://github.com/KyungTae0820/kt-portfolio",
    description:
      "This site: Next.js App Router with Tailwind CSS and Framer Motion, tuned for SEO (LCP down 52%) and deployed on Vercel.",
    tech: ["Next.js", "React", "Tailwind CSS", "Vercel"],
  },
];

export const contact = {
  blurb: "Open to software engineering roles and collaborations. Email or LinkedIn is the fastest way to reach me.",
  links: [
    { label: "LinkedIn", value: "linkedin.com/in/kktkim", href: profile.linkedin, icon: FaLinkedinIn },
    { label: "GitHub", value: "github.com/KyungTae0820", href: profile.github, icon: FaGithub },
    { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: FaEnvelope },
  ],
  services: [
    { value: "software-engineering", label: "Software Engineering" },
    { value: "electrical-engineering", label: "Electrical Engineering" },
    { value: "other", label: "Other" },
  ],
};
