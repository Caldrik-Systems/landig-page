import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import matter from "gray-matter";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const POSTS_DIR = path.join(__dirname, "../content/posts");
const OUT_FILE = path.join(__dirname, "../src/lib/posts-data.json");

const processor = unified()
  .use(remarkParse)
  .use(remarkGfm)
  .use(remarkRehype)
  .use(rehypeStringify);

const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".mdx"));

const posts = await Promise.all(
  files.map(async (file) => {
    const slug = file.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf-8");
    const { data, content } = matter(raw);
    const contentHtml = String(await processor.process(content))
      .replace(/<img /g, '<img loading="lazy" ');
    return { slug, ...data, contentHtml };
  })
);

posts.sort((a, b) => (a.date < b.date ? 1 : -1));

fs.writeFileSync(OUT_FILE, JSON.stringify(posts, null, 2));
console.log(`Generated posts-data.json (${posts.length} posts)`);
