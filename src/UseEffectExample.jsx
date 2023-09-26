import { useEffect, useState } from "react";

const UseEffectExample = () => {
  const [heading, setHeading] = useState("Intitial value of state");
  const [description, setDescription] = useState(
    "This phase are called mouting"
  );

  const [count, setCount] = useState(0);

  // HANDLING SIDE EFFECTS AND API CALL AND UPDATING COMPOENTS BASED ON STATE UPDATE
  // useEffect is react hooks (eventually it is the Higher order function which takes two parameter
  // first parameter  is callback function and second parameter is dependency)

  // if you do not pass second parameter in useEffect code
  //   inside useEffect will render at every state change or
  // every time component re-render

  useEffect(() => {
    console.log("useEffect EVERY-RE-RENDER");
  });

  // IF YOU PASS SECOND PARAMETER AS EMPTY ARRAY THAT MEANS THE CODE INSIDE THE USEEFFECT
  // RUNS ONLY ONCE AT THE TIME OF MOUTING

  // generally this usecase is use for calling the api and side effects
  useEffect(() => {
    console.log("runs after mounting and runs only once");
  }, []);

  const change = () => {
    setHeading("Component state update to new state");
    setDescription("this is the phase is called the update phase");
    setCount(count + 1);
  };

  return (
    <div>
      <h2>{heading}</h2>
      <p>{description}</p>
      <button onClick={change}>Change</button>
    </div>
  );
};

export default UseEffectExample;
