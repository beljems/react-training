import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import './SinglePage.scss';
import './SingleEditPage.scss';
import './NewPostPage.scss';

import { addPost } from './../redux/modules/post/postActions'

import Breadcrumbs from './../components/Breadcrumbs';

const NewPostPage = () => {
  const contentFeature = '';
  const pageTitle = '';

  const [processing, setProcessing] = useState(false);
  const [message, setMessage] = useState('');
  const dispatch = useDispatch();
  const post = useSelector(state => state.post.post);
  const [values, setValues] = useState({
    title: '',
    content: '',
    createdAt: '',
  });

  const handleChange = (id, value) => {
    setValues({
      ...values,
      [id]: value.trim()
    });
    setProcessing('')
    setMessage('')
  }

  const handleSubmit = e => {
    e.preventDefault();
    setProcessing(true);
    //console.log(values)
    setMessage('');
    dispatch(addPost(values))
  }

  return (
    <>
      <Breadcrumbs title={pageTitle} />
      <div className="l-container single-body single-body-new">
        <form>
          <div className="content-header">
            <div className="content-header-item content-header-item-right">
              <div className="content-header-link">
                <button className="button-default" onClick={(e) => handleSubmit(e)} disabled={processing}>Save Post</button>
              </div>
              <div className="content-header-link">
                <button className="button-default" to="/post">Cancel</button>
              </div>
            </div>
          </div>

          <span className="single-date">
            <time dateTime="2019-06-19">2019.06.19</time>
          </span>

          <textarea className="single-edit-textarea single-edit-heading" placeholder="Title"
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
    </>
  );
}

export default NewPostPage;
