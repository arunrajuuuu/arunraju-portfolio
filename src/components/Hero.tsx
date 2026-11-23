import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, FileText } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid bg-grid-fade opacity-40 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[1150px] px-6 pt-24 pb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-8 rounded-full border border-[#252525] bg-[#111111]/60 text-xs text-[#999999]">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Available for opportunities
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white mb-4">
            ARVARAJU ARUNRAJU
          </h1>

          <p className="text-sm sm:text-base tracking-[0.2em] uppercase text-[#999999] mb-6">
            AI Engineer / Python Developer
          </p>

          <p className="text-lg sm:text-xl md:text-2xl font-medium text-white/90 max-w-2xl mx-auto mb-4 leading-relaxed">
            Building intelligent systems through code, data & AI.
          </p>

          <p className="text-sm sm:text-base text-[#999999] max-w-xl mx-auto mb-10">
            I build intelligent applications, AI-driven workflows, backend
            systems, and scalable data solutions.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#080808] text-sm font-medium rounded-md hover:bg-white/90 transition-colors"
            >
              Explore My Work
              <ArrowDown size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[#252525] text-sm font-medium text-white rounded-md hover:border-[#444] hover:bg-[#111111] transition-colors"
            >
              <FileText size={16} />
              Contact
            </a>
            <a
              href="https://github.com/arunrajuuuu"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 border border-[#252525] text-sm font-medium text-[#999999] rounded-md hover:border-[#444] hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/arvarajuarunraju"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 border border-[#252525] text-sm font-medium text-[#999999] rounded-md hover:border-[#444] hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#080808] to-transparent pointer-events-none" />
    </section>
  );
}
