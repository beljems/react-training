import React, { useState, useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { AuthContext } from './../hooks/useAuth'

import { getPosts } from './../redux/modules/post/postActions'

import './News.scss';

import ContentHeader from './../components/ContentHeader';
import Article from './../components/Article';

const News = () => {
  const dispatch = useDispatch();
  const [isLoggedIn] = useContext(AuthContext);
  const posts = useSelector(state => state.post.posts);
  const [articleItems, setArticleItems] = useState(6);

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch])

  const handleClick = () => setArticleItems(articleItems + 6);
  const totalArticles = () => posts.length === postItems.length;

  const postItems = posts.slice(0, articleItems).map((post) => (
    <li key={post.toString()} className="news-item">
      <Article
        image={post.image}
        time={post.createdAt}
        desc={post.content}
        link={post.title}
      />
    </li>
  ))

  return (
    <section className="news">
      <div className="l-container">
        <div className="news-header">
          <h2 className="heading news-heading">News</h2>
          {isLoggedIn ? <ContentHeader /> : ''}
        </div>

        <ul className="news-list">
          {postItems}
        </ul>
        {(!totalArticles()) &&
        <div className="news-button">
          <Link className="button" to="" onClick={() => handleClick()}>
            Load More
          </Link>
        </div>}
      </div>
    </section>
  );
}

export default News;
