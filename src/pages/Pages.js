import React from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';

import { useAuth } from './../hooks/useAuth';

import News from './../components/News';
import SinglePage from './SinglePage';
import SingleEditPage from './SingleEditPage';
import SingleNewPage from './SingleNewPage';
import NotFoundPage from './NotFoundPage';

const Pages = () => {
  const { isLoggedIn } = useAuth();
  const location = useLocation();
  const path = location.pathname;

  const singleNew = isLoggedIn ? <SingleNewPage /> : <Redirect to='/' />
  const singleEdit = isLoggedIn ? <SingleEditPage /> : <Redirect to='/' />

  return (
    <main className={`app-main${path === '/' ? '' : ' app-main-single'}`}>
      <Switch>
        <Route path={`/news/new`} exact>
          {singleNew}
        </Route>
        <Route path={`/news/edit/:id`} exact>
          {singleEdit}
        </Route>
        <Route path={`/news/:id`} exact>
          <SinglePage />
        </Route>
        <Route path='/' exact>
          <News />
        </Route>
        <Route path='*' exact>
          <Redirect to='/' />
        </Route>
      </Switch>
    </main>
  );
}

export default Pages;
