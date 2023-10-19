const Button = (props) => {
  return (
    <button className={props.classes} onClick={props.clickHandler}>
      {props.buttonText || props.children}
    </button>
  );
};

export default Button;
