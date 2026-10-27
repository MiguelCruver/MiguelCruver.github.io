import Header from "./components/Header";
import Icon from "./components/Icon";
import OrbitVisual from "./components/OrbitVisual";
import ProjectCard from "./components/ProjectCard";
import { journey, profile, projects, skillGroups } from "./data/portfolio";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo" tabIndex={-1}>
        <section
          id="inicio"
          className="hero container"
          aria-labelledby="hero-title"
        >
          <div className="hero-copy">
            <span className="student-badge">
              <span aria-hidden="true" />
              Estudante de tecnologia
            </span>
            <h1 id="hero-title">
              Miguel <br />
              <span>Cruver</span>
              <span className="name-period" aria-hidden="true">
                .
              </span>
            </h1>
            <p className="hero-description">{profile.headline}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projetos">
                Visualizar projetos
                <Icon name="arrow" size={18} />
              </a>
              <a
                className="button button-secondary"
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name="github" size={18} />
                Acessar GitHub
                <span className="sr-only"> (abre em nova aba)</span>
              </a>
            </div>
            <p className="hero-footnote">
              <span className="small-line" aria-hidden="true" />
              Curiosidade como ponto de partida.
            </p>
          </div>
          <OrbitVisual />
          <a href="#sobre" className="scroll-cue">
            Conheça minha trajetória
            <Icon name="chevron" size={16} />
          </a>
        </section>

        <div className="interests-band">
          <div className="container interests-inner">
            <span>Conectando interesses</span>
            <span>Desenvolvimento web</span>
            <span className="band-plus" aria-hidden="true">
              +
            </span>
            <span>Inteligência artificial</span>
            <span className="band-plus" aria-hidden="true">
              +
            </span>
            <span>Automação</span>
          </div>
        </div>

        <section
          id="sobre"
          className="section container about-section"
          tabIndex={-1}
          aria-labelledby="about-title"
        >
          <div className="section-intro">
            <span className="section-kicker">
              <span aria-hidden="true" />
              Sobre mim
            </span>
            <h2 id="about-title">
              O começo de uma
              <br />
              jornada com propósito.
            </h2>
          </div>
          <div className="about-content">
            <p className="about-lead">
              A vontade de entender como as coisas funcionam me trouxe até a
              programação.
            </p>
            <p>
              Sou Miguel Cruver, estudante do Ensino Médio e entusiasta de
              tecnologia. Estou construindo minha base em desenvolvimento web e
              descobrindo como transformar curiosidade em projetos próprios.
            </p>
            <p>
              Entre linhas de código, ferramentas de inteligência artificial e
              novas ideias, encontro espaço para aprender. Quero seguir
              evoluindo e construir minha carreira em tecnologia.
            </p>
            <div className="about-signature">
              <span className="signature-mark" aria-hidden="true">
                <Icon name="code" size={22} />
              </span>
              <div>
                Aprender. Criar. Evoluir.
                <span>É assim que estou começando.</span>
              </div>
            </div>
          </div>
        </section>

        <section
          id="habilidades"
          className="section skills-section"
          tabIndex={-1}
          aria-labelledby="skills-title"
        >
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="section-kicker">
                  <span aria-hidden="true" />
                  Minha base
                </span>
                <h2 id="skills-title">
                  O que faz parte
                  <br />
                  da minha jornada.
                </h2>
              </div>
              <p>
                Conhecimentos, ferramentas e interesses.
                <br />
                Cada um no seu momento de aprendizado.
              </p>
            </div>
            <div className="skills-grid">
              {skillGroups.map((group) => (
                <article className="skill-group" key={group.title}>
                  <div className="skill-group-top">
                    <span className="category-icon">
                      <Icon name={group.icon} size={22} />
                    </span>
                    <h3>{group.title}</h3>
                  </div>
                  <p className="skill-description">{group.description}</p>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item.name}>
                        <span className="skill-name">{item.name}</span>
                        <span className={`skill-level level-${item.level}`}>
                          <span aria-hidden="true" />
                          {item.detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="projetos"
          className="section container projects-section"
          tabIndex={-1}
          aria-labelledby="projects-title"
        >
          <div className="section-heading">
            <div>
              <span className="section-kicker">
                <span aria-hidden="true" />
                Da ideia à prática
              </span>
              <h2 id="projects-title">Projetos em construção.</h2>
            </div>
            <p>
              Um espaço para experimentar, aprender
              <br />e dar vida ao que imagino.
            </p>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <ProjectCard project={project} key={project.id} />
            ))}
          </div>
          <div className="next-project">
            <span className="next-project-icon" aria-hidden="true">
              +
            </span>
            <span>
              Novas ideias estão a caminho.
              <span>Este portfólio vai evoluir junto comigo.</span>
            </span>
            <span className="next-project-line" aria-hidden="true" />
          </div>
        </section>

        <section
          id="jornada"
          className="section journey-section"
          tabIndex={-1}
          aria-labelledby="journey-title"
        >
          <div className="container journey-layout">
            <div className="journey-intro">
              <span className="section-kicker">
                <span aria-hidden="true" />
                Aprendizado contínuo
              </span>
              <h2 id="journey-title">
                Cada passo
                <br />
                abre um caminho.
              </h2>
              <p>
                Minha jornada está começando.
                <br />E cada descoberta faz parte dela.
              </p>
              <div className="journey-illustration" aria-hidden="true">
                <span />
                <span />
                <span />
                <Icon name="book" size={30} />
              </div>
            </div>
            <ol className="timeline">
              {journey.map((step, i) => (
                <li
                  key={step.title}
                  className={`timeline-item timeline-${step.state}`}
                >
                  <span className="timeline-point" aria-hidden="true">
                    {i === 0 ? (
                      <svg viewBox="0 0 16 16" fill="none">
                        <path
                          d="m4 8 3 3 5-6"
                          stroke="currentColor"
                          strokeWidth="1.5"
                        />
                      </svg>
                    ) : (
                      <span />
                    )}
                  </span>
                  <span className={`journey-state level-${step.state}`}>
                    {step.label}
                  </span>
                  <h3>{step.title}</h3>
                  <p>{step.detail}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section
          id="contato"
          className="section container contact-section"
          tabIndex={-1}
          aria-labelledby="contact-title"
        >
          <div className="contact-panel">
            <span className="section-kicker">
              <span aria-hidden="true" />
              Vamos nos conectar
            </span>
            <h2 id="contact-title">
              Boas ideias começam
              <br />
              com uma conexão.
            </h2>
            <p>
              Acompanhe meus projetos, descobertas
              <br className="desktop-break" /> e próximos passos no GitHub.
            </p>
            <a
              className="button button-primary"
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="github" size={19} />
              Me encontre no GitHub
              <Icon name="arrow-up" size={18} />
              <span className="sr-only"> (abre em nova aba)</span>
            </a>
            <span className="future-contact">
              LinkedIn <span>•</span> Futuramente
            </span>
            <div className="contact-orbit" aria-hidden="true" />
          </div>
        </section>
      </main>
      <footer className="site-footer container">
        <a className="brand footer-brand" href="#inicio">
          <span>
            miguel cruver
            <span className="brand-period">.</span>
          </span>
          <span className="sr-only"> — voltar ao início</span>
        </a>
        <p>Feito com curiosidade. Em constante evolução.</p>
        <a className="back-top" href="#inicio">
          Voltar ao topo
          <Icon name="arrow-up" size={16} />
        </a>
      </footer>
    </>
  );
}
