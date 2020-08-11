import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import moment from 'moment';

import { addComment } from './../redux/modules/comment/commentActions'

import Button from './Button';
import Loading from './Loading'
import './Comment.scss';

const Comment = ({ postId, comments }) => {
  const dispatch = useDispatch();
  const { comment } = useSelector(state => state.comment.comment);
  const [contents, setContents] = useState(comments);
  const [value, setValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // let date1 = new Date(),
  //     date2 = date;
  //
  // let years = moment(date1).format('YYYY') - moment(date2).format('YYYY')
  // let months = (years * 12) + (moment(date1).format('MM') - moment(date2).format('MM'))

  // function getDiffDateDuration(date1, date2) {
  //   let years = moment(date1).format('YYYY') - moment(date2).format('YYYY'),
  //   months = (years * 12) + (moment(date1).format('MM') - moment(date2).format('MM')),
  //   newYears = parseInt(months / 12),
  //   newMonths = parseInt(months % 12)
  //
  //   let commentMonths = newMonths < 1 ? `${newMonths} month` : newMonths > 1 ? `${newMonths} months` : '';
  //   let commentYears = newYears < 1 ? `${newYears} year` : newYears > 1 ? `${newYears} years` : '';
  //
  //   return commentYears + commentMonths
  // }

  useEffect(() => {
    if(comment) {
      setContents(newContents => [comment, ...newContents])
      setValue('')
      setLoading(false)
      setError(false)
    }
  }, [comment])

  const handleClick = e => {
    e.preventDefault();

    if(value.length > 0) {
      dispatch(addComment({ postId: postId, content: value }));
      setLoading(true);
    } else {
      setError(true)
    }
  }

  return (
    <div className="l-container">
      {loading ? <Loading /> : ''}
      <div className="comment">
        <h2 className="heading">COMMENT</h2>

        <ul className="comment-list">
          {contents.map(comment => (
          <li key={comment.toString()} className="comment-item">
            <p className="comment-item-text">{comment.content}</p>
            <span className="comment-item-date">{comment.createdAt}</span>
          </li>))}
          <li className="comment-item comment-item-textarea">
            <textarea placeholder="Write comment" value={value} onChange={(e) => setValue(e.target.value)}></textarea>
          </li>
          {error ? <p class="message message-comment error">Please add comment!</p> : ''}
        </ul>
        <div className="comment-button">
          <Button text="Submit" onClick={(e) => handleClick(e)} />
        </div>
      </div>
    </div>
  );
}

export default Comment;
