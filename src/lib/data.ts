export const PROFILE = {
  name: "Dheeraj Ingle",
  title: "Associate Product Manager (APM) Candidate",
  email: "dheerajingle159@gmail.com",
  phone: "9307939576",
  location: "India",
  resumeUrl:
    "https://drive.google.com/file/d/1gBT1jbAlz58xMD_yNdzff2rTYZQM8GEI/view?usp=sharing",
  social: {
    linkedin: "https://www.linkedin.com/in/dheeraj-ingle/",
    github: "https://github.com/Dheerajtechie",
    x: "https://x.com/dheerajingle_",
    instagram: "https://www.instagram.com/dheeraj_ingle05/",
    unstop: "https://unstop.com/u/dheering2809",
    reddit: "https://www.reddit.com/user/No-Pay9468/",
  },
};

export const ABOUT_GOOGLE_APM = `Product Manager passionate about building impactful, data-driven products at scale. 2025 CSE graduate, founder of PM Analytics Platform, combining technical expertise, leadership, and user-focused strategy. Specialized in AI, analytics, and delivering actionable business outcomes. Applying for Google APM 2026—eager to shape products for billions globally.`;

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  bullets: string[];
  cta?: { label: string; href: string }[];
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    company: "PM Analytics Platform",
    role: "Founder",
    period: "May 2025 – Present",
    bullets: [
      "Launched analytics SaaS for product managers to gain actionable insights from data.",
      "Delivered Cohort Analysis, Funnel Analysis, Metric Dashboards, User Retention Visualization.",
      "Led user research, product roadmap, UX/UI, and technical implementation.",
      "Orchestrated cross-functional team and agile releases to drive adoption and satisfaction.",
    ],
    cta: [
      { label: "Live Product (Vercel)", href: "https://product-analytics-app.vercel.app/" },
      { label: "Live (Streamlit)", href: "https://pm-analytics.streamlit.app/" },
      {
        label: "Nexus Analytics PM Pro",
        href: "https://nexus-analytics-product-manager-pro-mu.vercel.app/",
      },
      {
        label: "Full Case Study",
        href: "https://www.notion.so/29a1291a4d4081dfbb44d32b9b0a96dd",
      },
    ],
  },
  {
    company: "Electronic Arts (Forage)",
    role: "Product Management Simulation",
    period: "April – May 2025",
    bullets: [
      "Built metrics dashboard and KPIs for a strategy RPG mobile game.",
      "Developed business case, prioritized features, created analytics reports.",
      "Gained skills in experimentation, impact analysis, strategy, and stakeholder communication.",
    ],
  },
];

export const SKILLS = [
  "Product Management",
  "User Research & Personas",
  "Data Analytics (SQL, Python)",
  "A/B Testing, Experimentation",
  "Product Metrics & KPIs",
  "Roadmapping, Prioritization",
  "Cross-functional Collaboration",
  "Agile Practices, Jira, Figma",
  "UI/UX Prototyping",
  "Technical Documentation (PRDs, BRDs)",
  "AI/ML Product Design",
  "Market Analysis",
  "OKRs, Goal Setting",
  "Clear Written & Verbal Communication",
];

export type ProjectItem = {
  title: string;
  summary: string;
  links: { label: string; href: string }[];
  tags: string[];
};

export const PROJECTS: ProjectItem[] = [
  {
    title: "PM Analytics Platform",
    summary:
      "Data-powered SaaS for product managers—live cohort, retention, and engagement dashboards.",
    links: [
      { label: "Live Preview (Vercel)", href: "https://product-analytics-app.vercel.app/" },
      { label: "Live (Streamlit)", href: "https://pm-analytics.streamlit.app/" },
      { label: "Full Case Study", href: "https://www.notion.so/29a1291a4d4081dfbb44d32b9b0a96dd" },
    ],
    tags: ["Next.js", "Streamlit", "Analytics", "SaaS", "Product"],
  },
  {
    title: "Crypto Currency Converter (Web3)",
    summary:
      "Real-time cryptocurrency converter with secure, gas-efficient swaps and web3 wallet integration.",
    links: [
      { label: "Live Demo", href: "https://web3-app-psi.vercel.app/" },
    ],
    tags: ["Web3", "Ethers", "Next.js"],
  },
  {
    title: "Vibe (Chatting App)",
    summary:
      "Modern chatting app with live messaging, UX-rich design, and robust scalability.",
    links: [
      { label: "Live Demo", href: "https://vibe-sage.vercel.app/" },
    ],
    tags: ["Next.js", "Realtime", "UX"],
  },
  {
    title: "IdeaRanker (AI/ML Startup Ideator)",
    summary:
      "Startup ideation tool powered by AI to turn ideas into product-market fit suggestions.",
    links: [
      { label: "Streamlit", href: "https://idearanker.streamlit.app/" },
      { label: "Vercel", href: "https://idea-ranker-ten.vercel.app/" },
    ],
    tags: ["AI", "ML", "Ideation"],
  },
  {
    title: "AI-Powered Inventory Management System",
    summary:
      "Case study: inventory optimization SaaS using advanced AI, published as a full PM research story.",
    links: [
      {
        label: "Read Case Study",
        href:
          "https://www.notion.so/AI-Powered-Inventory-Management-System-27c1291a4d408110ab74f1be1e7a5c42?source=copy_link",
      },
    ],
    tags: ["AI", "Optimization", "Case Study"],
  },
];

export const CASE_STUDY_LINK = "https://nexus-analytics-product-manager.netlify.app";

export const HEADSHOT_PLACEHOLDERS = [
  { id: "headshot-1", src: "/headshot-1.jpg", alt: "Dheeraj Ingle - Professional Headshot 1" },
  { id: "headshot-2", src: "/headshot-2.jpg", alt: "Dheeraj Ingle - Professional Headshot 2" },
];