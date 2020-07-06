import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

import './App.scss';

import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Hero from './components/Hero';
import News from './components/News';


const App = () => {
    return (
        <BrowserRouter>
            <div className="App">
                <Header />
                <Hero />
                <main>
                     <News />
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
