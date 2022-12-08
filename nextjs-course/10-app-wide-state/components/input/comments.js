import { useState, useEffect, useContext } from "react";

import CommentList from "./comment-list";
import NewComment from "./new-comment";
import classes from "./comments.module.css";
import NotificationContext from "../../store/notification-context";

function Comments(props) {
  // We get the eventId from the props passed on the [eventId].js page
  const { eventId } = props;
  const notificationCtx = useContext(NotificationContext);

  // We use a state to toggle if comments are shown or not
  const [showComments, setShowComments] = useState(false);
  // And a state for the comments themselves
  const [comments, setComments] = useState([]);
  // We'll use another state to show loading will comments are loading
  const [isLoading, setIsLoading] = useState(false);

  // We use useEffect to avoid an infinite loop
  useEffect(() => {
    if (showComments) {
      setIsLoading(true);
      fetch("/api/comments/" + eventId)
        .then((response) => response.json())
        .then((data) => {
          // update the setComments state with our comments
          setComments(data.comments);
          // Loading (see the return far below for what we hide/show)
          setIsLoading(false);
        });
    }
  }, [showComments]);

  // Toggle if the comments are shown or not
  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus);
  }

  function addCommentHandler(commentData) {
    // Pending notification
    notificationCtx.showNotification({
      title: "Adding your comment...",
      message: "We're sending your feedback",
      status: "pending",
    });

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
      .then((response) => {
        if (response.ok) {
          return response.json();
        }

        response.json().then((data) => {
          throw new Error(data.message || "Something went wrong");
        });
      })
      .then((data) => {
        // Success notification
        notificationCtx.showNotification({
          title: "Success!",
          message: "Your comment was submitted!",
          status: "success",
        });
      })
      .catch((error) => {
        // Error notification
        notificationCtx.showNotification({
          title: "Oops",
          message: error.message || "Something went wrong",
          status: "error",
        });
      });
  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? "Hide" : "Show"} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && !isLoading && <CommentList comments={comments} />}
      {showComments && isLoading && <p>Loading...</p>}
    </section>
  );
}

export default Comments;
