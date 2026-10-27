# Verificação — 27/10/2026

**Status atual: publicado no GitHub Pages, com autorização do usuário em 27/10/2026.** As verificações locais abaixo registram a etapa inicial; a seção final documenta a publicação. Não há defeitos conhecidos pendentes dentro do escopo aprovado.

## Ambiente e checks executados

- Windows, Node.js 22.23.3, npm 10.9.9, navegador Chromium integrado ao Codex.
- `npm ci`: instalação reproduzida a partir do lockfile. Na primeira tentativa o servidor de desenvolvimento mantinha um módulo nativo aberto no Windows; após encerrar esse servidor, a instalação limpa passou.
- `npm test`: **10 testes aprovados**, em três arquivos. Cobrem menu, Escape, foco, clique fora, seleção de destino, nome acessível da marca, pausa, preferência de movimento e suas alterações, ausência de ações falsas, dados confirmados e fallback de novos projetos.
- `npm run build`: TypeScript e build de produção aprovados, com pré-renderização de todas as seis seções no HTML.
- `npm audit --audit-level=low`: **zero vulnerabilidades reportadas** na execução. Isso não é garantia de ausência de riscos.
- Formatação aplicada com Prettier; lockfile de dependências exatas preservado.

## Navegador e acessibilidade

Auditoria axe-core 4.14.0, nos grupos WCAG 2 A/AA, 2.1 A/AA e 2.2 AA, sobre o build de produção servido localmente:

| Viewport    | Violações detectadas | Rolagem horizontal | Âncoras quebradas |
| ----------- | -------------------- | ------------------ | ----------------- |
| 320 × 800   | 0                    | Não                | 0                 |
| 360 × 800   | 0                    | Não                | 0                 |
| 390 × 844   | 0                    | Não                | 0                 |
| 768 × 1024  | 0                    | Não                | 0                 |
| 1440 × 1000 | 0                    | Não                | 0                 |

- Inspeção visual da página completa em desktop e mobile: hierarquia, quebra de texto, alinhamentos e espaço reservado ao projeto. Capturas entregues junto ao ZIP.
- Em **844 × 320**, menu aberto com rolagem interna: altura 234px, limite inferior 307px, dentro da tela de 320px. Tab alcançou Sobre, Escape fechou e devolveu foco; Contato fechou o menu, atualizou a âncora e recebeu foco.
- Link Pular para o conteúdo ativado pelo teclado: foco no elemento `main#conteudo`.
- Preferência real do ambiente: movimento reduzido. CSS resultante da cena: `animation-name: none`; legenda confirma o estado. Pausar/retomar em preferência normal foi verificado nos testes de componente; movimento normal não foi avaliado visualmente neste navegador.
- Sem scripts do aplicativo, simulados pelo servidor de QA: as seis seções e os links continuam no HTML, a cena fica estática, não há botão falso de pausa e o acionador do menu fica desativado. A âncora de projetos funciona.
- Nenhum aviso ou erro de console foi observado nas visitas finais ao build de produção, incluindo hidratação.

O axe marcou **contraste sobre gradientes** como inconclusivo, exigindo revisão manual. Foram inspecionadas as áreas e calculados pares representativos, com valores conservadores:

| Par                                                           | Contraste |
| ------------------------------------------------------------- | --------- |
| Texto secundário #A9B3C9 / superfície #111A2A                 | 8,28:1    |
| Estado em aprendizado #BBA5FF / #111A2A                       | 8,25:1    |
| Conhecimento adquirido #9BD8CD / #111A2A                      | 10,87:1   |
| Interesses #ADB6CA / #111A2A                                  | 8,56:1    |
| Botão #0B1225 / #A2B7FF                                       | 9,54:1    |
| Rótulo orbital #CAD1E8 / #10192B                              | 11,54:1   |
| Contato #B3BDD3 / #343B72, mais claro que o gradiente efetivo | 5,53:1    |

Essas verificações são amostrais e não constituem certificação de conformidade WCAG 2.2 AA.

## Revisão independente e refinamentos

Um revisor separado examinou requisitos, código, tipos, testes e renderização estática. Seus dois achados foram reproduzidos, corrigidos e cobertos por regressões:

1. O fallback de projeto usava o nome My Life Planner mesmo para outro projeto sem imagem. Agora usa `project.name`.
2. A animação CSS podia iniciar sem JavaScript e deixar a pausa inoperante. Agora a cena começa pausada e só habilita movimento e controle após a hidratação.

Também foram corrigidos o nome acessível da marca identificado pelo axe e a altura do menu em landscape. Textos de apoio foram ampliados após inspeção visual. Pesos de fontes não utilizados foram removidos.

## Segurança, privacidade e desempenho

- Site estático; sem autenticação, formulários, banco, analytics, cookies de aplicação ou envio de dados pessoais.
- Links externos usam `noopener noreferrer`. Fontes e assets são locais; licenças OFL acompanham os arquivos.
- Nenhuma tecnologia do My Life Planner, certificado, emprego ou funcionalidade concluída foi inventada.
- CSP, bloqueio de frames e `nosniff` de `vercel.json` foram conferidos em um servidor local que aplica esses cabeçalhos. **Não foram verificados na Vercel**, pois não houve deploy.
- Build observado: JavaScript principal **241,71 kB bruto / 74,68 kB gzip**; CSS **28,81 kB / 7,30 kB gzip**. Quatro fontes WOFF2 somam cerca de **54,90 kB**. Não foi atribuído score Lighthouse nem medida de Core Web Vitals em campo.
- Na etapa inicial, não havia repositório público, push ou deploy. A publicação posterior foi autorizada e está registrada ao final; não foi contratada infraestrutura paga nem ampliada a permissão da integração.

## Limites e próximos passos

- Firefox, Safari, dispositivos físicos, NVDA/VoiceOver, zoom nativo e hardware lento não foram testados.
- A publicação do GitHub Pages foi verificada conforme a seção final. Os cabeçalhos específicos da Vercel seguem sem verificação nessa plataforma, pois não houve deploy nela.
- A página não depende de LinkedIn, contatos adicionais ou repositório do projeto; esses dados seguem ausentes até confirmação.

Para evoluir o conteúdo, veja o README e `src/data/portfolio.ts`. Para publicar, revisar o destino com o usuário antes de qualquer ação remota.

## Publicação confirmada — GitHub Pages

- Site: **https://miguelcruver.github.io/**, respondendo HTTP 200 por HTTPS.
- Código: **https://github.com/MiguelCruver/MiguelCruver.github.io**, repositório público da conta confirmada MiguelCruver.
- A origem do Pages foi configurada como GitHub Actions. Build e deploy concluíram com sucesso em [execução 40603773390](https://github.com/MiguelCruver/MiguelCruver.github.io/actions/runs/40603773390), para o commit `b481e24af5e10affc259ad4a01e8e5461583ee02`.
- As etapas de instalação pelo lockfile, formatação, testes e build passaram também no runner Ubuntu do GitHub. Todas as actions estão fixadas por SHA; o job de build tem permissões de leitura e o job de deploy tem as permissões necessárias somente para Pages.
- Os 29 arquivos de código, configuração, testes e documentação foram comparados com a versão local verificada após o envio. O histórico inicial local foi preservado.
- A versão de produção contém URL canônica, `og:url` e CSP em metatag compatível com Pages. Não inclui `frame-ancestors` na metatag, pois essa diretiva depende de cabeçalho HTTP.
- Revisão no endereço público: seis seções presentes, estilos carregados, sem rolagem horizontal na largura mobile de 390px, menu de projetos com foco correto e nenhum aviso ou erro observado no console.
- O site não depende do servidor local. Atualizações na branch `main` executam verificações e republicação; falhas mantêm o último deploy bem-sucedido. Uma atualização posterior apenas deste relatório usa `[skip ci]`, pois não altera o aplicativo validado.
- A hospedagem segue sujeita à disponibilidade e às políticas do GitHub e à manutenção da conta/repositório. Não há promessa de hospedagem eterna. O código e o ZIP atualizado permitem migração futura.
