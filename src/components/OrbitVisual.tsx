import { useEffect, useRef, useState } from "react";
import type { PointerEvent } from "react";
import Icon from "./Icon";

export default function OrbitVisual() {
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [ready, setReady] = useState(false);
  const sceneRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(query.matches);
    setReady(true);
    const update = (event: MediaQueryListEvent) => setReduced(event.matches);
    query.addEventListener("change", update);
    return () => {
      query.removeEventListener("change", update);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  function move(event: PointerEvent<HTMLDivElement>) {
    if (paused || reduced || event.pointerType === "touch") return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left - rect.width / 2) / rect.width) * 12;
    const y = ((event.clientY - rect.top - rect.height / 2) / rect.height) * 12;
    if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      sceneRef.current?.style.setProperty("--pointer-x", `${x}px`);
      sceneRef.current?.style.setProperty("--pointer-y", `${y}px`);
    });
  }

  function reset() {
    if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    sceneRef.current?.style.setProperty("--pointer-x", "0px");
    sceneRef.current?.style.setProperty("--pointer-y", "0px");
  }

  return (
    <div
      className={`orbit-visual${!ready || paused || reduced ? " is-paused" : ""}`}
      onPointerMove={move}
      onPointerLeave={reset}
    >
      <div className="orbit-backdrop" aria-hidden="true" />
      <div className="orbit-scene" ref={sceneRef} aria-hidden="true">
        <svg className="orbit-art" viewBox="0 0 600 600" fill="none">
          <defs>
            <radialGradient id="sphere" cx="34%" cy="25%" r="80%">
              <stop stopColor="#3b4c9d" />
              <stop offset=".42" stopColor="#192755" />
              <stop offset="1" stopColor="#080d1e" />
            </radialGradient>
            <linearGradient
              id="ring"
              x1="70"
              y1="100"
              x2="520"
              y2="500"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#b2acff" stopOpacity=".08" />
              <stop offset=".35" stopColor="#a29bff" />
              <stop offset=".65" stopColor="#7198ff" stopOpacity=".7" />
              <stop offset="1" stopColor="#7198ff" stopOpacity=".03" />
            </linearGradient>
            <linearGradient
              id="core-stroke"
              x1="230"
              y1="240"
              x2="370"
              y2="360"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#d6caff" />
              <stop offset="1" stopColor="#88acff" />
            </linearGradient>
            <clipPath id="sphere-clip">
              <circle cx="300" cy="300" r="98" />
            </clipPath>
          </defs>
          <circle
            cx="300"
            cy="300"
            r="251"
            stroke="#6374af"
            strokeOpacity=".13"
            strokeDasharray="2 10"
          />
          <path
            d="M300 32v24m0 488v24M32 300h24m488 0h24"
            stroke="#53618a"
            strokeOpacity=".4"
          />
          <g className="orbit-paths">
            <ellipse
              cx="300"
              cy="300"
              rx="251"
              ry="96"
              transform="rotate(-28 300 300)"
              stroke="url(#ring)"
              strokeWidth="1.3"
            />
            <ellipse
              cx="300"
              cy="300"
              rx="230"
              ry="105"
              transform="rotate(39 300 300)"
              stroke="url(#ring)"
              strokeWidth="1"
            />
            <ellipse
              cx="300"
              cy="300"
              rx="243"
              ry="100"
              transform="rotate(96 300 300)"
              stroke="url(#ring)"
              strokeWidth=".8"
            />
            <circle cx="82" cy="420" r="5" fill="#a8b7ff" />
            <circle
              cx="82"
              cy="420"
              r="12"
              stroke="#a8b7ff"
              strokeOpacity=".16"
            />
            <circle cx="465" cy="430" r="4" fill="#9a8aef" />
            <circle cx="333" cy="59" r="4" fill="#9ebcff" />
          </g>
          <circle
            cx="300"
            cy="300"
            r="106"
            stroke="#9c9eff"
            strokeOpacity=".11"
          />
          <circle
            cx="300"
            cy="300"
            r="98"
            fill="url(#sphere)"
            stroke="#717dd0"
            strokeOpacity=".6"
          />
          <g clipPath="url(#sphere-clip)" stroke="#8795dd" strokeOpacity=".13">
            {[-72, -48, -24, 0, 24, 48, 72].map((offset) => (
              <ellipse
                key={`lat${offset}`}
                cx="300"
                cy={300 + offset}
                rx="98"
                ry="13"
              />
            ))}
            {[22, 48, 73].map((radius) => (
              <ellipse
                key={`long${radius}`}
                cx="300"
                cy="300"
                rx={radius}
                ry="98"
              />
            ))}
            <path d="M202 300h196m-98-98v196" />
          </g>
          <path
            d="m279 280-23 20 23 20m42-40 23 20-23 20m-14-53-15 66"
            stroke="url(#core-stroke)"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="105" cy="142" r="1.8" fill="#919abb" />
          <circle cx="490" cy="182" r="2" fill="#919abb" />
          <circle cx="410" cy="536" r="1.5" fill="#919abb" />
        </svg>
        <span className="orbit-label orbit-label-web">
          <Icon name="code" size={17} />
          Web
        </span>
        <span className="orbit-label orbit-label-ai">
          <Icon name="spark" size={17} />
          Inteligência artificial
        </span>
        <span className="orbit-label orbit-label-auto">
          <Icon name="terminal" size={17} />
          Automação
        </span>
      </div>
      <div className="orbit-caption">
        <span>
          <span className="tiny-cross" aria-hidden="true">
            +
          </span>{" "}
          Ideias em movimento.
        </span>
        {reduced ? (
          <span className="motion-note">Movimento reduzido</span>
        ) : ready ? (
          <button
            className="motion-toggle"
            onClick={() => {
              setPaused((value) => !value);
              reset();
            }}
            aria-label={paused ? "Retomar animação" : "Pausar animação"}
            aria-pressed={paused}
          >
            <Icon name={paused ? "play" : "pause"} size={14} />
          </button>
        ) : (
          <span className="motion-note">Visual estático</span>
        )}
      </div>
    </div>
  );
}
