import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { ArticleContext } from '../../contexts/ArticleContext';

const ArticleList = () => {
  const { isLightTheme, light, dark, toggleTheme } = useContext(ThemeContext);
  const { articles, removeArticle } = useContext(ArticleContext);
  const theme = isLightTheme ? light : dark;
  return articles.length ? (
    <div className="article-list" style={{ color: theme.syntax, background: theme.bg }} onClick={toggleTheme}>
      <ul>
        {articles.map(article => {
          return (
            <li key={article.id} style={{ background: theme.ui }} onClick={() => removeArticle(article.id)} >{article.title}</li>
          );
        })}
      </ul>
    </div>
  ) :
    <div className="empty">
      No Article to read
  </div>;
}

export default ArticleList;