import classes from "./comment-list.module.css";
import { useState, useEffect } from "react";

function CommentList(props) {
  const [comments, setComments] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { eventId } = props;

  useEffect(() => {
    setIsLoading(true);

    fetch("/api/comments/" + eventId)
      .then((response) => response.json())
      .then((data) => {
        setComments(data.comments);
        setIsLoading(false);
        console.log(data.comments);
      });
  }, []);

  if (isLoading) {
    return <p>Loading</p>;
  }

  if (!comments) {
    return <p>No comments yet</p>;
  }

  return (
    <ul className={classes.comments}>
      {comments.map((comment) => (
        <li key={comment.id}>
          <p>{comment.comment}</p>
          <div>
            By <address>{comment.email}</address>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default CommentList;
