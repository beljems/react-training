import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';

import { getPost } from './../redux/modules/post/postActions'

import { useAuth } from './../hooks/useAuth'

import './SinglePage.scss';
import Breadcrumbs from './../components/Breadcrumbs';
import Comment from './../components/Comment';
import Button from './../components/Button';

import noImage from './../assets/images/noimage.jpg';

const SinglePage = () => {
  const { isLoggedIn } = useAuth();
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const { post, postData } = useSelector(state => state.post);
  const postId = parseInt(id);

  useEffect(() => {
    dispatch(getPost({ id: postId }));
  }, [postId, dispatch])

  const handleClick = e => {
    e.preventDefault();
    history.push(`/news/edit/${id}`)
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
      <Breadcrumbs title={postData.id === post.id ? postData.title : post.title} />
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

        <h1>{postData.id === post.id ? postData.title : post.title}</h1>
        <div className="single-feature-image"
          style={{ backgroundImage: `url(${(postData.id !== '' || post.id !== '') ?
            (postData.id === post.id ? postData.image : post.image) : noImage})` }}></div>
        <p>{postData.id === post.id ? postData.content : post.content}</p>

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
