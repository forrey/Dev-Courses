import classes from "./comment-list.module.css";

function CommentList(props) {
  // comments are passed as props from comments.js
  const { comments } = props;

  // While they're loading, we'll show a loading state
  if (comments.length === 0) {
    return <p>Loading Comments...</p>;
  }

  return (
    <ul className={classes.comments}>
      {comments.map((comment) => (
        <li key={comment._id}>
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
