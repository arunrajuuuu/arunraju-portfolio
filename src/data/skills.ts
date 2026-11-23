export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    skills: ["Python", "SQL", "JavaScript"],
  },
  {
    title: "Backend Development",
    skills: ["Django", "FastAPI", "REST APIs", "Backend Architecture"],
  },
  {
    title: "Frontend",
    skills: ["React", "HTML", "CSS", "JavaScript", "Streamlit"],
  },
  {
    title: "Generative AI",
    skills: [
      "Large Language Models",
      "LangChain",
      "Retrieval-Augmented Generation (RAG)",
      "Embeddings",
      "Vector Databases",
      "Prompt Engineering",
      "LLM Integration",
    ],
  },
  {
    title: "Agentic AI & Integration",
    skills: [
      "Model Context Protocol (MCP)",
      "MCP Servers",
      "Server-Sent Events (SSE)",
      "AI Tool Calling",
      "Agent Orchestration",
      "Intelligent Automation",
    ],
  },
  {
    title: "Databases",
    skills: ["Microsoft SQL Server", "Oracle", "MongoDB", "MySQL"],
  },
  {
    title: "Data Engineering",
    skills: [
      "Database Schema Analysis",
      "Data Quality",
      "Metadata Management",
      "Data Discovery",
      "Databricks",
      "Snowflake",
    ],
  },
  {
    title: "Cloud & Development Tools",
    skills: ["Microsoft Azure", "AWS", "Git", "GitHub", "Docker"],
  },
];
