import React, { useContext } from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';

import { AuthContext } from './../hooks/useAuth'

import News from './../components/News';
import SinglePage from './SinglePage';
import SingleEditPage from './SingleEditPage';
import NewPostPage from './NewPostPage';
import NotFoundPage from './NotFoundPage';

const Pages = () => {
  const location = useLocation();
  const [isLoggedIn] = useContext(AuthContext);
  const path = location.pathname;

  const modifier = path === '/post' || path === '/post/new' ? ' app-main-single' : '';

  return (
    <main className={`app-main${modifier}`}>
      <Switch>
        <Route path="/post" exact>
          <SinglePage />
        </Route>
        <Route path="/post/single-edit" exact>
           <SingleEditPage />
        </Route>
        <Route path="/post/new" exact>
          <NewPostPage />
        </Route>
        <Route path='/'>
          <News />
        </Route>
        <Route path="*">
          <NotFoundPage />
          <Redirect to="/"/>
        </Route>
      </Switch>
    </main>
  );
}

export default Pages;
