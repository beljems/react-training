import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import News from './../components/News';
import SinglePage from './SinglePage';
import NotFoundPage from './NotFoundPage';

const Pages = () => {
    const links = ["/", "/login", "/register"];

    return (
        <div>
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
                <Route path="*">
                    <Redirect to="/not-found" />
                </Route>
            </Switch>
        </div>
    );
}

export default Pages;
