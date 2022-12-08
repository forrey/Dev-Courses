import classes from "./newsletter-registration.module.css";
import { useRef, useState } from "react";

function NewsletterRegistration() {
  // We set a state to check if it was submitted or not
  const [submitted, setSubmitted] = useState(false);

  // And we use useRef to track the input
  const emailInputRef = useRef();

  // When registration is clicked
  function registrationHandler(event) {
    event.preventDefault();

    // Get the current value of the email input
    const enteredEmail = emailInputRef.current.value;

    // We'll prepare a request body to send
    const reqBody = { email: enteredEmail };

    // We use our API route
    // This sends the data to pages/api/newsletter/index.js
    fetch("/api/newsletter", {
      method: "POST",
      body: JSON.stringify(reqBody),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // Set submitted to true so we can show a success message
        setSubmitted(true);
        // Clear the input field
        emailInputRef.current.value = null;
      });
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
            ref={emailInputRef}
          />
          <button>Register</button>
        </div>
      </form>
      {submitted && <div>Successfully Submitted!</div>}
    </section>
  );
}

export default NewsletterRegistration;
