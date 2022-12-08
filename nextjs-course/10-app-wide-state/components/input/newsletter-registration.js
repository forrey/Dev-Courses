import classes from "./newsletter-registration.module.css";
import { useRef, useState, useContext } from "react";
import NotificationContext from "../../store/notification-context";

function NewsletterRegistration() {
  // We set a state to check if it was submitted or not
  const [submitted, setSubmitted] = useState(false);

  // Using our context for notificatons
  const notificationCtx = useContext(NotificationContext);

  // And we use useRef to track the input
  const emailInputRef = useRef();

  // When registration is clicked
  function registrationHandler(event) {
    event.preventDefault();

    // Get the current value of the email input
    const enteredEmail = emailInputRef.current.value;

    // We'll prepare a request body to send
    const reqBody = { email: enteredEmail };

    // Since we've started the request, we'll show a pending notification
    notificationCtx.showNotification({
      title: "Signing up...",
      message: "Adding your email to our list",
      status: "pending",
    });

    // We use our API route
    // This sends the data to pages/api/newsletter/index.js
    fetch("/api/newsletter", {
      method: "POST",
      body: JSON.stringify(reqBody),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        // Check if the response is ok
        if (response.ok) {
          return response.json();
        }

        response.json().then((data) => {
          throw new Error(data.message || "Something went wrong");
        });
      })
      .then((data) => {
        // Set submitted to true so we can show a success message
        setSubmitted(true);
        // Clear the input field
        emailInputRef.current.value = null;

        // Now we show a success notification
        notificationCtx.showNotification({
          title: "Success!",
          message: "You're all set",
          status: "success",
        });
      })
      .catch((error) => {
        // An error notification
        notificationCtx.showNotification({
          title: "Oops",
          message: error.message || "Something went wrong",
          status: "error",
        });
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
