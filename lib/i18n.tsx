"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Lang = "pt" | "en";

type Dict = {
  nav: {
    sobre: string;
    competencias: string;
    experiencia: string;
    projetos: string;
    contato: string;
    cta: string;
    menu: string;
    langToggleAria: string;
  };
  hero: {
    available: string;
    greeting: string;
    role: string;
    roleHighlight: string;
    tagline: string;
    ctaProjects: string;
    ctaContact: string;
    scroll: string;
  };
  sobre: {
    tag: string;
    title: string;
    stats: { value: string; label: string }[];
  };
  competencias: {
    tag: string;
    titleA: string;
    titleB: string;
    subtitle: string;
    groups: { title: string; items: string[] }[];
  };
  experiencia: {
    tag: string;
    titleA: string;
    titleB: string;
    current: string;
    jobs: {
      role: string;
      company: string;
      location: string;
      period: string;
      description: string;
      highlights: string[];
    }[];
  };
  projetos: {
    tag: string;
    title: string;
    previewAlt: (title: string) => string;
    repoAria: (title: string) => string;
    liveAria: (title: string) => string;
    prevAria: string;
    nextAria: string;
    dotAria: (n: number) => string;
    items: { title: string; description: string }[];
  };
  contato: {
    tag: string;
    titleA: string;
    titleB: string;
    subtitle: string;
    open: string;
    send: string;
  };
  footer: {
    builtWith: string;
    coffeeAria: string;
    backToTop: string;
  };
};

const pt: Dict = {
  nav: {
    sobre: "Sobre",
    competencias: "Competências",
    experiencia: "Experiência",
    projetos: "Projetos",
    contato: "Contato",
    cta: "Vamos conversar",
    menu: "Menu",
    langToggleAria: "Mudar para inglês",
  },
  hero: {
    available: "Disponível para novas oportunidades",
    greeting: "Olá, eu sou",
    role: "Desenvolvedor",
    roleHighlight: "Full Stack",
    tagline:
      "Apaixonado por transformar ideias em produtos digitais com propósito, qualidade e impacto real.",
    ctaProjects: "Ver projetos",
    ctaContact: "Entrar em contato",
    scroll: "role para ver mais",
  },
  sobre: {
    tag: "# sobre mim",
    title: "Sobre Mim",
    stats: [
      { value: "6º período", label: "Sistemas de Informação · UNISANTA" },
      { value: "Jovem Aprendiz", label: "Hospital Sírio-Libanês" },
      {
        value: "Mindset",
        label: "Curiosidade, colaboração e foco em entregar valor",
      },
    ],
  },
  competencias: {
    tag: "# competências",
    titleA: "O que eu trago para a",
    titleB: "mesa",
    subtitle:
      "Linguagens, frameworks e práticas que uso para construir e entregar software de qualidade.",
    groups: [
      {
        title: "Linguagens",
        items: ["TypeScript", "JavaScript", "C# / .NET", "SQL"],
      },
      {
        title: "Frameworks & Bibliotecas",
        items: [
          "React",
          "Next.js",
          "Node.js",
          "Express",
          "ASP.NET",
          "Prisma",
          "TailwindCSS",
          "TanStack Query",
        ],
      },
      {
        title: "Banco & Infra",
        items: [
          "PostgreSQL",
          "Neon",
          "REST APIs",
          "JWT",
          "Vercel",
          "Render",
          "Git",
          "GitHub",
        ],
      },
      {
        title: "Práticas",
        items: [
          "Clean Code",
          "Tipagem estrita",
          "Validação ponta-a-ponta",
          "Componentização",
          "Versionamento Git",
          "Acessibilidade",
        ],
      },
    ],
  },
  experiencia: {
    tag: "# experiência",
    titleA: "Trajetória",
    titleB: "profissional",
    current: "Atual",
    jobs: [
      {
        role: "Jovem Aprendiz",
        company: "Hospital Sírio-Libanês",
        location: "São Paulo, SP",
        period: "Atual",
        description:
          "Atuando em uma das instituições de saúde mais reconhecidas do Brasil, desenvolvendo competências profissionais e contribuindo com rotinas administrativas e operacionais.",
        highlights: [
          "Aprendizado em ambiente corporativo de alta complexidade",
          "Desenvolvimento de habilidades de comunicação e trabalho em equipe",
          "Vivência prática em processos organizacionais",
        ],
      },
    ],
  },
  projetos: {
    tag: "# projetos",
    title: "Projetos",
    previewAlt: (t) => `Preview do projeto ${t}`,
    repoAria: (t) => `Repositório de ${t} no GitHub`,
    liveAria: (t) => `Demo ao vivo de ${t}`,
    prevAria: "Projeto anterior",
    nextAria: "Próximo projeto",
    dotAria: (n) => `Ir para o projeto ${n}`,
    items: [
      {
        title: "ProcessMap",
        description:
          "Plataforma full-stack para mapeamento de processos empresariais em hierarquia ilimitada, com visualização interativa em fluxograma, dashboard analítico em tempo real e gerenciamento completo de áreas, ferramentas e responsáveis.",
      },
      {
        title: "Catálogo de Produtos",
        description:
          "Aplicação full-stack de catálogo com sistema completo de autenticação JWT, CRUD protegido por middleware e gerenciamento de sessão persistente. Foco em segurança, organização e experiência de uso fluida.",
      },
      {
        title: "Dra. Carla",
        description:
          "Landing page institucional para profissional da área da saúde, com 8 seções (hero, sobre, especialidades, serviços, depoimentos, contato), formulário integrado via EmailJS e design responsivo mobile-first.",
      },
      {
        title: "Sabor & Arte",
        description:
          "Cardápio digital para restaurantes com seleção de pratos por categoria, carrinho integrado e finalização de pedido. Interface com tema claro/escuro, navegação fluida e experiência mobile-first.",
      },
    ],
  },
  contato: {
    tag: "# contato",
    titleA: "Vamos construir algo",
    titleB: "incrível juntos?",
    subtitle:
      "Estou aberto a oportunidades, freelas e qualquer conversa boa sobre tecnologia. Me chama em qualquer canal abaixo.",
    open: "abrir",
    send: "Enviar email",
  },
  footer: {
    builtWith: "Construído com Next.js e muito",
    coffeeAria: "café",
    backToTop: "Voltar ao topo",
  },
};

const en: Dict = {
  nav: {
    sobre: "About",
    competencias: "Skills",
    experiencia: "Experience",
    projetos: "Projects",
    contato: "Contact",
    cta: "Let's talk",
    menu: "Menu",
    langToggleAria: "Switch to Portuguese",
  },
  hero: {
    available: "Available for new opportunities",
    greeting: "Hi, I'm",
    role: "Full Stack",
    roleHighlight: "Developer",
    tagline:
      "Passionate about turning ideas into digital products with purpose, quality and real impact.",
    ctaProjects: "View projects",
    ctaContact: "Get in touch",
    scroll: "scroll to see more",
  },
  sobre: {
    tag: "# about me",
    title: "About Me",
    stats: [
      { value: "6th semester", label: "Information Systems · UNISANTA" },
      { value: "Young Apprentice", label: "Hospital Sírio-Libanês" },
      {
        value: "Mindset",
        label: "Curiosity, collaboration and focus on delivering value",
      },
    ],
  },
  competencias: {
    tag: "# skills",
    titleA: "What I bring to the",
    titleB: "table",
    subtitle:
      "Languages, frameworks and practices I use to build and deliver quality software.",
    groups: [
      {
        title: "Languages",
        items: ["TypeScript", "JavaScript", "C# / .NET", "SQL"],
      },
      {
        title: "Frameworks & Libraries",
        items: [
          "React",
          "Next.js",
          "Node.js",
          "Express",
          "ASP.NET",
          "Prisma",
          "TailwindCSS",
          "TanStack Query",
        ],
      },
      {
        title: "Database & Infra",
        items: [
          "PostgreSQL",
          "Neon",
          "REST APIs",
          "JWT",
          "Vercel",
          "Render",
          "Git",
          "GitHub",
        ],
      },
      {
        title: "Practices",
        items: [
          "Clean Code",
          "Strict typing",
          "End-to-end validation",
          "Componentization",
          "Git versioning",
          "Accessibility",
        ],
      },
    ],
  },
  experiencia: {
    tag: "# experience",
    titleA: "Professional",
    titleB: "journey",
    current: "Current",
    jobs: [
      {
        role: "Young Apprentice",
        company: "Hospital Sírio-Libanês",
        location: "São Paulo, SP",
        period: "Current",
        description:
          "Working at one of the most respected healthcare institutions in Brazil, developing professional skills and contributing to administrative and operational routines.",
        highlights: [
          "Learning in a highly demanding corporate environment",
          "Developing communication and teamwork skills",
          "Hands-on experience with organizational processes",
        ],
      },
    ],
  },
  projetos: {
    tag: "# projects",
    title: "Projects",
    previewAlt: (t) => `${t} project preview`,
    repoAria: (t) => `${t} repository on GitHub`,
    liveAria: (t) => `${t} live demo`,
    prevAria: "Previous project",
    nextAria: "Next project",
    dotAria: (n) => `Go to project ${n}`,
    items: [
      {
        title: "ProcessMap",
        description:
          "Full-stack platform for mapping enterprise processes in unlimited hierarchy, with interactive flowchart visualization, real-time analytical dashboard and complete management of areas, tools and owners.",
      },
      {
        title: "Product Catalog",
        description:
          "Full-stack catalog application with complete JWT authentication, middleware-protected CRUD and persistent session management. Focused on security, organization and a smooth user experience.",
      },
      {
        title: "Dr. Carla",
        description:
          "Institutional landing page for a healthcare professional, with 8 sections (hero, about, specialties, services, testimonials, contact), EmailJS-integrated form and mobile-first responsive design.",
      },
      {
        title: "Sabor & Arte",
        description:
          "Digital menu for restaurants with category-based dish selection, integrated cart and order checkout. Light/dark theme interface, smooth navigation and a mobile-first experience.",
      },
    ],
  },
  contato: {
    tag: "# contact",
    titleA: "Let's build something",
    titleB: "amazing together?",
    subtitle:
      "I'm open to opportunities, freelance work and any good tech conversation. Reach me on any channel below.",
    open: "open",
    send: "Send email",
  },
  footer: {
    builtWith: "Built with Next.js and lots of",
    coffeeAria: "coffee",
    backToTop: "Back to top",
  },
};

const dictionaries: Record<Lang, Dict> = { pt, en };

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
  t: Dict;
};

const LanguageContext = createContext<Ctx | null>(null);

const STORAGE_KEY = "site-lang";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("pt");

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
      if (saved === "pt" || saved === "en") {
        setLangState(saved);
      }
    } catch {}
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
    }
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {}
  }, []);

  const toggle = useCallback(() => {
    setLangState((prev) => {
      const next: Lang = prev === "pt" ? "en" : "pt";
      try {
        window.localStorage.setItem(STORAGE_KEY, next);
      } catch {}
      return next;
    });
  }, []);

  const value = useMemo<Ctx>(
    () => ({ lang, setLang, toggle, t: dictionaries[lang] }),
    [lang, setLang, toggle]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}
