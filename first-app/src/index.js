import React from "react";
import ReactDOM from "react-dom";
import CommendDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
import faker from "faker";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommendDetail
          author="Sam"
          timeAgo="Today at 4:45PM"
          commentText="Nice blog post!"
          avatar={faker.image.avatar()}
        />
      </ApprovalCard>
      <CommendDetail
        author="Alex"
        timeAgo="Today at 2:00AM"
        commentText="Love it!"
        avatar={faker.image.avatar()}
      />
      <CommendDetail
        author="Jane"
        timeAgo="Yesterday at 2:00PM"
        commentText="Great!"
        avatar={faker.image.avatar()}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
