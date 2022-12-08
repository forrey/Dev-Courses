import { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

function Todo(props) {
  // We create a state for Opening the modal.
  // As always, the constant accepts 2 arguments
  // The first is the variable that we'll change (modalIsOpen)
  // The second is the function that changes the value.
  // We'll set the default to be false
  const [modalIsOpen, setModalIsOpen] = useState(false);

  // Now we have a function that's called below when the button is clicked
  // When it's called, we want to change the modalIsOpen state to true
  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {/*
        This code is a shortcut. We could use a ternary operator
        Like {modalIsOpen ? <Modal /> ? null}.
        But this basically evaluates both parts of the statement.
        If they're both true, it executes the second part.
        Functions in javascript will always be evaluated as true
      */}
      {/*
        Now we can pass functions as props.
        In this case, all clicks should do the same thing, so we'll pass the closeModalHandler function
        See the code for each individual component to see how this is handled there.
      */}
      {modalIsOpen && (
        <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      )}
      {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
    </div>
  );
}

export default Todo;
