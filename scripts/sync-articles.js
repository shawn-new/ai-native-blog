import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const defaultArticlesDir = path.join(process.cwd(), 'content/articles');
const sourceDir =
  process.env.ARTICLES_DIR ||
  process.env.OBSIDIAN_ARTICLES_DIR ||
  defaultArticlesDir;
const targetFile =
  process.env.ARTICLES_TARGET_FILE ||
  path.join(process.cwd(), 'src/data/articles.ts');
const includeDrafts = process.env.INCLUDE_DRAFTS === 'true';

const normalizeBody = (content) => content.trim().replace(/\\n/g, '\n');

const formatDate = (value) => {
  if (value instanceof Date && !Number.isNaN(value.valueOf())) {
    return value.toISOString().split('T')[0];
  }
  if (typeof value === 'string') return value;
  return '2026-03-29';
};

const formatHistory = (value = []) =>
  value.map((item) => {
    if (item && typeof item === 'object' && !Array.isArray(item)) {
      const [key] = Object.keys(item);
      const keyDate = new Date(key);
      const label = Number.isNaN(keyDate.valueOf()) ? key : formatDate(keyDate);
      return `${label}: ${item[key]}`;
    }
    return String(item);
  });

const formatRelease = (value) => (value === 'draft' ? 'draft' : 'published');

// URLs are permanent, titles are not. Prefer an explicit `slug:` in frontmatter so
// rewording a headline never breaks a link that is already published; fall back to
// deriving one from the English title for articles that have not pinned theirs.
// Titles here read "Main Title: subtitle" or "Main Title — subtitle", and only the
// part before that break belongs in a URL.
const slugify = (value) =>
  String(value)
    .split(/[:—]/)[0]
    .trim()
    .toLowerCase()
    .replace(/['’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');

const toArticle = (filename) => {
  const filePath = path.join(sourceDir, filename);
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);
  const lines = normalizeBody(content).split('\n');

  const titleEn = data.titleEn || lines[0]?.replace(/^#\s+/, '').trim();
  const titleZh = data.titleZh || lines[1]?.replace(/^#\s+/, '').trim();
  const body = lines.slice(2).join('\n').trim();

  return {
    id: data.id || filename.replace(/\.md$/i, ''),
    slug: data.slug ? slugify(data.slug) : slugify(titleEn),
    titleEn,
    titleZh,
    category: data.category || 'Opinions',
    date: formatDate(data.date),
    author: data.author || 'Sean',
    release: formatRelease(data.release),
    keywords: data.keywords || [],
    history: formatHistory(data.history),
    body,
  };
};

const dateTimestamp = (article) => {
  const timestamp = Date.parse(article.date);
  return Number.isNaN(timestamp) ? 0 : timestamp;
};

const articleFiles = fs
  .readdirSync(sourceDir)
  .filter((filename) => filename.toLowerCase().endsWith('.md'))
  .sort();

const articles = articleFiles
  .map(toArticle)
  .filter((article) => includeDrafts || article.release !== 'draft')
  .sort((a, b) => dateTimestamp(b) - dateTimestamp(a) || a.id.localeCompare(b.id));

const duplicateSlugs = articles
  .map((article) => article.slug)
  .filter((slug, index, all) => all.indexOf(slug) !== index);

if (duplicateSlugs.length > 0) {
  throw new Error(
    `Duplicate slug(s): ${[...new Set(duplicateSlugs)].join(', ')}. ` +
      'Two articles would resolve to the same URL — pin a distinct `slug:` in frontmatter.',
  );
}

const fileContent = `export interface Article {
  id: string;
  slug: string;
  titleEn: string;
  titleZh: string;
  category: 'Opinions' | 'Commentary';
  date: string;
  author: string;
  release: 'published' | 'draft';
  keywords: string[];
  history: string[];
  body: string;
}

export const articles: Article[] = ${JSON.stringify(articles, null, 2)};
`;

fs.writeFileSync(targetFile, fileContent);
console.log(
  `Synced ${articles.length} article(s) from ${sourceDir}${includeDrafts ? ' including drafts' : ''}.`,
);
