# Miguel Cruver — portfólio

Portfólio pessoal em português brasileiro, com a direção **Tecnologia em construção**. React, TypeScript, Vite e Tailwind CSS. Fontes locais, visual SVG/CSS, sem backend, rastreamento ou coleta de dados.

## Executar localmente

Requer **Node.js 22.22.2+, 24.15.0+ ou 26+**, dentro dessas linhas de versão, e npm. A verificação local usou Node.js 22.23.3. Dependências exatas estão fixadas no lockfile.

```sh
npm ci
npm run dev
```

Abra o endereço local mostrado no terminal. Para produção:

```sh
npm test
npm run build
npm run preview
```

`build` valida TypeScript, gera arquivos em `dist/` e pré-renderiza a página. O conteúdo, os projetos e os links ficam disponíveis no HTML mesmo sem JavaScript. O JavaScript ativa o menu mobile, a reação das órbitas ao ponteiro e o controle de animação.

## Atualizar projetos e conteúdo

Edite **`src/data/portfolio.ts`**. O array `projects` contém os projetos; cada objeto precisa de `id`, `name`, `description` e `status`. Para adicionar um projeto, acrescente outro objeto ao array.

Campos opcionais só devem ser preenchidos com informações confirmadas:

| Campo           | Uso                                                               |
| --------------- | ----------------------------------------------------------------- |
| `technologies`  | Lista de tecnologias realmente usadas                             |
| `repositoryUrl` | URL HTTPS do repositório disponível                               |
| `image`         | `{ src: '/projects/imagem.webp', alt: 'Descrição da tela real' }` |

Coloque imagens reais em `public/projects/`, preferencialmente WebP ou AVIF otimizadas. Sem `image`, o componente mostra uma composição editorial identificada como **Imagens em breve**, sem representar uma tela do aplicativo. Sem `repositoryUrl`, nenhum link de repositório é exibido.

`skillGroups` organiza conhecimentos e interesses; `journey` descreve a evolução; `profile` guarda nome, apresentação e GitHub. A estrutura visual está em `src/App.tsx`, componentes em `src/components/` e tokens, estilos e responsividade em `src/styles.css`.

## Publicação no GitHub Pages

Destino autorizado pelo usuário em 27/10/2026: **https://miguelcruver.github.io/**.
Repositório público: [MiguelCruver/MiguelCruver.github.io](https://github.com/MiguelCruver/MiguelCruver.github.io).

O fluxo `.github/workflows/deploy.yml` instala as dependências do lockfile, confere formatação, executa os testes, gera o HTML estático e publica `dist/` no GitHub Pages. A publicação só acontece se as verificações passarem. Não há variáveis de ambiente ou serviços pagos necessários.

Para atualizar o site, edite os dados ou componentes e envie um commit para a branch **main** no GitHub. Acompanhe a execução na aba **Actions**. Se alguma verificação falhar, a versão publicada anteriormente permanece disponível. O fluxo também pode ser iniciado manualmente em Actions. Em Settings → Pages, a origem deve ser **GitHub Actions**.

O nome especial do repositório mantém o site na raiz do domínio, compatível com os caminhos de assets do Vite. Se o repositório ou domínio mudar, revisar o `base` do Vite, os links canônicos e `og:url` em `index.html`.

O GitHub hospeda o site independentemente do computador local. A continuidade depende da conta, do repositório, das políticas e da disponibilidade do serviço; não existe garantia de hospedagem eterna. Mantenha o código e o ZIP de entrega como cópias para migrar a outro serviço se necessário.

A versão de produção recebe uma CSP em metatag para restringir scripts e fontes ao próprio domínio. A diretiva `frame-ancestors`, que exige cabeçalho HTTP, não é emitida nessa metatag. O arquivo `vercel.json` segue disponível para uma migração futura à Vercel e declara os cabeçalhos completos nesse provedor; esses cabeçalhos não são configuráveis pelo projeto no GitHub Pages. Imagens futuras externas precisam ser hospedadas localmente ou ter sua origem explicitamente revisada.

Alternativa de migração: importar o mesmo repositório na Vercel usando preset Vite, `npm ci`, build `npm run build` e saída `dist`, após autorizar esse novo destino.

## Design e acessibilidade

- HTML semântico, títulos hierárquicos e link para pular ao conteúdo.
- Foco visível, menu com Escape e retorno de foco, destinos acessíveis pelo teclado.
- Órbitas decorativas fora da leitura assistiva; sem dependência de hover para conteúdo.
- `prefers-reduced-motion` desativa animações e movimento do ponteiro; controle manual de pausa quando movimento é permitido.
- Estados de conhecimento expressos por texto e cor.
- GitHub abre em nova aba, informado no nome acessível, com `noopener noreferrer`.
- Fontes Manrope e Space Grotesk distribuídas via Fontsource sob SIL Open Font License. Ícones e formas geométricas são SVG/CSS originais. Não há fotos ou recursos visuais de terceiros.

Veja `docs/design.md` para decisões aprovadas e `docs/verification.md` para verificações realizadas e seus limites. Nenhum teste automático, isoladamente, certifica conformidade WCAG 2.2 AA.

## Comandos

| Comando              | Finalidade                                     |
| -------------------- | ---------------------------------------------- |
| `npm run dev`        | Desenvolvimento com atualização automática     |
| `npm run build`      | Tipos, build e pré-renderização                |
| `npm run preview`    | Servir o build de produção localmente          |
| `npm test`           | Testes de interação e apresentação condicional |
| `npm run test:watch` | Testes durante alterações                      |
| `npm run typecheck`  | Verificação de tipos                           |

Referências: [Vite](https://vite.dev/guide/), [Tailwind com Vite](https://tailwindcss.com/docs/installation/using-vite), [Vite na Vercel](https://vercel.com/docs/frameworks/frontend/vite).
