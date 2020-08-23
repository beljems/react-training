import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';
import axios from 'axios';

import { getPost, updatePost, getUpdatedPost } from './../redux/modules/post/postActions'

import './SinglePage.scss';
import './SingleEditPage.scss';
import Breadcrumbs from './../components/Breadcrumbs';
import Comment from './../components/Comment';
import Button from './../components/Button';
import Confirmation from './../components/Confirmation';
import Upload from './../components/Upload';

import { DELAY } from './../utils/constants'

const SingleEditPage = () => {
  const { id } = useParams();
  const { post, postData } = useSelector(state => state.post);
  const dispatch = useDispatch();
  const history = useHistory();
  const [message, setMessage] = useState('');
  const [image, setImage] = useState('');
  const [values, setValues] = useState({
    id: '',
    title: '',
    content: '',
    image: '',
  })
  const postId = parseInt(id);
  const [confirm, setConfirm] = useState(false);

  useEffect(initialValues, [post])

  useEffect(() => {
    dispatch(getPost({ id: postId }));
    //dispatch(getPosts());
  }, [postId, dispatch])

  function initialValues() {
    setValues({
      id: postData.id === post.id ? postData.id : postId,
      title: postData.id === post.id ? postData.title : post.title,
      content: postData.id === post.id ? postData.content : post.content,
      image: postData.id === post.id ? postData.image : post.image,
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
      if(image.name) {
        const randomNum = Math.floor(Math.random() * 11)
        const fileName = image.name.split('.').slice(0, -1).join('.')
        const fileExt = image.name.split('.').pop();
        values.image = (fileName+randomNum).concat(`.${fileExt}`)
      }

      dispatch(updatePost({ post: { ...values } }))
      dispatch(getUpdatedPost({ ...values }));

      async function uploadImage(e) {
        const url = 'http://localhost:5000'
        const formData = new FormData()
        formData.append('file', e, values.image)

        await axios.post(`${url}/file`, formData)
      }

      if(image) uploadImage(image)
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
      <Breadcrumbs title={postData.id === post.id ? postData.title : post.title} />
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

          <Upload
            value={values.image}
            callback={file => setImage(file)} />

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
