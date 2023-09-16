const Button = (props) => {
  // props is predefined
  console.log(props, "props");
  return (
    <button className={props.classes} onClick={props.clickHandler}>
      {props.buttonText}
    </button>
  );
};

export default Button;
