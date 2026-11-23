import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#080808]/90 backdrop-blur-md border-b border-[#252525]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-[1150px] px-6 h-16 flex items-center justify-between">
        <a
          href="#hero"
          className="text-sm font-semibold tracking-wider text-white hover:text-white/80 transition-colors"
        >
          ARUNRAJU
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[#999999] hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://github.com/arunrajuuuu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[#999999] hover:text-white transition-colors"
          >
            GitHub
          </a>
        </nav>

        <button
          className="md:hidden text-[#999999] hover:text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#080808] border-b border-[#252525] overflow-hidden"
          >
            <nav className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm text-[#999999] hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="https://github.com/arunrajuuuu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#999999] hover:text-white transition-colors"
              >
                GitHub
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
