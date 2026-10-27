import type { CSSProperties } from "react";

export type IconName =
  | "arrow"
  | "arrow-up"
  | "github"
  | "code"
  | "terminal"
  | "spark"
  | "server"
  | "menu"
  | "close"
  | "pause"
  | "play"
  | "image"
  | "chevron"
  | "book";

const paths: Record<IconName, React.ReactNode> = {
  arrow: (
    <>
      <path d="M4 12h16m-6-6 6 6-6 6" />
    </>
  ),
  "arrow-up": (
    <>
      <path d="M6 18 18 6M6 6h12v12" />
    </>
  ),
  github: (
    <>
      <path d="M9 19c-4 1-4-2-6-2m12 5v-4c0-1 .1-1.5-.5-2 3.3-.4 6.5-1.6 6.5-7A5.5 5.5 0 0 0 19.5 5 5 5 0 0 0 19.4 1S18.2.6 15 2.5a14 14 0 0 0-6 0C5.8.6 4.6 1 4.6 1A5 5 0 0 0 4.5 5 5.5 5.5 0 0 0 3 9c0 5.4 3.2 6.6 6.5 7-.6.5-.5 1.5-.5 2v4" />
    </>
  ),
  code: (
    <>
      <path d="m8 6-6 6 6 6m8-12 6 6-6 6m-3-15-2 18" />
    </>
  ),
  terminal: (
    <>
      <rect x="2" y="3" width="20" height="18" rx="4" />
      <path d="m6 8 4 4-4 4m7 0h5" />
    </>
  ),
  spark: (
    <>
      <path d="m12 3 2.6 6.4L21 12l-6.4 2.6L12 21l-2.6-6.4L3 12l6.4-2.6L12 3Zm8-2v4m-2-2h4" />
    </>
  ),
  server: (
    <>
      <rect x="3" y="3" width="18" height="7" rx="2" />
      <rect x="3" y="14" width="18" height="7" rx="2" />
      <path d="M7 6.5h.01M7 17.5h.01M11 6.5h6M11 17.5h6" />
    </>
  ),
  menu: <path d="M4 6h16M4 12h16M4 18h16" />,
  close: <path d="m6 6 12 12M6 18 18 6" />,
  pause: <path d="M8 5v14M16 5v14" />,
  play: <path d="m8 5 11 7-11 7V5Z" />,
  image: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <circle cx="8" cy="8" r="1" />
      <path d="m3 16 5-5 4 4 3-3 6 6" />
    </>
  ),
  chevron: <path d="m8 10 4 4 4-4" />,
  book: (
    <>
      <path d="M12 5C8 2 3 3 3 3v16s5-1 9 2c4-3 9-2 9-2V3s-5-1-9 2Zm0 0v16" />
    </>
  ),
};

export default function Icon({
  name,
  size = 20,
  className,
  style,
}: {
  name: IconName;
  size?: number;
  className?: string;
  style?: CSSProperties;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      style={style}
    >
      {paths[name]}
    </svg>
  );
}
