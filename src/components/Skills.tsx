import { motion } from "framer-motion";
import { skillCategories } from "../data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 border-t border-[#252525]">
      <div className="mx-auto max-w-[1150px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs tracking-[0.25em] uppercase text-[#999999] mb-4">
            Technical Arsenal
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            Skills & Tools
          </h2>
          <p className="text-[#999999] text-sm max-w-xl mb-14">
            A focused set of technologies I use to design, build, and ship
            intelligent systems.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, idx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="space-y-4"
              >
                <h3 className="text-xs tracking-wider uppercase text-[#666666] font-medium">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-sm text-[#cccccc] hover:text-white transition-colors"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
