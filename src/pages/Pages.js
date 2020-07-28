import React from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';

import News from './../components/News';
import SinglePage from './SinglePage';
import SingleEditPage from './SingleEditPage';
import NewPostPage from './NewPostPage';
import NotFoundPage from './NotFoundPage';

const Pages = () => {
  const location = useLocation();
  const path = location.pathname;
  const links = ['/', '/login', '/register'];

  const modifier = path === '/single' ? ' app-main-single' : '';

  return (
    <main className={`app-main${modifier}`}>
      <Switch>
        {links.map(link => (
          <Route key={link} path={link} exact>
            <News />
          </Route>
        ))}
        <Route path="/single">
          <SinglePage />
        </Route>
        <Route path="/single-edit">
          <SingleEditPage />
        </Route>
        <Route path="/new-post">
          <NewPostPage />
        </Route>
        <Route path="/not-found">
          <NotFoundPage />
        </Route>
        <Redirect from="*" to="/not-found" />
      </Switch>
    </main>
  );
}

export default Pages;
