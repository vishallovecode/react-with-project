import { async } from "q";
import { useEffect, useState } from "react";

const UseEffectExample = () => {
  const [heading, setHeading] = useState("Intitial value of state");

  const [users, setUsers] = useState([]);

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

  // this is not that much useful
  //   useEffect(() => {
  //     console.log("useEffect EVERY-RE-RENDER");
  //   });

  // IF YOU PASS SECOND PARAMETER AS EMPTY ARRAY THAT MEANS THE CODE INSIDE THE USEEFFECT
  // RUNS ONLY ONCE AT THE TIME OF MOUTING

  // generally this usecase is use for calling the api and side effects
  useEffect(() => {
    console.log("runs after mounting and runs only once");
  }, []);

  useEffect(() => {
    console.log(description, "::=>hey i only call when  description changes");
  }, [description]);

  useEffect(() => {
    console.log(count, "hey i only count when  changes");
  }, [count]);

  useEffect(() => {
    console.log(heading, "::=>hey i only call when  heading changes");
  }, [heading]);

  const hchange = () => {
    setHeading(`Component state update to new state ${Math.random()}`);
  };

  const dchange = () => {
    setDescription(
      `this is the phase is called the update phase ${Math.random() * 100}`
    );
  };

  const increment = () => {
    setCount(count + 1);
    setTimeout(() => {}, 100); //MEMORY
  };

  //

  useEffect(() => {
    // this is normal behaviour of useEffect
    return () => {
      // THIS CODE ONLY RUNS WHEN THE COMPONENT IS UNMOUNTED FROM THE DOM
      console.log("Component Unmounted");
    };
  }, []);

  async function getUsers() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const userData = await res.json(); // json() async
    console.log(userData, "userData");
    setUsers(userData);
  }

  // Api call for initial rendering
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div>
      <h2>{heading}</h2>
      <p>{description}</p>
      <button onClick={hchange}>Heading Change</button>
      <button onClick={dchange}>Description Change</button>
      <button onClick={increment}>increment</button>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        {users.map((user) => {
          return (
            <div
              style={{
                display: "flex",
                padding: "40px",
                width: "300px",
                border: "2px solid red",
              }}
            >
              <h2>{user.email}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UseEffectExample;
