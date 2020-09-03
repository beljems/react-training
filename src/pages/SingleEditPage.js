import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import moment from 'moment';

import usePost from './../hooks/usePost'

import Breadcrumbs from './../components/Breadcrumbs';
import Comment from './../components/Comment';
import Button from './../components/Button';
import Confirmation from './../components/Confirmation';
import Upload from './../components/Upload';
import './SinglePage.scss';
import './SingleEditPage.scss';

import { DELAY } from './../utils/constants'

const SingleEditPage = () => {
  const { id } = useParams();
  const history = useHistory();
  const { post, newPost, updatePost, getUpdatedPost } = usePost(id);
  const [message, setMessage] = useState('');
  const [image, setImage] = useState('');
  const [values, setValues] = useState({
    id: '',
    title: '',
    content: '',
    image: '',
  })
  const [confirm, setConfirm] = useState(false);

  useEffect(initialValues, [newPost])

  function initialValues() {
    setValues({
      id: parseInt(id),
      title: newPost.title,
      content: newPost.content,
      image: newPost.image,
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
      if(image) values.image = image

      updatePost({ post: { ...values } })
      getUpdatedPost({ ...values })
      history.push(`/news/${id}`)

    } else {
      setMessage('Title must not be empty!');
    }
  }

  const handleCancel = e => {
    e.preventDefault();
    if(image) values.image = image

    if(values.title !== newPost.title ||
      values.content !== newPost.content ||
      values.image !== newPost.image) {
      setTimeout(() => setConfirm(!confirm), DELAY)
    } else {
      history.push(`/news/${id}`)
    }
  }

  let postDate1, postDate2;
  if(newPost.createdAt) {
    postDate1 = moment(newPost.createdAt).format('YYYY-MM-DD')
    postDate2 = moment(newPost.createdAt).format('YYYY.MM.DD')
  } else {
    postDate1 = ''
    postDate2 = ''
  }

  return (
    <>
      <Breadcrumbs title={newPost.title} />
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
                <Button modifier="button-default" label="Save Post" />
              </div>
              <div className="content-header-link">
                <Button modifier="button-default" label="Cancel" onClick={(e) => handleCancel(e)} />
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

          <Upload callback={file => setImage(file)} />

          <textarea className="single-edit-textarea single-edit-copy" placeholder="Content"
            name="content" id="content" value={values.content} onChange={(e) => handleChange('content', e.target.value)}></textarea>
       </form>
     </div>
     {post.comments &&
       <Comment
         postId={id}
         comments={post.comments}
       />}
    </>
  );
}

export default SingleEditPage;
