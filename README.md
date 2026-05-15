# muriloalvim-dev

Portfólio pessoal de Murilo Alvim — produção em **https://muriloalvim-dev.vercel.app**.

Construído com **Next.js 14**, **TypeScript**, **TailwindCSS** e **Framer Motion**. Tema dark com gradientes brand (violeta · fúcsia · ciano) e animações fluidas.

## Stack

- Next.js 14 (App Router) · React 18 · TypeScript
- TailwindCSS 3 (design system custom)
- Framer Motion (animações em scroll)
- Lucide React (ícones)
- Inter + JetBrains Mono (next/font)

## Rodar localmente

```bash
npm install
npm run dev          # http://localhost:3000
```

## Build de produção

```bash
npm run build
npm start
```

## Estrutura

```
portfolio/
├── app/
│   ├── layout.tsx       # Layout raiz + fontes + metadata
│   ├── page.tsx         # Página principal (compõe seções)
│   └── globals.css      # Tailwind + design tokens
├── components/
│   ├── Navbar.tsx       # Navegação com smooth scroll
│   ├── Hero.tsx         # Seção principal com animações
│   ├── Sobre.tsx        # Bio e estatísticas
│   ├── Stack.tsx        # Stack técnica em grupos
│   ├── Projetos.tsx     # Cards dos 3 projetos
│   ├── Contato.tsx      # Canais de contato
│   └── Footer.tsx
├── tailwind.config.ts   # Cores brand + animações custom
├── next.config.mjs
└── package.json
```

## Personalização

- **Links dos projetos:** edite `components/Projetos.tsx` e ajuste `repoUrl` e `liveUrl` de cada projeto.
- **Bio / textos:** `components/Sobre.tsx` e `components/Hero.tsx`.
- **Cores:** `tailwind.config.ts` (chave `brand`).

## Deploy

Recomendado: **Vercel** (zero-config para Next.js).

```bash
# 1. Suba para o GitHub
git init && git add . && git commit -m "feat: portfolio inicial"
git remote add origin https://github.com/Murilo-Alvim/muriloalvim-dev.git
git push -u origin main

# 2. Em vercel.com → New Project → importe o repo
#    IMPORTANTE: na tela de criação, troque "Project Name" para:
#    muriloalvim-dev
#    Isso garante que a URL final seja muriloalvim-dev.vercel.app
```
