import { motion } from "framer-motion";
import { experience, education, interests } from "../data/experience";

export default function Experience() {
  return (
    <>
      <section
        id="experience"
        className="py-24 md:py-32 border-t border-[#252525]"
      >
        <div className="mx-auto max-w-[1150px] px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs tracking-[0.25em] uppercase text-[#999999] mb-4">
              Career
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold text-white mb-14">
              Experience
            </h2>

            <div className="space-y-10">
              {experience.map((item) => (
                <div
                  key={item.company}
                  className="grid md:grid-cols-[200px_1fr] gap-4 md:gap-8"
                >
                  <div className="text-sm text-[#666666]">
                    <p>{item.period}</p>
                    <p className="mt-1 text-xs">{item.location}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-white">
                      {item.role}
                    </h3>
                    <p className="text-sm text-[#999999] mb-1">
                      {item.company}
                    </p>
                    {item.progression && (
                      <p className="text-xs text-[#666666] mb-4">
                        Progression: {item.progression}
                      </p>
                    )}
                    <ul className="space-y-2">
                      {item.highlights.map((h) => (
                        <li
                          key={h}
                          className="text-sm text-[#999999] flex items-start gap-2"
                        >
                          <span className="text-[#444444] mt-1.5">•</span>
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 border-t border-[#252525]">
        <div className="mx-auto max-w-[1150px] px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs tracking-[0.25em] uppercase text-[#999999] mb-4">
              Focus Areas
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-8">
              Engineering Interests
            </h2>
            <div className="flex flex-wrap gap-3">
              {interests.map((interest) => (
                <span
                  key={interest}
                  className="px-4 py-2 text-sm border border-[#252525] rounded-md text-[#cccccc] hover:border-[#3a3a3a] hover:text-white transition-colors"
                >
                  {interest}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section id="education" className="py-20 border-t border-[#252525]">
        <div className="mx-auto max-w-[1150px] px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs tracking-[0.25em] uppercase text-[#999999] mb-4">
              Education
            </p>
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-8">
              Academic Background
            </h2>
            <div className="border border-[#252525] rounded-lg p-6 md:p-8 max-w-2xl">
              <h3 className="text-lg font-medium text-white mb-1">
                {education.degree}
              </h3>
              <p className="text-sm text-[#999999] mb-1">
                {education.institution}
              </p>
              <p className="text-xs text-[#666666]">
                {education.location} · Graduated {education.year}
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
