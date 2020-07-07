import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.scss';

import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Hero from './components/Hero';
import Pages from './pages/Pages';

const App = () => {
    const links = ["/", "/login", "/register"];

    return (
        <BrowserRouter>
            <div className="app">
                <Header />
                <Switch>
                    {links.map(link => (
                        <Route key={link} path={link} exact>
                            <Hero />
                        </Route>
                    ))}
                </Switch>
                <main className="app-main">
                     <Pages />
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
