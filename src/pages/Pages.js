import React from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';

import { useAuth } from './../hooks/useAuth';

import News from './../components/News';
import SinglePage from './SinglePage';
import SingleEditPage from './SingleEditPage';
import SingleNewPage from './SingleNewPage';
import NotFoundPage from './NotFoundPage';
import ProtectedRoute from './ProtectedRoute';

const Pages = () => {
  const { isLoggedIn } = useAuth();
  const location = useLocation();
  const path = location.pathname;

  return (
    <main className={`app-main${path === '/' ? '' : ' app-main-single'}`}>
      <Switch>
        <Route path={`/news/new`}>
          <SingleNewPage />
        </Route>
        <Route path={`/news/edit/:id`} exact>
          <SingleEditPage />
        </Route>
        <Route path={`/news/:id`} exact>
          <SinglePage />
        </Route>
        <Route path='/' exact>
          <News />
        </Route>
        <Route path="*" exact>
          <Redirect to="/"/>
          {/*<NotFoundPage />*/}
        </Route>
      </Switch>
    </main>
  );
}

export default Pages;
