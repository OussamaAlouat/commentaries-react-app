import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail'
import faker from 'faker'; 



const App = () => {
  return (
  <div className="ui ontainer comments">
    <h1>WELLCOME TO COMMENTS</h1>
    <CommentDetail
      author = {faker.name.firstName()}
      fromTo = {faker.date.past(3, new Date()).toLocaleString()}
      comment = {faker.random.words()}
      avatar =  {faker.image.avatar()}
    />
    <CommentDetail
      author = {faker.name.firstName()}
      fromTo = {faker.date.past(4, new Date()).toLocaleString()}
      comment = {faker.random.words()}
      avatar =  {faker.image.avatar()}
    />
    <CommentDetail
      author = {faker.name.firstName()}
      fromTo = {faker.date.past(5, new Date()).toLocaleString()}
      comment = {faker.random.words()}
      avatar =  {faker.image.avatar()}
    />
  </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));