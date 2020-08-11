import React, { useState, useEffect, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';

import { getPost } from './../redux/modules/post/postActions'

import { AuthContext } from './../hooks/useAuth'

import './SinglePage.scss';
import Breadcrumbs from './../components/Breadcrumbs';
import Comment from './../components/Comment';
import Button from './../components/Button';

import contentFeature from './../assets/images/content-feature.jpg';

const SinglePage = () => {
  const [isLoggedIn] = useContext(AuthContext);
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const { post } = useSelector(state => state.post);

  useEffect(() => {
    dispatch(getPost({ id: parseInt(id) }));
    console.log(post)
    //history.push(`/news/${post.id}`)
  }, [id, post, dispatch])

  const handleClick = e => {
    e.preventDefault();
    history.push(`/news/edit/${post.id}`)
  }

  let postDate1, postDate2;
  if(post.createdAt) {
    postDate1 = moment(post.createdAt).format('YYYY-MM-DD')
    postDate2 = moment(post.createdAt).format('YYYY.MM.DD')
  } else {
    postDate1 = ''
    postDate2 = ''
  }

  return (
    <>
      <Breadcrumbs title={post.title} />
      <div className="l-container single-body">
        {isLoggedIn &&
        <div className="content-header">
          <div className="content-header-item content-header-item-right">
            <div className="content-header-link">
              <Button modifier="button-default" text="Edit Post" onClick={e => handleClick(e)} />
            </div>
          </div>
        </div>}

        <span className="single-date">
          <time dateTime={postDate1}>
            {postDate2}
          </time>
        </span>

        <h1>{post.title}</h1>
        <div className="single-feature-image" style={{ backgroundImage: `url(${contentFeature})` }}></div>
        <p>{post.content}</p>

      </div>
      {post.comments &&
        <Comment
          postId={post.id}
          comments={post.comments}
        />}
    </>
  );
}

export default SinglePage;
