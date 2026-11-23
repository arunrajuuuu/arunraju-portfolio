import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight } from "lucide-react";
import { projects, type Project } from "../data/projects";

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 12 }}
        transition={{ duration: 0.25 }}
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-[#111111] border border-[#252525] rounded-xl p-6 md:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#999999] hover:text-white transition-colors"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        <p className="text-xs tracking-wider text-[#666666] mb-2">
          PROJECT {String(project.id).padStart(2, "0")}
        </p>
        <h3 className="text-2xl font-semibold text-white mb-4 pr-8">
          {project.title}
        </h3>

        <div className="space-y-6 text-sm text-[#999999] leading-relaxed">
          <div>
            <h4 className="text-xs tracking-wider uppercase text-[#666666] mb-2">
              Problem
            </h4>
            <p>{project.problem}</p>
          </div>
          <div>
            <h4 className="text-xs tracking-wider uppercase text-[#666666] mb-2">
              Technical Approach
            </h4>
            <p>{project.approach}</p>
          </div>
          <div>
            <h4 className="text-xs tracking-wider uppercase text-[#666666] mb-2">
              Key Contributions
            </h4>
            <ul className="space-y-1.5 list-disc list-inside">
              {project.contributions.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xs tracking-wider uppercase text-[#666666] mb-3">
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-xs border border-[#252525] rounded text-[#cccccc]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 md:py-32 border-t border-[#252525]">
      <div className="mx-auto max-w-[1150px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs tracking-[0.25em] uppercase text-[#999999] mb-4">
            Selected Work
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            Engineering Projects
          </h2>
          <p className="text-[#999999] text-sm max-w-xl mb-14">
            Generalized engineering case studies focused on AI systems,
            backend architecture, and data platforms. Confidential client and
            product details are intentionally omitted.
          </p>

          <div className="space-y-4">
            {projects.map((project, idx) => (
              <motion.button
                key={project.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                onClick={() => setSelected(project)}
                className="group w-full text-left p-5 md:p-6 border border-[#252525] rounded-lg hover:border-[#3a3a3a] hover:bg-[#0c0c0c] transition-all duration-200"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs text-[#555555] font-mono">
                        {String(project.id).padStart(2, "0")}
                      </span>
                      <h3 className="text-base md:text-lg font-medium text-white group-hover:text-white">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-sm text-[#999999] leading-relaxed mb-4 max-w-2xl">
                      {project.shortDescription}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 5).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 text-[11px] border border-[#252525] rounded text-[#888888]"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 5 && (
                        <span className="px-2 py-0.5 text-[11px] text-[#666666]">
                          +{project.technologies.length - 5}
                        </span>
                      )}
                    </div>
                  </div>
                  <ArrowUpRight
                    size={18}
                    className="text-[#555555] group-hover:text-white transition-colors shrink-0 mt-1"
                  />
                </div>
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {selected && (
          <ProjectModal project={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
