import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  getPosts,
  getPost,
  updatePost,
  addPost,
  getUpdatedPost,
  addComment,
} from './../redux/modules/post/postActions'

export default (id) => {
  const dispatch = useDispatch();
  const { posts, post, comment, updating } = useSelector(state => state.post);
  const [newPost, setNewPost] = useState({});

  useEffect(() => {
    if(id) {
      dispatch(getPost({ id: parseInt(id) }))
    } else {
      dispatch(getPosts())
    }

    if(updating) {
      const article = posts.filter(obj => obj.id === parseInt(id))
      setNewPost(article[0])
    }
  }, [id, posts, updating, dispatch])

  return {
    posts,
    post,
    comment,
    newPost,
    updating,
    addPost(data) {
      dispatch(addPost(data))
    },
    updatePost(data) {
      dispatch(updatePost(data))
    },
    getUpdatedPost(data) {
      dispatch(getUpdatedPost(data))
    },
    addComment(data) {
      dispatch(addComment(data))
    }
  }
}
