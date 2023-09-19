const Button = (props) => {
  return (
    <button className={props.classes} onClick={props.clickHandler}>
      {props.buttonText}
    </button>
  );
};

export default Button;
