import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  return (
  <div className="ui ontainer comments">
    <div className="comment">
      <a href="/" className="avatar">
        <img className="avatar" />
      </a>
      <div className="content">
        <a href="/" className="author">
          Sam
        </a>
        <div className="metadata">
          <span className="date">Today at 6:00PM</span>
        </div>
        <div className="text">Nice Blog post!</div>
      </div>
    </div>
  </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'));