import { useState } from "react";
import Button from "./Button";
import "./counter.css";

const Counter = (props) => {
  const [counter, setCounter] = useState(0);
  const reStart = () => {
    setCounter(0);
  };
  const increase = () => {
    setCounter(counter + 1);
  };
  const decrease = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  return (
    <div className="counter">
      <h2>{props.heading}</h2>
      <Button classes="increase" clickHandler={reStart} buttonText="ReStart" />
      <Button
        classes="decrease"
        clickHandler={increase}
        buttonText="Increase"
      />
      <Button classes="button1" clickHandler={decrease} buttonText="Decrease" />
      <h2> {counter}</h2>
    </div>
  );
};

export default Counter;
