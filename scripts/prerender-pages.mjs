// Boots the built SSR server, fetches the rendered HTML, and writes it into
// dist/client as a static index.html — so GitHub Pages (which only serves
// static files) can serve a fully rendered page instead of an empty shell.
import { spawn } from "node:child_process";
import { writeFile } from "node:fs/promises";

const base = process.env.GITHUB_PAGES ? "/siux-home-transformations/" : "/";
const port = 4173;

const server = spawn(process.execPath, ["dist/server/index.mjs"], {
  env: { ...process.env, PORT: String(port) },
  stdio: "inherit",
});

const stopServer = () => server.kill();

try {
  await waitForServer(`http://localhost:${port}${base}`);
  const res = await fetch(`http://localhost:${port}${base}`);
  if (!res.ok) throw new Error(`Prerender fetch failed: ${res.status} ${res.statusText}`);
  const html = await res.text();
  await writeFile("dist/client/index.html", html);
  console.log(`Wrote dist/client/index.html (${html.length} bytes)`);
} finally {
  stopServer();
}

async function waitForServer(url, timeoutMs = 15000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const res = await fetch(url);
      if (res.status < 500) return;
    } catch {
      // server not up yet
    }
    await new Promise((r) => setTimeout(r, 200));
  }
  throw new Error(`Server didn't respond at ${url} within ${timeoutMs}ms`);
}
