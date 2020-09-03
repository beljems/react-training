import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import moment from 'moment';

import useAuth from './../hooks/useAuth'
import usePost from './../hooks/usePost'

import Breadcrumbs from './../components/Breadcrumbs';
import Comment from './../components/Comment';
import Button from './../components/Button';
import './SinglePage.scss';

const SinglePage = () => {
  const history = useHistory();
  const { id } = useParams();
  const { isLoggedIn } = useAuth();
  const { post, newPost } = usePost(id);

  const handleClick = e => {
    e.preventDefault();
    history.push(`/news/edit/${id}`)
  }

  const postDate1 = moment(newPost.createdAt).format('YYYY-MM-DD')
  const postDate2 = moment(newPost.createdAt).format('YYYY.MM.DD')

  return (
    <>
      <Breadcrumbs title={newPost.title} />
      <div className="l-container single-body">
        {isLoggedIn &&
        <div className="content-header">
          <div className="content-header-item content-header-item-right">
            <div className="content-header-link">
              <Button modifier="button-default" label="Edit Post" onClick={e => handleClick(e)} />
            </div>
          </div>
        </div>}

        <span className="single-date">
          <time dateTime={postDate1}>
            {postDate2}
          </time>
        </span>

        <h1>{newPost.title}</h1>
        <div className="single-feature-image"
          style={{ backgroundImage: `url(${newPost.image})` }}></div>
        {newPost.content ? <p>{newPost.content}</p> : ''}

      </div>
      {post.comments &&
      <Comment
        postId={id}
        comments={post.comments}
      />}
    </>
  );
}

export default SinglePage;
