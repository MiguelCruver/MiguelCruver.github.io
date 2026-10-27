import { readFile, writeFile } from "node:fs/promises";
import { createElement, StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { createServer } from "vite";

const htmlPath = new URL("../dist/index.html", import.meta.url);
const html = await readFile(htmlPath, "utf8");
const hosting = JSON.parse(
  await readFile(new URL("../vercel.json", import.meta.url), "utf8"),
);
const policy = hosting.headers[0].headers
  .find((header) => header.key === "Content-Security-Policy")
  .value.split(";")
  .map((directive) => directive.trim())
  .filter((directive) => directive && !directive.startsWith("frame-ancestors "))
  .join("; ");
const protectedHtml = html.replace(
  "<head>",
  `<head>\n    <meta http-equiv="Content-Security-Policy" content="${policy.replaceAll('"', "&quot;")}" />`,
);
if (!html.includes("<!--app-html-->")) {
  throw new Error(
    "Marcador de pré-renderização ausente: execute vite build primeiro.",
  );
}

// Usar o mesmo compilador JSX do site evita diferenças entre cliente e HTML estático.
const server = await createServer({
  server: { middlewareMode: true },
  appType: "custom",
  logLevel: "warn",
});
try {
  const { default: App } = await server.ssrLoadModule("/src/App.tsx");
  const content = renderToString(
    createElement(StrictMode, null, createElement(App)),
  );
  await writeFile(htmlPath, protectedHtml.replace("<!--app-html-->", content));
  console.log(
    "Pré-renderização concluída: todas as seções estão no HTML estático.",
  );
} finally {
  await server.close();
}
