import moment from 'moment';

export const useMoment = (postDate) => {
  const newPostDate = postDate !== '' ? moment(postDate).format('YYYY-MM-DD') : '';

  return {
    newPostDate
  }
}
