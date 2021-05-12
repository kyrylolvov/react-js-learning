// Import React and  ReactDOM
import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from "./CommentDetail";

// Create a react component
const App = () => {
  return (
    <div className="ui">
      <CommentDetail
        author="Sam"
        timeAgo="Today at 4:45PM"
        comment="Nice post"
      />
      <CommentDetail
        author="Alex"
        timeAgo="Today at 6:00PM"
        comment="Love it!"
      />
      <CommentDetail
        author="Jane"
        timeAgo="Yesterday at 8:20AM"
        comment="Will share it with my friends"
      />
    </div>
  );
};

// Render a react component
ReactDOM.render(<App />, document.querySelector("#root"));
