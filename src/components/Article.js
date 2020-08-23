import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import './../components/Article.scss';

import noImage from './../assets/images/noimage.jpg';

const Article = ({ id, time, image, title }) => {
  const imagePath = filename => {
    if(filename) {
      return require(`./../assets/images/post/${filename}`)
    } else {
      return noImage;
    }
  }

  return (
    <article className="article-card">
      <Link className="article-card-link" to={`/news/${id}`}>
        <div className="article-card-image" style={{ backgroundImage: `url(${imagePath(image)})`}}></div>
        <time className="article-card-time" dateTime={time ? moment(time).format('YYYY-MM-DD') : ''}>
          {time ? moment(time).format('YYYY.MM.DD') : ''}
        </time>
        <p className="article-card-desc">{title}</p>
      </Link>
    </article>
  );
}

export default Article;
