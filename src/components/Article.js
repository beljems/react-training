import React from 'react';
import { Link } from 'react-router-dom';

import './../components/Article.scss';

const Article = (props) => {
    return (
        <article className="article-card">
            <Link className="article-card-link" to={props.link}>
                <div className="article-card-image" style={{ backgroundImage: `url(${props.image})`}}></div>
                <time className="article-card-time" dateTime={props.time}>{props.time}</time>
                <p className="article-card-desc">{props.desc}</p>
            </Link>
        </article>
    );
}

export default Article;
