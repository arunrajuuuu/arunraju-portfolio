export interface Project {
  id: number;
  title: string;
  shortDescription: string;
  problem: string;
  approach: string;
  contributions: string[];
  technologies: string[];
  github?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Enterprise Database Schema Analysis",
    shortDescription:
      "A database analysis solution designed to identify structural changes between database snapshots.",
    problem:
      "Large enterprise systems frequently evolve. Tracking schema drift, column renames, datatype changes, and key modifications across snapshots is error-prone and time-consuming when done manually.",
    approach:
      "Built a systematic comparison engine that ingests database snapshots, performs structural diff analysis, and surfaces meaningful changes with automated reporting and execution monitoring.",
    contributions: [
      "Database schema discovery and snapshot comparison",
      "Detection of table and column additions, deletions, and renames",
      "Datatype change identification",
      "Primary and foreign key analysis",
      "Automated report generation and execution monitoring",
      "REST API layer for integration into existing workflows",
    ],
    technologies: ["Python", "SQL", "Django", "REST APIs", "SQL Server", "Databricks"],
  },
  {
    id: 2,
    title: "MCP & AI Agent Integration",
    shortDescription:
      "An AI integration solution that connects intelligent agents with external tools and backend services using the Model Context Protocol.",
    problem:
      "Modern AI agents need reliable, structured ways to invoke external tools and services. Ad-hoc integrations become brittle and hard to maintain at scale.",
    approach:
      "Designed and implemented MCP servers with Server-Sent Events for real-time communication, enabling agents to discover and call tools, interact with databases, and orchestrate multi-step workflows.",
    contributions: [
      "MCP server development and tool registration",
      "SSE-based bidirectional communication",
      "Agent-to-tool communication patterns",
      "Database connectivity within agent workflows",
      "Workflow orchestration and intelligent automation",
    ],
    technologies: ["Python", "MCP", "SSE", "REST APIs", "AI Agents", "MongoDB"],
  },
  {
    id: 3,
    title: "Document Intelligence (RAG)",
    shortDescription:
      "An intelligent document question-answering application that allows users to retrieve information from uploaded documents.",
    problem:
      "Users need accurate answers grounded in their own documents rather than generic model knowledge. Manual search across multiple files is inefficient.",
    approach:
      "Implemented a full Retrieval-Augmented Generation pipeline: document ingestion, text extraction, embedding generation, vector storage, context retrieval, and LLM-powered responses.",
    contributions: [
      "Multi-document upload and processing pipeline",
      "Text extraction and chunking",
      "Embedding generation and vector search",
      "Context-aware retrieval for LLM responses",
      "Streamlit-based interactive interface",
    ],
    technologies: ["Python", "Streamlit", "LangChain", "OpenAI APIs", "ChromaDB", "RAG"],
  },
  {
    id: 4,
    title: "Intelligent Document Classification",
    shortDescription:
      "An application that extracts, analyzes, and categorizes documents using OCR and embedding-based similarity.",
    problem:
      "Organizations accumulate large volumes of unstructured documents that require automated classification and organization without manual labeling for every file.",
    approach:
      "Combined OCR for text extraction with embedding-based similarity search to classify and organize documents into meaningful categories.",
    contributions: [
      "OCR-based text extraction from scanned and digital documents",
      "Embedding generation for semantic representation",
      "Similarity search and classification logic",
      "Automated document organization workflows",
    ],
    technologies: ["Python", "OCR", "OpenAI Embeddings", "ChromaDB"],
  },
  {
    id: 5,
    title: "Data Discovery & Governance",
    shortDescription:
      "A data platform concept focused on improving data visibility, quality, discovery, and governance.",
    problem:
      "Enterprises struggle with fragmented data assets, unclear lineage, and inconsistent quality. Discovery and governance capabilities are essential for reliable analytics and AI systems.",
    approach:
      "Designed capabilities for metadata analysis, data quality checks, sensitive data identification, and governance monitoring across connected database systems.",
    contributions: [
      "Data discovery and cataloging patterns",
      "Metadata analysis and quality checks",
      "Sensitive data identification approaches",
      "Database connectivity and governance monitoring concepts",
    ],
    technologies: ["Python", "SQL", "Database Systems", "AI Integration"],
  },
];
