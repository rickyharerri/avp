import { readFile, writeFile, rm } from "node:fs/promises";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { loadEnv } from "vite";

process.env.NODE_ENV ??= "production";

const root = process.cwd();
const dist = path.join(root, "dist");
const ssrDir = path.join(root, "dist-ssr");
const siteUrl = loadEnv("production", root, "").VITE_SITE_URL.replace(/\/$/, "");

const PAGES = [
  { page: "home", file: "index.html", url: "/" },
  { page: "about-us", file: "about-us/index.html", url: "/about-us/" },
  { page: "contact", file: "contact/index.html", url: "/contact/" },
  { page: "portfolio", file: "portfolio/index.html", url: "/portfolio/" },
  { page: "portfolio/portfolio-1", file: "portfolio/portfolio-1/index.html", url: "/portfolio/portfolio-1/" },
  { page: "portfolio/portfolio-2", file: "portfolio/portfolio-2/index.html", url: "/portfolio/portfolio-2/" },
  { page: "services", file: "services/index.html", url: "/services/" },
  { page: "services/service-1", file: "services/service-1/index.html", url: "/services/service-1/" },
  { page: "services/service-2", file: "services/service-2/index.html", url: "/services/service-2/" },
  { page: "blog", file: "blog/index.html", url: "/blog/" },
];

const { render } = await import(pathToFileURL(path.join(ssrDir, "entry-server.js")).href);

for (const { page, file } of PAGES) {
  const filePath = path.join(dist, file);
  const html = await readFile(filePath, "utf8");
  const placeholder = `<div id="root" data-page="${page}"></div>`;
  if (!html.includes(placeholder)) {
    throw new Error(`Root placeholder not found in ${file}`);
  }
  const output = html.replace(
    placeholder,
    () => `<div id="root" data-page="${page}">${render(page)}</div>`
  );
  await writeFile(filePath, output);
}

const lastmod = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${PAGES.map(({ url }) => `  <url><loc>${siteUrl}${url}</loc><lastmod>${lastmod}</lastmod></url>`).join("\n")}
</urlset>
`;
await writeFile(path.join(dist, "sitemap.xml"), sitemap);

await writeFile(
  path.join(dist, "robots.txt"),
  `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`
);

await rm(ssrDir, { recursive: true, force: true });
console.log(`Prerendered ${PAGES.length} pages, sitemap.xml and robots.txt`);
