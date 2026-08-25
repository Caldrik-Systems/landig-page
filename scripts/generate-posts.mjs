import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import matter from "gray-matter";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const POSTS_DIR = path.join(__dirname, "../content/posts");
const OUT_FILE = path.join(__dirname, "../src/lib/posts-data.json");

const files = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith(".mdx"));

const posts = files
  .map((file) => {
    const slug = file.replace(/\.mdx$/, "");
    const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf-8");
    const { data, content } = matter(raw);
    return { slug, ...data, content };
  })
  .sort((a, b) => (a.date < b.date ? 1 : -1));

fs.writeFileSync(OUT_FILE, JSON.stringify(posts, null, 2));
console.log(`Generated posts-data.json (${posts.length} posts)`);
