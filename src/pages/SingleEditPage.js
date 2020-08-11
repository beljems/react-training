import React, { useState, useEffect, useRef } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';

import { getPost, updatePost } from './../redux/modules/post/postActions'

import './SinglePage.scss';
import './SingleEditPage.scss';
import Breadcrumbs from './../components/Breadcrumbs';
import ContentHeader from './../components/ContentHeader';
import Comment from './../components/Comment';
import Button from './../components/Button';

import contentFeature from './../assets/images/content-feature.jpg';

const SingleEditPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const [message, setMessage] = useState('');
  const [values, setValues] = useState({
    id: '',
    title: '',
    content: '',
    image: '',
  })
  const { post } = useSelector(state => state.post);

  useEffect(() => {
    dispatch(getPost({ id: parseInt(id) }));
  }, [id, dispatch])

  useEffect(() => {
    setValues({
      id: post.id,
      title: post.title,
      content: post.content,
      image: post.image,
    })
  }, [post])

  //console.log(post)

  const handleChange = (id, value) => {
    setValues({
      ...values,
      [id]: value
    });
  }

  const handleSubmit = e => {
    e.preventDefault();

    console.log(values);

    if(values.title !== '' || values.title.length > 0) {
      dispatch(updatePost({ ...values }))
      //history.push(`/news/${post.id}`)
    } else {
      setMessage('Title must not be empty!');
    }
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
      <div className="l-container single-body single-body-edit">
        {message !== '' ? <p class="message message-single error">{message}</p> : ''}
        <form onSubmit={handleSubmit}>
          <div className="content-header">
            <div className="content-header-item content-header-item-right">
              <div className="content-header-link">
                <Button modifier="button-default" text="Save Post" />
              </div>
              <div className="content-header-link">
                <Button modifier="button-default" text="Cancel" onClick="" />
              </div>
            </div>
          </div>

          <span className="single-date">
            <time dateTime={postDate1}>
              {postDate2}
            </time>
          </span>

            <textarea className="single-edit-textarea single-edit-heading"
              name="title" id="title" value={values.title} onChange={(e) => handleChange('title', e.target.value)}></textarea>

            <div className="single-feature-image single-edit-feature-image" style={{ backgroundImage: `url(${contentFeature})` }}>
              <div className="single-edit-feature-button">
                <button className="button">Upload Image</button>
              </div>
            </div>

            <textarea className="single-edit-textarea single-edit-copy" placeholder="Content"
              name="content" id="content" value={values.content} onChange={(e) => handleChange('content', e.target.value)}></textarea>
       </form>
     </div>
     {post.comments &&
       <Comment
         postId={post.id}
         comments={post.comments}
       />}
    </>
  );
}

export default SingleEditPage;
