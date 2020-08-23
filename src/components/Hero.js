import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import moment from 'moment';

import { useSorting } from './../hooks/useSorting'

import './Hero.scss';
import { IS_ACTIVE, IS_DISABLED } from './../utils/constants';

import heroImage from './../assets/images/hero-img.jpg';

const Hero = () => {
  const posts = useSelector(state => state.post.posts);
  const [id, setId] = useState(0);
  const { sortItems } = useSorting(posts);

  const handlePrevClick = () => setId(id - 1);
  const handleNextClick = () => setId(id + 1);
  const handleClick = (key) => setId(key);

  const totalSlides = 3;
  const pager = [];
  for(let i=0; i<totalSlides; i++) {
    pager.push(<span className={`hero-slider-pager-button pager-button ${i === id ? IS_ACTIVE : ''}`}
      onClick={() => handleClick(i)}></span>);
  }

  const imagePath = filename => {
    if(filename) {
      return require(`./../assets/images/post/${filename}`)
    } else {
      return heroImage;
    }
  }

  return (
    <div className="hero">
      <Switch>
        <Route path="/" exact>
          <div className="hero-slider">
            <ul>
              {sortItems.slice(0, totalSlides).map((value, item) => (
                <li key={item} className={`hero-slider-item ${item === id ? 'is-active' : ''}`} style={{backgroundImage: `url(${imagePath(value.image)})`}}>
                  <div className="l-container">
                    <div className="hero-slider-inner">
                      <p className="hero-slider-desc">
                        <span>{value.title}</span>
                      </p>
                      <time className="hero-slider-time" dateTime={value.createdAt ? moment(value.createdAt).format('YYYY-MM-DD') : ''}>
                        {value.createdAt ? moment(value.createdAt).format('YYYY.MM.DD') : ''}
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
