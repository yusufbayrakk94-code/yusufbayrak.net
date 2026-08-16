// Build-time llms.txt generator. Reads project/tool/blog data from the same
// TS source files the app renders from, so the output can never drift from
// the real routes. Writes to public/llms.txt and (when the target list
// includes it) dist/llms.txt. Follows the llmstxt.org Markdown structure.

import fs from "node:fs";
import path from "node:path";
import { SITE_URL, PROJECT_SLUGS, BLOG_SLUG_PAIRS } from "./routes.mjs";

const ROOT = process.cwd();

function read(rel) {
  return fs.readFileSync(path.resolve(ROOT, rel), "utf-8");
}

// --- site.ts (profile description, name, email, linkedin) ---
function readSiteMeta() {
  const src = read("src/content/tr/site.ts");
  const pick = (key) => {
    const m = src.match(new RegExp(`${key}:\\s*"((?:[^"\\\\]|\\\\.)*)"`));
    return m ? m[1].replace(/\\"/g, '"').replace(/\\'/g, "'") : "";
  };
  return {
    name: pick("profileName") || "Yusuf Bayrak",
    email: pick("profileEmail"),
    linkedin: pick("profileLinkedIn"),
    description: pick("profileDescription"),
  };
}

// --- projects: parse each entry from src/content/tr/projects.ts ---
function readProjects() {
  const src = read("src/content/tr/projects.ts");
  // Isolate the `projects` array body to avoid catching page-meta strings.
  const start = src.indexOf("export const projects");
  const body = start >= 0 ? src.slice(start) : src;
  // Split by `slug:` occurrences and pull name/description/externalUrl from each block.
  const blocks = body.split(/\{\s*slug:\s*"/).slice(1);
  const list = [];
  for (const raw of blocks) {
    const slugMatch = raw.match(/^([^"]+)"/);
    if (!slugMatch) continue;
    const slug = slugMatch[1];
    if (!PROJECT_SLUGS.includes(slug)) continue;
    const chunk = raw.split(/\n\s*\},/)[0];
    const name = (chunk.match(/name:\s*"((?:[^"\\]|\\.)*)"/) || [])[1] || slug;
    const desc = (chunk.match(/\bdescription:\s*"((?:[^"\\]|\\.)*)"/) || [])[1] || "";
    const ext = (chunk.match(/externalUrl:\s*"((?:[^"\\]|\\.)*)"/) || [])[1] || null;
    list.push({ slug, name, description: desc, externalUrl: ext });
  }
  return list;
}

// --- free tools: parse cards + categories from src/content/{tr,en}/freeTools.ts ---
function readTools(locale = "tr") {
  const src = read(`src/content/${locale}/freeTools.ts`);
  const list = [];
  const re = /\{\s*key:\s*"([^"]+)",\s*name:\s*"((?:[^"\\]|\\.)*)",\s*description:\s*"((?:[^"\\]|\\.)*)",\s*href:\s*"([^"]+)"\s*\}/g;
  let m;
  while ((m = re.exec(src))) list.push({ key: m[1], name: m[2], description: m[3], href: m[4] });
  return list;
}

function readToolCategories(locale = "tr") {
  const src = read(`src/content/${locale}/freeTools.ts`);
  const start = src.indexOf("export const toolCategories");
  if (start < 0) return [];
  const body = src.slice(start);
  const cats = [];
  for (const raw of body.split(/\{\s*\n\s*key:\s*"/).slice(1)) {
    const key = (raw.match(/^([^"]+)"/) || [])[1];
    if (!key) continue;
    // The category block runs until the next category key; nested faq/section
    // objects also close with "}," so we read the first match of each field
    // from the remainder instead of slicing at the first closing brace.
    const path = (raw.match(/path:\s*"([^"]+)"/) || [])[1];
    const name = (raw.match(/name:\s*"((?:[^"\\]|\\.)*)"/) || [])[1] || key;
    const short = (raw.match(/short:\s*"((?:[^"\\]|\\.)*)"/) || [])[1] || "";
    const toolsRaw = (raw.match(/tools:\s*\[([^\]]*)\]/) || [])[1] || "";
    const tools = Array.from(toolsRaw.matchAll(/"([^"]+)"/g)).map((t) => t[1]);
    if (path) cats.push({ key, path, name, short, tools });
  }
  return cats;
}

// --- blog posts: parse TR posts array from src/data/blogPosts.ts ---
function readBlogPosts() {
  const src = read("src/data/blogPosts.ts");
  const trStart = src.indexOf("export const BLOG_POSTS:");
  const enStart = src.indexOf("export const BLOG_POSTS_EN");
  const trBody = src.slice(trStart, enStart > trStart ? enStart : undefined);
  const enBody = enStart >= 0 ? src.slice(enStart) : "";
  const parse = (body) => {
    const posts = [];
    const blocks = body.split(/\n\s*\{\s*\n\s*slug:\s*"/).slice(1);
    for (const raw of blocks) {
      const slug = (raw.match(/^([^"]+)"/) || [])[1];
      if (!slug) continue;
      const title = (raw.match(/\btitle:\s*"((?:[^"\\]|\\.)*)"/) || [])[1] || slug;
      const desc =
        (raw.match(/\bdescription:\s*\n?\s*"((?:[^"\\]|\\.)*)"/) || [])[1] || "";
      posts.push({ slug, title, description: desc });
    }
    return posts;
  };
  return { tr: parse(trBody), en: parse(enBody) };
}

function build() {
  const meta = readSiteMeta();
  const projects = readProjects();
  const tools = readTools("tr");
  const toolsEn = readTools("en");
  const cats = readToolCategories("tr");
  const catsEn = readToolCategories("en");
  const { tr: posts, en: postsEn } = readBlogPosts();
  const postsEnBySlug = new Map(postsEn.map((p) => [p.slug, p]));

  const lines = [];
  lines.push(`# ${meta.name}`);
  lines.push("");
  lines.push(`> ${meta.description}`);
  lines.push("");
  lines.push("## Ana Sayfalar");
  lines.push("");
  lines.push(`- [Ana Sayfa](${SITE_URL}/): ${meta.name} kısa tanıtımı ve öne çıkan projeler.`);
  lines.push(`- [Hakkımda](${SITE_URL}/hakkimda): Profesyonel geçmiş, uzmanlık alanları ve kullanılan araçlar.`);
  lines.push(`- [Projeler](${SITE_URL}/projeler): Tüm proje ve ürünlerin listesi.`);
  lines.push(`- [İletişim](${SITE_URL}/iletisim): İletişim bilgileri (e-posta ve LinkedIn).`);
  lines.push("");

  lines.push("## Projeler");
  lines.push("");
  for (const p of projects) {
    const live = p.externalUrl ? ` Canlı: ${p.externalUrl}` : "";
    lines.push(`- [${p.name}](${SITE_URL}/projeler/${p.slug}): ${p.description}${live}`);
  }
  lines.push("");

  lines.push("## Ücretsiz Araçlar");
  lines.push("");
  lines.push(
    `- [Ücretsiz Araçlar](${SITE_URL}/ucretsiz-araclar): Pazarlama, SaaS ve e-ticaret metriklerini hesaplayan tarayıcı tabanlı ücretsiz araçlar (kategori hub sayfası).`
  );
  lines.push("");
  {
    const byKey = new Map(tools.map((t) => [t.key, t]));
    for (const cat of cats) {
      lines.push(`### ${cat.name}`);
      lines.push("");
      lines.push(`- [${cat.name}](${SITE_URL}${cat.path}): ${cat.short}`);
      for (const key of cat.tools) {
        const t = byKey.get(key);
        if (t) lines.push(`- [${t.name}](${SITE_URL}${t.href}): ${t.description}`);
      }
      lines.push("");
    }
  }

  lines.push("## Blog");
  lines.push("");
  lines.push(`- [Blog](${SITE_URL}/blog): Performans pazarlama, B2B lead generation, AI otomasyon ve SaaS büyüme üzerine yazılar.`);
  for (const post of posts) {
    lines.push(`- [${post.title}](${SITE_URL}/blog/${post.slug}): ${post.description}`);
  }
  lines.push("");

  lines.push("## English");
  lines.push("");
  lines.push(`- [Home (EN)](${SITE_URL}/en): English homepage.`);
  lines.push(`- [About](${SITE_URL}/en/about): Background and expertise.`);
  lines.push(`- [Projects](${SITE_URL}/en/projects): Products and projects.`);
  lines.push(`- [Free Marketing Tools](${SITE_URL}/en/free-marketing-tools): Marketing, SaaS and e-commerce calculators (category hub).`);
  {
    const byKeyEn = new Map(toolsEn.map((t) => [t.key, t]));
    for (const cat of catsEn) {
      lines.push(`- [${cat.name}](${SITE_URL}${cat.path}): ${cat.short}`);
      for (const key of cat.tools) {
        const t = byKeyEn.get(key);
        if (t) lines.push(`  - [${t.name}](${SITE_URL}${t.href}): ${t.description}`);
      }
    }
  }
  lines.push(`- [Blog (EN)](${SITE_URL}/en/blog): English blog index.`);
  lines.push(`- [Contact](${SITE_URL}/en/contact): Contact details.`);
  {
    // Every EN post, including English-only ones that have no TR counterpart.
    const enSlugs = [
      ...BLOG_SLUG_PAIRS.map((p) => p.en),
      ...postsEn.map((p) => p.slug).filter((s) => !BLOG_SLUG_PAIRS.some((p) => p.en === s)),
    ];
    for (const slug of enSlugs) {
      const p = postsEnBySlug.get(slug);
      const title = p?.title || slug;
      const desc = p?.description ? `: ${p.description}` : "";
      lines.push(`- [${title}](${SITE_URL}/en/blog/${slug})${desc}`);
    }
  }
  lines.push("");

  lines.push("## İletişim");
  lines.push("");
  if (meta.email) lines.push(`- E-posta: ${meta.email}`);
  if (meta.linkedin) lines.push(`- LinkedIn: ${meta.linkedin}`);
  lines.push("");

  lines.push("## Optional");
  lines.push("");
  lines.push(`- [Sitemap](${SITE_URL}/sitemap.xml)`);
  lines.push("");

  return lines.join("\n");
}

const out = build();
const targets = process.argv.slice(2);
if (targets.length === 0) targets.push("public/llms.txt");
for (const t of targets) {
  const abs = path.resolve(ROOT, t);
  fs.mkdirSync(path.dirname(abs), { recursive: true });
  fs.writeFileSync(abs, out, "utf-8");
  console.log(`llms.txt -> ${t}`);
}