import { act, render, screen } from "@testing-library/react";
import { vi } from "vitest";
import OrbitVisual from "./OrbitVisual";
import { renderToStaticMarkup } from "react-dom/server";

it("mantém a cena estática e não oferece pausa sem JavaScript", () => {
  const markup = renderToStaticMarkup(<OrbitVisual />);
  const container = document.createElement("div");
  container.innerHTML = markup;
  expect(container).toHaveTextContent("Visual estático");
  expect(container.querySelector("button")).toBeNull();
  expect(container.querySelector(".orbit-visual")).toHaveClass("is-paused");
});

it("respeita a preferência de movimento reduzido e acompanha alterações", () => {
  const media = Object.assign(new EventTarget(), {
    matches: true,
    media: "(prefers-reduced-motion: reduce)",
  });
  const matchMedia = vi
    .spyOn(window, "matchMedia")
    .mockReturnValue(media as MediaQueryList);
  render(<OrbitVisual />);
  expect(screen.getByText("Movimento reduzido")).toBeInTheDocument();
  expect(screen.queryByRole("button")).not.toBeInTheDocument();
  act(() => {
    media.matches = false;
    media.dispatchEvent(Object.assign(new Event("change"), { matches: false }));
  });
  expect(
    screen.getByRole("button", { name: "Pausar animação" }),
  ).toBeInTheDocument();
  act(() => {
    media.matches = true;
    media.dispatchEvent(Object.assign(new Event("change"), { matches: true }));
  });
  expect(screen.getByText("Movimento reduzido")).toBeInTheDocument();
  expect(screen.queryByRole("button")).not.toBeInTheDocument();
  matchMedia.mockRestore();
});
