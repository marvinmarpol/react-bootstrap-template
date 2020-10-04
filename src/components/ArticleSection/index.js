import React, { useContext, useState } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { ArticleContext } from '../../contexts/ArticleContext';

const ArticleList = () => {
  const { isLightTheme, light, dark, toggleTheme } = useContext(ThemeContext);
  const { articles, addArticle, removeArticle } = useContext(ArticleContext);
  const theme = isLightTheme ? light : dark;

  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addArticle(title);
    setTitle('');
  }

  return (
    <div>
      <div className="article-list" style={{ color: theme.syntax, background: theme.bg }} onClick={toggleTheme}>
        <ul>
          {articles.map(article => {
            return (
              <li key={article.id} style={{ background: theme.ui }} onClick={() => removeArticle(article.id)} >{article.title}</li>
            );
          })}
        </ul>
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input type="submit" />
      </form>
    </div>
  )
}

export default ArticleList;