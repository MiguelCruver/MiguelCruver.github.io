# Portfólio Miguel Cruver — design aprovado

Direção aprovada no chat em 27/10/2026: Tecnologia em construção.

## Intenção

Apresentar Miguel como estudante do Ensino Médio, entusiasta de tecnologia e futuro desenvolvedor, com precisão sobre seu estágio de aprendizado. Público: pessoas interessadas em acompanhar seus projetos, aprendizado e presença no GitHub.

## Escopo e critérios

Página única em pt-BR com hero, sobre, habilidades, projetos, jornada e contato. Menu mobile e navegação por âncoras. GitHub é o único contato ativo. LinkedIn futuro é texto sem link. Não há autenticação, formulários, analytics, backend ou coleta de dados.

HTML: conhecimentos adquiridos no curso Rocketseat, sem alegação de certificado. CSS: em aprendizado. JavaScript: próximo aprofundamento. Ferramentas informadas são ferramentas utilizadas, sem afirmar domínio. Servidores e automação: interesses. My Life Planner está em desenvolvimento; nenhuma tela, tecnologia, funcionalidade entregue ou URL de repositório será inventada.

## Direção visual

Base #080C16; superfície #101727; texto #F1F3FA; secundário #A9B3C9; azul #81A7FF; violeta #BBA5FF. Space Grotesk em títulos e Manrope em texto, servidas localmente. Layout amplo, texto à esquerda, respiro, projeto editorial em destaque. Órbitas interativas em SVG/CSS como ponto focal. Uma entrada curta, sem animações de revelação repetidas. Controle de pausa e suporte a prefers-reduced-motion.

Alternativa considerada: Laboratório digital, com painéis e linguagem de editor. Tecnologia em construção foi recomendada por comunicar evolução e clareza com mais elegância, e aprovada pelo usuário.

## Arquitetura e decisões de execução

React + TypeScript + Vite + Tailwind, exportação estática. Dados em src/data/portfolio.ts; componentes por responsabilidade. Ícones SVG próprios; sem biblioteca de animação ou 3D. Fontes locais para reduzir dependências externas no uso do site. Tecnologias do projeto inicialmente ausentes. Espaço de imagem editorial identificado explicitamente como imagens futuras, sem simular o aplicativo.

## Aceitação e riscos

Build e tipos sem erros; menu por teclado, Escape e foco correto; links existentes; projeto incompleto sem ações falsas; telas em 360, 390, 768 e 1440 px; ausência de overflow; foco visível; contraste AA; preferências de movimento respeitadas. Testes de interação, axe no navegador e inspeção visual, sem alegar certificação WCAG. SEO básico e pré-renderização para leitura sem JavaScript. Publicação, criação de repositório remoto e push somente com nova confirmação. Meta social sem domínio canônico até a URL real ser aprovada.
