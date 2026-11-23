import { motion } from "framer-motion";
import { Github, Linkedin, MapPin, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 border-t border-[#252525]">
      <div className="mx-auto max-w-[1150px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="text-xs tracking-[0.25em] uppercase text-[#999999] mb-4">
            Contact
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
            Have an interesting engineering problem?
          </h2>
          <p className="text-[#999999] text-sm leading-relaxed mb-10">
            I am always interested in exploring innovative technologies,
            building useful software, and connecting with people in the
            engineering community.
          </p>

          <div className="space-y-4">
            <a
              href="mailto:arvarajuarunraju043@gmail.com"
              className="flex items-center gap-3 text-sm text-[#cccccc] hover:text-white transition-colors group"
            >
              <Mail size={18} className="text-[#666666] group-hover:text-white transition-colors" />
              arunraju.portfolio@gmail.com
              <span className="text-xs text-[#555555]">(arvarajuarunraju043@gmail.com)</span>
            </a>
            <a
              href="https://github.com/arunrajuuuu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-[#cccccc] hover:text-white transition-colors group"
            >
              <Github size={18} className="text-[#666666] group-hover:text-white transition-colors" />
              github.com/arunrajuuuu
            </a>
            <a
              href="https://www.linkedin.com/in/arvarajuarunraju"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-[#cccccc] hover:text-white transition-colors group"
            >
              <Linkedin size={18} className="text-[#666666] group-hover:text-white transition-colors" />
              linkedin.com/in/arvarajuarunraju
            </a>
            <div className="flex items-center gap-3 text-sm text-[#999999]">
              <MapPin size={18} className="text-[#666666]" />
              Hyderabad, Telangana, India
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
