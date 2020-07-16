import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';

import './Hero.scss';
import { IS_ACTIVE, IS_DISABLED } from './../constants';

import heroImage from './../assets/images/hero-img.jpg';

const Hero = () => {
    const [id, setId] = useState(0);

    const heroSliderData = [
        {
            image: heroImage,
            time: '2019.06.19',
            desc: [
                { text: 'サンプルテキスト' },
                { text: 'サンプル ルテキスト' },
                { text: 'サンプルテキスト' }
            ]
        },
        {
            image: heroImage,
            time: '2019.06.20',
            desc: [
                { text: 'サンプル' },
                { text: 'サンプ' },
                { text: 'サンプキスト' }
            ]
        },
        {
            image: heroImage,
            time: '2019.05.20',
            desc: [
                { text: 'サンテキスト' },
                { text: 'サンテキスト' },
                { text: 'サンプルテキスト' }
            ]
        }

    ]

    const handlePrevClick = () => setId(id - 1);
    const handleNextClick = () => setId(id + 1);
    const handleClick = (key) => setId(key);

    const totalSlides = heroSliderData.length;
    const pager = [];
    for(let i=0; i<totalSlides; i++) {
        pager.push(<span key={i} className={`hero-slider-pager-button pager-button ${i === id ? IS_ACTIVE : ''}`} onClick={() => handleClick(i)}></span>);
    }

    return (
        <div className="hero">
            <Switch>
                <Route path="/" exact>
                    <div className="hero-slider">
                        <ul>
                            {heroSliderData.map((value, item) => (
                                <li key={item} className={`hero-slider-item ${item === id ? 'is-active' : ''}`} style={{backgroundImage: `url(${value.image})`}}>
                                    <div className="l-container">
                                        <div className="hero-slider-inner">
                                            <p className="hero-slider-desc">
                                                {value.desc.map(copy => (
                                                    <>
                                                        <span key={copy}>{copy.text}</span>
                                                        <br/>
                                                    </>
                                                ))}
                                            </p>
                                            <time className="hero-slider-time" dateTime={value.time}>
                                                {value.time}
                                            </time>
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <div className="hero-slider-nav">
                            <span className={`hero-slider-nav-button prev ${id === 0 ? IS_DISABLED : ''}`} onClick={() => handlePrevClick()}></span>
                            <span className={`hero-slider-nav-button next ${id === totalSlides - 1 ? IS_DISABLED : ''}`} onClick={() => handleNextClick()}></span>
                        </div>

                        <div className="hero-slider-pager">
                            {pager}
                        </div>
                    </div>
                </Route>
            </Switch>
        </div>
    );
}

export default Hero;
