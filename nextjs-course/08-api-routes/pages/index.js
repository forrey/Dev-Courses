import { useRef, useState } from "react";

function HomePage() {
  const [feedbackItems, setFeedbackItems] = useState([]);

  // Define refs to our input fields
  const emailInputRef = useRef();
  const feedbackInputRef = useRef();

  // On form submission
  function submitFormHandler(event) {
    event.preventDefault();

    // Ge the current value
    const enteredEmail = emailInputRef.current.value;
    const enteredFeedback = feedbackInputRef.current.value;

    // Structure it in an object format
    // Note that we need to expect "email" and "text" in our api route
    const reqBody = { email: enteredEmail, text: enteredFeedback };

    // And we post it
    fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify(reqBody),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  function loadFeedbackHandler() {
    fetch("/api/feedback")
      .then((response) => response.json())
      .then((data) => {
        setFeedbackItems(data.feedback);
      });
  }

  return (
    <div>
      <h1>The Home Page</h1>
      <form onSubmit={submitFormHandler}>
        <div>
          <input type="email" placeholder="Email Address" ref={emailInputRef} />
        </div>
        <div>
          <textarea
            type="text"
            placeholder="Your Feedback"
            rows="5"
            ref={feedbackInputRef}
          ></textarea>
        </div>
        <button>Send Feedback</button>
      </form>

      <hr />

      <button onClick={loadFeedbackHandler}>Load Feedback</button>
      <div>
        <ul>
          {feedbackItems.map((item) => (
            <li key={item.id}>
              {item.text} <button>Show Details</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HomePage;
