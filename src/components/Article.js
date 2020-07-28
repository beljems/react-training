import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

import './../components/Article.scss';

const Article = (props) => {
  const newPostDate = moment(props.time).format('YYYY-MM-DD');
  const newSlug = props.link.split(' ').join('-');

  return (
    <article className="article-card">
      <Link className="article-card-link" to={newSlug.toLowerCase()}>
        <div className="article-card-image" style={{ backgroundImage: `url(${props.image})`}}></div>
        <time className="article-card-time" dateTime={newPostDate}>{props.time}</time>
        <p className="article-card-desc">{props.desc}</p>
      </Link>
    </article>
  );
}

export default Article;
