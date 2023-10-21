const Button = (props) => {
  return (
    <button
      className={props.classes}
      disabled={props.disabled}
      onClick={props.clickHandler}
    >
      {props.buttonText || props.children}
    </button>
  );
};

export default Button;
