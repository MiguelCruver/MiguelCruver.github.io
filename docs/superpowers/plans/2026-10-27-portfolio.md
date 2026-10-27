# Portfolio Implementation Plan

> **For agentic workers:** Use executing-plans to implement this plan task-by-task. Steps use checkbox syntax for tracking.

**Goal:** Entregar um portfólio fiel, elegante e fácil de evoluir.

**Architecture:** Página estática React pré-renderizada; TypeScript separa conteúdo e apresentação. Menu disclosure com gerenciamento de foco; SVG/CSS para visual interativo.

**Tech Stack:** React, TypeScript, Vite, Tailwind CSS, Vitest, Testing Library.

**Spec:** docs/design.md (direção e escopo aprovados no chat).

## Global Constraints

- pt-BR; informações reais; My Life Planner em desenvolvimento.
- Nunca publicar, criar repositório remoto ou executar push sem confirmação.
- Responsivo, teclado, WCAG 2.2 AA como alvo e reduced-motion.
- Sem backend, rastreamento, dados sensíveis, APIs pagas ou funcionalidades extras.

## Review Focus

- Menu: Escape, foco e navegação de âncoras funcionam sem mouse.
- Projeto sem URL e sem imagem não mostra links falsos ou telas fictícias.
- Preferência de movimento é respeitada tanto no carregamento quanto em alterações.
- Tela estreita e zoom não escondem conteúdo nem criam rolagem horizontal.
- HTML estático inclui conteúdo principal e dados públicos sem exigir JavaScript.

### Task 1: Base e interações

Files: package.json, vite.config.ts, src/App.tsx, src/components/Header.tsx, src/components/OrbitVisual.tsx, src/App.test.tsx.
Interfaces: App() página; Header() âncoras e menu; OrbitVisual() cena com controle de movimento.

- [x] Escrever testes de menu (Escape, foco, seleção, fora) e pausa.
- [x] Executar npm test e confirmar falhas por ausência do comportamento.
- [x] Implementar componentes acessíveis e conteúdo do hero.
- [x] Executar npm test e confirmar aprovação.

### Task 2: Conteúdo e apresentação

Files: src/data/portfolio.ts, src/components/ProjectCard.tsx, src/components/ProjectCard.test.tsx, src/components/Icon.tsx, src/styles.css, src/App.tsx, public/.
Interfaces: Project { id, name, description, status, technologies?, repositoryUrl?, image? }; ProjectCard({ project }).

- [x] Escrever testes para projeto sem links/imagem e projeto com dados confirmados.
- [x] Confirmar falhas e implementar a renderização condicional.
- [x] Implementar todas as seções, fontes locais, design responsivo e estados.
- [x] Executar npm test e npm run build.

### Task 3: Entrega e revisão

Files: scripts/prerender.mjs, vercel.json, README.md, docs/verification.md.

- [x] Pré-renderizar conteúdo sem JavaScript; configurar headers de segurança estáticos.
- [x] Revisar em navegador desktop, tablet, mobile, teclado e reduced-motion; executar axe.
- [x] Rodar build final, testes, auditoria de dependências; corrigir defeitos relevantes.
- [x] Revisão independente do conjunto; registrar limitações reais.
- [x] Criar commit local e pacote ZIP sem node_modules ou metadados Git; entregar instruções para atualização e Vercel.
