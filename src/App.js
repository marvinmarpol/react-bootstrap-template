import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/navigation-bar';
import Home from './pages/home.js';
import Footer from './components/footer';
import ThemeContextProvider from './contexts/ThemeContext';
import ArticleContextProvider from './contexts/ArticleContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <ArticleContextProvider>
          <Navbar />
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={Home} />
            </Switch>
          </BrowserRouter>
          <Footer />
        </ArticleContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
