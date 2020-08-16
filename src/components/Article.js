import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import './../components/Article.scss';

import articleImage from './../assets/images/article-img.jpg';

const Article = ({ id, link, time, image, title }) => {
  //const newSlug = link.split(' ').join('-');

  return (
    <article className="article-card">
      <Link className="article-card-link" to={`/news/${id}`}>
        <div className="article-card-image" style={{ backgroundImage: `url(${image ? image : articleImage})`}}></div>
        <time className="article-card-time" dateTime={time ? moment(time).format('YYYY-MM-DD') : ''}>
          {time ? moment(time).format('YYYY.MM.DD') : ''}
        </time>
        <p className="article-card-desc">{title}</p>
      </Link>
    </article>
  );
}

export default Article;
