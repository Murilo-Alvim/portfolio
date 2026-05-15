import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-bg-border/60 py-10 px-6">
      <div className="container-narrow flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-zinc-500">
          © {new Date().getFullYear()} Murilo Alvim · Construído com Next.js e
          muito{" "}
          <span className="text-brand-fuchsia" aria-label="café">
            ☕
          </span>
        </p>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Murilo-Alvim"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full border border-bg-border hover:border-brand-violet/60 flex items-center justify-center text-zinc-400 hover:text-zinc-100 transition-colors"
            aria-label="GitHub"
          >
            <Github size={15} />
          </a>
          <a
            href="https://www.linkedin.com/in/murilo-alvim-a49226313/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 rounded-full border border-bg-border hover:border-brand-violet/60 flex items-center justify-center text-zinc-400 hover:text-zinc-100 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={15} />
          </a>
          <a
            href="mailto:muriloalvim16@gmail.com"
            className="w-9 h-9 rounded-full border border-bg-border hover:border-brand-violet/60 flex items-center justify-center text-zinc-400 hover:text-zinc-100 transition-colors"
            aria-label="Email"
          >
            <Mail size={15} />
          </a>
        </div>
      </div>
    </footer>
  );
}
