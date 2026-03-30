import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { articles, Article } from './data/articles';
import './styles/App.css';

function App() {
  const [currentArticle, setCurrentArticle] = useState<Article | null>(null);
  const [lang, setLang] = useState<'both' | 'en' | 'zh'>('both');

  const toggleLang = () => {
    if (lang === 'both') setLang('zh');
    else if (lang === 'zh') setLang('en');
    else setLang('both');
  };

  const renderRichText = (en: string, zh: string) => {
    return (
      <div className="bilingual-grid">
        {(lang === 'both' || lang === 'en') && (
          <div className="md-content en">
            <ReactMarkdown>{en}</ReactMarkdown>
          </div>
        )}
        {(lang === 'both' || lang === 'zh') && (
          <div className="md-content zh">
            <ReactMarkdown>{zh}</ReactMarkdown>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="App">
      <nav>
        <div className="container nav-content">
          <div className="logo" onClick={() => setCurrentArticle(null)}>
            THE AI-NATIVE JOURNAL
          </div>
          <button className="lang-toggle" onClick={toggleLang}>
            {lang === 'both' ? '双语 / Bilingual' : lang === 'zh' ? '中文 / Chinese' : '英文 / English'}
          </button>
        </div>
      </nav>

      <main className="container">
        {!currentArticle ? (
          <>
            <section className="hero">
              <h1>The Future of Engineering</h1>
              <p>Insights on AI-Native Architectures, SaaS Evolution, and Strategic Moats.</p>
            </section>

            <section className="article-list">
              {articles.map((article) => (
                <div 
                  key={article.id} 
                  className="article-card"
                  onClick={() => {
                    setCurrentArticle(article);
                    window.scrollTo(0, 0);
                  }}
                >
                  <h2>{lang === 'en' ? article.titleEn : article.titleZh}</h2>
                  <p>{lang === 'en' ? 'Click to read more...' : '点击阅读全文...'}</p>
                </div>
              ))}
            </section>
          </>
        ) : (
          <article className="article-view">
            <span className="back-link" onClick={() => setCurrentArticle(null)}>
              ← {lang === 'en' ? 'Back' : '返回主页'}
            </span>
            <h1>{lang === 'en' ? currentArticle.titleEn : currentArticle.titleZh}</h1>

            <section className="section">
              <div className="section-label">{currentArticle.content.scenario.label}</div>
              {renderRichText(currentArticle.content.scenario.english, currentArticle.content.scenario.chinese)}
            </section>

            <section className="section">
              <div className="section-label">{currentArticle.content.points.label}</div>
              {currentArticle.content.points.items.map((point, index) => (
                <div key={index} className="point">
                  <div className="point-title">
                    {lang === 'en' ? point.titleEn : point.titleZh}
                  </div>
                  {renderRichText(point.english, point.chinese)}
                </div>
              ))}
            </section>

            <section className="section">
              <div className="section-label">{currentArticle.content.conclusion.label}</div>
              {renderRichText(currentArticle.content.conclusion.english, currentArticle.content.conclusion.chinese)}
            </section>
          </article>
        )}
      </main>

      <footer className="container">
        <p>&copy; 2026 The AI-Native Engineer's Journal. Built for the era of intelligence.</p>
      </footer>
    </div>
  );
}

export default App;
