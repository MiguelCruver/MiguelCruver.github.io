import { useEffect, useRef, useState } from "react";
import { navigation, profile } from "../data/portfolio";
import Icon from "./Icon";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [ready, setReady] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => setReady(true), []);

  useEffect(() => {
    if (!open) return;
    function keydown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        triggerRef.current?.focus();
      }
    }
    function pointerdown(event: PointerEvent) {
      if (
        event.target instanceof Node &&
        !headerRef.current?.contains(event.target)
      )
        setOpen(false);
    }
    const desktop = window.matchMedia("(min-width: 900px)");
    function closeOnDesktop(event: MediaQueryListEvent) {
      if (event.matches) setOpen(false);
    }
    document.addEventListener("keydown", keydown);
    document.addEventListener("pointerdown", pointerdown);
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      document.removeEventListener("keydown", keydown);
      document.removeEventListener("pointerdown", pointerdown);
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [open]);

  function navigate(href: string) {
    setOpen(false);
    document.getElementById(href.slice(1))?.focus({ preventScroll: true });
  }

  return (
    <header className="site-header" ref={headerRef}>
      <div className="container header-inner">
        <a className="brand" href="#inicio">
          <span className="brand-symbol" aria-hidden="true">
            m<span>c</span>
          </span>
          <span>
            miguel cruver
            <span className="brand-period">.</span>
          </span>
          <span className="sr-only"> — início</span>
        </a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>
        <a
          className="header-github"
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub de Miguel Cruver (abre em nova aba)"
        >
          <Icon name="github" size={18} />
          <span>GitHub</span>
          <Icon name="arrow-up" size={14} />
        </a>
        <button
          ref={triggerRef}
          className="menu-trigger"
          disabled={!ready}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <Icon name={open ? "close" : "menu"} size={22} />
        </button>
      </div>
      {open ? (
        <nav
          id="mobile-nav"
          className="mobile-nav"
          aria-label="Navegação mobile"
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => navigate(item.href)}
            >
              {item.label}
              <Icon name="arrow" size={18} />
            </a>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
