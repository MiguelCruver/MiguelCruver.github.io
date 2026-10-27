import { render, screen } from "@testing-library/react";
import ProjectCard from "./ProjectCard";

const project = {
  id: "planner",
  name: "My Life Planner",
  description:
    "Aplicativo de organização pessoal, planejamento e produtividade.",
  status: "Em desenvolvimento",
};

it("apresenta um projeto em desenvolvimento sem oferecer ações indisponíveis", () => {
  render(<ProjectCard project={project} />);
  expect(screen.getByText("Em desenvolvimento")).toBeInTheDocument();
  expect(screen.getByText("Imagens em breve")).toBeInTheDocument();
  expect(screen.queryByRole("link")).not.toBeInTheDocument();
  expect(screen.queryByRole("img")).not.toBeInTheDocument();
});

it("usa a identidade do novo projeto quando ainda não existe imagem", () => {
  const { container } = render(
    <ProjectCard
      project={{ ...project, id: "outro", name: "Outro Projeto" }}
    />,
  );
  expect(container.querySelector(".project-preview")).toHaveTextContent(
    "Outro Projeto",
  );
  expect(screen.queryByText(/my life/i)).not.toBeInTheDocument();
});

it("mostra apenas as tecnologias, a imagem e o repositório confirmados", () => {
  render(
    <ProjectCard
      project={{
        ...project,
        technologies: ["HTML"],
        repositoryUrl: "https://github.com/example/confirmed",
        image: { src: "/confirmed.webp", alt: "Tela real do projeto" },
      }}
    />,
  );
  expect(screen.getByText("HTML")).toBeInTheDocument();
  expect(screen.getByRole("link", { name: /Ver repositório/ })).toHaveAttribute(
    "href",
    "https://github.com/example/confirmed",
  );
  expect(
    screen.getByRole("img", { name: "Tela real do projeto" }),
  ).toHaveAttribute("src", "/confirmed.webp");
  expect(screen.queryByText("Imagens em breve")).not.toBeInTheDocument();
});
