import { useState } from "react";

const Button = (props) => {
  return <button>{props.children}</button>;
};

const StyleComponent = (props) => {
  console.log(props.heading);
  console.log(props["heading"]);
  const { heading } = props;
  console.log(heading);

  // props is object  // there is diffenent way to access key from object
  //
  console.log("This is the props for StyleComponent", "props==", props);

  // background-color => backgroundColor

  let [style, setStyle] = useState({
    width: "300px",
    height: "100px",
    backgroundColor: "red",
    borderRadius: "20px",
    margin: "auto",
    marginTop: "20px",
  });

  // red and blue
  const toggleColor = () => {
    // i am updating the value of style
    // mutable and immutable
    // you should not update state directly if you want to update than is setter function return by useState

    let updatedStyle = { ...style };
    let color = "blue";
    if (updatedStyle.backgroundColor === "red") {
      color = "blue";
    } else {
      color = "red";
    }
    updatedStyle = {
      ...updatedStyle,
      backgroundColor: color,
    };
    setStyle(updatedStyle);
  };
  return (
    <div>
      <h2>{props.heading}</h2>
      <button onClick={toggleColor}>Change Color</button>
      <input placeholder="Enter Color" /> <button>Submit</button>
      <button>Add Random Color</button>
      <div style={style}></div>
    </div>
  );
};

// Exporting StyleComponent so that we can import anyhwere in the project
export default StyleComponent;

{
  /* <StyleComponent />; // props = {}
<StyleComponent name="Hello" />; // props = {name: 'Hello"} => props.name */
}

const data = { heading: "Dynamic Styling" };
const { heading } = data;

{
  /* <element style = {{style as a object}}/>
   */
}
// inline styling is always go as object
//  <element style = {{display: "flex"}}>

// const style = {display: "flex"}
//  <element style = {style}>
