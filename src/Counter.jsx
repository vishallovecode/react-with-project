import { useState } from "react";

const Counter = () => {
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
      <h2>Hey I am counter</h2>
      <button onClick={reStart}>ReStart</button>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <h2> {counter}</h2>
    </div>
  );
};

export default Counter;
