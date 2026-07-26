import { useState, useEffect, useRef } from 'react';
import GithubSlugger from 'github-slugger';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import { articles, type Article } from './data/articles';
import './styles/App.css';

const showLocalMetadata = import.meta.env.DEV;
const hiddenArticleIds = new Set(['article5-death-of-middle-management']);

// Locale lives in the path: /articles/<slug> is English, /cn/articles/<slug> is
// Chinese. Keeping it in the URL rather than in component state means a reader
// can link to, share, or bookmark a specific language.
type Locale = 'en' | 'cn';

const localeFromPath = (path: string): Locale =>
  path === '/cn' || path.startsWith('/cn/') ? 'cn' : 'en';

const stripLocale = (path: string) => path.replace(/^\/cn(?=\/|$)/, '') || '/';

const localePrefix = (locale: Locale) => (locale === 'cn' ? '/cn' : '');

const homePath = (locale: Locale) => `${localePrefix(locale)}/`;

const articlePath = (article: Article, locale: Locale) =>
  `${localePrefix(locale)}/articles/${article.slug}`;

const findArticleByPath = (path: string) => {
  const match = stripLocale(path).replace(/\/+$/, '').match(/^\/articles\/([^/]+)$/);
  if (!match) return null;
  const slug = decodeURIComponent(match[1]).toLowerCase();
  return articles.find(a => a.slug === slug) ?? null;
};


const getArticleTimestamp = (article: Article) => {
  const timestamp = Date.parse(article.date);
  return Number.isNaN(timestamp) ? 0 : timestamp;
};


function App() {
  const [currentArticle, setCurrentArticle] = useState<Article | null>(null);
  const [locale, setLocale] = useState<Locale>(() => localeFromPath(window.location.pathname));
  const [activeSlug, setActiveSlug] = useState<string>('');
  const heroRef = useRef<HTMLElement>(null);
  // Keep in step with --nav-height in App.css.
  const tocScrollOffset = 56 + 28;

  useEffect(() => {
    const selectArticleFromLocation = () => {
      const { pathname, hash } = window.location;
      setLocale(localeFromPath(pathname));

      const article = findArticleByPath(pathname);
      if (article) {
        setCurrentArticle(article);
        if (!hash) window.scrollTo(0, 0);
        return;
      }

      // An in-page heading link keeps whatever article is already open.
      if (hash.startsWith('#section-')) return;

      setCurrentArticle(null);
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', selectArticleFromLocation);
    window.addEventListener('popstate', selectArticleFromLocation);
    selectArticleFromLocation();
    return () => {
      window.removeEventListener('hashchange', selectArticleFromLocation);
      window.removeEventListener('popstate', selectArticleFromLocation);
    };
  }, []);

  // TOC active slug tracking
  useEffect(() => {
    if (!currentArticle) return;
    // Re-querying the DOM and measuring every heading on each scroll event is enough
    // work to show up as jank on a long article, so measure at most once per frame.
    const headings = Array.from(document.querySelectorAll<HTMLElement>('.md-content h2, .md-content h3'));
    if (headings.length === 0) return;
    let frame = 0;
    const measure = () => {
      frame = 0;
      let current = headings[0].id;
      let closestDistance = Number.POSITIVE_INFINITY;
      for (const h of headings) {
        const distance = Math.abs(h.getBoundingClientRect().top - tocScrollOffset);
        if (distance < closestDistance) {
          closestDistance = distance;
          current = h.id;
        }
      }
      setActiveSlug(current);
    };
    const handleScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(measure);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    measure();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [currentArticle, tocScrollOffset]);

  // The hero fills the screen, so the article list starts exactly at its bottom.
  const revealArticles = () => {
    const hero = heroRef.current;
    if (!hero) return;
    window.scrollTo({ top: hero.getBoundingClientRect().bottom + window.scrollY, behavior: 'smooth' });
  };

  // The first scroll from the very top skips past the hero in one move.
  // Everything after that is left to the browser. Without the guards this
  // hijacks every wheel-down while the pointer is over the hero, so scrolling
  // back up and easing down again teleports the reader to the bottom again.
  useEffect(() => {
    if (currentArticle) return;
    const hero = heroRef.current;
    if (!hero) return;
    let snapped = false;
    const handleWheel = (e: WheelEvent) => {
      if (snapped || e.deltaY <= 0 || window.scrollY > 4) return;
      snapped = true;
      e.preventDefault();
      revealArticles();
    };
    hero.addEventListener('wheel', handleWheel, { passive: false });
    return () => hero.removeEventListener('wheel', handleWheel);
  }, [currentArticle]);

  const homepageArticles = articles
    .filter(article => !hiddenArticleIds.has(article.id))
    .sort((a, b) => getArticleTimestamp(b) - getArticleTimestamp(a));

  const getFilteredMarkdown = (body: string) => {
    const hasLanguageMarkers = body.includes('**English:**') || body.includes('**中文：**');
    if (!hasLanguageMarkers) return body.replace(/\\n/g, '\n');

    const lines = body.replace(/\\n/g, '\n').split('\n');
    const filteredLines: string[] = [];
    let currentBlockLang: 'en' | 'cn' | 'neutral' = 'en';

    for (let i = 0; i < lines.length; i++) {
      let line = lines[i];
      const trimmed = line.trim();
      if (trimmed === '') { filteredLines.push(''); continue; }

      if (trimmed.includes('**English:**')) {
        currentBlockLang = 'en';
        line = line.replace('**English:**', '').trim();
        if (line === '') continue;
      } else if (trimmed.includes('**中文：**')) {
        currentBlockLang = 'cn';
        line = line.replace('**中文：**', '').trim();
        if (line === '') continue;
      } else if (trimmed.startsWith('#')) {
        const hasChinese = /[\u4e00-\u9fa5]/.test(trimmed);
        currentBlockLang = hasChinese ? 'cn' : 'en';
      }

      if (locale === 'en' && currentBlockLang === 'en') filteredLines.push(line);
      else if (locale === 'cn' && currentBlockLang === 'cn') filteredLines.push(line);
    }
    return filteredLines.join('\n');
  };

  const getTOC = (filteredMd: string) => {
    const lines = filteredMd.split('\n');
    const slugger = new GithubSlugger();
    return lines
      .filter(l => l.startsWith('## ') || l.startsWith('### '))
      .map(l => {
        const level = l.startsWith('### ') ? 3 : 2;
        const text = l.replace(/^###?\s+/, '').trim();
        const slug = slugger.slug(text);
        return { level, text, slug };
      });
  };

  const navigateTo = (id: string | null) => {
    const article = id ? articles.find(a => a.id === id) ?? null : null;
    window.history.pushState(null, '', article ? articlePath(article, locale) : homePath(locale));
    setCurrentArticle(article);
    window.scrollTo(0, 0);
  };

  const renderDraftTag = (article: Article) =>
    showLocalMetadata && article.release === 'draft' ? <span className="draft-tag">Draft</span> : null;


  const renderArticleCard = (article: Article, index: number) => (
    <div key={article.id} className="article-card" onClick={() => navigateTo(article.id)}>
      <div className="article-number">0{index + 1}</div>
      <div className="article-info">
        <h2>{locale === 'cn' ? article.titleZh : article.titleEn}</h2>
        {showLocalMetadata && (
          <div className="card-meta">
            {renderDraftTag(article)}
            <span>{article.date}</span> • <span>{article.keywords.slice(0, 3).join(', ')}</span>
          </div>
        )}
      </div>
    </div>
  );

  const filteredContent = currentArticle ? getFilteredMarkdown(currentArticle.body) : '';
  const toc = currentArticle ? getTOC(filteredContent) : [];
  const tocActiveSlug = currentArticle ? activeSlug : '';

  return (
    <div className="App">
      {/* The landing page is the title. A nav bar above it would just repeat the
          name, so it only appears once the reader is inside an article. */}
      {currentArticle ? (
        <nav>
          <div className="container nav-content">
            <div className="logo" onClick={() => navigateTo(null)}>
              Sean Blog
            </div>
          </div>
        </nav>
      ) : null}

      <main className={currentArticle ? 'container' : 'container container-no-nav'}>
        {!currentArticle ? (
          <>
            <section
              className="hero"
              ref={heroRef}
              onClick={revealArticles}
              role="button"
              tabIndex={0}
              aria-label={locale === 'cn' ? '查看文章列表' : 'View articles'}
              onKeyDown={e => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  revealArticles();
                }
              }}
            >
              <h1>Sean's Blog</h1>
              <p>{locale === 'cn' ? '关于技术与商业的系统性思考' : 'Systemic Thoughts on Technology & Business'}</p>
            </section>
            {homepageArticles.length > 0 && (
              <div className="category-section">
                <div className="category-label">{locale === 'cn' ? 'Articles / 文章' : 'Articles'}</div>
                <section className="article-list">{homepageArticles.map((article, idx) => renderArticleCard(article, idx))}</section>
              </div>
            )}
          </>
        ) : (
          <div className="article-page-layout">
            <article className="article-view">
              <span className="back-link" onClick={() => navigateTo(null)}>
                ← {locale === 'cn' ? '返回目录' : 'Back to Index'}
              </span>
              {showLocalMetadata && (
                <div className="article-metadata-shelf">
                  <div className="meta-item"><div className="meta-label">Author</div><div className="meta-value">{currentArticle.author}</div></div>
                  <div className="meta-item"><div className="meta-label">Published</div><div className="meta-value">{currentArticle.date}</div></div>
                  <div className="meta-item"><div className="meta-label">Category</div><div className="meta-value">{currentArticle.category}</div></div>
                  {currentArticle.keywords.length > 0 && (
                    <div className="meta-item"><div className="meta-label">Keywords</div><div className="meta-value">{currentArticle.keywords.join(', ')}</div></div>
                  )}
                </div>
              )}
              <div className="article-title-block">
                {renderDraftTag(currentArticle)}
                <h1>{locale === 'cn' ? currentArticle.titleZh : currentArticle.titleEn}</h1>
              </div>
              <div className="md-content">
                <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeSlug]}>
                  {filteredContent}
                </ReactMarkdown>
              </div>
              {showLocalMetadata && currentArticle.history.length > 0 && (
                <div className="edit-history-section">
                  <div className="meta-label">Edit History</div>
                  <ul>{currentArticle.history.map((item, idx) => (<li key={idx}>{item}</li>))}</ul>
                </div>
              )}
            </article>

            {/* THE FLOATING TOC */}
            <aside className="toc-sidebar">
              <div className="toc-label">Contents</div>
              <ul className="toc-list">
                {toc.map((item, idx) => (
                  <li key={idx} className={`toc-item level-${item.level}${tocActiveSlug === item.slug ? ' active' : ''}`}>
                    <a
                      href={`#${item.slug}`}
                      onClick={(e) => {
                        e.preventDefault();
                        const el = document.getElementById(item.slug);
                        if (el) {
                          const top = el.getBoundingClientRect().top + window.scrollY - tocScrollOffset;
                          window.scrollTo({ top, behavior: 'auto' });
                          setActiveSlug(item.slug);
                        }
                      }}
                    >
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        )}
      </main>

      <footer>
        &copy; 2026 THE SEAN THESIS • {locale === 'cn' ? '逻辑与意图' : 'LOGIC & INTENT'}
      </footer>
    </div>
  );
}

export default App;
