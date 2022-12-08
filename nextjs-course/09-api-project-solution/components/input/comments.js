import { useState, useEffect } from "react";

import CommentList from "./comment-list";
import NewComment from "./new-comment";
import classes from "./comments.module.css";

function Comments(props) {
  // We get the eventId from the props passed on the [eventId].js page
  const { eventId } = props;

  // We use a state to toggle if comments are shown or not
  const [showComments, setShowComments] = useState(false);
  // And a state for the comments themselves
  const [comments, setComments] = useState([]);

  // We use useEffect to avoid an infinite loop
  useEffect(() => {
    if (showComments) {
      fetch("/api/comments/" + eventId)
        .then((response) => response.json())
        .then((data) => {
          // update the setComments state with our comments
          setComments(data.comments);
        });
    }
  }, [showComments]);

  // Toggle if the comments are shown or not
  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  function addCommentHandler(commentData) {
    // Structure the data to send to the api
    const reqBody = {
      email: commentData.email,
      name: commentData.name,
      comment: commentData.comment,
      event: eventId,
    };

    // Send to api via dynamic route
    // This sends via pages -> api -> comments -> [eventId].js
    fetch("/api/comments/" + eventId, {
      method: "POST",
      body: JSON.stringify(reqBody),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? "Hide" : "Show"} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList comments={comments} />}
    </section>
  );
}

export default Comments;
