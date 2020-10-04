import React, { createContext, useState, Component } from 'react';
import uuid from 'uuid/dist/v1'

export const ArticleContext = createContext();


// function based provider

const ArticleContextProvider = (props) => {
    const [articles, setArticles] = useState([
        { id: 1, title: "name of the wind" },
        { id: 2, title: "name of the water" },
        { id: 3, title: "name of the fire" },
        { id: 4, title: "name of the earth" },
    ]);

    const addArticle = (title) =>{
        setArticles([...articles, {title, id: uuid()}]);
    }

    const removeArticle = (id) =>{
        setArticles(articles.filter(article => article.id !== id))
    }

    return (
        <ArticleContext.Provider value={{articles, addArticle, removeArticle}}>
            {props.children}
        </ArticleContext.Provider>
    )

}

export default ArticleContextProvider;