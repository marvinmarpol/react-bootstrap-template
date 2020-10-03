import React, { useState, useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';
import { ArticleContext } from '../../contexts/ArticleContext';

const ArticleList = () => {
  // without  reducer
  const { isLightTheme, light, dark, toggleTheme } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  // with reducer
  const { articles, dispatch } = useContext(ArticleContext)
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'ADD_ARTICLE', article: { title } });
    setTitle('')
  }

  /* return articles.length ? (
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
  </div>; */

  // call using dispatch and without below
  return (
    <div>
      <div className="article-list" style={{ color: theme.syntax, background: theme.bg }} onClick={toggleTheme}>
        <ul>
          {articles.map(article => {
            return (
              <li key={article.id} style={{ background: theme.ui }} onClick={() => dispatch({ type: 'REMOVE_ARTICLE', id: article.id })} >{article.title}</li>
            );
          })}
        </ul>
      </div>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="book title" value={title}
          onChange={(e) => setTitle(e.target.value)} />
        <input type="submit" value="add article" />
      </form>

    </div>
  )
}

export default ArticleList;