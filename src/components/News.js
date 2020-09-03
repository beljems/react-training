import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import useAuth from './../hooks/useAuth'
import usePost from './../hooks/usePost'

import Article from './Article';
import Button from './Button';
import './News.scss';

const News = () => {
  const { posts } = usePost();
  const { isLoggedIn } = useAuth();
  const [articleItems, setArticleItems] = useState(3);

  const handleClick = (e) => {
    e.preventDefault();
    setArticleItems(prevItems => prevItems + 3);
    if(articleItems === 6) setArticleItems(articleItems + 6);
  }

  const totalArticles = () => (articleItems < 3 || articleItems === 12 || articleItems === posts.length);

  const postItems = posts.slice(0, articleItems).map(article => (
    <li key={article.toString()} className="news-item">
      <Article
        id={article.id}
        image={article.image}
        time={article.createdAt}
        title={article.title}
      />
    </li>
  ))

  return (
    <section className="news">
      <div className="l-container">
        <div className="news-header">
          <h2 className="heading news-heading">News</h2>
          {isLoggedIn &&
          <div className="content-header">
            <div className="content-header-item content-header-item-right">
              <div className="content-header-link">
                <Link className="button button-default" to="/news/new">Create New Post</Link>
              </div>
            </div>
          </div>}
        </div>

        <ul className="news-list">
          {postItems}
        </ul>
        {!totalArticles() &&
        <div className="news-button">
          <Button label="Load More" onClick={(e) => handleClick(e)} />
        </div>}
      </div>
    </section>
  );
}

export default News;
