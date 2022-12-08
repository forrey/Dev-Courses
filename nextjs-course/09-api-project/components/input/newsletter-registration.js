import classes from "./newsletter-registration.module.css";
import { useRef, useState } from "react";

function NewsletterRegistration() {
  const [submitted, setSubmitted] = useState(false);
  const emailInputRef = useRef();

  function registrationHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;

    const reqBody = { email: enteredEmail };

    fetch("/api/newsletter", {
      method: "POST",
      body: JSON.stringify(reqBody),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setSubmitted(true);
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
