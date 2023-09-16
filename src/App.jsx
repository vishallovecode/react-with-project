// named import
import { useState } from "react";
import { Input, MulitElement, Summary } from "./component";
import JSXExample from "./ExampleJsx";
import "./App.css";
import Home from "./Home";
import Counter from "./Counter";
import Button from "./Button";

// Function Components =>React Hooks

// parent component of all react  component
function App(props) {
  // defining internal variable or state of component
  // management of component label data
  // for managing data inside the component react gives useState
  var heading1 = 123;

  // state
  const [heading, setHeading] = useState("This is the react");
  const [description, setDescription] = useState("React is very powerful");
  const [theme, setTheme] = useState("light");
  const [globalTheme, setGlobalTheme] = useState("");

  const changeHeading = () => {
    setHeading(`This is the new Heading ${Math.random() * 100}`);
    setDescription(`React Version ${Math.random() * 100}`);
    // heading = `This is the new Heading ${Math.random() * 100}`;
    // heading1 = `This is the new Heading ${Math.random() * 100}`;
  };
  console.log("heading", heading);

  const toggleGlobalTheme = () => {
    if (globalTheme === "light") {
      setTheme("dark");
      setGlobalTheme("dark");
    } else {
      setTheme("light");
      setGlobalTheme("light");
    }
  };

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const actionHandler = () => {
    alert("hi1");
  };
  return (
    <div className={`parent bg-${globalTheme}`}>
      <h2>{heading}</h2>
      <p>{description}</p>
      <Button
        classes="button1"
        clickHandler={changeHeading}
        buttonText="Change Heading"
      />

      <Button
        classes="button2"
        clickHandler={toggleTheme}
        buttonText="Toogle Theme"
      />
      <Button
        classes="button1"
        clickHandler={toggleGlobalTheme}
        buttonText="Parent Theme"
      />
      <Button clickHandler={actionHandler} buttonText="Continue" />
      <div className={`box-cont bg-${theme}`}>Hey Toggled successfully</div>
      {/* <Home />*/}
      <Counter heading={"This is counter12"} />

      <Button buttonText="Continue" />
    </div>
  );
}
export default App;

// component
// react component should return only one element inside that there can be multiple
// child component or element

// whatever react components return that is called JSX (Javascript XML)  (Javascript Extension Syntax)
// use for writing html css and  javascript together

// JSX => Javascript+ html
// .js => javascript

// React is one way binding
