import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import { useHistory } from 'react-router-dom';

import './SinglePage.scss';
import './SingleEditPage.scss';
import './SingleNewPage.scss';

import { getPosts, addPost } from './../redux/modules/post/postActions'
import { DELAY } from './../utils/constants'

import Breadcrumbs from './../components/Breadcrumbs';
import Button from './../components/Button';
import Confirmation from './../components/Confirmation';

const SingleNewPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { posts, post, updating } = useSelector(state => state.post);
  const [confirm, setConfirm] = useState(false);
  const [message, setMessage] = useState('');
  const [values, setValues] = useState({
    title: '',
    content: '',
    image: '',
  });
  const dateToday = new Date();

  useEffect(() => {
    if(Object.keys(post).length) {
      history.push(`/news/${post.id}`)
      dispatch(getPosts())
    }
  }, [history, updating, post, dispatch])

  const handleChange = (id, value) => {
    setValues({
      ...values,
      [id]: value
    });
  }

  const handleSubmit = e => {
    e.preventDefault();

    if(values.title !== '' || values.title.length > 0) {
      dispatch(addPost({ post: { ...values } }))

      //history.push(`/news/${posts.length + 1}`)
    } else {
      setMessage('Title must not be empty!');
    }
  }

  const handleCancel = e => {
    e.preventDefault();
    setTimeout(() => {
      setConfirm(!confirm)
    }, DELAY)
  }

  return (
    <>
      <Breadcrumbs title="Create New Post" />
      <Confirmation
        modifier={confirm ? ' is-open' : ''}
        text={'Are you sure you want to leave the page?'}
        onClick={(e) => handleCancel(e)} />

      <div className="l-container single-body single-body-new">
        {message !== '' ? <p class="message message-single error">{message}</p> : ''}
        <form onSubmit={handleSubmit}>
          <div className="content-header">
            <div className="content-header-item content-header-item-right">
              <div className="content-header-link">
                <Button modifier="button-default" text="Save Post" />
              </div>
              <div className="content-header-link">
                <Button modifier="button-default" text="Cancel" onClick={e => handleCancel(e)} />
              </div>
            </div>
          </div>

          <span className="single-date">
            <time dateTime={moment(dateToday).format('YYYY-MM-DD')}>
              {moment(dateToday).format('YYYY.MM.DD')}
            </time>
          </span>

          <textarea className="single-edit-textarea single-edit-heading" placeholder="Title"
            name="title" id="title" value={values.title} onChange={(e) => handleChange('title', e.target.value)}></textarea>

          <div className="single-feature-image single-edit-feature-image" style={{ backgroundImage: `url('')` }}>
            <div className="single-edit-feature-button">
              <Button text="Upload Image" />
            </div>
          </div>

          <textarea className="single-edit-textarea single-edit-copy" placeholder="Content"
            name="content" id="content" value={values.content} onChange={(e) => handleChange('content', e.target.value)}></textarea>
        </form>
     </div>
    </>
  );
}

export default SingleNewPage;
