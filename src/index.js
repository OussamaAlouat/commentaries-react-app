import React from 'react';
import ReactDOM from 'react-dom';
//import faker from 'faker'; //TODO INSTALL THIS DEPENDENCY

const App = () => {
  return (
  <div className="ui ontainer comments">
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" />
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
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" />
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
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" />
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