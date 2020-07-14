import React from 'react';

import './Comment.scss';

const Comment = () => {
    return (
        <div className="l-container">
            <div className="comment">
                <h2 className="heading">COMMENT</h2>

                <ul className="comment-list">
                    <li className="comment-item">
                        <p className="comment-item-text">ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。ここにはテキストが入ります。ここにはテキストが入りますここにはテキストが入りますここにはテキストが入りますここにはテキストが入ります。</p>
                        <span className="comment-item-date">3 months ago</span>
                    </li>
                    <li className="comment-item comment-item-textarea">
                        <textarea placeholder="Write comment"></textarea>
                    </li>
                </ul>
                <div className="comment-button">
                    <button className="button">Submit</button>
                </div>
            </div>
        </div>
    );
}

export default Comment;
