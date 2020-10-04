import React, { createContext, useState, useReducer, useEffect, Component } from 'react';
import { articleReducer } from '../reducers/ArticleReducer';

export const ArticleContext = createContext();

// function based provider with reducer
const ArticleContextProvider = (props) => {

    const [articles, dispatch] = useReducer(articleReducer, [
        /* { id: 1, title: "name of the wind" },
        { id: 2, title: "name of the water" },
        { id: 3, title: "name of the fire" },
        { id: 4, title: "name of the earth" }, */
    ], () => {
        const localData = localStorage.getItem('articles');
        return localData ? JSON.parse(localData) : [];
    });

    // triggered if something changed
    useEffect(() =>{
        localStorage.setItem('articles', JSON.stringify(articles));
    }, [articles])

    return (
        <ArticleContext.Provider value={{ articles, dispatch }}>
            {props.children}
        </ArticleContext.Provider>
    )

}

export default ArticleContextProvider;