import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { getPosts } from './../redux/modules/post/postActions';

export default () => {
  const dispatch = useDispatch();
  const { postList, processing, updating } = useSelector(state => state.posts);

  useEffect(() => {
    dispatch(getPosts());
    // if (id && id !== posts.id && id !== 'new') {
    //   if (token) {
    //     dispatch(getPosts({ id, token }));
    //   }
    //   else {
    //     dispatch(getPosts({ id }));
    //   }
    // }
  }, [ postList, dispatch ]);

  return {
    postList,
    processing,
    updating
  }
}
