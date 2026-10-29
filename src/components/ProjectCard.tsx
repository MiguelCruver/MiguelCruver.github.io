import type { Project } from "../data/portfolio";
import Icon from "./Icon";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className="project-card"
      aria-label={project.name}
      data-project={project.id}
    >
      <div className="project-preview">
        {project.image ? (
          <img
            src={project.image.src}
            alt={project.image.alt}
            loading="lazy"
            width="800"
            height="600"
          />
        ) : (
          <>
            <div className="planner-emblem" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <div className="project-preview-title" aria-hidden="true">
              {project.name}
              <span className="emblem-period">.</span>
            </div>
            <div className="preview-placeholder">
              <Icon name="image" size={15} />
              <span>Imagens em breve</span>
            </div>
          </>
        )}
      </div>
      <div className="project-info">
        <span className="status-badge">
          <span aria-hidden="true" />
          {project.status}
        </span>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        {project.technologies?.length ? (
          <ul
            className="project-technologies"
            aria-label="Tecnologias utilizadas"
          >
            {project.technologies.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        ) : null}
        <div className="project-info-footer">
          {project.websiteUrl ? (
            <a
              className="text-link"
              href={project.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Conhecer o projeto
              <span className="sr-only"> (abre em nova aba)</span>
              <Icon name="arrow-up" size={18} />
            </a>
          ) : null}
          {project.repositoryUrl ? (
            <a
              className="text-link"
              href={project.repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver repositório
              <span className="sr-only"> (abre em nova aba)</span>
              <Icon name="arrow-up" size={18} />
            </a>
          ) : (
            <p className="project-note">
              <Icon name="code" size={16} />
              Construindo e aprendendo, passo a passo.
            </p>
          )}
        </div>
      </div>
    </article>
  );
}
