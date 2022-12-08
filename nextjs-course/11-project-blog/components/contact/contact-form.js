import styles from "./contact-form.module.css";
import { useRef, useContext } from "react";
import NotificationContext from "../../store/notification-context";

function ContactForm(props) {
  // Initialize our context
  const notificationCtx = useContext(NotificationContext);

  // Get refs to the inputs (see below in the HTML)
  const emailInputRef = useRef();
  const nameInputRef = useRef();
  const messageInputRef = useRef();

  function formSubmissionHandler(event) {
    event.preventDefault();

    // Build our request body
    const reqBody = {
      email: emailInputRef.current.value,
      name: nameInputRef.current.value,
      message: messageInputRef.current.value,
    };

    // Show a pending notification since we've started working
    notificationCtx.showNotification({
      title: "Working...",
      message: "We're sending your message",
      status: "pending",
    });

    // Connext to our API
    fetch("/api/contact", {
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
          throw new Error(data.message || "Something Went Wrong");
        });
      })
      .then((data) => {
        // Clear the fields
        emailInputRef.current.value = null;
        nameInputRef.current.value = null;
        messageInputRef.current.value = null;

        // Show a success notification
        notificationCtx.showNotification({
          title: "Success!",
          message: "Your comment was successfully submitted",
          status: "success",
        });
      })
      .catch((error) => {
        // Show an error if something went wrong
        console.log("Something went wrong");
        notificationCtx.showNotification({
          title: "Uh Oh",
          message: "We're not sure what happened... please try again",
          status: "error",
        });
      });
  }

  return (
    <section className={styles.contact}>
      <h1>How can I help you?</h1>
      <form className={styles.form} onSubmit={formSubmissionHandler}>
        <div className={styles.controls}>
          <div className={styles.control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" required ref={emailInputRef} />
          </div>
          <div className={styles.control}>
            <label htmlFor="name">Your Name</label>
            <input type="name" id="name" required ref={nameInputRef} />
          </div>
        </div>
        <div className={styles.control}>
          <label htmlFor="message">Your Message</label>
          <textarea id="message" rows="5" ref={messageInputRef}></textarea>
        </div>

        <div className={styles.actions}>
          <button>Send Message</button>
        </div>
      </form>
    </section>
  );
}

export default ContactForm;
