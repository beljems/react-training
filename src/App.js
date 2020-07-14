import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.scss';

import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Hero from './components/Hero';
import Pages from './pages/Pages';

const App = () => {
    const paths = ["/", "/login", "/register"];

    return (
        <BrowserRouter>
            <div className="app">
                <Header />
                <Switch>
                    {paths.map(path => (
                        <Route key={path} path={path} exact>
                            <Hero />
                        </Route>
                    ))}
                </Switch>
                <Pages />
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
