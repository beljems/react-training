import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.scss';

import { AuthProvider } from './hooks/useAuth';

import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Hero from './components/Hero';
import Pages from './pages/Pages';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <AuthProvider>
          <div className="app">
            <Header />
            <Route path='/' exact>
              <Hero />
            </Route>
            <Pages />
            <Footer />
          </div>
        </AuthProvider>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
