export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  progression?: string;
  highlights: string[];
}

export const experience: ExperienceItem[] = [
  {
    company: "Zeus AI LLP",
    role: "Python Developer",
    period: "May 2025 – Present",
    location: "Hyderabad, India",
    progression: "Python Developer Intern → Python Developer",
    highlights: [
      "Python backend development for AI-driven applications",
      "Database integration and schema analysis systems",
      "MCP server development and agentic AI integrations",
      "Workflow automation and intelligent tooling",
      "REST API design and backend architecture",
    ],
  },
];

export const education = {
  degree: "B.Tech – Computer Science and Engineering (Data Science)",
  institution: "Malla Reddy College of Engineering and Technology",
  location: "Hyderabad, India",
  year: "2025",
};

export const interests = [
  "Agentic AI",
  "Generative AI",
  "MCP Ecosystem",
  "RAG Architecture",
  "AI Automation",
  "Data Engineering",
  "Backend Architecture",
  "Intelligent Database Systems",
];
