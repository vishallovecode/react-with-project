const Input = (props) => {
  // props = {type: 'text' ,placeholder="Enter User Name"}

  return (
    <input className={`${props.classes} border rounded px-2 py-2`} {...props} />
  );
};

export default Input;
