export interface Project {
  id: string;
  name: string;
  description: string;
  status: string;
  technologies?: string[];
  repositoryUrl?: string;
  websiteUrl?: string;
  image?: { src: string; alt: string };
}

export const profile = {
  name: "Miguel Cruver",
  github: "https://github.com/MiguelCruver",
  headline:
    "Aprendendo a desenvolver. Explorando inteligência artificial. Construindo meus próprios projetos.",
};

export const navigation = [
  { label: "Sobre", href: "#sobre" },
  { label: "Habilidades", href: "#habilidades" },
  { label: "Projetos", href: "#projetos" },
  { label: "Jornada", href: "#jornada" },
  { label: "Contato", href: "#contato" },
];

export const projects: Project[] = [
  {
    id: "glide",
    name: "GLIDE",
    description:
      "Um aplicativo para Windows que reúne música, vídeos e comunicação em um só hub. Criei o Glide para acompanhar o setup de quem joga, com miniplayer e o Glide Connect para reunir o grupo.",
    status: "Publicado · pré-lançamento",
    websiteUrl: "https://miguelcruver.github.io/Glide/",
    repositoryUrl: "https://github.com/MiguelCruver/Glide",
    image: {
      src: "/projects/glide.png",
      alt: "Logo do Glide em cristal verde, ciano e azul",
    },
  },
  {
    id: "my-life-planner",
    name: "My Life Planner",
    description:
      "Um projeto de organização pessoal, planejamento e produtividade. Uma oportunidade de transformar ideias em prática e aprender durante a construção.",
    status: "Em desenvolvimento",
  },
];

export const skillGroups = [
  {
    title: "Desenvolvimento",
    icon: "code" as const,
    description: "Construindo minha base, uma linguagem de cada vez.",
    items: [
      { name: "HTML", detail: "Conhecimentos adquiridos", level: "known" },
      { name: "CSS", detail: "Em aprendizado", level: "learning" },
      {
        name: "JavaScript",
        detail: "Próximo aprofundamento",
        level: "interest",
      },
    ],
  },
  {
    title: "Ferramentas",
    icon: "terminal" as const,
    description: "Os recursos que fazem parte da minha jornada.",
    items: [
      { name: "Git", detail: "Ferramenta utilizada", level: "used" },
      { name: "GitHub", detail: "Ferramenta utilizada", level: "used" },
      { name: "VS Code", detail: "Ferramenta utilizada", level: "used" },
    ],
  },
  {
    title: "Inteligência artificial",
    icon: "spark" as const,
    description: "Explorando novas formas de aprender e criar.",
    items: [
      { name: "ChatGPT", detail: "Ferramenta utilizada", level: "used" },
      { name: "Gemini", detail: "Ferramenta utilizada", level: "used" },
      { name: "Codex", detail: "Ferramenta utilizada", level: "used" },
    ],
  },
  {
    title: "Infraestrutura",
    icon: "server" as const,
    description: "Curiosidade pelo que acontece além da interface.",
    items: [
      { name: "Windows e Linux", detail: "Sistemas utilizados", level: "used" },
      {
        name: "Servidores",
        detail: "Interesse em explorar",
        level: "interest",
      },
      { name: "Automação", detail: "Interesse em explorar", level: "interest" },
    ],
  },
];

export const journey = [
  {
    title: "O primeiro contato com a web",
    detail:
      "Conhecimentos em HTML adquiridos em um curso da Rocketseat. O começo da minha base em desenvolvimento.",
    label: "Base adquirida",
    state: "known",
  },
  {
    title: "Dando forma às ideias",
    detail:
      "Aprendendo CSS para trabalhar com estilos, layouts e a apresentação visual de uma página.",
    label: "Aprendendo agora",
    state: "learning",
  },
  {
    title: "Da curiosidade à prática",
    detail:
      "Explorando inteligência artificial com ChatGPT, Gemini e Codex e desenvolvendo projetos próprios, como My Life Planner.",
    label: "Em exploração",
    state: "learning",
  },
  {
    title: "Os próximos passos",
    detail:
      "Aprofundar meus conhecimentos em JavaScript e continuar explorando aplicações, servidores e automação.",
    label: "No horizonte",
    state: "interest",
  },
];
