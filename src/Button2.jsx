const NewButton = (props) => {
  console.log("children", props.children, "buttonText=>", props.buttonText);
  return <button>{props.buttonText || props.children}</button>;
};

export default NewButton;
