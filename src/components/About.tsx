import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="mx-auto max-w-[1150px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs tracking-[0.25em] uppercase text-[#999999] mb-4">
            About
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-12 max-w-2xl">
            Engineering intelligent systems with Python, AI & data.
          </h2>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            <div className="space-y-6 text-[#999999] text-[15px] leading-relaxed">
              <p>
                I am a Python developer passionate about building intelligent
                software systems using Generative AI, Agentic AI, MCP
                integrations, backend technologies, and Data Engineering.
              </p>
              <p>
                My work focuses on developing AI-driven applications, automating
                technical workflows, integrating databases, and building
                scalable backend solutions. I enjoy exploring emerging
                technologies and transforming complex engineering challenges
                into practical solutions.
              </p>
              <p>
                Currently based in Hyderabad, I work as a Python Developer at
                Zeus AI LLP, where I contribute to backend systems, AI
                integrations, and data-centric platforms.
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-sm font-medium text-white mb-2">
                  Current Role
                </h3>
                <p className="text-[#999999] text-sm">
                  Python Developer @ Zeus AI LLP
                  <br />
                  <span className="text-xs">May 2025 – Present</span>
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-white mb-2">
                  Education
                </h3>
                <p className="text-[#999999] text-sm">
                  B.Tech – Computer Science and Engineering (Data Science)
                  <br />
                  Malla Reddy College of Engineering and Technology
                  <br />
                  <span className="text-xs">Graduated 2025</span>
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-white mb-2">
                  Engineering Philosophy
                </h3>
                <p className="text-[#999999] text-sm leading-relaxed">
                  Prefer clarity over complexity. Build systems that are
                  reliable, observable, and maintainable. Treat AI as a powerful
                  tool that must be grounded in solid engineering foundations.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
