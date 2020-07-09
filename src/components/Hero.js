import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './Hero.scss';

import Form from './Form';

import heroImage from './../assets/images/hero-img.jpg';

const Hero = () => {

    const heroSliderData = [
        {
            image: heroImage,
            time: '2019.06.19',
            desc: [
                { text: 'サンプルテキスト' },
                { text: 'サンプル ルテキスト' },
                { text: 'サンプルテキスト' }
            ]
        }
    ]

    return (
        <div className="hero">
            <Switch>
                <Route path="/" exact>
                    <div className="hero-slider">
                        <ul>
                            {heroSliderData.map(item => (
                            <li key={item} className="hero-slider-item" style={{backgroundImage: `url(${item.image})`}}>
                                <div className="l-container">
                                    <div className="hero-slider-inner">
                                        <p className="hero-slider-desc">
                                            {item.desc.map(e => (
                                                <>
                                                    <span key={e}>{e.text}</span>
                                                    <br/>
                                                </>
                                            ))}
                                        </p>
                                        <time className="hero-slider-time" dateTime={item.time}>
                                            {item.time}
                                        </time>
                                    </div>
                                </div>
                            </li>
                            ))}
                        </ul>

                        <div className="hero-slider-nav">
                            <span className="hero-slider-nav-button hero-slider-nav-button-prev"></span>
                            <span className="hero-slider-nav-button hero-slider-nav-button-next"></span>
                        </div>

                        <div className="hero-slider-pager">
                             <span className="hero-slider-pager-button"></span>
                        </div>
                    </div>
                </Route>

                <Form />
            </Switch>
        </div>
    );
}

export default Hero;
