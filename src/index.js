import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail'
import faker from 'faker'; 

const App = () => {
  const data = {
    name: 'SAM',
    comment: 'Hi this is my comment',
    date: 'Today at 5 pm'
  }
  return (
  <div className="ui ontainer comments">
    <CommentDetail comment={data}></CommentDetail>
  </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));