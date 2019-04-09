import React from 'react';

const CommentDetail = (props) => {
  const data = props.comment;
  return (
  <div className="comment">
    <a href="/" className="avatar">
      <img alt="avatar" />
    </a>
    <div className="content">
      <a href="/" className="author">
        {data.name}
      </a>
      <div className="metadata">
        <span className="date">{data.date}</span>
      </div>
      <div className="text">{data.comment}</div>
    </div>
  </div>
  );
};

export default CommentDetail;