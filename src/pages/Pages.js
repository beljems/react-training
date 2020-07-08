import React from 'react';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';

import News from './../components/News';
import SinglePage from './SinglePage';
import NotFoundPage from './NotFoundPage';

const Pages = () => {
    let location = useLocation();
    const path = location.pathname;
    const links = ["/", "/login", "/register"];

    return (
        <main className={`app-main${path === '/single' ? ' app-main-single' : ''}`}>
            <Switch>
                {links.map(link => (
                    <Route key={link} path={link} exact>
                        <News />
                    </Route>
                ))}
                <Route path="/single">
                    <SinglePage />
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
