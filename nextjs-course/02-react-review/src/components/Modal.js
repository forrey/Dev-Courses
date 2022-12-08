function Modal(props) {
  // This is one way to deal with the closeModalHandler
  // we create a new function that's used here, and call the passed function
  // For another way, see Backdrop.js
  function cancelHandler() {
    props.onCancel();
  }

  function confirmHandler() {
    props.onConfirm();
  }

  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="btn" onClick={cancelHandler}>
        Cancel
      </button>
      <button className="btn btn--alt" onClick={confirmHandler}>
        Confirm
      </button>
    </div>
  );
}

export default Modal;
