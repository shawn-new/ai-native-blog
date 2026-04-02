import { useState, useEffect, useRef } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import { articles, type Article } from './data/articles';
import './styles/App.css';

function App() {
  const [currentArticle, setCurrentArticle] = useState<Article | null>(null);
  const [locale, setLocale] = useState<'en' | 'cn'>('en');
  const [activeSlug, setActiveSlug] = useState<string>('');
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const path = window.location.pathname.toLowerCase();
    const params = new URLSearchParams(window.location.search);
    const queryLang = params.get('locale') || params.get('lang');
    if (path.includes('/cn/') || queryLang === 'cn' || queryLang === 'zh') {
      setLocale('cn');
    }

    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && !hash.startsWith('section-')) { // Avoid interfering with TOC anchors
        const article = articles.find(a => a.id === hash);
        if (article) {
          setCurrentArticle(article);
          window.scrollTo(0, 0);
        } else {
          setCurrentArticle(null);
        }
      } else if (!window.location.hash) {
        setCurrentArticle(null);
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // TOC active slug tracking
  useEffect(() => {
    if (!currentArticle) { setActiveSlug(''); return; }
    const NAV_OFFSET = 100 + 32; // nav height + margin
    const handleScroll = () => {
      const headings = Array.from(document.querySelectorAll<HTMLElement>('.md-content h2, .md-content h3'));
      let current = '';
      for (const h of headings) {
        if (h.getBoundingClientRect().top <= NAV_OFFSET + 10) current = h.id;
      }
      setActiveSlug(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentArticle]);

  // Hero snap scroll: instant jump to articles on first wheel-down
  useEffect(() => {
    if (currentArticle) return;
    const hero = heroRef.current;
    if (!hero) return;
    const handleWheel = (e: WheelEvent) => {
      if (e.deltaY <= 0) return;
      e.preventDefault();
      const bottom = hero.getBoundingClientRect().bottom + window.scrollY;
      window.scrollTo({ top: bottom, behavior: 'instant' });
    };
    hero.addEventListener('wheel', handleWheel, { passive: false });
    return () => hero.removeEventListener('wheel', handleWheel);
  }, [currentArticle]);

  const opinions = articles.filter(a => a.category === 'Opinions');
  const commentaries = articles.filter(a => a.category === 'Commentary');

  const getFilteredMarkdown = (body: string) => {
    const lines = body.split('\n');
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
    return lines
      .filter(l => l.startsWith('## ') || l.startsWith('### '))
      .map(l => {
        const level = l.startsWith('### ') ? 3 : 2;
        const text = l.replace(/^###?\s+/, '').trim();
        // Simple slugify logic to match rehype-slug
        const slug = text.toLowerCase().replace(/[^\w\u4e00-\u9fa5]+/g, '-').replace(/^-+|-+$/g, '');
        return { level, text, slug };
      });
  };

  const navigateTo = (id: string | null) => {
    window.location.hash = id || '';
  };

  const renderArticleCard = (article: Article, index: number) => (
    <div key={article.id} className="article-card" onClick={() => navigateTo(article.id)}>
      <div className="article-number">0{index + 1}</div>
      <div className="article-info">
        <h2>{locale === 'cn' ? article.titleZh : article.titleEn}</h2>
        <div className="card-meta">
          <span>{article.date}</span> • <span>{article.keywords.slice(0, 3).join(', ')}</span>
        </div>
      </div>
    </div>
  );

  const filteredContent = currentArticle ? getFilteredMarkdown(currentArticle.body) : '';
  const toc = currentArticle ? getTOC(filteredContent) : [];

  return (
    <div className="App">
      <nav>
        <div className="container nav-content">
          <div className="logo" onClick={() => navigateTo(null)}>
            The Sean Thesis
          </div>
        </div>
      </nav>

      <main className="container">
        {!currentArticle ? (
          <>
            <section className="hero" ref={heroRef}>
              <h1>Logic<br/>& Intent</h1>
              <p>{locale === 'cn' ? 'Sean 论题 • 关于技术与商业的系统性思考' : 'The Sean Thesis • Systemic Thoughts on Technology & Business'}</p>
            </section>
            {opinions.length > 0 && (
              <div className="category-section">
                <div className="category-label">{locale === 'cn' ? 'Opinions / 观点' : 'Opinions'}</div>
                <section className="article-list">{opinions.map((article, idx) => renderArticleCard(article, idx))}</section>
              </div>
            )}
            {commentaries.length > 0 && (
              <div className="category-section">
                <div className="category-label">{locale === 'cn' ? 'Commentary / 评论' : 'Commentary'}</div>
                <section className="article-list">{commentaries.map((article, idx) => renderArticleCard(article, idx))}</section>
              </div>
            )}
          </>
        ) : (
          <div className="article-page-layout">
            <article className="article-view">
              <span className="back-link" onClick={() => navigateTo(null)}>
                ← {locale === 'cn' ? '返回目录' : 'Back to Index'}
              </span>
              <div className="article-metadata-shelf">
                <div className="meta-item"><div className="meta-label">Author</div><div className="meta-value">{currentArticle.author}</div></div>
                <div className="meta-item"><div className="meta-label">Published</div><div className="meta-value">{currentArticle.date}</div></div>
                <div className="meta-item"><div className="meta-label">Category</div><div className="meta-value">{currentArticle.category}</div></div>
                {currentArticle.keywords.length > 0 && (
                  <div className="meta-item"><div className="meta-label">Keywords</div><div className="meta-value">{currentArticle.keywords.join(', ')}</div></div>
                )}
              </div>
              <h1>{locale === 'cn' ? currentArticle.titleZh : currentArticle.titleEn}</h1>
              <div className="md-content">
                <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeSlug]}>
                  {filteredContent}
                </ReactMarkdown>
              </div>
              {currentArticle.history.length > 0 && (
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
                  <li key={idx} className={`toc-item level-${item.level}${activeSlug === item.slug ? ' active' : ''}`}>
                    <a
                      href={`#${item.slug}`}
                      onClick={(e) => {
                        e.preventDefault();
                        const el = document.getElementById(item.slug);
                        if (el) el.scrollIntoView({ behavior: 'instant' });
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
