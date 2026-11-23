import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[#252525] py-12">
      <div className="mx-auto max-w-[1150px] px-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-sm font-medium text-white">ARVARAJU ARUNRAJU</p>
            <p className="text-xs text-[#666666] mt-1">
              AI ENGINEER | DEVELOPER
            </p>
          </div>

          <div className="flex items-center gap-5">
            <a
              href="https://github.com/arunrajuuuu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#666666] hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/arunrajuuuu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#666666] hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[#1a1a1a] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <p className="text-xs text-[#555555]">
            Designed with curiosity. Built with code.
          </p>
          <p className="text-xs text-[#555555]">
            © {year} Arvaraju Arunraju. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
