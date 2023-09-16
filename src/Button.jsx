const Button = (props) => {
  // props is predefined
  console.log(props, "props");
  return <button>{props.buttonText}</button>;
};

export default Button;
