# Verificação — 27/10/2026

**Status: concluído localmente.** Publicação e repositório remoto dependem de confirmação separada. Não há defeitos conhecidos pendentes dentro do escopo aprovado.

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
- Sem repositório público, push, deploy, infraestrutura paga ou mudança de permissões.

## Limites e próximos passos

- Firefox, Safari, dispositivos físicos, NVDA/VoiceOver, zoom nativo e hardware lento não foram testados.
- Publicação, comportamento real dos cabeçalhos na hospedagem, domínio e metadados com URL definitiva só podem ser verificados após autorização.
- A página não depende de LinkedIn, contatos adicionais ou repositório do projeto; esses dados seguem ausentes até confirmação.

Para evoluir o conteúdo, veja o README e `src/data/portfolio.ts`. Para publicar, revisar o destino com o usuário antes de qualquer ação remota.
