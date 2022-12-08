function Backdrop(props) {
  // If we don't have anything else to add, we can directly call our onCancel function
  // like this
  return <div className="backdrop" onClick={props.onCancel} />;
}

export default Backdrop;
