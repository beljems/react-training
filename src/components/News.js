import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { useAuth } from './../hooks/useAuth'

import { getPosts } from './../redux/modules/post/postActions'

import './News.scss';

import Article from './../components/Article';
import Button from './Button';

const News = () => {
  const dispatch = useDispatch();
  const { isLoggedIn } = useAuth();
  const { posts } = useSelector(state => state.post);
  const [articleItems, setArticleItems] = useState(3);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch])

  const handleClick = (e) => {
    e.preventDefault();
    setArticleItems(articleItems + 3);

    if(articleItems === 6) setArticleItems(articleItems + 6);
  }

  const totalArticles = () => (articleItems < 3 || articleItems === 12 || articleItems === posts.length);

  const postItems = posts.slice(0, articleItems).map((post) => (
    <li key={post.toString()} className="news-item">
      <Article
        id={post.id}
        image={post.image}
        time={post.createdAt}
        title={post.title}
        link={post.title}
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
          <Button onClick={(e) => handleClick(e)} />
        </div>}
      </div>
    </section>
  );
}

export default News;
