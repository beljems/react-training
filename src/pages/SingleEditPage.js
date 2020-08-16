import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';

import { getPost, updatePost } from './../redux/modules/post/postActions'

import './SinglePage.scss';
import './SingleEditPage.scss';
import Breadcrumbs from './../components/Breadcrumbs';
import Comment from './../components/Comment';
import Button from './../components/Button';
import Confirmation from './../components/Confirmation';

import { DELAY } from './../utils/constants'
import contentFeature from './../assets/images/content-feature.jpg';

const SingleEditPage = () => {
  const { id } = useParams();
  const { post } = useSelector(state => state.post);
  const dispatch = useDispatch();
  const history = useHistory();
  const [message, setMessage] = useState('');
  const [values, setValues] = useState({
    id: '',
    title: '',
    content: '',
    image: '',
  })
  const postId = parseInt(id);
  const newData = JSON.parse(localStorage.getItem('postData'));
  const [confirm, setConfirm] = useState(false);

  useEffect(initialValues, [post])

  useEffect(() => {
    dispatch(getPost({ id: postId }));
  }, [postId, dispatch])

  function initialValues() {
    setValues({
      id: postId,
      title: newData ? (newData.id === postId ? newData.title : post.title) : post.title,
      content: newData ? (newData.id === postId ? newData.content : post.content) : post.content,
      image: newData ? (newData.id === postId ? newData.image : post.image) : post.image,
    })
  }

  const handleChange = (id, value) => {
    setValues({
      ...values,
      [id]: value
    });
  }

  const handleSubmit = e => {
    e.preventDefault();

    if(values.title !== '' || values.title.length > 0) {
      dispatch(updatePost({ post: { ...values } }))
      localStorage.setItem('postData', JSON.stringify({ ...values }))

      history.push(`/news/${id}`)
    } else {
      setMessage('Title must not be empty!');
    }
  }

  const handleCancel = e => {
    e.preventDefault();

    if(values.title !== post.title ||
      values.content !== post.content ||
      values.image !== post.image) {
      setTimeout(() => {
        setConfirm(!confirm)
      }, DELAY)
    } else {
      history.push(`/news/${id}`)
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
      <Breadcrumbs title={newData ? (newData.id === postId ? newData.title : post.title) : post.title} />
      <Confirmation
        modifier={confirm ? ' is-open' : ''}
        link={`/news/${id}`}
        text={`Are you sure you want to discard changes?`}
        onClick={(e) => handleCancel(e)} />

      <div className="l-container single-body single-body-edit">
        {message !== '' ? <p class="message message-single error">{message}</p> : ''}
        <form onSubmit={handleSubmit}>
          <div className="content-header">
            <div className="content-header-item content-header-item-right">
              <div className="content-header-link">
                <Button modifier="button-default" text="Save Post" />
              </div>
              <div className="content-header-link">
                <Button modifier="button-default" text="Cancel" onClick={(e) => handleCancel(e)} />
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
              <Button text="Upload Image" />
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
