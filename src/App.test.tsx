import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("Navegação acessível", () => {
  it("preserva o nome visível da marca no nome acessível do link", () => {
    render(<App />);
    expect(
      within(screen.getByRole("banner")).getByRole("link", {
        name: /^miguel cruver\..*início$/i,
      }),
    ).toHaveAttribute("href", "#inicio");
  });
  it("abre o menu e devolve o foco ao botão ao pressionar Escape", async () => {
    const user = userEvent.setup();
    render(<App />);
    const trigger = screen.getByRole("button", { name: "Abrir menu" });
    expect(
      screen.queryByRole("navigation", { name: "Navegação mobile" }),
    ).not.toBeInTheDocument();
    await user.click(trigger);
    expect(trigger).toHaveAttribute("aria-expanded", "true");
    const menu = screen.getByRole("navigation", { name: "Navegação mobile" });
    within(menu).getByRole("link", { name: "Sobre" }).focus();
    await user.keyboard("{Escape}");
    expect(
      screen.queryByRole("navigation", { name: "Navegação mobile" }),
    ).not.toBeInTheDocument();
    expect(trigger).toHaveFocus();
    expect(trigger).toHaveAttribute("aria-expanded", "false");
  });

  it("fecha o menu ao escolher um destino válido", async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByRole("button", { name: "Abrir menu" }));
    const menu = screen.getByRole("navigation", { name: "Navegação mobile" });
    const projects = within(menu).getByRole("link", { name: "Projetos" });
    expect(projects).toHaveAttribute("href", "#projetos");
    await user.click(projects);
    expect(
      screen.queryByRole("navigation", { name: "Navegação mobile" }),
    ).not.toBeInTheDocument();
    expect(document.getElementById("projetos")).toHaveFocus();
  });

  it("fecha o menu ao clicar fora dele", async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByRole("button", { name: "Abrir menu" }));
    await user.click(screen.getByRole("heading", { name: "Miguel Cruver" }));
    expect(
      screen.queryByRole("navigation", { name: "Navegação mobile" }),
    ).not.toBeInTheDocument();
  });
});

describe("Movimento sob controle do visitante", () => {
  it("permite pausar e retomar a animação das órbitas", async () => {
    const user = userEvent.setup();
    render(<App />);
    await user.click(screen.getByRole("button", { name: "Pausar animação" }));
    expect(
      screen.getByRole("button", { name: "Retomar animação" }),
    ).toHaveAttribute("aria-pressed", "true");
    await user.click(screen.getByRole("button", { name: "Retomar animação" }));
    expect(
      screen.getByRole("button", { name: "Pausar animação" }),
    ).toHaveAttribute("aria-pressed", "false");
  });
});
