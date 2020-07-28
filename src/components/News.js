import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useQuery, gql } from '@apollo/client';
import { Link } from 'react-router-dom';
import moment from 'moment';

import './News.scss';

import ContentHeader from './../components/ContentHeader';
import Article from './../components/Article';

import articleImage from './../assets/images/article-img.jpg';

const News = () => {
  const [articleItems, setArticleItems] = useState(6);
  const articleData = [];

  const GET_POSTS = gql`
    query getPosts($pagination: Pagination) {
      posts(pagination: $pagination){
        id
        title
        content
        image
        createdAt
        comments {
          id
          postId
          content
          createdAt
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_POSTS);

  if (loading) return <p className="l-container">Loading ...</p>;
  if (error) return <p className="l-container error-message">Error ...</p>;

  console.log(data.posts);

  const handleClick = () => setArticleItems(articleItems + 6);
  const totalArticles = () => posts.length === data.posts.length;

  const postDate = data.posts.createdAt;
  const posts = data.posts.slice(0, articleItems).map((post) => (
    <li key={post.toString()} className="news-item">
      <Article
        image={post.image}
        time={moment(postDate).format('YYYY.MM.DD')}
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
          <ContentHeader />
        </div>
        <ul className="news-list">
          {posts}
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
